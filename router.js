const { Router } = require('express');
const UserController = require('./controller/user.controller');
const TaskController = require('./controller/task.controller');
const { checkUser } = require('./middlewares/user.mw');
const { checkTask } = require('./middlewares/tasks.mw');
const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/user/:id', checkUser, UserController.getUser);
router.post('/user', UserController.createUser);
router.patch('/user/:id', UserController.updateUser);
router.patch('/user-v2/:id', checkUser, UserController.updateUserInstance);
router.delete('/user/:id', UserController.deleteUser);

router.get('/user/:id/task', checkUser, TaskController.getUserTasks);
/* routеr.get('/user/:id/task/:idTask', checkUser, checkTask); */
router.post('/user/:id/task', checkUser, TaskController.createTask);
router.patch(
  '/user/:id/task/:idTask',
  checkUser,
  checkTask,
  TaskController.updateTask
);

module.exports = router;
