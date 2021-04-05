const taskRouter = require('express').Router();
const TaskController = require('./../controller/task.controller');

const { checkTask } = require('./../middlewares/tasks.mw');

taskRouter.post('/', TaskController.createTask);
taskRouter.get('/', TaskController.getUserTasks);

taskRouter
  .route('/:idTask')
  .get(checkTask, TaskController.getTask)
  .patch(checkTask, TaskController.basicUpdateTask)
  .delete(checkTask, TaskController.taskDelete);

module.exports = taskRouter;
