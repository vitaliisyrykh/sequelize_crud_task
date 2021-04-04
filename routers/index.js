const router = require('express').Router();
const userRouter = require('./../routers/user.router');

router.use('/user', userRouter);

module.exports = router;
