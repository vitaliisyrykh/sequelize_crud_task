const express = require('express');
const router = require('./routers/index');
const router1 = require('./router');

const app = express();

app.use(express.json()); // data stream -> json -> js object -> req.body
/* 
  http://localhost:3000/api/*
 */
app.use(router);

app.use((err, req, res, next) => {
  console.log('Err caught: ->>>>', err);
  if(res.headerSent){
    return;
  }
  res.status(err.message || 'Server Error').send({errors:[err.status || 500]});
});

module.exports = app;
