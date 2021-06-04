const connection = require("../repository/dbConnection");
module.exports = (req, res) => {
  const { item } = req.body;
  console.log("item", item);
  let sql = "select  * from hotel_menu  where name=?";
  connection.query(sql, [item], (err, result) => {
    if (err) {
      res.status(400).send("Something went wrong!");
      console.log(err);
    } else {
      res.send(result);
      console.log("result", result);
    }
  });
};
