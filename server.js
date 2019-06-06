// BASE SETUP
// ==============================================

const express = require('express');
const app     = express();
const port    = process.env.PORT || 8080;

const cors = require( 'cors' );

const citiesRoute = require( './routes/cities' );
const initerariesRoute = require( './routes/itineraries' );

const mongoose = require('mongoose');
mongoose.connect( 'mongodb+srv://ubiqum-victoria:ubiqum2019@cluster0-dbuta.mongodb.net/MYtineraries?retryWrites=true', {useNewUrlParser: true});

const connection = mongoose.connection;
connection.on( 'connected', function(){
    console.log( 'connected to db' );
});
connection.on( 'disconnected', function(){
    console.log( 'disconnected from db' );
});
connection.on( 'error', function(error){
    console.log( 'db error: ', error );
});


app.use( cors() );
// ROUTES
// ==============================================

app.use( '/cities', citiesRoute );
app.use( '/itineraries', initerariesRoute );
// app.use('/', router);


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);

