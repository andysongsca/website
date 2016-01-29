/**
 * Created on 2016-01-26 20:12:44
 * @author: changan.song
 * @link: 
 * @desc: 首页
 */

'use strict';

export default (router) => {
	router.get('/index', function* (next) {
		yield this.render('index', {title: "index title"});
	});

	router.redirect('/', '/index', 301);
}
