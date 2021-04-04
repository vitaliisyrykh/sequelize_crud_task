const { Router } = require('express');
const UserController = require('./controller/user.controller');
const TaskController = require('./controller/task.controller');
const { checkUser } = require('./middlewares/user.mw');
const { checkTask } = require('./middlewares/tasks.mw');
const router1 = Router();

router1.get('/users', UserController.getAllUsers);
router1.get('/user/:id', checkUser, UserController.getUser);
router1.post('/user', UserController.createUser);
router1.patch('/user/:id', UserController.updateUser);
router1.patch('/user-v2/:id', checkUser, UserController.updateUserInstance);
router1.delete('/user/:id', UserController.deleteUser);

router1.get('/user/:id/task', checkUser, TaskController.getUserTasks);
router1.get('/user/:id/task/:idTask', checkUser, checkTask, TaskController.getTask);
router1.post('/user/:id/task', checkUser, TaskController.createTask);
router1.patch(
  '/user/:id/task/:idTask',
  checkUser,
  checkTask,
  TaskController.basicUpdateTask
)
router1.delete('/user/:id/task/:idTask',checkUser, checkTask, TaskController.taskDelete);

module.exports = router1;
