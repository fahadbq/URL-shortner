const URL = require("../models/url");

const urlCtlr = {};

urlCtlr.list = (req, res) => {
  URL.find()
    .then((urlList) => {
      res.json(urlList);
    })
    .catch((err) => res.json(err));
};

urlCtlr.create = (req, res) => {
  const body = req.body;

  const url = new URL(body);

  url
    .save(body)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlCtlr.view = (req, res) => {
  const id = req.params.id;

  URL.findById(id)
    .then((url) => res.json(url))
    .catch((err) => res.json(err));
};

urlCtlr.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  URL.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((url) => res.json(url))
    .catch((err) => res.json(err));
};

urlCtlr.delete = (req, res) => {
  const id = req.params.id;

  URL.findByIdAndDelete(id)
    .then((url) => res.json(url))
    .catch((err) => res.json(err));
};

module.exports = urlCtlr;
