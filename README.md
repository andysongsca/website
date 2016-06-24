# website
personal website
===============================
启动项目步骤
npm install 
npm start
==========================================
server.js 
为程序的wrapper 放置babel hook
若babel 5.x版本， 则require('babel/rigister')形式

若babel 6.x版本， 则require('babel-register')({
					  presets: [ 'es2015' ]
					});
					require("babel-polyfill");
================================================
app.js
为主程序，中间件拼装功能
===============================================
更新为淘宝镜像，提高npm install速度
npm config set registry https://registry.npm.taobao.org
查看是否生效
npm config list
==================================================
