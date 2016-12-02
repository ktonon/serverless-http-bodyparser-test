'use strict';

const bodyParser = require('koa-bodyparser');
const koa = require('koa');
const serverless = require('serverless-http');

const app = koa();
app.use(bodyParser());
app.use(function* () {
  this.body = this.req.body;
});
module.exports = serverless(app);
