const loginService = require("../service/loginService");
let sess = "";
let sessionn = require("./session");
exports.login = (req, res, next) => {
  const { userName, password } = req.body;

  if (userName && password) {
    loginService(userName, password, (error, result) => {
      if (error || !result) {
        error ? console.log(error) : "No user found.";
        res.status(404).json({
          code: "404",
          message: "Username and/or Password incorrect."
        });
      } else {
        console.log("Successfully logged in ", result);
        // req.session.cookie.userId = result.user.user_id;
        // req.session.userId = result.user.user_id;
        // sess = req.session;
        // req.session.save();
        // console.log("session is :", sess);
        // console.log(" cookie Id", req.session.userId);
        console.log("result", result);
        sessionn.set(result);
        res.send(result); //res.status(200).send(result);
      }
    });
  } else {
    console.log("Not valid userName and/or password"); //TODO: work on validation
    res.json({ code: "404", message: "Not valid userName and/or password" });
  }
};
