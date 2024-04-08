const express = require("express");
const {index} = require("../controllers/AppController");
const AppRouter = express.Router();

AppRouter.get("/", index);

module.exports = AppRouter;