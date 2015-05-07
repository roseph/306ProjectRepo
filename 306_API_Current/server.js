
//Declarations and dependancies
var express  = require('express');
var app      = express();
var http     = require('http');
var port     = process.env.PORT || 8001;

var server = http.createServer(app);

server.listen(8000,'127.0.0.1',function(){
 server.close(function(){
   server.listen(port,'134.126.67.231')
 })
})

var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/dbModule.js');

//Configs of middleware =======================================
//mongoose.connect(configDB.url); //connect to DB

//require('./config/passport')(passport); //pass passport for configuration

//Logs requests to console
app.use(morgan('dev'));

//Config of cookieParser
app.use(cookieParser());

//Configuration that allows usage of BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS Middleware
app.use(function(req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


//The middleware shows express where all the static files are to be delivered.
app.use(express.static('/home/checkout/Documents/306ProjectRepo/306_Front_End_Current'));

//Load Routes =================================================
require('./app/routes.js')(app); // Loads routes and passport


//Launch ======================================================

//The listener
//app.listen(port);
console.log('Magic happens on port ' + port);



