const taskRouter = require('express').Router();
const TaskController = require('./../controller/task.controller');

const { checkTask } = require('./../middlewares/tasks.mw');

taskRouter.post('/task', TaskController.createTask);
taskRouter.get('/task', TaskController.getUserTasks);

taskRouter
  .route('/task/:idTask')
  .get(checkTask, TaskController.getTask)
  .patch(checkTask, TaskController.basicUpdateTask)
  .delete(checkTask, TaskController.taskDelete);

module.exports = taskRouter;
