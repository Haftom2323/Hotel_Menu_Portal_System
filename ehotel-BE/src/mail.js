const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  let message = req.body.message;
  var transporter = nodemailer.createTransport({
    host: "localhost",
    port: "587",
    secure: true,
    service: "Gmail",
    auth: { user: "getishmit@gmail.com", pass: "iamgoitom" }
  });

  var mailOptions = {
    from: "getishmit@gmail.com",
    to: "goitom@angineers.com",
    subject: "Hey this is from node js node mailer",
    text: message //"How are you doing how is life going on thanx for replying  "
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log("Email sent " + info.response);
  });
};
