const express = require('express');
const userRouter = express.Router();
const UserController = require('./../controller/user.controller');
const { checkUser } = require('./../middlewares/user.mw');
const taskRouter = require('./task.router')


userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);

userRouter
  .route(':id',taskRouter)
  .get(checkUser, UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

  module.exports = userRouter;