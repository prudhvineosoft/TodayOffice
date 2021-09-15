
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let direction = document.getElementById("direction")
let resultEl = document.getElementById("result");

function setGradient() {
	let directionValue = direction.value
	console.log(directionValue)
	console.log(color1.value)
	body.style.background = 
	"linear-gradient(" + directionValue + ", "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	resultEl.textContent = "background : linear-gradient(" + directionValue + ", "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ");"
}




direction.addEventListener("change" , setGradient)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);