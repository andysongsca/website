# website
personal website

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
