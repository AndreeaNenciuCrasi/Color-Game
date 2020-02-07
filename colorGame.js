let numSquares = 9;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let levelButtons = document.querySelectorAll(".level");

main();

function main(){
    colorDisplay.textContent = pickedColor;
for (let i = 0; i < levelButtons.length; i++){
    levelButtons[i].addEventListener("click", function () {
        levelButtons[0].classList.remove("selected");
        levelButtons[1].classList.remove("selected");
        levelButtons[2].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
            setSquares(3);
        } else if (this.textContent === "Medium"){
            setSquares(6);
        } else if (this.textContent === "Hard"){
            setSquares(9);
	    }
});
}
reset();
checkColor();
}

function setSquares(numSquares){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}

function reset(){
resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});
}

function checkColor(){
    pickedColor = pickColor();
    for(let i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		let clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(number) {
    let colorsList = [];
    for(let i = 0; i < number; i++){
        colorsList.push(randomColor());
    }
    return colorsList;
}

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", "  + blue + ")";
}
