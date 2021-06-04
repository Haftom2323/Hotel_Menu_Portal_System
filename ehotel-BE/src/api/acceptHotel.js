const connection = require("../repository/dbConnection");

module.exports = (req, res) => {
  console.log(req.body.uId);
  let sql = "update user_account set user_status=1 where user_id=?";
  connection.query(sql, [req.body.uId], (err, result) => {
    if (err) throw err;
    else res.send({ message: "successfully activated" });
  });
};
