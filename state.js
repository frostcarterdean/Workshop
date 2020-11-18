    
function getStateInfo(){
    var stateNewPos = new Array();  
    var statePos = new Array();
    var stateNewDeath = new Array();
    var stateDeath = new Array();
    
    var x = 0;
		// REFERENCE POINT
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
			
		while (x <= 55) { 
			var posInc = result[x]['positiveIncrease']; 
			var pos = result[x]['positive'];
			var deathInc = result[x]['deathIncrease'];
			var death = result[x]['death'];
			stateNewPos.push(Number(posInc));
			statePos.push(Number(pos));
			stateNewDeath.push(Number(deathInc));
			stateDeath.push(Number(death));
			x++; 
        }
    }

    statePos = document.getElementById("usaNewPos");
	usaNewPos.innerHTML = result[0]['positiveIncrease'];

	usaPos = document.getElementById("usaPos");
	usaPos.innerHTML = result[0]['positive'];

	usaRec = document.getElementById("usaRec");
	usaRec.innerHTML = result[0]['recovered'];

	usaNewDeath = document.getElementById("usaNewDeath");
	usaNewDeath.innerHTML = result[0]['deathIncrease'];

	usaDeath = document.getElementById("usaDeath");
	usaDeath.innerHTML = result[0]['death'];




}