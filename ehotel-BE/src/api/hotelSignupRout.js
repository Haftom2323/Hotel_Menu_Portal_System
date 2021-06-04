const signupService = require("../service/companySignupService");
const userModel = require("../model/user");

exports.signup = function(req, res) {
  let hotelName = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  //let link = req.body.licence;
  let userName = req.body.userName;
  let location = req.body.location;
  let phone = req.body.phone;
  let admin = req.body.contactPerson;
  let file = req.files.file;
  //console.log(" file1", file);
  console.log("file ", req.body);
  let fileName = file.name;
  file.mv("./public/" + file.name + ".pdf", err => {
    if (err) return res.status(500).send("upload error");
    else {
      signupService(email, (err, result) => {
        if (err || !result) res.status(404).send(err);
        else {
          let userType = "hotel";
          userModel.userAccount(
            userName,
            email,
            password,
            userType,
            (err, resultt) => {
              if (err) console.log(err);
              else {
                userModel.toHotel(
                  hotelName,
                  fileName,
                  location,
                  phone,
                  admin,
                  (err, result) => {
                    if (err) res.send(err);
                  }
                );
                res.send(result);
              }
            }
          );
        }
      });
    }
  });
};

exports.customerSignup = (req, res) => {
  let email = req.body.Email;

  let password = req.body.password;
  let firstName = req.body.FirstName;
  let lastName = req.body.LastName;
  let userName = req.body.userName;
  signupService(email, (err, result) => {
    if (err || !result) res.status(404).send(err);
    else {
      let userType = "customer";
      userModel.userAccount(
        userName,
        email,
        password,
        userType,
        (err, resultt) => {
          if (err) console.log(err);
          else {
            userModel.toCustomer(firstName, lastName, (err, resulttt) => {
              if (err) {
                console.log(err);
                res.status(400).send("err");
              } else res.send(resulttt);
            });
            //res.send(result);
          }
        }
      );
    }
  });
};
