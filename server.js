"use strict";

var express = require("express");
var quotesRepository = require("./quotesRepository");
var app = express();
var port = process.env.PORT || 3001;

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/v1/quotes/:num?", function (req, res) {
  const numOfQuotes = Number(req.params.num) || 1;
  res.send(quotesRepository.getRandom(numOfQuotes));
});

app.listen(port, () => console.log("Server running on port", port));
