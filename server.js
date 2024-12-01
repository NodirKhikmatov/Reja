const http = require("http");

const mongodb = require("mongodb");

const connectString =
  "mongodb+srv://nodirhikmatov6:ZKqAGkKXBb6VBWaB@nodir.backw.mongodb.net/reja?retryWrites=true&w=majority";

mongodb.connect(
  connectString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("error on connection MongoDb");
    else {
      console.log("mongodb connection succeed");
      // console.log(client);
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 6004;
      server.listen(PORT, function () {
        console.log(
          `the server is running succesfully on port ${PORT}, http://localhost:${PORT} `
        );
      });
    }
  }
);
