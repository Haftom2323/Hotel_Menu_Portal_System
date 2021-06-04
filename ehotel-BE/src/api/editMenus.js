const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  const { name, price, id, type } = req.body;
  let sql =
    "update hotel_menu set name='" +
    name +
    "', price='" +
    price +
    "', type='" +
    type +
    "' where menu_id=?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(400).send("Something went wrong!");
      console.log(err);
    } else res.send("updated Success fully");
  });
};
