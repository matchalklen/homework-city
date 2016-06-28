$(document).ready(start);

function start() {
	$("form").submit(setBackground);
	}

function setBackground(e) {
	e.preventDefault();

	//declaring variable for city
	var city = $("#city-type").val();

	//checking if city variable matches supplied strings for New York
	if(city === "New York" || city === "New York City" || city === "NYC") {
		//set background to .nyc class
		$("body").attr("class","nyc");
	}
	
	//checking if city variable matches supplied strings for San Francisco	
	else if(city === "San Francisco" || city === "SF" || city === "Bay Area") {
		//set background to .sf class
		$("body").attr("class","sf");
	}

	//checking if city variable matches supplied strings for Los Angeles
	else if(city === "Los Angeles" || city === "LA" || city === "LAX") {
		//set background to .la class
		$("body").attr("class","la");
	}
	
	//checking if city variable matches supplied strings for Austin
	else if(city === "Austin" || city === "ATX") {
		//set background to .austin class
		$("body").attr("class","austin");
	}
    
    //checking if city variable matches supplied strings for Sydney
	else if(city === "Sydney" || city ===  "SYD") {
		//set background to .sydney class
		$("body").attr("class","sydney");
	}
}