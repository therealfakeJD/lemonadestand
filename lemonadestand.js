//myCostPerCup = .35
"use strict"
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var weather = ["Rain", "Sun", "Storm", "Fog"];

var temperature = ["60", "65", "70", "75", "80", "85", "90", "95", "100"];

function myWeek(){
	var i = 0;
	var text = "";
	for (;days[i];){
		text += (days[i] + " "+ " " + conditions() + " " + weekFeel()) +  "<br><br><br>";
		i++;
		}
	document.getElementById("demo").innerHTML = text;
}
	
	
function conditions(){
	var changingWeather;
	for (var i = 0; i < weather.length; i++);
		changingWeather = weather[Math.floor(Math.random() * weather.length)];
	return changingWeather;
}

function weekFeel(){
	var hotOrCold;
	for (var i = 0; i < temperature.length; i++);
		hotOrCold = temperature[Math.floor(Math.random() * temperature.length)];
	return hotOrCold;
}

document.getElementById("startSelling").addEventListener("click", startSelling)

function startSelling(){
	var cupsSold;
	var totalCups;
	var cupsLeft;
	
	cupsSold = 0;
	totalCups = 0;
	cupsLeft = 0;
	
	var cupsToCust = Number(document.getElementById("cupsToCust").value);
	var cupPrice = Number(document.getElementById("cupPrice").value);
	
	
	for (var i = 0; i < days.length; i++){
		cupsSold = Math.floor(temperature[i] / cupPrice);
		
		cupsLeft = cupsToCust - totalCups;
		
		if(cupsSold > cupsLeft) {
			cupsSold = cupsLeft;
		}
	totalCups = cupsSold * totalCups;
	
	document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + cupsToCust + " cups of Lemonade for $ " + (cupsToCust * cupPrice) + " </p>";
}
	
}
startSelling()
myWeek();
