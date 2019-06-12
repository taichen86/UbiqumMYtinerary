
const express = require('express');
const itineraryModel = require('../models/Itinerary');

const router = express.Router();

router.get('/barcelona', (req, res) => {
    console.log( "find all itineraries for ...", req );
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

// router.get('/:city', (req, res) => {
//     console.log( "find all itineraries for BARCELONA..." );
//     itineraryModel.find( {}, function(err, itineraries){
//         console.log( "=== callback... " , itineraries );
//         if( err ){
//             console.log( "got error: " + err );
//         }
//         // console.log( "response set header" );
//         // res.setHeader( "Access-Control-Allow-Origin", "http://localhost:3000" );
//         // filter here 
//         let filteredItineraries = [];
//         itineraries.forEach( itinerary => {
//             if( itinerary.city == req.params.city ){
//                 filteredItineraries.push( itinerary );
//             }
//         });
//         res.json( filteredItineraries );
        
//      })
// //    res.send('show all itineraries!'); 
// });

module.exports = router;



