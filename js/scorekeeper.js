var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.getElementById("scoreTwo");
var startOver = document.querySelector("#reset");
var numInput = document.querySelector("input");
var over = document.querySelector(".gameOver");
var winningNumber = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var reset = 0;
var gameOver = false;
var winning = 5;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
	}
	scoreOne.textContent = p1Score;
	if(p1Score === winning) {
			scoreOne.classList.add("winner");
			over.textContent = "Game Over";
			gameOver = true;
	}
});
		
p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
	}
	scoreTwo.textContent = p2Score;
	if(p2Score === winning) {
			scoreTwo.classList.add("winner");
			over.textContent = "Game Over";
			gameOver = true;
	}
});

startOver.addEventListener("click", function(){
	end();
});

function end() {
	scoreOne.textContent = reset;
	scoreTwo.textContent = reset;
	scoreOne.classList.remove("winner");
	scoreTwo.classList.remove("winner");
	winningNumber.textContent = 0;
	over.textContent = "";
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
}
numInput.addEventListener("change", function() {
	winningNumber.textContent = this.value;
	winning = Number(this.value);
	end();
});