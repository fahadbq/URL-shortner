const mongoose = require("mongoose");

const configureDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/url-shortner")
    .then(() => console.log("connected to MONGODB"))
    .catch((err) => console.log("error connecting to db", err));
};

module.exports = configureDB;
