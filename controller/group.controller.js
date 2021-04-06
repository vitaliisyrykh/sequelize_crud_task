const { Group } = require('../models');

module.exports.createGroup = async (req, res, next) => {
  try {
    const { body } = req;
    const group = await Group.create(body);
    res.send(group);
  } catch (err) {
    next(err);
  }
};

module.exports.addGroup = async (req, res, next) => {
  try {
    const {
      parms: { id },
      body,
    } = req;
    const group = await Group(body);
    const user = await User.findByPk(id);
    user.addGroup(group);
    const userWithAllGroup = await User.findByPk(id, {
      include: [Group],
    });
    res.send(userWithAllGroup);
  } catch (err) {
    next(err);
  }
};
