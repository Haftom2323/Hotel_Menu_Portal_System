const nodemailer = require("nodemailer");

module.exports = (req, res) => {
  let email = req.body.email;
  console.log(email);
  var transporter = nodemailer.createTransport({
    host: "localhost",
    port: "587",
    secure: true,
    service: "Gmail",
    auth: { user: "getishmit@gmail.com", pass: "iamgoitom" }
  });

  var mailOptions = {
    from: "getishmit@gmail.com",
    to: email,
    subject: "this is from E-hotel ",
    text:
      "Dear Customer,You can use the the following link to reset your password.Thanx for using our system",
    html:
      "<p>Dear Customer,You can use the the following link to reset your password.Thanx for using our system <a href='http://localhost:3000/forgotPassword'>Click Here</a></p>" //"How are you doing how is life going on thanx for replying  "
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log("Email sent " + info.response);
  });
};
