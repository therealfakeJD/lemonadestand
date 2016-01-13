
/*var days;

days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weather;

weather = ["Rain", "Sun", "Thunderstorm", "Tornado", "Hurricane", "Hot", "Cool"];

var neighborVisit =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var maxTemp = 100;
var minTemp = 60;

var lemonadeCost = 0.50;

var dailyTemp = []

document.getElementById("openTheStand").addEventListener("click", openTheStand);

generateWeather();

function generateWeather(){
	var weatherToday;
	weatherToday = 0;
	var tempToday;
	var badWeather = "Run for your lives... No Lemonade Today!!!"
	for (var i = 0; i < days.length; i++){
			
		tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
		dailyTemp[i] = tempToday;
		document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] +
	"' class='" + weatherToday +"'><b>Forecast for " + days[i] + "</br>" + weatherToday + " and " + tempToday + " degrees.</br><br></div>";
	if (weatherToday.length > 5) {
		return badweather 
		
	}
		
}
	
	
	
	



function openTheStand() {
	var glassesSold = 0; 
	var totalGlasses = 0;
	var glassesLeft = 0;

	
	resetForm();
	var numGlasses = Number(document.getElementById("numGlasses").value);
	var glassPrice = Number(document.getElementById("glassPrice").value);
	


	
	for (var i = 0; i < days.length; i++){
		
		glassesSold = Math.floor(dailyTemp[i] / glassPrice);
		
		glassesLeft = numGlasses - totalGlasses;
		
		if (glassesSold > glassesLeft) {
			glassesSold = glassesLeft;
		}
		
		totalGlasses = glassesSold + totalGlasses;
		
		document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
		
		
		
	}
	
	
	displayResults();
}



function displayResults(weeklyInventory, glassPrice, weeklySales) {
	
	var revenue = weeklySales * glassPrice;
	var expense = weeklyInventory * lemonadeCost;
	var leftOver = weeklyInventory - weeklySales;
	var profit = revenue - expense;
	

	
	document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
	document.getElementById("result").innerHTML += "<p>Total Revenue: $" + revenue + ".</p>";
	document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
	document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";


}

function resetForm(){
	document.getElementById("result").innerHTML = "";
}

function clearForm(){
	document.getElementById("form1").reset();
}

function clearSecondForm(){
	document.getElementById("form2").reset();
}*/

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var weather = ["Rain", "Sun", "Snow", "Storm", "Fog"];

function changingDay(){
	var i = 0;
	var text = "";
	for (;days[i];){
		text += (days[i] + " "+ " " + whatCond() ) +  "<br><br><br>";
		i++;
		}
	document.getElementById("demo").innerHTML = text;
	}
		
changingDay()


function whatCond(){
	var changingWeather;
	for (var i = 0; i < weather.length; i++);
		changingWeather = weather[Math.floor(Math.random() * weather.length)];
	return changingWeather;
}

function totalProfit(){
	var soldCups;
	var pricePerCup;
	var numberOfCups;
	
	pricePerCup = Number(document.getElementById("pricePerCup").value);
	soldCups = Number(document.getElementById("soldCups").value);;
	totalCups = (pricePerCup * soldCups);
	
	return totalCups;
	
}



totalProfit()







