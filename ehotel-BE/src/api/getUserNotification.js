const connection = require("../repository/dbConnection");
let loggedin = require("./session");
exports.menus = (req, res) => {
  loggedin.user(result => {
    console.log("from hotel subscription", result);
    let user_id = result.user.user_id;
    let sql = "select * from natification\
     where user_id=?  where status=0";

    console.log("req body", req.body);
    //use user_id from session or req.body
    connection.query(sql, [user_id], (err, result) => {
      if (err) res.send("something went wrong!");
      else {
        console.log("result", result);
        //console.log('id',);
        res.json(result);
      }
    });
  });
};
