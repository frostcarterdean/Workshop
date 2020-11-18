
/*---FETCH USA DATA-----------------------------------------------------------------*/

function usaTable() {

	/*---FETCH AND DISPLAY USA DATA-----------------------------------------------------------------*/
  let requestURLUSA = 'https://api.covidtracking.com/v1/us/current.json';
  let req = new XMLHttpRequest(); 
  req.open('GET', requestURLUSA); 
  req.responseType = 'json'; 
  req.send(); 
  req.onload = function() { // Occurs after send function above
      var result = req.response;

    /*DESKTOP ---------------------------------------------------------------------------*/
      usaNewPos = document.getElementById("usaNewPos");
      usaNewPos.innerHTML = result[0]['positiveIncrease'];
      usaPos = document.getElementById("usaPos");
      usaPos.innerHTML = result[0]['positive'];
      usaRec = document.getElementById("usaRec");
      usaRec.innerHTML = result[0]['recovered'];
      usaNewDeath = document.getElementById("usaNewDeath");
      usaNewDeath.innerHTML = result[0]['deathIncrease'];
      usaDeath = document.getElementById("usaDeath");
      usaDeath.innerHTML = result[0]['death'];

    /*MOBILE ---------------------------------------------------------------------------*/
      usaNewPosM = document.getElementById("usaNewPosM");
      usaNewPosM.innerHTML = result[0]['positiveIncrease'];
      usaPosM = document.getElementById("usaPosM");
      usaPosM.innerHTML = result[0]['positive'];
      usaRecM = document.getElementById("usaRecM");
      usaRecM.innerHTML = result[0]['recovered'];
      usaNewDeathM = document.getElementById("usaNewDeathM");
      usaNewDeathM.innerHTML = result[0]['deathIncrease'];
      usaDeathM = document.getElementById("usaDeathM");
      usaDeathM.innerHTML = result[0]['death'];
  }

}

// -----------------------------------------------------------

	var placeholder;
	
	function countiesTable() {
		let requestURL = 'https://data.covidactnow.org/latest/us/counties.WEAK_INTERVENTION.json';
		// API URL
		let request = new XMLHttpRequest(); 
		// XMLHttpRequest (XHR) object assigned to variable
		request.open('GET', requestURL); 
		// XMLHttpRequest.open() function, first argument is a method and second is a URL (string variable here)
		request.responseType = 'json'; 
		// "The response is a JavaScript object created by parsing the contents of received data as JSON."
		request.send(); 
		// Sends request to server
		request.onload = function() { // Occurs after send function above
			const result = request.response;
			placeholder = request.response;
			console.log(placeholder);
			countiesSelectOutput();
		}
	}

	function countiesSelectOutput() {
		var state = document.getElementById("state").value;
		var county = document.getElementById("county");
						
		if (county.childElementCount > 1) {
			while (county.firstChild) {
				county.removeChild(county.firstChild);
			}
		}
			
		for (x = 0; x < placeholder.length; x++) {
			if (state == placeholder[x].stateName) {
				newOption = document.createElement("option");
				newOption.innerHTML = placeholder[x].countyName;
				newOption.value = placeholder[x].countyName;
				document.getElementById("county").appendChild(newOption);
			}
		}
			countiesTableOutput();
	}
	
	
	function countiesTableOutput() {
		var countyValue = document.getElementById("county").value;
			
		for (x = 0; x < placeholder.length; x++) {
			if (countyValue == placeholder[x].countyName) {
				for (y = 0; y < document.getElementsByClassName("name").length; y++) {
					document.getElementsByClassName("name")[y].innerHTML = placeholder[x].countyName;
				}
				for (y = 0; y < document.getElementsByClassName("population").length; y++) {
					document.getElementsByClassName("population")[y].innerHTML = placeholder[x].actuals.population;
				}
				for (y = 0; y < document.getElementsByClassName("confirmed").length; y++) {
					document.getElementsByClassName("confirmed")[y].innerHTML = placeholder[x].actuals.cumulativeConfirmedCases;
				}
				for (y = 0; y < document.getElementsByClassName("deaths").length; y++) {
					document.getElementsByClassName("deaths")[y].innerHTML = placeholder[x].actuals.cumulativeDeaths;
				}
				for (y = 0; y < document.getElementsByClassName("bed-current-capacity").length; y++) {
					document.getElementsByClassName("bed-current-capacity")[y].innerHTML = placeholder[x].actuals.hospitalBeds.capacity;
				}
				for (y = 0; y < document.getElementsByClassName("bed-max-capacity").length; y++) {
					document.getElementsByClassName("bed-max-capacity")[y].innerHTML = placeholder[x].actuals.hospitalBeds.totalCapacity;
				}
			}
		}	
	}
	
	function stateSelectMobileTable() {
		
		let requestURL = 'https://api.covidtracking.com/v1/states/current.json'; 
		// API URL
			
		let request = new XMLHttpRequest(); 
		// XMLHttpRequest (XHR) object assigned to variable
			
		request.open('GET', requestURL); 
		// XMLHttpRequest.open() function, first argument is a method and second is a URL (string variable here)
			
		request.responseType = 'json'; 
		// "The response is a JavaScript object created by parsing the contents of received data as JSON."
			
		request.send(); 
		// Sends request to server     
			
		request.onload = function() { // Occurs after send function above
			var result = request.response;
			console.log(result);
				
			for (x = 0; x < result.length; x++) {
				if (document.getElementById("state-mobile-select").value == result[x].state) {
					document.getElementById("mobile-stats-positive").innerHTML = result[x].positive;
					document.getElementById("mobile-stats-recovered").innerHTML = result[x].recovered;
					document.getElementById("mobile-stats-deaths").innerHTML = result[x].death;
				}
			}
				
		}
		
	}
	
	countiesTable();



