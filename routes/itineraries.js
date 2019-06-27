
const express = require('express');
const itineraryModel = require('../models/Itinerary');

const router = express.Router();
 

// TODO: only get the matching itineraries, not all then filter
router.get('/city/:city', (req, res) => {
    console.log( "find all itineraries for ...", req.params.city ); // TODO: match Barcelona??
    itineraryModel.find( { city: req.params.city }, function(err, itineraries){
        console.log( "callback... " , itineraries );
        if( err ){
            console.log( "got error: " + err );
        }
        // console.log( "response set header" );
        // res.setHeader( "Access-Control-Allow-Origin", "http://localhost:3000" );

        // TODO: filter in search
        // let filteredItineraries = itineraries.filter(itinerary => String(itinerary.city).toLowerCase() == req.params.city)
        // res.json( filteredItineraries );

        res.json( itineraries );
    })
//    res.send('show all itineraries!'); 
});



module.exports = router;



