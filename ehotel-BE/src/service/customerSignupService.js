const companyRepository = require("../repository/companySignupRepository");
const bcrypt = require("bcryptjs");
module.exports = function(email, callback) {
  companyRepository(email, (err, result) => {
    if (err) console.log(err);
    if (result) {
      callback(undefined, {
        code: 200,
        success: "Successfully registered."
      });
    } else {
      callback({
        code: 404,
        Error: "Email already in Use."
      });
    }
  });
};
