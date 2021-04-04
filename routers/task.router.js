const taskRouter = require('express').Router();
const TaskController = require('./../controller/task.controller');
const { checkUser } = require('./../middlewares/user.mw');
const { checkTask } = require('./../middlewares/tasks.mw');

taskRouter.post('/task', checkUser, TaskController.createTask);
taskRouter.get('/task', checkUser, TaskController.getUserTasks);

taskRouter
  .route('/task/:idTask')
  .get(checkUser, checkTask, TaskController.getTask)
  .patch(checkUser, checkTask, TaskController.basicUpdateTask)
  .delete();

  module.exports = taskRouter;
