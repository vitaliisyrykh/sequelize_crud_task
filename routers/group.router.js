const groupRouter = require('express').Router();
const GroupController = require('../controller/group.controller');

groupRouter.post('/groups', GroupController.createGroup);
groupRouter.post('/groups/:id', GroupController.addGroup);
