var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var lastPressed = false;

var gameRunning = false;
var gameOver = false;

var timeout = 0;

var hit = false;

var lives = 3;
var iterationCount = 0;
var fired = false;
var fireWait = false;
var startTime1 = null;
var startTime2 = null;
var startTime3 = null;
const getName = () => {
	var scoreInput = document.getElementById('scoreInput');
	var resetBtn = document.getElementById('resetBtn');
	var scoreBoard = document.getElementById('scoreBoard');
	var scoreBtn = document.getElementById('scoreBtn');
	resetBtn.classList.remove("hidden")

	scoreBtn.classList.add("hidden")
	var existingScores = JSON.parse(localStorage.getItem("Scores"));
	if (existingScores == null) {
		existingScores = [];
	}
	var scoreObj = {
		name: scoreInput.value,
		score: iterationCount
	}
	existingScores.push(scoreObj);

	existingScores.forEach((players) => {
		var paragraph = document.createElement("p");
		var nameSpan = document.createElement("span");
		var scoreSpan = document.createElement("span");
		nameSpan.textContent = players?.name;
		scoreSpan.textContent = players?.score;
		nameSpan.classList.add("name");
		scoreSpan.classList.add("scoreNum");
		paragraph.appendChild(nameSpan)
		paragraph.appendChild(scoreSpan)
		scoreBoard.appendChild(paragraph)
	})
	scoreBoard.classList.remove("hidden")
	localStorage.setItem("Scores", JSON.stringify(existingScores))


}
function keyup(event) {
	if (gameRunning && !gameOver && !hit && !fireWait) {
		
		var liveParent = document.querySelector('.health');
		

		var explosion1 = document.getElementById('explosion1');
		var explosion2 = document.getElementById('explosion2');
		var explosion3 = document.getElementById('explosion3');

	
		var player = document.getElementById('player');
	


		var player = document.getElementById('player');
		if (event.keyCode == 37 && !hit && !fireWait) {
			leftPressed = false;
			lastPressed = 'left';
		}
		if (event.keyCode == 39 && !hit && !fireWait) {
			rightPressed = false;
			lastPressed = 'right';
		}
		if (event.keyCode == 38 && !hit && !fireWait) {
			upPressed = false;
			lastPressed = 'up';
		}
		if (event.keyCode == 40 && !hit && !fireWait) {
			downPressed = false;
			lastPressed = 'down';
		}

		player.className = 'character stand ' + lastPressed + " fire";
	}
	else if (!hit && !fireWait) {


		var gameOverBtn = document.getElementById('gameOverBtn');
		var resetBtn = document.getElementById('resetBtn');
		var scoreBoard = document.getElementById('scoreBoard');
		var player = document.getElementById('player');
		var bomb1 = document.querySelector('.bomb1');
		var bomb2 = document.querySelector('.bomb2');
		var bomb3 = document.querySelector('.bomb3');
		var liveParent = document.querySelector('.health');
		var explosion1 = document.getElementById('explosion1');
		var explosion2 = document.getElementById('explosion2');
		var explosion3 = document.getElementById('explosion3');
		var tankOne = document.getElementById('tankOne');
		var tankTwo = document.getElementById('tankTwo');
		var tankThree = document.getElementById('tankThree');
		if (gameOver) {
			var scoreInput = document.getElementById('scoreInput');
			var player = document.getElementById('player');
			tankOneXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankTwoXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankThreeXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankOneYSpot = Math.floor(Math.random() * (35 - 25)) + 25;
			tankTwoYSpot = Math.floor(Math.random() * (55 - 45)) + 45;
			tankThreeYSpot = Math.floor(Math.random() * (85 - 75)) + 75;
			var live1 = document.createElement('li');
			var live2 = document.createElement('li');
			var live3 = document.createElement('li');
			if (event?.key === "y") {
				player.style.top = "88vh"
				player.style.left = "200px"
				startTime1 = new Date();
				startTime2 = new Date();
				startTime3 = new Date();
				scoreInput.value = "";
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				liveParent.appendChild(live1);
				liveParent.appendChild(live2);
				liveParent.appendChild(live3);
				gameRunning = true;
				lives = 3;
				gameOverBtn.classList.add("hidden")
				resetBtn.classList.add("hidden")
				scoreBoard.classList.add("hidden")

				player.className = 'character';
				gameOver = false;
				tankOne.style.top = tankOneYSpot + 'vh';
				tankOne.style.left = tankOneXSpot + '%';
				tankTwo.style.top = tankTwoYSpot + 'vh';
				tankTwo.style.left = tankTwoXSpot + '%';
				tankThree.style.top = tankThreeYSpot + 'vh';
				tankThree.style.left = tankThreeXSpot + '%';
				bomb1.style.left = tankOneXSpot + "%"
				bomb2.style.left = tankTwoXSpot + "%"
				bomb3.style.left = tankThreeXSpot + "%"
				bomb1.style.top = tankOneYSpot + 1 + "vh"
				bomb2.style.top = tankTwoYSpot + 1 + "vh"
				bomb3.style.top = tankThreeYSpot + 1 + "vh"
				explosion1.style.left = "2%"
				explosion2.style.left = "2%"
				explosion3.style.left = "2%"
				explosion1.style.top = tankOneYSpot + "vh"
				explosion2.style.top = tankTwoYSpot + "vh"
				explosion3.style.top = tankThreeYSpot + "vh"
				tankOne.classList.remove("hidden");
				tankTwo.classList.remove("hidden");
				tankThree.classList.remove("hidden");
				bomb1.classList.remove("hidden");
				bomb2.classList.remove("hidden");
				bomb3.classList.remove("hidden");
			}
		} else {
console.log("Asdsa");
			var startBtn = document.getElementById('startBtn');

			var tankOne = document.getElementById('tankOne');
			var tankTwo = document.getElementById('tankTwo');
			var tankThree = document.getElementById('tankThree');
			var explosion1 = document.getElementById('explosion1');
			var explosion2 = document.getElementById('explosion2');
			var explosion3 = document.getElementById('explosion3');
			var bomb1 = document.querySelector('.bomb1');
			var bomb2 = document.querySelector('.bomb2');
			var bomb3 = document.querySelector('.bomb3');



			tankOneXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankTwoXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankThreeXSpot = Math.floor(Math.random() * (90 - 80)) + 80;
			tankOneYSpot = Math.floor(Math.random() * (35 - 25)) + 25;
			tankTwoYSpot = Math.floor(Math.random() * (55 - 45)) + 45;
			tankThreeYSpot = Math.floor(Math.random() * (85 - 75)) + 75;
		
			explosion1.style.left = "2%"
			explosion2.style.left = "2%"
			explosion3.style.left = "2%"
			explosion1.style.top = tankOneYSpot + "vh"
			explosion2.style.top = tankTwoYSpot + "vh"
			explosion3.style.top = tankThreeYSpot + "vh"
			bomb1.style.left = tankOneXSpot + "%"
			bomb2.style.left = tankTwoXSpot + "%"
			bomb3.style.left = tankThreeXSpot + "%"
			bomb1.style.top = tankOneYSpot + 1 + "vh"
			bomb2.style.top = tankTwoYSpot + 1 + "vh"
			bomb3.style.top = tankThreeYSpot + 1 + "vh"

			if (event?.key === "y") {
				startTime1 = new Date();
				startTime2 = new Date();
				startTime3 = new Date();
				gameRunning = true;
				tankOne.classList.remove("hidden");
				tankTwo.classList.remove("hidden");
				tankThree.classList.remove("hidden");
				bomb1.classList.remove("hidden");
				bomb2.classList.remove("hidden");
				bomb3.classList.remove("hidden");
				startBtn.className = "hidden";
				tankOne.style.top = tankOneYSpot + 'vh';
				tankOne.style.left = tankOneXSpot + '%';
				tankTwo.style.top = tankTwoYSpot + 'vh';
				tankTwo.style.left = tankTwoXSpot + '%';
				tankThree.style.top = tankThreeYSpot + 'vh';
				tankThree.style.left = tankThreeXSpot + '%';
			}
		}
	}

}

