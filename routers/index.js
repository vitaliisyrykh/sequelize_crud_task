const express = require('express');
const userRouter = require('./../routers/user.router')
const router = express.Router();

router.use('user',userRouter);

module.exports = router;