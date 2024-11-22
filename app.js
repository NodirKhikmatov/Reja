console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

//mongoDB call
const db = require("./server").db(); //write read delete to databs

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    user = JSON.parse(data);
  }
});

//1. kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  // console.log(req);
  res.json({ test: "success" });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user ?? [] });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;