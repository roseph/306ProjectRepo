function sendReservationInfo() {

	var email = getInput("email-textbox");
	var jac = getInput("jac-textbox");
	var dtp2 = getInput("dtp_input2");
	var dtp3 = getInput("dtp_input3");

	//var parameter = "email="+email"&jac="+jac+"&date="+dtp2 "&time="+dtp3;
	//var url = "url?"+parameter; //Add url to API here

	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   		}
	};
	
	xmlhttp.open("POST","http://localhost:8080/reservation/create",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
}

function sendCancelationInfo() {

	var email = getInput("email-textbox");
	var jac = getInput("jac-textbox");
	var confirmationCode = getInput("confirmationcode-textbox");

	//var parameter = "email="+email"&jac="+jac+"&confirmationCode="+confirmationCode;
	//var url = "url?"+parameter; //add the url to API here

	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   		}
	};
	
	xmlhttp.open("POST","http://localhost:8080/reservation/cancel",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();

}

function getLiveMapData() {

  //var parameter = "email="+email"&jac="+jac+"&date="+dtp2 "&time="+dtp3;
  //var url = "url?"+parameter; //Add url to API here

  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else{
  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

  xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200){
        var dataset = JSON.parse(xmlhttp.responseText);

        if((dataset.results[0].Cur_ppl/dataset.results[0].Max_ppl) < 0.5){

          var svgRoom1 = document.getElementById("room1");

          svgRoom1.setAttribute("fill", "#00FF00");
	  svgRoom1.setAttribute("opacity", "0.5");

        }

        else {
	
	  var svgRoom1 = document.getElementById("room1");

          svgRoom1.setAttribute("fill", "#FF0000");
	  svgRoom1.setAttribute("opacity", "0.5");


        }
	
	if((dataset.results[1].Cur_ppl/dataset.results[1].Max_ppl) < 0.5){

          var svgRoom1 = document.getElementById("room2");

          svgRoom1.setAttribute("fill", "#00FF00");
	  svgRoom1.setAttribute("opacity", "0.5");

        }

        else {
	
	  var svgRoom1 = document.getElementById("room2");

          svgRoom1.setAttribute("fill", "#FF0000");
	  svgRoom1.setAttribute("opacity", "0.5");


        }

	if((dataset.results[2].Cur_ppl/dataset.results[2].Max_ppl) < 0.5){

          var svgRoom1 = document.getElementById("room3");

          svgRoom1.setAttribute("fill", "#00FF00");
	  svgRoom1.setAttribute("opacity", "0.5");

        }

        else {
	
	  var svgRoom1 = document.getElementById("room3");

          svgRoom1.setAttribute("fill", "#FF0000");
	  svgRoom1.setAttribute("opacity", "0.5");


        }

      }
  };
  
  xmlhttp.open("POST","http://localhost:8080/data/livemap",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send();
}

function getHistoricalData () {

	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    	
    	var dataset = JSON.parse(xmlhttp.responseText);
    	//console.log(parseInt(dataset.results[0].time));
    	//console.log(dataset.results[1]);

    	var data = new google.visualization.DataTable();
      data.addColumn('number', 'Time');
      data.addColumn('number', 'Number of People');

      var compiledData = [];

        for (var i = 0; i < dataset.results.length; i++){

          // compiledData[i] = parseInt(dataset.results[i].time_and_day) + ', ' + parseInt(dataset.results[i].avg_ppl);
          // console.log(compiledData[i]);

      data.addRows([[parseInt(dataset.results[i].time), parseInt(dataset.results[i].avg_ppl)]]);

          //data.insertRows(i, [parseInt(dataset.results[i].time_and_day), parseInt(dataset.results[i].avg_ppl)]);

        };

      //data.addRows(compiledData);



      // data.addRows([
      // [parseInt(dataset.results[0].time), parseInt(dataset.results[0].avg_ppl)],
      // [parseInt(dataset.results[1].time), parseInt(dataset.results[1].avg_ppl)],
      // [13,  8],
      // [14,  4],
      // [15,  30],
      // [16,  180]
      // ]);
      // data.addRows([
      //   [1,  37],
      //   [2,  30],
      //   [3,  25],
      //   [4,  11],
      //   [5,  11],
      //   [6,   8],
      //   [7,   7],
      //   [8,  12],
      //   [9,  16],
      //   [10, 12],
      //   [11,  5],
      //   [12,  6],
      //   [13,  4],
      //   [14,  4]
      // ]);



      var options = {
        chart: {
          title: 'Number of People in UREC',
        },
        height: 400,
        legend : { position:"none"}

        
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
		// var response = JSON.parse(xmlhttp.responseText);
  //   		console.log(response);
  //   		console.log("in the if");
		// return response;
   		}
	};
	
	xmlhttp.open("POST","http://localhost:8080/data/historical",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();
	

}

/**
 *When passed a name of the DOM Element it returns its value
 *  
 * @param {Object} name - the name of the dom element
 */
function getInput(name){
	var output ="";
	output = document.getElementById(name).value;
	
	if (output == null){
		output ="";
	}
	return output;
}
