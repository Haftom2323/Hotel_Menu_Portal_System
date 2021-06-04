const fs = require("fs");
// const redis = require("redis");
const path = require("path");
const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  console.log(req.body.image);
  let file = req.body.image; //"gahdi.PNG"; //req.params.file;
  console.log("file name", file);
  console.log("object");
  res.sendFile(path.resolve(`public/${file}`));
};
