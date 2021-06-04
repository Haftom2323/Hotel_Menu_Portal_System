//const menusRepo = require("../repository/menusRepo");

const connection = require("../repository/dbConnection");

exports.menus = (req, res) => {
  let sql = "select * from hotel_menu\
     where hotel_id=?";

  console.log("req body", req.body);
  connection.query(sql, [req.body.hotelId], (err, result) => {
    if (err) res.send("something went wrong!");
    else {
      console.log("result", result);
      //console.log('id',);
      res.json(result);
    }
  });
};

exports.addMenus = (req, res) => {
  const { name, price, type, hotelId } = req.body;
  let sql =
    "insert into hotel_menu (name,hotel_id,price,type) values('" +
    name +
    "','" +
    hotelId +
    "','" +
    price +
    "','" +
    type +
    "')";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(400).send("something went wrong");
      console.log(err);
    } else {
      res.send({ message: "Added successfully" });
      console.log("sucess");
    }
  });
};

exports.deleteMenu = (req, res) => {
  const { menu_id } = req.body;
  console.log(menu_id);
  let sql = " delete from hotel_menu where menu_id =?";
  connection.query(sql, [menu_id], (err, result) => {
    if (err) res.status(400).send(err);
    else {
      res.send({ message: "item deleted successfully" });
    }
  });
};

exports.searchItem = (req, res) => {
  let { searchValue } = req.body;
  console.log("value" + searchValue);
  let sql = "select * from hotel_menu where name='" + searchValue + "'";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error Please try again");
    } else {
      res.send(result);
    }
  });
};
