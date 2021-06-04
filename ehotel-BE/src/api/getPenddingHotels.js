const getPenddingRepo = require("../repository/getPenddingHotels");

const connection = require("../repository/dbConnection");

module.exports = (req, res) => {
  let sql =
    "select * from user_account inner join hotel on user_account.user_id=hotel.user_id\
     where user_status=0 and user_type='hotel'";
  connection.query(sql, (err, result) => {
    if (err) res.send("something went wrong!");
    else {
      // console.log(result);
      res.json({ hotels: result });
    }
  });
};
