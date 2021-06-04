const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  let sql =
    "select * from customer inner join user_account on customer.user_id = user_account.user_id";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(400).send("something went wrong");
      console.log(err);
    } else {
      for (i = 0; i < result.length; i++) {
        let month = result[i].date.getMonth();
        let day = result[i].date.getDate();
        let year = result[i].date.getFullYear();
        result[i].date = year + "/" + month + "/" + day;
      }

      res.send(result);
    }
  });
};
