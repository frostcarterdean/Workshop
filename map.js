var statesArray = [ 
	'Alaska', 
	'Alabama',
	'Arkansas', 
	'AS', 
	'Arizona',
	'California', 
	'Colorado',
	'Connecticut',
	'DC',
	'Delaware',
	'Florida',
	'Georgia',
	'GU', 
	'Hawaii',
	'Iowa', 
	'Idaho', 
	'Illinois', 
	'Indiana', 
	'Kansas', 
	'Kentucky', 
	'Louisiana', 
	'Massachusetts', 
	'Maryland', 
	'Maine', 
	'Michigan', 
	'Minnesota', 
	'Missouri', 
	'MP', 
	'Mississippi', 
	'Montana', 
	'North Carolina', 
	'North Dakota', 
	'Nebraska', 
	'New Hampshire', 
	'New Jersey', 
	'New Mexico', 
	'Nevada',
	'New York', 
	'Ohio', 
	'Oklahoma', 
	'Oregon',
	'Pennsylvania', 
	'PR', 
	'Rhode Island', 
	'South Carolina', 
	'South Dakota', 
	'Tennessee', 
	'Texas', 
	'Utah', 
	'Virginia', 
	'VI', 
	'Vermont', 
	'Washington', 
	'Wisconsin',
	'West Virginia',
	'Wyoming',
];
var stateNewPos = new Array();  
var statePos = new Array();
var stateNewDeath = new Array();
var stateDeath = new Array();



function mapFunction() {
	/*---FETCH STATE DATA AND DISPLAY MAP-----------------------------------------------------------------*/
	var x = 0;
		// REFERENCE POINT
		let requestURL = 'https://api.covidtracking.com/v1/states/current.json'; // --- CHANGED THE API --- //
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

			// Load Map
			google.charts.load('current', {
			  'packages':['geochart'],
			  'mapsApiKey': 'AIzaSyD9coJ6yyDYIlJ1wq4RI62qBbd4zNNhing'
			});
			google.charts.setOnLoadCallback(drawVisualization);  
		}   

    var max;
    var min;

    for(w=0; w<=55; w++){
        if (max >= stateNewPos[w]){
         max = stateNewPos[w];
        }
        if (min <= stateNewPos[w]){
            min = stateNewPos[w];
        }
    }

	  function drawVisualization() { // --- CHANGED NUMBERS TO MATCH NEW API STRUCTURE --- //
		var data = google.visualization.arrayToDataTable([
			['State', 'New Positive Cases', 'Total Positive Cases'],
			['US-AK', stateNewPos[0], statePos[0]],
			['US-AL', stateNewPos[1], statePos[1]],
			['US-AR', stateNewPos[2], statePos[2]],
			['US-AS', stateNewPos[3], statePos[3]],
			['US-AZ', stateNewPos[4], statePos[4]],
			['US-CA', stateNewPos[5], statePos[5]],
			['US-CO', stateNewPos[6], statePos[6]],
			['US-CT', stateNewPos[7], statePos[7]],
			['US-DC', stateNewPos[8], statePos[8]],
			['US-DE', stateNewPos[9], statePos[9]],
			['US-FL', stateNewPos[10], statePos[10]],
			['US-GA', stateNewPos[11], statePos[11]],
			['US-GU', stateNewPos[12], statePos[12]],
			['US-HI', stateNewPos[13], statePos[13]],
			['US-IA', stateNewPos[14], statePos[14]],
			['US-ID', stateNewPos[15], statePos[15]],
			['US-IL', stateNewPos[16], statePos[16]],
			['US-IN', stateNewPos[17], statePos[17]],
			['US-KS', stateNewPos[18], statePos[18]],
			['US-KY', stateNewPos[19], statePos[19]],
			['US-LA', stateNewPos[20], statePos[20]],
			['US-MA', stateNewPos[21], statePos[21]],
			['US-MD', stateNewPos[22], statePos[22]],
			['US-ME', stateNewPos[23], statePos[23]],
			['US-MI', stateNewPos[24], statePos[24]],
			['US-MN', stateNewPos[25], statePos[25]],
			['US-MO', stateNewPos[26], statePos[26]],
			['US-MP', stateNewPos[27], statePos[27]],
			['US-MS', stateNewPos[28], statePos[28]],
			['US-MT', stateNewPos[29], statePos[29]],
			['US-NC', stateNewPos[30], statePos[30]],
			['US-ND', stateNewPos[31], statePos[31]],
			['US-NE', stateNewPos[32], statePos[32]],
			['US-NH', stateNewPos[33], statePos[33]],
			['US-NJ', stateNewPos[34], statePos[34]],
			['US-NM', stateNewPos[35], statePos[35]],
			['US-NV', stateNewPos[36], statePos[36]],
			['US-NY', stateNewPos[37], statePos[37]],
			['US-OH', stateNewPos[38], statePos[38]],
			['US-OK', stateNewPos[39], statePos[39]],
			['US-OR', stateNewPos[40], statePos[40]],
			['US-PA', stateNewPos[41], statePos[41]],
			['US-PR', stateNewPos[42], statePos[42]],
			['US-RI', stateNewPos[43], statePos[43]],
			['US-SC', stateNewPos[44], statePos[44]],
			['US-SD', stateNewPos[45], statePos[45]],
			['US-TN', stateNewPos[46], statePos[46]],
			['US-TX', stateNewPos[47], statePos[47]],
			['US-UT', stateNewPos[48], statePos[48]],
			['US-VA', stateNewPos[49], statePos[49]],
			['US-VI', stateNewPos[50], statePos[50]],
			['US-VT', stateNewPos[51], statePos[51]],
			['US-WA', stateNewPos[52], statePos[52]],
			['US-WI', stateNewPos[53], statePos[53]],
			['US-WV', stateNewPos[54], statePos[54]],
			['US-WY', stateNewPos[55], statePos[55]]
		  ]);

		var geochart = new google.visualization.GeoChart(
        document.getElementById('map'));
        
		var options = {
			width: 950, 
			region: "US", 
			resolution: "provinces",
			backgroundColor: '#284D6D',
			colorAxis: {minValue : min, maxValue : max, colors: ['#F9BC1F', '#C42924', '#561210']},
			
		};
        geochart.draw(data, options);
        google.visualization.events.trigger(geochart, 'regionClick', { region:'State' });
		google.visualization.events.addListener(geochart, 'select', selectHandler);
       
       function selectHandler(){
        var t = geochart.getSelection(['state'])[0].row;
		console.log(statesArray[t]);
		var dropdown = document.getElementById("state");
		dropdown.value = (statesArray[t]);
		countiesSelectOutput();

        }
    }
}

var errorTest = document.getElementById("google-visualization-errors-all-1");
		// var m = 1;
while (typeof(errorTest) != 'undefined' && errorTest != null) {
	console.log("Error, reloading table"); mapFunction();
}



function getStateInfo(){
    var state = document.getElementById("state").value;
    for (let j=0; j<=55; j++){
        if(state === statesArray[j]){
            newPositive = document.getElementById("mobile-state-newpos");
	        newPositive.innerHTML = stateNewPos[j];
            positive = document.getElementById("mobile-state-totalpos");
			positive.innerHTML = statePos[j];
			console.log(stateNewPos[j]);
			console.log(statePos[j]);
        }
    }

}
	  
