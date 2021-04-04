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

    const tasks = await userInstance.getTasks({ limit: 5 });

    res.send({ data: tasks });
  } catch (err) {
    next(err);
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const { body, taskInstance } = req;

    const task = taskInstance;
    const updatedTask = await task.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

module.exports.basicUpdateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { idTask },
    } = req;
    const [rowsCount, [updatedTask]] = await Task.update(body, {
      where: { id: idTask },
      returning: true,
    });
    res.status(201).send(updatedTask);
  } catch (err) {
    next(err);
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const { taskInstance } = req;
    res.status(201).send(taskInstance);
  } catch (err) {
    next(err);
  }
};
module.exports.taskDelete = async (req, res, next) => {
  try {
    const {
      params: { idTask },
    } = req;

    const task = await Task.findByPk(+idTask);
    const result = await task.destroy();
    res.send({ data: result });
  } catch (err) {
    next(err);
  }
};

/* module.exports.taskDelete = async (req, res, next)=>{
  try {
    const{userInstance,params:{idTask}}=req;
    const result = await userInstance.removeTask({where:{id:idTask}});
    res.send(result);
  } catch (error) {
    
  }
} */
