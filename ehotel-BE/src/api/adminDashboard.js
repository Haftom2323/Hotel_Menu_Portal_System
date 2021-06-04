const connection = require("../repository/dbConnection");
let Session_user = require("./session");
module.exports = (req, res) => {
  Session_user.user(result => {
    console.log("session from dashboard", result);
  });

  let dashboard = {};
  let sql = "select count(*) as customers from customer";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status().send({ code: 500, message: "Something went wrong" });
    } else {
      console.log(result);
      dashboard.customers = result[0].customers;
      let sql = "select count(*) as hotels from hotel";
      connection.query(sql, (err, result) => {
        if (err) {
          res.status().send({ code: 500, message: "Something went wrong" });
        } else {
          dashboard.hotels = result[0].hotels;
          let sql = "select count(*) as menus from hotel_menu";
          connection.query(sql, (err, result) => {
            if (err) {
              res.status().send({ code: 500, message: "Something went wrong" });
            } else {
              dashboard.menus = result[0].menus;
              let sql = "select count(*) as subscribers from subscribe";
              connection.query(sql, (err, result) => {
                if (err) {
                  res
                    .status()
                    .send({ code: 500, message: "Something went wrong" });
                } else {
                  dashboard.subscribers = result[0].subscribers;
                  //console.log(dashboard);
                  res.send(dashboard);
                }
              });
            }
          });
        }
      });
      //res.send(result);
    }
  });
};
