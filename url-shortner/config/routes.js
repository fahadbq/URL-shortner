const express = require("express");
const router = express.Router();

const urlCtlr = require("../app/controllers/urlCtlr");

//URL
router.get("/api/urlList", urlCtlr.list);
router.post("/api/url", urlCtlr.create);
router.get("/api/url/:id", urlCtlr.view);
router.put("/api/url/:id", urlCtlr.update);
router.delete("/api/url/:id", urlCtlr.delete);

module.exports = router;
