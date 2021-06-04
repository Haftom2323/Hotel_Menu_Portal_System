const connection = require("../repository/dbConnection");
const bcrypt = require("bcryptjs");

exports.userAccount = (userName, email, password, user_type, callback) => {
  //let user_type = "hotel";
  bcrypt.hash(password, 10, function(err, hash) {
    let sql1 =
      "insert into user_account (email,user_name, password,user_type,user_status) values('" +
      email +
      "','" +
      userName +
      "','" +
      hash +
      "', '" +
      user_type +
      "',0)";
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      console.log("user account");
      callback(undefined, result);
    });
  });
};

exports.toHotel = function(hotelName, link, location, phone, admin, callback) {
  let idd = "select max(user_id) as id from user_account;";
  connection.query(idd, (err, result) => {
    if (err) throw err;

    let user_id = result[0].id;
    console.log(user_id);
    let sql =
      "insert into hotel (name, license_document,user_id,location,phone,contact_person) values('" +
      hotelName +
      "',\
                '" +
      link +
      "', '" +
      user_id +
      "','" +
      location +
      "','" +
      phone +
      "', '" +
      admin +
      "');";
    connection.query(sql, (err, result) => {
      if (err) callback({ code: 404, Error: "Database connection" });
      else {
        callback(undefined, { code: 200, success: "Successfully registered." });
      }
    });
    //}
  });
};
exports.toCustomer = (first, last, callback) => {
  let idd = "select max(user_id) as id from user_account;";
  connection.query(idd, (err, result) => {
    if (err) throw err;

    let user_id = result[0].id;
    console.log(user_id);

    let is_active = 1;
    let sql =
      "insert into customer (first_name, last_name,user_id, is_active) values('" +
      first +
      "','" +
      last +
      "','" +
      user_id +
      "','" +
      is_active +
      "')";
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        callback({ code: 400, message: "database connection error" });
      } else {
        callback(null, { code: 200, message: "successfully registered" });
      }
    });
  });
};
