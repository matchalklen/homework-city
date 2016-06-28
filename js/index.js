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
		//SET BACKGROUND to nyc.jpg
		$("body").attr("class","nyc");
	}
	
	//checking if city variable matches supplied strings for San Francisco	
	else if(city === "San Francisco" || city === "SF" || city === "Bay Area") {
		//SET BACKGROUND to sf.jpg
		$("body").attr("class","sf");
	}

	//checking if city variable matches supplied strings for Los Angeles
	else if(city === "Los Angeles" || city === "LA" || city === "LAX") {
		//SET BACKGROUND to la.jpg
		$("body").attr("class","la");
	}
	
	//checking if city variable matches supplied strings for Austin
	else if(city === "Austin" || city === "ATX") {
		//SET BACKGROUND to austin.jpg
		$("body").attr("class","austin");
	}
    
    //checking if city variable matches supplied strings for Sydney
	else if(city === "Sydney" || city ===  "SYD") {
		//SET BACKGROUND to sydney.jpg
		$("body").attr("class","sydney");
	}
}