// const express = require('express');
// const router = require("./users/userRouter");


const express = require('express');

const server = express();
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');


router.get("/TEST", (req, res) => {
  res.send(
      `<p> TEST TEST TEST</p>`
      );
});

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl} at ${new Date().toISOString()}`);
  next();
}

server.use(logger);
server.use('./api/user', userRouter);
server.use('./api/post', postRouter);

module.exports = server;


