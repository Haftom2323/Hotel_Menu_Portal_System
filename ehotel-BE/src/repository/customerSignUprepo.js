const connection = require("./dbConnection");

module.exports = function(email, callback) {
  let sql = "select * from user_account where email=?";
  connection.query(sql, [email], function(err, result) {
    if (err) throw err;
    if (result.length > 0)
      callback({ code: 404, message: "email already exists" }, null);
    else
      callback(undefined, {
        code: 200,
        success: "Successfull."
      });
  });
};
