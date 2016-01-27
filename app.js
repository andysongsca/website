/**
 * Created on 2016-01-26 20:19:11
 * @author: changan.song
 * @link: 
 * @desc: 主程序
 */

'use strict';

import koa from 'koa';
import Router from 'koa-router';
import requireAll from 'require-all';

//变量声明部分

let app = koa();
let router = new Router();
let controllers = requireAll(__dirname + '/controller');

//函数执行部分

setRoutes(controllers, router);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3333);
console.log('server: http://my.test.com:3333');



//函数声明部分

function setRoutes(controllers, router) {
  Object.keys(controllers).forEach(key => {
    let controller = controllers[key];
    switch (typeof controller) {
      case 'function':
        controller(router);
        break;
      case 'object':
        setRoutes(controller, router);
        break;
    }
  });
}