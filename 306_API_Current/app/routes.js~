//Load the user model
var User = require('../app/Models/users.js');
var Textbook = require('../app/Models/textbooks.js');
var Course = require('../app/Models/courses.js');
var sessions = require("client-sessions");
var mysql = require('mysql');

var mail = require('../app/mail.js');

module.exports = function(app) {
  
//mysql setup

var connection =  mysql.createConnection({
  	host : '134.126.67.231',
  	user : 'root',
  	password: 'isat306sec1',
	database: 'mydb',
	port: 3306,
  }); 

//Hopefully we won't need these.
	// //Login Route
	// app.post('/login', function(req, res, next) {


	// });

	// //Sign-Up Route
	// app.post('/signup', function(req, res, next) {

	// });
	
	// //logout
	// app.post('/logout', function(req, res) {

	// });

	app.get('/populate/room', function(req, res) {
		var query = "SELECT room_id FROM room;";

		connection.query(query, function (error,results, fields) {

			if(error){
 				res.send(error);
 			} else {

 				res.json({ "results" : results });

			}
		});
	});

	//Create resevations route
	app.post('/reservation/create', function(req, res) {

	var email = req.body.email;
	var roomID = req.body.roomID;
	var jac = req.body.jac;
	var date = req.body.date;
	var time = req.body.time;
	var reservationCode =  Math.floor((Math.random() * 100000) + 1);
	var datetime = date + " " + time;
	var duration = req.body.duration;
	var storeData = true;
	datetimeCheck = new Date(datetime);
	
	date = "'" + date + "'";
	time = "'" + time + "'";
	datetime = "'" + datetime + "'";
	duration = "'" + duration + "'";

	//var post = {jac,time,reservationCode,date,1};

	console.log(datetimeCheck);

	var endTime = new Date(datetimeCheck);

	if(duration == 1){
		endTime.setHours(endTime.getHours() + 1);
		console.log(endTime);
	}
	else {
		endTime.setHours(endTime.getHours() + 0.5);
		console.log(endTime);

	}

	var checkQuery = "SELECT DateTime, Duration FROM mydb.reservations WHERE Room_ID =" + roomID + ";"

	connection.query(checkQuery, function (error, results, fields) {
		if(error){
			res.send(error);
		}


		for(var i = 0; i < results.length; i++){

		 	if (timeOverlapChecker(datetimeCheck, results[i].DateTime, results[i].Duration)) {
		 		storeData = false
		 	}

		 }

		
		 	if (storeData) {
				//var query = 'INSERT INTO (`User_ID`,`Time`,`Reservation code`,`Date`,`Duration`) `reservations` VALUES (' + jac + ',' + time + ',' + reservationCode + ',' + date + ',' + 1 + ');';
				var query = "INSERT INTO `mydb`.`reservations`(`Room_ID`,`DateTime`,`User_ID`,`Time`,`Reservation code`,`Date`,`Duration`)" +
							"VALUES(" + roomID + "," + datetime + "," + jac + "," + time + "," + reservationCode + "," + date + "," + duration + ");";
				console.log(query);


				connection.query(query, function (error, results, fields) {
			 	if(error){
			 		res.send(error);
			 	}

				else {

				res.send("Your request is being processed. Please check your email!");

			 	mail.resMailScript(email, jac, reservationCode, roomID, datetime);
			 	

				}
			  // error will be an Error if one occurred during the query
			  // results will contain the results of the query
			  // fields will contain information about the returned results fields (if any)
				});
			}
			else {
				res.send("We are sorry it appears your reservation conflicts with another one");
				mail.resMailScript(email, jac, reservationCode, roomID, "ERROR! Time conflict please try another.");
			}

	});
});

	//Cancel resevations route
	app.post('/reservation/cancel', function(req, res) {
	var reservationCode = req.body.reservationCode;
	var jac = req.body.jac;
	var email = req.body.email;


	var query = "DELETE FROM `reservations` WHERE `Reservation code` = " + reservationCode + " AND `User_ID` = " + jac + ";";
	console.log(query);
	
	connection.query(query, function (error, results, fields) {
 	if(error){
 		res.send(error);
 	};


 	mail.cancelResMailScript(email, jac, reservationCode);
 	res.json({ "results" : results });
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
	});


	});

	//Live Map Data route
	app.post('/data/livemap', function(req, res) {
 	
 	connection.query('SELECT * FROM `room`', function (error, results, fields) {
 	if(error){
 		res.send(error);
 	};

 	res.json({ "results" : results });
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
	});
});

app.post('/data/historical', function(req, res) {
 	
 	connection.query('SELECT * FROM `historical_data`', function (error, results, fields) {
 	if(error){
 		res.send(error);
 	};

 	res.json({ "results" : results });
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
	});
});

app.get('/', function(req, res) {

	response.sendFile('./index.html');


});


//Put on a normal timer, but this .25 is for demo purposes only!!!!!!!!

//This is the timer that will run our room checker function at a set interval
var minutes = 0.25, the_interval = minutes * 60 * 1000;
	setInterval(function() {
  	console.log("15 minute occupancy check executed");
  	roomCapacityCheck();
	}, the_interval);

//Checks the capactity of the rooms
function roomCapacityCheck() {

 	connection.query('SELECT * FROM `room`', function (error, results, fields) {
 	if(error){
 		console.log(error);
 	};

 	for (var i = 0; i < results.length; i++){

 		if(results[i].Cur_ppl > results[i].Max_ppl){

 			mail.mailScript(results[i].Room_ID, results[i].Cur_ppl, results[i].Max_ppl);


 		}

 	}

  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
	});


}
}

function timeOverlapChecker(incomingDateTime, dbDateTimeStart, dbDuration, incomingDuration) {

	if(dbDuration == 1){
		dbDuration = 1;
	}
	else {
		dbDuration = 0.5;
	}

	var dbDateTimeStart = new Date(dbDateTimeStart);
	var dbDateTimeEnd = new Date(dbDateTimeStart.setHours(dbDateTimeStart.getHours() + dbDuration));
	var output = false;

	if (incomingDuration == 1){

		if (Math.abs((incomingDateTime - dbDateTimeStart)) < 3600000) {

			output = true;
		}

		else if (Math.abs((incomingDateTime - dbDateTimeEnd)) < 3600000) {

			output = true;
		}
	}

	else {
		
		if (Math.abs((incomingDateTime - dbDateTimeStart)) < 1800000) {

			output = true;
		}

		else if (Math.abs((incomingDateTime - dbDateTimeEnd)) < 1800000) {

			output = true;
		}


	}

	return output;



 }
