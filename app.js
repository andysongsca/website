/**
 * Ö÷³ÌÐò
 * */

'use strict';

import koa from 'koa';

let app = koa();
app.use(function(req, res, next) {
   res.body = 'hello ! from andy';
});