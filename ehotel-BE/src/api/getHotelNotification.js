const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  let id = req.body.id;
  //console.log(" from Api ,", req.body);
  let sql =
    " select * from user_account inner join hotel on user_account.user_id=hotel.user_id where user_account.user_id=?";
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send(result);
    }
  });
};
