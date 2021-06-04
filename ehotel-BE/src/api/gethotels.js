const connection = require("../repository/dbConnection");
const loggedin = require("./session");
// import sass from "../api/loginRoute";
exports.hotels = (req, res) => {
  loggedin.user(result => {
    if (result.user.user_id) {
      console.log("logged in user id from hotels", result.user.user_id);
      let sub =
        "select hotel_id from hotel_subscription where user_id='" +
        result.user.user_id +
        "'";
      connection.query(sub, (err, result) => {
        if (err) throw err;
        else {
          let a = [];
          for (let i = 0; i < result.length; i++) {
            a[i] = result[i].hotel_id;
          }
          let sql =
            "select name, location, contact_person as admin,hotel.hotel_id,user_account.user_id ,image,date,user_account.email\
         from user_account inner join hotel on hotel.user_id=user_account.user_id where hotel_id not in ('" +
            a +
            "')";
          connection.query(sql, (err, result) => {
            if (err) {
              console.log(err);
              res
                .status(404)
                .send({ code: 400, message: "something went wrond" });
            } else {
              console.log("more hotels", result);
              res.send(result);
            }
          });
        }
      });
    } else {
      res.status(400).send({ code: 400, message: "error" });
    }
  });
};

exports.getSubsHotels = (req, res) => {
  loggedin.user(result => {
    if (result.user.user_id) {
      console.log("from subscribed hotels", result.user.user_id);
      let sql =
        "select * from hotel inner join hotel_subscription on hotel.hotel_id=hotel_subscription.hotel_id where hotel_subscription.user_id='" +
        result.user.user_id +
        "'";
      connection.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          console.log("in side database fetch", result);
          res.send(result);
        }
      });
    } else {
      console.log(req.session);
      res.send("session expired");
    }
  });
};

exports.getimages = (req, res) => {
  loggedin.user(result => {
    if (result.user.user_id) {
      let sql = "select * from services where user_id=?";
      connection.query(sql, [result.user.user_id], (err, result) => {
        if (err) throw err;
        else {
          res.send(result);
        }
      });
    }
  });
};

exports.getnotification = (req, res) => {
  loggedin.user(result => {
    if (result.user.user_id) {
      //inner join customer on customer.user_id=hotel_subscription.user_id
      let sql =
        "select * from hotel inner join hotel_subscription on hotel.hotel_id=hotel_subscription.hotel_id \
     hotel_subscription.status=0";
      connection.query(sql, [result.user.user_id], (err, resultt) => {
        if (err) {
          res.status(400).send({ code: 400, error: "error occured" });
          console.log(err);
        } else {
          console.log("resultttt", resultt);
          res.send(resultt);
        }
      });
    }
  });
};
