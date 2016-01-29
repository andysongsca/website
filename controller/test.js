/**
 * Created on 2016-01-26 20:15:15
 * @author: changan.song
 * @link: 
 * @desc: 测试
 */

'use strict';

export default (router) => {
	router.get('/test/clc/asdf', function* (next) {
		this.body = 'this is test page';
	});
}