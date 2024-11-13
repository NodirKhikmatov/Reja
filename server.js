console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1. kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background:red">Hello world 2024</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1>"Siz sovgalar bolimida"</h1>`);
});

const server = http.createServer(app);
let PORT = 5000;
server.listen(PORT, function () {
  console.log(`the server is running succesfully on port ${PORT} `);
});
