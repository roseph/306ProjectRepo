var mysql = require('mysql');
var new_results = ''; 	
var connection =  mysql.createConnection({
  	host : '134.126.67.231',
  	user : 'root',
  	password: 'isat306sec1',
	database: 'mydb',
	port: 3306,
  }); 

connection.query('SELECT * FROM `admin`', function (error, results, fields) {

	if(error){
 		console.log(error);
 	};

 	for (var i = 0; i < results.length; i++){
		
		new_results = results[i].Email;

 	}

  });

//import nodemailer module
var nodemailer = require('nodemailer');

exports.mailScript = function (room_id, current_ppl, max_ppl){

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'aol',
    auth: {
        user: 'ur3cadm1n@aol.com',
        pass: 'isat306sec1'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'UREC Admin <ur3cadm1n@aol.com>', 
    to: new_results, 
    subject: 'UREC Alert: Maximum Room Capacity Reached',
    html: '<b>Hello Admin,<br><br>'
	+ 'The maximum capacity for the following room has been reached: </b><br>'
	+ '<ul><li>Room ID: ' + room_id + '</li>' + '<ul><li>Current Occupancy: ' + current_ppl + '</li>' + '<li>Max Occupancy: ' + max_ppl + '</li></ul></ul>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

}


exports.resMailScript = function (email, jac, confirmationCode, room_id, timestamp) {

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'aol',
    auth: {
        user: 'ur3cadm1n@aol.com',
        pass: 'isat306sec1'
    }
});


// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'UREC Admin <ur3cadm1n@aol.com>', 
    to: email, 
    subject: 'Your UREC Reservation Has Been Recieved!',
    html: '<b>Hello,<br><br>'
  + 'Your reservation has been successfully completed. Please look below for details: </b><br>'
  + '<ul><li>Room ID: ' + room_id + '</li>' + '<ul><li> JACard #: ' + jac + '</li>' + '<li>Confirmation Code: ' + confirmationCode + '</li>' + '<li>Date and Time: ' + timestamp + '</li></ul></ul>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

}

exports.cancelResMailScript = function (email, jac, confirmationCode) {

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'aol',
    auth: {
        user: 'ur3cadm1n@aol.com',
        pass: 'isat306sec1'
    }
});


// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'UREC Admin <ur3cadm1n@aol.com>', 
    to: email, 
    subject: 'Your UREC Reservation Has Been Recieved!',
    html: '<b>Hello,<br><br>'
  + 'Your reservation has been successfully cancelled. Please look below for details: </b><br>'
  + '<ul><li> JACard #: ' + jac + '</li>' + '<li>Confirmation Code: ' + confirmationCode + '</li></ul>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

}

