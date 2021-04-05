const createError = require('http-errors');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    console.log(createdUser);
    if(!createdUser){
      const err = createError(400, 'Some went wrong')
      return next(err);
    }
    res.status(200).send({
      data: createdUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
      limit: 10,
    });

    if(!users){
      const err = createError(404, 'Users not found');
      return next(err);
    }
    res.status(200).send({
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updatedUser]] = await User.update(body, {
      where: { id },
      returning: true,
    });

    if(rowsCount !== 1){
      const err = createError(404, 'User not found');
      return next(err);
    }

    // delete updatedUser.password;
    updatedUser.password = undefined;

    res.status(200).send({ data: updatedUser });
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserInstance = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    console.log(userInstance);
    const updateduserInstance = await userInstance.update(body, {
      returning: true,
    });

    updateduserInstance.password = undefined;
    if(!updateduserInstance){
      const err = createError(400, ' Can`t update user datas')
      return next(err);
    }

    res.send({ data: updateduserInstance });
  } catch (err) {
    next(err);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { userInstance } = req;

    const user = userInstance;
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByPk(id);

    const result = await user.destroy();
    if(!result){
      const err = createError(400, 'Can`t delete user')
      return next(err);
    }
    console.log(result);
    res.send({ data: user });
  } catch (err) {
    next(err);
  }
};
