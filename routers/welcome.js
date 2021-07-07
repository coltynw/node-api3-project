const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to node-api3-project");
});



module.exports = router;