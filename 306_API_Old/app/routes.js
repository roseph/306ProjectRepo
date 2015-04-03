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

	//CORS Middleware
	app.use(function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
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


	//Create resevations route
	app.post('/reservation/create', function(req, res) {

	var email = req.body.email;
	var jac = req.body.jac;
	var date = req.body.date;
	var time = req.body.time;



	});

	//Cancel resevations route
	app.post('/reservation/cancel', function(req, res) {


	});


	//Historical Data route
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


//Put on a normal timer, but this .25 is for demo purposes only!!!!!!!!

//This is the timer that will run our room checker function at a set interval
var minutes = 15, the_interval = minutes * 60 * 1000;
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

 			mail.mailScript(results[i].Room_ID, results[i].Cur_ppl);


 		}

 	}

  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
	});


}
}
