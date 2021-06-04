const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  let sql =
    "select * from user_account inner join admin on admin.user_id = user_account.user_id";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(400).send("something went wrong");
      console.log(err);
    } else {
      res.send(result[0]);
    }
  });
};
