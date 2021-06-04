const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("/public"));
// app.use(fileUpload());
const fs = require("fs");
const setupStartServer = require("./setup/start-server");
const setupLoadModules = require("./setup/load-modules");
const setupLoadRouters = require("./setup/load-routers");
const router = express.Router();

// Setup load modules
setupLoadModules(app);
// Start server
setupStartServer(app);
// Setup load routers
setupLoadRouters(router, app);
