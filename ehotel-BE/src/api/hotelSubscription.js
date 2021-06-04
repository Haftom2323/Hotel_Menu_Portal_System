const connection = require("../repository/dbConnection");
let loggedin = require("./session");
module.exports = (req, res) => {
  //user id from session or req.body
  loggedin.user(result => {
    console.log("from hotel subscription", result);
    let user_id = result.user.user_id;
    const { hotel_id } = req.body;
    let sql =
      "insert into hotel_subscription (user_id,hotel_id) values('" +
      user_id +
      "','" +
      hotel_id +
      "')";
    connection.query(sql, (err, result) => {
      if (err) {
        res.status(400).send("something went wrong");
        console.log(err);
      } else {
        res.send("User subscribes successfully");
      }
    });
  });
};
