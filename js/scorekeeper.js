var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.getElementById("scoreTwo");
var startOver = document.querySelector("#reset");
var number = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var reset = 0;
var gameOver = 5;

p1Button.addEventListener("click", function() {
	p1Score++;
	console.log(p1Score);
	scoreOne.textContent = p1Score;
	if(p1Score === 5) {
		alert("You`ve won");
	}
});
		
p2Button.addEventListener("click", function() {
	p2Score++;
	console.log(p2Score);
	scoreTwo.textContent = p2Score;
});

startOver.addEventListener("click", function(){
	scoreOne.textContent = reset;
	scoreTwo.textContent = reset;
	p1Score = 0;
	p2Score = 0;
});