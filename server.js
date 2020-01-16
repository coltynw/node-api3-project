const express = require('express');

const router = require("./users/userRouter");

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
server.use("/api/posts", router);



function logger(req, res, next) {}

module.exports = server;
