/*
var app = require('express')();

var app = connect()
	.use(connect.static('public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000);
*/

var express = require("express");


var app = express();


app.get('/', function(req , res){
	//res.render('./index.html');

	 res.send('<h1>Hello heroku</h1>');
});


app.get('/about', function (req, res) {
	res.render('./about.html');
})
;

app.get('/user/me', function (req, res) {
	res.render('./contactUs.html');
});



app.set('views', __dirname + '/');

app.engine('html', require('ejs').renderFile);

app.use('/client', express.static(__dirname + '/client'));

app.use('/content', express.static(__dirname + '/client/content'));


app.listen(80);

console.log('the app is listening on 1024 port');


