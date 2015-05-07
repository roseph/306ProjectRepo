function popRooms() {
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
        //console.log(dataset.results.length);
        console.log(dataset);

        for(var i=0; i < dataset.results.length; i++) {
          var list = document.getElementById("rooms");

          var option = document.createElement("option");
          var roomText = document.createTextNode(dataset.results[i].room_id);

          option.appendChild(roomText);
          list.appendChild(option);
        }
      }
  };
  
  xmlhttp.open("GET","http://134.126.67.231:8001/populate/room",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send();
}

function sendReservationInfo() {

  var room = getInput("rooms");
  var email = getInput("email-textbox");
  var jac = getInput("jac-textbox");
  var dtp2 = getInput("dtp_input2");
  var dtp3 = getInput("dtp_input3");
  var duration = getInput("duration");

  console.log(room);
  console.log(email);
  console.log(jac);
  console.log(dtp2);
  console.log(dtp3);
  console.log(duration);

  var parameter = "email="+email+"&jac="+jac+"&date="+dtp2+"&time="+dtp3+"&roomID="+room+"&duration="+duration;

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

      }
  };
  
  xmlhttp.open("POST","http://134.126.67.231:8001/reservation/create",true);
  //alert("Your reservation has been processed. Please check your email!");
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(parameter);

  window.alert("Your reservation is being processed please check your email");
}

function sendCancelationInfo() {

  var email = getInput("email-textbox");
  var jac = getInput("jac-textbox");
  var confirmationCode = getInput("confirmationcode-textbox");

  var parameter = "email="+email+"&jac="+jac+"&reservationCode="+confirmationCode;

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
        console.log("Your reservation has been canceled!");
      }
  };
  
  xmlhttp.open("POST","http://134.126.67.231:8001/reservation/cancel",true);
  //alert("Your reservation has been canceled!");
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(parameter);

  window.alert("Your cancellation is being processed please check your email");
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

        for(var i=0; i < 12; i++) {

            var svgRoom1 = document.getElementById("room"+dataset.results[i].Room_ID);
            var percentage = dataset.results[i].Cur_ppl/dataset.results[i].Max_ppl;

            if(percentage < 0.33) {
              svgRoom1.setAttribute("fill", "#00FF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else if(percentage >= 0.33 && percentage < 0.66) {
              svgRoom1.setAttribute("fill", "#FFFF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else {
              svgRoom1.setAttribute("fill", "#FF0000");
              svgRoom1.setAttribute("opacity", "0.5");
            }

            //i++;
          
        }

      }

    };

  xmlhttp.open("POST","http://134.126.67.231:8001/data/livemap",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send();
}

  function getLiveMapData2() {

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

        for(var i=12; i < 21; i++) {
         
            var svgRoom1 = document.getElementById("room"+dataset.results[i].Room_ID);            
            var percentage = dataset.results[i].Cur_ppl/dataset.results[i].Max_ppl;

            if(percentage < 0.33) {
              svgRoom1.setAttribute("fill", "#00FF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else if(percentage >= 0.33 && percentage < 0.66) {
              svgRoom1.setAttribute("fill", "#FFFF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else {
              svgRoom1.setAttribute("fill", "#FF0000");
              svgRoom1.setAttribute("opacity", "0.5");
            }
          
        }

      }
  };

  xmlhttp.open("POST","http://134.126.67.231:8001/data/livemap",true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send();
}

 function getLiveMapData3() {

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

        for(var i=21; i < 30; i++) {
         
            var svgRoom1 = document.getElementById("room"+dataset.results[i].Room_ID);            
            var percentage = dataset.results[i].Cur_ppl/dataset.results[i].Max_ppl;

            if(percentage < 0.33) {
              svgRoom1.setAttribute("fill", "#00FF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else if(percentage >= 0.33 && percentage < 0.66) {
              svgRoom1.setAttribute("fill", "#FFFF00");
              svgRoom1.setAttribute("opacity", "0.5");
            } else {
              svgRoom1.setAttribute("fill", "#FF0000");
              svgRoom1.setAttribute("opacity", "0.5");
            }
          
        }

      }

  };

  xmlhttp.open("POST","http://134.126.67.231:8001/data/livemap",true);
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

      var average = 0;

      console.log(dataset.results.length);


        for (var i = 0; i < dataset.results.length; i+=7){

          //console.log(i);

          var average = Math.ceil((parseInt(dataset.results[i].avg_ppl) + parseInt(dataset.results[(i + 1)].avg_ppl) 
          				+ parseInt(dataset.results[(i + 2)].avg_ppl)  + parseInt(dataset.results[(i + 3)].avg_ppl)  
          				+ parseInt(dataset.results[(i + 4)].avg_ppl)  + parseInt(dataset.results[(i + 5)].avg_ppl)  
          				+ parseInt(dataset.results[(i + 6)].avg_ppl))/ 7) 

      	  data.addRows([[parseInt(dataset.results[i].time), average]]);

        };

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
  //      console.log(response);
  //      console.log("in the if");
    // return response;
      }
  };
  
  xmlhttp.open("POST","http://134.126.67.231:8001/data/historical",true);
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