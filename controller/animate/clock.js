/**
 * Created on 2016-01-27 18:42:33
 * @author: changan.song
 * @link: 
 * @desc: canvas | clock
 */

'use strict';

export default (router) => {
	router.get('/animate/clock', function* (next) {
		yield this.render('./animate/clock', {});
	});
}