const fs = require("fs");
const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  console.log("pdf", req.body.fileName);
  var file = fs.createReadStream("./public/" + req.body.fileName + ".pdf");
  file.pipe(res);
};
