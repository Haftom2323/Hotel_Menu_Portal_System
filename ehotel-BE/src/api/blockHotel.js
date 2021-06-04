const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  const { uId } = req.body;
  console.log("uid", uId);
  let sql = "update user_account set user_status=2  where user_id=?";
  connection.query(sql, [uId], (err, result) => {
    if (err) {
      res.status(400).send("Something went wrong!");
      console.log(err);
    } else res.send("blocked Success fully");
  });
};
