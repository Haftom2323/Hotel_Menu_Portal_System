const loggedin = require("./session");
const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  const { description, price } = req.body;
  console.log("req", req.body);
  let file = req.files.file;
  console.log("file");
  file.mv("./public/" + file.name, err => {
    if (err) return res.status(500).send("upload error");
    //res.send("uploaded");
    loggedin.user(result => {
      if (result.user.user_id) {
        let sql =
          "insert into services (description,price,image,user_id) values(?,?,?,?)";
        connection.query(
          sql,
          [description, price, file.name, result.user.user_id],
          (err, result) => {
            if (err) throw err;
            else {
              console.log("succed");
              res.send({ code: 200, message: "uploaded" });
            }
          }
        );
      }
    });
  });
  // console.log("path ", req.files.file);
  // console.log(req.body.name);
};
