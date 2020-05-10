function accelerate() {
	document.getElementById("shipName").innerHTML = 'Slow down! You are going too fast.'; 
	document.getElementById("rectangle").style.backgroundColor = "red";
	document.getElementById("speedNumber").innerHTML = "25 458 km/h";
}

function brake() {
	document.getElementById("shipName").innerHTML = 'This is too slow. Speed up!';
	document.getElementById("rectangle").style.backgroundColor = "lightgreen";
	document.getElementById("speedNumber").innerHTML = "952 km/h"
}

function info() {
	var information = {
	water: "sufficient",
	food: "sufficient",
	mood: "good",
	supplies: function() {
		return "Water: " + this.water + " | Food: " + this.food + " | Mood: " + this.mood;
	}
  }
	document.getElementById("supplies").innerHTML = information.supplies();
}






