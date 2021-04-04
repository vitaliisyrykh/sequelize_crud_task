const { Task } = require('../models');
const task = require('../models/task');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body, userInstance } = req;

    // const task = await Task.create({ ...body, userId: id });
    const task = await userInstance.createTask(body);

    res.send({ data: task });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const { userInstance } = req;

    const tasks = await userInstance.getTasks();

    res.send({ data: tasks });
  } catch (err) {
    next(err);
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { idTask },
    } = req;

    const task = await taskInstance.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const { taskInstance } = req;
    const task = taskInstance;
    res.status(201).send(task);
  } catch (err) {
    next(err);
  }
};
