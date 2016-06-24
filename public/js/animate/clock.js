(function() {
	var digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];

    var WIN_WIDTH =  window.innerWidth,
    	WIN_HEIGHT =  window.innerHeight,
    	MARGIN_TOP = 110,
    	MARGIN_LEFT = 5,
    	R = 1.5,
    	CURRENT_TIME = null,
    	OLD_TIME = new Date(),
    	BALLS = [],
        requestAnimationFrame = (function() {
            return  window.requestAnimationFrame || 
                    window.mozRequestAnimationFrame || 
                    window.webkitRequestAnimationFrame || 
                    window.msRequestAnimationFrame || 
                    window.oRequestAnimationFrame || 
                    function(callback) { setTimeout(callback, 1000 / 60); };
        }());;

	var cv = document.getElementById('cv'),
		ct = cv.getContext('2d');

	if (ct) {

		cv.width = WIN_WIDTH;
		cv.height = WIN_HEIGHT;
		director(ct);

	}else {
		alert('破浏览器不支持canvas');
	}
 
	function director(ct) {
		update(ct);
	}

	function render(time,oldTime,ct) {
		var hours = time.getHours(),
			minutes = time.getMinutes(),
			seconds = time.getSeconds(),
			ohours = oldTime.getHours(),
			ominutes = oldTime.getMinutes(),
			oseconds = oldTime.getSeconds();

		var lineColor = ct.createRadialGradient(cv.width/2, cv.height/2, cv.width/40, cv.width/2,cv.height/2,cv.height);
			lineColor.addColorStop(0.0, 'white');
			lineColor.addColorStop(0.25, 'yellow');
			lineColor.addColorStop(0.5, 'green');
			lineColor.addColorStop(0.75, 'blue');
			lineColor.addColorStop(1, 'black');
			ct.fillStyle = lineColor;
			ct.fillRect(0,0,cv.width,cv.height);

		for (var i = 0; i < 1; i++) {
			drawShape(WIN_WIDTH/2,WIN_HEIGHT/2,100,100,drawStar,ct);
		}

		renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) ,parseInt(hours/10) != parseInt(ohours/10), ct );
	    renderDigit( MARGIN_LEFT + 15*(R+1) , MARGIN_TOP , parseInt(hours%10) , parseInt(hours%10) != parseInt(ohours%10), ct );
	    renderDigit( MARGIN_LEFT + 30*(R + 1) , MARGIN_TOP , 10 , false, ct );
	    renderDigit( MARGIN_LEFT + 39*(R+1) , MARGIN_TOP , parseInt(minutes/10) , parseInt(minutes/10) != parseInt(ominutes/10), ct);
	    renderDigit( MARGIN_LEFT + 54*(R+1) , MARGIN_TOP , parseInt(minutes%10) , parseInt(minutes%10) != parseInt(ominutes%10), ct);
	    renderDigit( MARGIN_LEFT + 69*(R+1) , MARGIN_TOP , 10 , false, ct);
	    renderDigit( MARGIN_LEFT + 78*(R+1) , MARGIN_TOP , parseInt(seconds/10) , parseInt(seconds/10) != parseInt(oseconds/10), ct);
	    renderDigit( MARGIN_LEFT + 93*(R+1) , MARGIN_TOP , parseInt(seconds%10) , parseInt(seconds%10) != parseInt(oseconds%10), ct);

	    renderBalls(ct);

	    ct.save();
	    ct.font = "30px Courier New";
	    ct.fillStyle = "blue";
   		ct.fillText("duang~ 您的ip为：\n" , 20, 50);
   		// ct.fillText(ip,20,300);
   		ct.restore();


	}

	function renderDigit(offset_x, offset_y, num, isChange, ct) {
		ct.save();

		ct.fillStyle = 'red';
		for (var i = 0; i < digit[num].length; i++) {
			for (var j = 0; j < digit[num][i].length; j++) {
				if (digit[num][i][j] == 1) {
					ct.beginPath();
	                ct.arc( offset_x+j*2*(R+1)+(R+1) , offset_y+i*2*(R+1)+(R+1) , R , 0 , 2*Math.PI );
	                ct.closePath();
	                ct.fill();
	                if(isChange) {

		                BALLS.push({
		                	x: offset_x+j*2*(R+1)+(R+1),
		                	y: offset_y+i*2*(R+1)+(R+1),
		                	r: R,
		                	vx: Math.pow(-1,Math.ceil(Math.random()*10)) * 2 * Math.random(),
		                	vy: -15,
		                	g: 1 + Math.random(),
		                	color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +')'
		                });
	                }
				}
				
			}
		}

		ct.restore();
	}

	function renderBalls(ct) {

		var n = 0;
		for (var i = 0; i < BALLS.length; i++) {

			ct.beginPath();
			ct.arc(BALLS[i].x, BALLS[i].y, BALLS[i].r, 0, 2*Math.PI);
			ct.closePath();
        	var radial = ct.createRadialGradient(BALLS[i].x,BALLS[i].y,0,BALLS[i].x,BALLS[i].y,BALLS[i].r);
        	radial.addColorStop(0,'white');
        	radial.addColorStop(.7,BALLS[i].color);
			ct.fillStyle = radial;
			ct.fill();

			if (BALLS[i].y - BALLS[i].r < WIN_HEIGHT) {
				BALLS[n++] = BALLS[i];
			}
		}
		while(n<BALLS.length) {
			BALLS.pop();
		}
		console.log(BALLS.length);
		// if (BALLS.length > 200) {
		// 	BALLS = [];
		// }
	}

	function drawShape(offset_x,offset_y,R,rot,draw,ct) {
		ct.save();

		ct.translate(offset_x,offset_y);
		ct.rotate(rot/180 * Math.PI);
		ct.scale(R,R);
		draw(ct);
		ct.fillStyle = 'yellow';
		ct.fill();
		ct.restore();

	}

	function drawStar(ct) {
		ct.beginPath();
		for(var i=0; i<5; i++) {
			ct.lineTo( Math.cos((18 + i*72)/180 * Math.PI),
				-Math.sin((18 + i*72)/180 * Math.PI));
			ct.lineTo( Math.cos((54 + i*72)/180 * Math.PI) * .5,
				-Math.sin((54 + i*72)/180 * Math.PI) * .5);
		}
		ct.closePath();
	}
	function updateBalls() {
		for (var i = 0; i < BALLS.length; i++) {
			BALLS[i].x += BALLS[i].vx - 5;
			BALLS[i].y += BALLS[i].vy;
			BALLS[i].vy += BALLS[i].g;
			BALLS[i].r += 0.3;  
		}
	}
	function update() {
		  // setInterval(function(){

         CURRENT_TIME = new Date();
         updateBalls();

         ct.clearRect(0,0,WIN_WIDTH,WIN_HEIGHT);
         render(CURRENT_TIME,OLD_TIME,ct);
         OLD_TIME = CURRENT_TIME;

        // },1000/100);
        
        requestAnimationFrame(update);
	}
})();
