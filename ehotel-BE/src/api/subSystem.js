const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  const { uemail } = req.body;
  console.log("uid", uemail);
  let sql = "insert into subscribe  (email) values(?)";
  connection.query(sql, [uemail], (err, result) => {
    if (err) {
      res.status(400).send("Something went wrong!");
      console.log(err);
    } else res.send("user subscribes  Success fully");
  });
};
