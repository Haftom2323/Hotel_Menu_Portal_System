const connection = require("../repository/dbConnection");

const loginRepository = (email, callback) => {
  console.log(
    "loginRepository connected to a connection: ",
    connection.threadId
  );
  let sql = "SELECT * FROM user_account WHERE user_name=?";
  connection.query(sql, [email], (error, result) => {
    if (error) {
      callback({
        code: 400,
        failed: error
      });
    }
    if (result.length) {
      callback(undefined, result[0]);
    } else {
      callback(undefined, null);
    }
  });
};

module.exports = loginRepository;
