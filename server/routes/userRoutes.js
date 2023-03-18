const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/getuser", userController.getuser);

module.exports = userRouter;
