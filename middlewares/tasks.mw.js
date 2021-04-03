const { Task } = require('./../models/task');

module.exports.checkTask = async (req, res, next) => {
  try {
    const {
      userInstance,
      params: { idTask },
    } = req;
    console.log(idTask);
    const taskInstance = await userInstance.findByPk(idTask);

    if (!taskInstance) {
      throw new Error('task not found');
    }
    req.taskInstance = taskInstance;
    next();
  } catch (err) {
    next(err);
  }
};
