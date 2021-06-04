const connection = require("./dbConnection");

var statistics = {};
const adminDashboardRepository = callback => {
  let sql = "select * from user_account where user_type='customer';";
  connection.query(sql, (err, customers) => {
    if (err) throw err;
    statistics.customers = customers.length;
    let sql2 = "select * from user_account where user_type='hotel';";
    connection.query(sql2, (er, hotels) => {
      if (er) throw er;
      statistics.hotels = hotels.length;

      let sql4 = "select * from subscribes;";
      connection.query(sql4, (err, subscribes) => {
        if (err) throw err;
        statistics.subscribes = subscribes.length;

        let statement1 = "select * from hotel_menu;";
        connection.query(statement1, function(err, menus) {
          if (err) throw err;
          statistics.totalmenus = menus.length;
          callback(undefined, statistics);
        });
      });
    });
  });
  // });
};
module.exports = adminDashboardRepository;

// connection.query(sql3, (e, spam) => {
//   if (e) throw e;
//   statistics.totalSpam = spam.length;

//
//       let now = new Date();
//       console.log(now);
//       let n =
//         now.getFullYear() +
//         "-" +
//         (now.getMonth() + 1) +
//         "-" +
//         now.getDate();
//       console.log(
//         now.getFullYear() +
//           "-" +
//           (now.getMonth() + 1) +
//           "-" +
//           now.getDate()
//       );
//       //latest job's statstics
//       let statement2 =
//         "select * from job_post where dead_line >='" + n + "';";
//       connection.query(statement2, function(err, latest) {
//         if (err) throw err;
//         statistics.latestmenus = latest.length;
//         statistics.outdatedmenus =
//           statistics.totalmenus - statistics.latestmenus;

//         let statement3 = "select * from socialmediastatus;";
//         connection.query(statement3, (err, result) => {
//           if (err) throw err;
//           statistics.facebookShares = result[0].facebookShares;
//           statistics.facebookLikes = result[0].facebookLikes;
//           statistics.twitterShares = result[0].twitterShares;

//           let sql33 = "select * from spam where solved=0;";
//           connection.query(sql33, (err, solved) => {
//             if (err) throw err;
//             statistics.solvedSpams = solved.length;
//             statistics.unsolvedSpams =
//               statistics.totalSpam - statistics.solvedSpams;
//             console.log(statistics);
//
//           });
//         });
//       });
//     });
//   });