function move() {

	if (gameRunning && !gameOver && !hit) {

		var player = document.getElementById('player');
		var arrow = document.getElementById('arrow');
		var liveParent = document.querySelector('.health');
		var gameOverBtn = document.getElementById('gameOverBtn');
		var resetBtn = document.getElementById('resetBtn');
		var scoreBtn = document.getElementById('scoreBtn');
		var explosion1 = document.getElementById('explosion1');
		var explosion2 = document.getElementById('explosion2');
		var explosion3 = document.getElementById('explosion3');

		var bomb1 = document.getElementById('bomb1');
		var bomb2 = document.getElementById('bomb2');
		var bomb3 = document.getElementById('bomb3');


		var tankOne = document.getElementById('tankOne');
		var tankTwo = document.getElementById('tankTwo');
		var tankThree = document.getElementById('tankThree');
		var cactus1 = document.querySelector('.cactus.one');
		var cactus2 = document.querySelector('.cactus.two');
		var cactus3 = document.querySelector('.cactus.three');
		var cactus4 = document.querySelector('.cactus.four');
		var cactus5 = document.querySelector('.cactus.five');

		var cactus1Left = cactus1.offsetLeft;
		var cactus1Right = cactus1.offsetLeft + cactus1.offsetWidth
		var cactus1Top = cactus1.offsetTop;
		var cactus1Bottom = cactus1.offsetTop + cactus1.offsetHeight

		var cactus2Left = cactus2.offsetLeft;
		var cactus2Right = cactus2.offsetLeft + cactus2.offsetWidth
		var cactus2Top = cactus2.offsetTop;
		var cactus2Bottom = cactus2.offsetTop + cactus2.offsetHeight


		var cactus3Left = cactus3.offsetLeft;
		var cactus3Right = cactus3.offsetLeft + cactus3.offsetWidth
		var cactus3Top = cactus3.offsetTop;
		var cactus3Bottom = cactus3.offsetTop + cactus3.offsetHeight


		var cactus4Left = cactus4.offsetLeft;
		var cactus4Right = cactus4.offsetLeft + cactus4.offsetWidth
		var cactus4Top = cactus4.offsetTop;
		var cactus4Bottom = cactus4.offsetTop + cactus4.offsetHeight


		var cactus5Left = cactus5.offsetLeft;
		var cactus5Right = cactus5.offsetLeft + cactus5.offsetWidth
		var cactus5Top = cactus5.offsetTop;
		var cactus5Bottom = cactus5.offsetTop + cactus5.offsetHeight



		var positionLeft = player.offsetLeft;
		var positionRight = player.offsetLeft + player.offsetWidth
		var positionTop = player.offsetTop;
		var positionBottom = player.offsetTop + player.offsetHeight

		var bomb1PosLeft = bomb1.offsetLeft;
		var bomb1PosRight = bomb1.offsetLeft + bomb1.offsetWidth
		var bomb1PosTop = bomb1.offsetTop;
		var bomb1PosBottom = bomb1.offsetTop + bomb1.offsetHeight

		var bomb2PosLeft = bomb2.offsetLeft;
		var bomb2PosRight = bomb2.offsetLeft + bomb2.offsetWidth
		var bomb2PosTop = bomb2.offsetTop;
		var bomb2PosBottom = bomb2.offsetTop + bomb2.offsetHeight

		var bomb3PosLeft = bomb3.offsetLeft;
		var bomb3PosRight = bomb3.offsetLeft + bomb3.offsetWidth
		var bomb3PosTop = bomb3.offsetTop;
		var bomb3PosBottom = bomb3.offsetTop + bomb3.offsetHeight



		var explosion1Left = explosion1.offsetLeft;
		let explosion1Right = explosion1.offsetLeft + explosion1.offsetWidth
		var explosion1Top = explosion1.offsetTop;
		var explosion1Bottom = explosion1.offsetTop + explosion1.offsetHeight

		var explosion2Left = explosion2.offsetLeft;
		let explosion2Right = explosion2.offsetLeft + explosion2.offsetWidth
		var explosion2Top = explosion2.offsetTop;
		var explosion2Bottom = explosion2.offsetTop + explosion2.offsetHeight

		var explosion3Left = explosion3.offsetLeft;
		let explosion3Right = explosion3.offsetLeft + explosion3.offsetWidth
		var explosion3Top = explosion3.offsetTop;
		var explosion3Bottom = explosion3.offsetTop + explosion3.offsetHeight

		var arrowLeft = arrow.offsetLeft;
		let arrowRight = arrow.offsetLeft + arrow.offsetWidth
		var arrowTop = arrow.offsetTop;
		var arrowBottom = arrow.offsetTop + arrow.offsetHeight

		if (((bomb1PosTop < arrowBottom && bomb1PosTop > arrowTop - 10) || (bomb1PosBottom < arrowTop && bomb1PosBottom > arrowBottom)) && (arrowLeft < bomb1PosRight && arrowRight > bomb1PosLeft)) {
			bomb1.classList.add("hidden");
			arrow.classList.add("hidden");
			explosion1.style.left = bomb1PosLeft + "px";
			explosion1.classList.remove("hidden");
			setTimeout('explosion1.classList.add("hidden")', 2000);
			console.log("lives", lives);
			if (lives > 1) {
				console.log("heree");
				setTimeout('explosion1.style.left = "2%"', 2000);
				setTimeout('bomb1.classList.remove("hidden")', 2000);
			}
		}
		if (((bomb2PosTop < arrowBottom && bomb2PosTop > arrowTop - 10) || (bomb2PosBottom < arrowTop && bomb2PosBottom > arrowBottom)) && (arrowLeft < bomb2PosRight && arrowRight > bomb2PosLeft)) {
			bomb2.classList.add("hidden");
			arrow.classList.add("hidden");
			explosion2.style.left = bomb2PosLeft + "px";
			explosion2.classList.remove("hidden");
			setTimeout('explosion2.classList.add("hidden")', 2000);
			if (lives > 1) {
				setTimeout('explosion2.style.left = "2%"', 2000);
				setTimeout('bomb2.classList.remove("hidden")', 2000);
			}
		}
		if (((bomb3PosTop < arrowBottom && bomb3PosTop > arrowTop - 10) || (bomb3PosBottom < arrowTop && bomb3PosBottom > arrowBottom)) && (arrowLeft < bomb3PosRight && arrowRight > bomb3PosLeft)) {
			bomb3.classList.add("hidden");
			arrow.classList.add("hidden");
			explosion3.style.left = bomb3PosLeft + "px";
			explosion3.classList.remove("hidden");
			setTimeout('explosion3.classList.add("hidden")', 2000);
			if (lives > 1) {
				setTimeout('explosion3.style.left = "2%"', 2000);
				setTimeout('bomb3.classList.remove("hidden")', 2000);
			}
		}

		if ((positionTop < explosion1Bottom - 72 && positionBottom > explosion1Top - 60) && (positionLeft < explosion1Right && positionLeft + 20 > explosion1Left)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				player.className = 'character hit right body';
				liveParent.removeChild(liveParent.lastElementChild);
				hit = true;
				lives = lives - 1;
				bomb1.classList.add("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('bomb1.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameOver = true
				gameRunning = false;
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				player.className = 'character dead';
				setTimeout('explosion1.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true;', 2000);
			}
		}
		if ((positionTop < explosion2Bottom - 72 && positionBottom > explosion2Top - 60) && (positionLeft < explosion2Right && positionLeft + 20 > explosion2Left)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				player.className = 'character hit right body';
				liveParent.removeChild(liveParent.lastElementChild);
				hit = true;
				lives = lives - 1;
				bomb2.classList.add("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('bomb2.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameRunning = false;
				gameOver = true
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				player.className = 'character dead';
				setTimeout('explosion2.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true;', 2000);
			}
		}
		if ((positionTop < explosion3Bottom - 72 && positionBottom > explosion3Top - 60) && (positionLeft < explosion3Right && positionLeft + 20 > explosion3Left)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				player.className = 'character hit right body';
				liveParent.removeChild(liveParent.lastElementChild);
				hit = true;
				lives = lives - 1;
				bomb3.classList.add("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('bomb3.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameRunning = false;
				gameOver = true
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				player.className = 'character dead';
				setTimeout('explosion3.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true;', 2000);
			}
		}


		if (((bomb1PosTop < positionBottom && bomb1PosTop > positionTop) || (bomb1PosBottom < positionTop && bomb1PosBottom > positionBottom)) && (bomb1PosLeft > positionLeft && bomb1PosLeft < positionRight)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;

				liveParent.removeChild(liveParent.lastElementChild);
				player.className = 'character hit right body';
				hit = true;
				lives = lives - 1;
				bomb1.classList.add("hidden");
				explosion1.style.left = positionLeft + "px";
				explosion1.classList.remove("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('explosion1.classList.add("hidden")', 2000);
				setTimeout('explosion1.style.left = "2%"', 2000);
				setTimeout('bomb1.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameRunning = false;
				gameOver = true
				explosion1.style.left = positionLeft + "px";
				explosion1.classList.remove("hidden");
				player.className = 'character dead';
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				setTimeout('explosion1.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true', 2000);

			}
		}

		if (((bomb2PosTop < positionBottom && bomb2PosTop > positionTop) || (bomb2PosBottom < positionTop && bomb2PosBottom > positionBottom)) && (bomb2PosLeft > positionLeft && bomb2PosLeft < positionRight)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				liveParent.removeChild(liveParent.lastElementChild);
				player.className = 'character hit right body';
				hit = true;
				lives = lives - 1;
				bomb2.classList.add("hidden");
				explosion2.style.left = positionLeft + "px";
				explosion2.classList.remove("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('explosion2.classList.add("hidden")', 2000);
				setTimeout('explosion2.style.left = "2%"', 2000);
				setTimeout('bomb2.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameRunning = false;
				gameOver = true
				explosion2.style.left = positionLeft + "px";
				explosion2.classList.remove("hidden");
				player.className = 'character dead';
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				setTimeout('explosion2.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true', 2000);
			}
		}

		if (((bomb3PosTop < positionBottom && bomb3PosTop > positionTop) || (bomb3PosBottom < positionTop && bomb3PosBottom > positionBottom)) && (bomb3PosLeft > positionLeft && bomb3PosLeft < positionRight)) {
			if (lives > 1) {
				upPressed = false;
				downPressed = false;
				leftPressed = false;
				rightPressed = false;
				liveParent.removeChild(liveParent.lastElementChild);
				player.className = 'character hit right body';
				hit = true;
				lives = lives - 1;
				bomb3.classList.add("hidden");
				explosion3.style.left = positionLeft + "px";
				explosion3.classList.remove("hidden");
				setTimeout('hit = false', 4000);
				setTimeout("player.className = 'character '", 4000);
				setTimeout('explosion3.classList.add("hidden")', 2000);
				setTimeout('explosion3.style.left = "2%"', 2000);
				setTimeout('bomb3.classList.remove("hidden")', 2000);
			} else {
				liveParent.removeChild(liveParent.lastElementChild);
				lives = lives - 1;
				gameRunning = false;
				gameOver = true
				explosion3.style.left = positionLeft + "px";
				explosion3.classList.remove("hidden");
				player.className = 'character dead';
				bomb1.classList.add("hidden");
				bomb2.classList.add("hidden");
				bomb3.classList.add("hidden");
				tankOne.classList.add("hidden");
				tankTwo.classList.add("hidden");
				tankThree.classList.add("hidden");
				setTimeout('explosion3.classList.add("hidden")', 2000);
				setTimeout('gameOverBtn.classList.remove("hidden")', 2000);
				setTimeout('scoreBtn.classList.remove("hidden")', 2000);
				// setTimeout('gameOver = true', 2000);
			}
		}
		if (!fired) {
			arrow.classList.remove('left', 'up', 'down')
			arrow.classList.add('arrow', lastPressed)
		}
		if (downPressed == true && !gameOver && gameRunning && !hit && !fireWait) {
			var newTop = positionTop + 1;
			if (((positionBottom > cactus1Top && positionTop + 2 < cactus1Bottom) && (positionRight - 2 > cactus1Left && positionLeft + 2 < cactus1Right)) || ((positionBottom > cactus2Top && positionTop + 2 < cactus2Bottom) && (positionRight - 2 > cactus2Left && positionLeft + 2 < cactus2Right)) || ((positionBottom > cactus3Top && positionTop + 2 < cactus3Bottom) && (positionRight - 2 > cactus3Left && positionLeft + 2 < cactus3Right)) || ((positionBottom > cactus4Top && positionTop + 2 < cactus4Bottom) && (positionRight - 2 > cactus4Left && positionLeft + 2 < cactus4Right)) || ((positionBottom > cactus5Top && positionTop + 2 < cactus5Bottom) && (positionRight - 2 > cactus5Left && positionLeft + 2 < cactus5Right))) {
				console.log("cant move DOWN because of cactus");
			} else {
				player.style.top = newTop + 'px';
			}

			player.className = 'character walk down';

		}
		if (upPressed == true && !gameOver && gameRunning && !hit && !fireWait) {
			var newTop = positionTop - 1;
			if (((positionTop < cactus1Bottom && positionBottom - 2 > cactus1Top) && (positionRight - 2 > cactus1Left && positionLeft + 2 < cactus1Right)) || ((positionTop < cactus2Bottom && positionBottom - 2 > cactus2Top) && (positionRight - 2 > cactus2Left && positionLeft + 2 < cactus2Right)) || (positionTop < cactus3Bottom && positionBottom - 2 > cactus3Top) && (positionRight - 2 > cactus3Left && positionLeft + 2 < cactus3Right) || (positionTop < cactus4Bottom && positionBottom - 2 > cactus4Top) && (positionRight - 2 > cactus4Left && positionLeft + 2 < cactus4Right) || (positionTop < cactus5Bottom && positionBottom - 2 > cactus5Top) && (positionRight - 2 > cactus5Left && positionLeft + 2 < cactus5Right)) {
				console.log("cant move UP because of cactus");
			}
			else {
				player.style.top = newTop + 'px';
			}
			player.className = 'character walk up';

		}
		if (leftPressed == true && !gameOver && gameRunning && !hit && !fireWait) {
			var newLeft = positionLeft - 1;
			if (((positionLeft < cactus1Right && positionRight - 2 > cactus1Left) && (positionBottom - 2 > cactus1Top && positionTop + 2 < cactus1Bottom)) || ((positionLeft < cactus2Right && positionRight - 2 > cactus2Left) && (positionBottom - 2 > cactus2Top && positionTop + 2 < cactus2Bottom)) || ((positionLeft < cactus3Right && positionRight - 2 > cactus3Left) && (positionBottom - 2 > cactus3Top && positionTop + 2 < cactus3Bottom)) || ((positionLeft < cactus4Right && positionRight - 2 > cactus4Left) && (positionBottom - 2 > cactus4Top && positionTop + 2 < cactus4Bottom)) || ((positionLeft < cactus5Right && positionRight - 2 > cactus5Left) && (positionBottom - 2 > cactus5Top && positionTop + 2 < cactus5Bottom))) {
				console.log("cant move LEFT because of cactus");
			}
			else {
				player.style.left = newLeft + 'px';
			}
			player.className = 'character walk left';

		}
		if (rightPressed == true && !gameOver && gameRunning && !hit && !fireWait) {
			var newLeft = positionLeft + 1;
			if (((positionLeft + 2 < cactus1Right && positionRight > cactus1Left) && (positionBottom - 2 > cactus1Top && positionTop + 2 < cactus1Bottom)) || ((positionLeft + 2 < cactus2Right && positionRight > cactus2Left) && (positionBottom - 2 > cactus2Top && positionTop + 2 < cactus2Bottom)) || ((positionLeft + 2 < cactus3Right && positionRight > cactus3Left) && (positionBottom - 2 > cactus3Top && positionTop + 2 < cactus3Bottom)) || ((positionLeft + 2 < cactus4Right && positionRight > cactus4Left) && (positionBottom - 2 > cactus4Top && positionTop + 2 < cactus4Bottom)) || ((positionLeft + 2 < cactus5Right && positionRight > cactus5Left) && (positionBottom - 2 > cactus5Top && positionTop + 2 < cactus5Bottom))) {
				console.log("cant move RIGHT because of cactus");
			}
			else {
				player.style.left = newLeft + 'px';
			}
			player.className = 'character walk right';

		}

	}
}

function keydown(event) {

	if (gameRunning && !gameOver && !hit && !fireWait) {
		var player = document.getElementById('player');
		var bow = document.getElementById('bow');
		var arrow = document.getElementById('arrow');

		var positionLeft = player.offsetLeft;
		var positionRight = player.offsetLeft + player.offsetWidth
		var positionTop = player.offsetTop;
		var positionBottom = player.offsetTop + player.offsetHeight
		if (event.keyCode == 32 && !fired) {
			bow.classList.add("bow");
			if (lastPressed == 'left') {
				arrow.style.left = positionLeft - 30 + "px";
				arrow.style.top = positionTop + 22 + "px";
			}
			if (lastPressed == 'right') {
				arrow.style.left = positionLeft + 30 + "px";
				arrow.style.top = positionTop + 22 + "px";
			}
			if (lastPressed == 'up') {
				arrow.style.left = positionLeft + "px";
				arrow.style.top = positionTop - 20 + "px";
			}
			if (lastPressed == 'down') {
				arrow.style.left = positionLeft + "px";
				arrow.style.top = positionTop + 53 + "px";
			}
			arrow.classList.remove("hidden");
			setTimeout(`bow.classList.remove("bow")`, 500)
			fired = true;
			fireWait = true;
			setTimeout(`fired = false`, 5000)
			setTimeout(`fireWait = false`, 500)
			setTimeout(`arrow.classList.add("hidden")`, 5000)
		}

		if (event.keyCode == 37) {
			leftPressed = true;
		}
		if (event.keyCode == 39) {
			rightPressed = true;
		}
		if (event.keyCode == 38) {
			upPressed = true;
		}
		if (event.keyCode == 40) {
			downPressed = true;
		}
	}
}

function myLoadFunction() {
	var explosion1 = document.getElementById('explosion1');
	var explosion2 = document.getElementById('explosion2');
	var explosion3 = document.getElementById('explosion3');
	var bomb1 = document.querySelector('.bomb1');
	var bomb2 = document.querySelector('.bomb2');
	var bomb3 = document.querySelector('.bomb3');

	bomb1.addEventListener('animationiteration', function (e) {

		var endTime1 = new Date();
		timeElapsed = endTime1 - startTime1;
		timeElapsed /= 1000;
		var seconds1 = Math.round(timeElapsed);
		console.log("seconds", seconds1);

		if (seconds1 > 60 && (Number(getComputedStyle(bomb1).animationDuration.replace(/\D/g, "")) > 3)) {
			bomb1.style.animationDuration = Number(getComputedStyle(bomb1).animationDuration.replace(/\D/g, "")) - 1 + "s"
			// bomb2.style.animationDuration = Number(getComputedStyle(bomb2).animationDuration.replace(/\D/g, "")) - 1 + "s"
			// bomb3.style.animationDuration = Number(getComputedStyle(bomb3).animationDuration.replace(/\D/g, "")) - 1 + "s"
			startTime1 = new Date();
		}
		iterationCount++;
		explosion1.classList.remove("hidden");
		setTimeout('explosion1.classList.add("hidden")', 1000);
	});

	bomb2.addEventListener('animationiteration', function (e) {
		var endTime2 = new Date();
		timeElapsed = endTime2 - startTime2;
		timeElapsed /= 1000;
		var seconds2 = Math.round(timeElapsed);
		console.log("seconds", seconds2);

		if (seconds2 > 60 && (Number(getComputedStyle(bomb2).animationDuration.replace(/\D/g, "")) > 2)) {
			bomb2.style.animationDuration = Number(getComputedStyle(bomb2).animationDuration.replace(/\D/g, "")) - 1 + "s"
			startTime2 = new Date();
		}
		iterationCount++;
		explosion2.classList.remove("hidden");
		setTimeout('explosion2.classList.add("hidden")', 1000);

	});

	bomb3.addEventListener('animationiteration', function (e) {
		var endTime3 = new Date();
		timeElapsed = endTime3 - startTime3;
		timeElapsed /= 1000;
		var seconds3 = Math.round(timeElapsed);

		if (seconds3 > 60 && (Number(getComputedStyle(bomb3).animationDuration.replace(/\D/g, "")) > 1)) {
			bomb3.style.animationDuration = Number(getComputedStyle(bomb3).animationDuration.replace(/\D/g, "")) - 1 + "s"
			startTime3 = new Date();
		}
		iterationCount++;
		explosion3.classList.remove("hidden");
		setTimeout('explosion3.classList.add("hidden")', 1000);

	});

	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

}

document.addEventListener('DOMContentLoaded', myLoadFunction);