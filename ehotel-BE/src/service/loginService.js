const loginRepository = require("../repository/loginRepository");
const bcrypt = require("bcryptjs");
// const saltRounds = 10;

const loginService = (email, password, callback) => {
  console.log("Started loginService");
  let userResult = loginRepository(email, (error, user) => {
    if (error) {
      console.log("Error: database connection error");
    } else {
      if (user) {
        try {
          // const hashedPassword = bcrypt.hash(password, saltRounds);
          if (bcrypt.compareSync(password, user.password)) {
            callback(undefined, {
              code: 200,
              message: "Successfully logged in.",
              userType: user.user_type,
              user: user
            });
          } else {
            callback({
              code: 400,
              message: "Email and password don't match."
            });
          }
        } catch {
          callback({
            code: 500,
            message: "Internal Error Happened."
          });
        }
      } else {
        callback(null);
      }
    }
  });
};

module.exports = loginService;
