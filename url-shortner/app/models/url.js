const mongoose = require("mongoose");
const validator = require("validator");
const sh = require("shorthash");

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  originalURL: {
    type: String,
    required: true,
    //Custom Validations
    validate: {
      validator: function (value) {
        return validator.isURL(value);
      },
      message: function () {
        return "Invalid URL";
      },
    },
  },
  hashedURL: {
    type: String,
  },
  createAt: {
    type: Date,
    dafault: Date.now,
  },
});

urlSchema.pre("save", function (next) {
  this.hashedURL = sh.unique(this.originalURL);

  console.log("this after update", this);

  next();
});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
