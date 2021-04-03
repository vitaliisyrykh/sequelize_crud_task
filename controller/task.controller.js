const { Task } = require('../models');

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
    const { body, taskInstance } = req;

    const updatedTask = await taskInstance.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};
