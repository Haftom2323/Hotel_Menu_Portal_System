const bodyParser = require("body-parser");
const session = require("express-session");
const redis = require("redis");
var redisStore = require("connect-redis")(session);
const cors = require("cors");
var client = redis.createClient();

// Load express modules
function loadModules(app) {
  console.info("SETUP - Loading modules...");
  app.use(cors());

  // Request body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use("trust proxy", 1);
  app.use(
    session({
      secret: "ssshhhhh",
      // create new redis store.
      store: new redisStore({
        host: "localhost",
        port: 6379,
        client: client,
        ttl: 260
      }),
      saveUninitialized: false,
      resave: false
    })
  );
  app.use(bodyParser.json()); // Allows the application to accept JSON
  const multer = require("multer");
  const fileUpload = require("express-fileupload");

  app.use(fileUpload());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
  });
}

module.exports = loadModules;
