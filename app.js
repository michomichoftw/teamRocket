//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var pg = require('pg');
var app = express();

//client id and client secret here, taken from .env
dotenv.load();

//connect to database
var conString = process.env.DATABASE_CONNECTION_URL;

//Configures the Template engine
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat',
                  saveUninitialized: true,
                  resave: true}));

//set environment ports and start application
app.set('port', process.env.PORT || 3000);

//routes
app.get('/', function(req, res){
  res.render('home');
});

//Data by smoking gender
app.get('/delphidata', function (req, res) {
    // initialize connection pool 
    pg.connect(conString, function(err, client, done) {
      if(err) return console.log(err);
      
      //var query = 'SELECT * FROM cdph_smoking_prevalence_in_adults_1984_2013';
      var query = 'SELECT * FROM cdph_smoking_prevalence_in_high_school_2001_2012'; // UNION SELECT * FROM cdph_smoking_prevalence_in_high_school_by_race_2001_2012';
      client.query(query, function(err, result) {
        // return the client to the connection pool for other requests to reuse
        done();

        res.writeHead("200", {'content-type': 'application/json'});
        res.end(JSON.stringify(result.rows));
      });
    });
  });


//Data for Smoking ethn
app.get('/delphidata2', function (req, res) {
    // initialize connection pool 
    pg.connect(conString, function(err, client, done) {
      if(err) return console.log(err);
      
      //var query = 'SELECT * FROM cdph_smoking_prevalence_in_adults_1984_2013';
      var query = 'SELECT * FROM cdph_smoking_prevalence_in_high_school_by_race_ethn_2001_2012';
      client.query(query, function(err, result) {
        // return the client to the connection pool for other requests to reuse
        done();

        res.writeHead("200", {'content-type': 'application/json'});
        res.end(JSON.stringify(result.rows));
      });
    });
  });

//Data for Median Income
app.get('/delphidata3', function (req, res) {
    // initialize connection pool 
    pg.connect(conString, function(err, client, done) {
      if(err) return console.log(err);
      
      //var query = 'SELECT * FROM cdph_smoking_prevalence_in_adults_1984_2013';
      var query = 'SELECT * FROM hhsa_san_diego_demographics_median_income_2012_norm';
      client.query(query, function(err, result) {
        // return the client to the connection pool for other requests to reuse
        done();

        res.writeHead("200", {'content-type': 'application/json'});
        res.end(JSON.stringify(result.rows));
      });
    });
  });

//Data for population by location  
app.get('/delphidata4', function (req, res) {
    // initialize connection pool 
    pg.connect(conString, function(err, client, done) {
      if(err) return console.log(err);
      
      //var query = 'SELECT * FROM cdph_smoking_prevalence_in_adults_1984_2013';
      var query = 'SELECT * FROM hhsa_san_diego_demographics_county_popul_by_race_2012_norm';
      client.query(query, function(err, result) {
        // return the client to the connection pool for other requests to reuse
        done();

        res.writeHead("200", {'content-type': 'application/json'});
        res.end(JSON.stringify(result.rows));
      });
    });
  });


app.get('/index', function(req, res){res.render('index');
});

app.get('/index2', function(req, res){
  res.render('index2');
});

app.get('/quiz', function(req, res){res.render('quiz');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
