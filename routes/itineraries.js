
const express = require('express');
const itineraryModel = require('../models/Itinerary');



const router = express.Router();

router.get('/', (req, res) => {
    console.log( "find all itineraries..." );
    itineraryModel.find( {}, function(err, itineraries){
        console.log( "callback... " , itineraries );
        if( err ){
            console.log( "got error: " + err );
        }
        // console.log( "response set header" );
        // res.setHeader( "Access-Control-Allow-Origin", "http://localhost:3000" );
        res.json( itineraries );
        
    })
//    res.send('show all itineraries!'); 
});

module.exports = router;



