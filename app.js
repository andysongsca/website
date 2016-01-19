/**
 * 主程序
 * */

'use strict';

import koa from 'koa';

let app = koa();
app.use(function* (req, res, next) {
   this.body = 'hello ! from andy！modifIED at 1.9:15:50';
});
app.listen(3333);
console.log('server: http://my.test.com:3333');