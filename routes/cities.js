
const express = require('express');
const cityModel = require('../models/City');


const router = express.Router();

router.get('/', (req, res) => {
    console.log( "find all cities..." );
    cityModel.find( {}, function(err, cities){
        console.log( "callback... " );
        console.log( cities );
        if( err ){
            console.log( "got error: " + err );
        }
        // console.log( "response set header" );
        // res.setHeader( "Access-Control-Allow-Origin", "http://localhost:3000" );
        res.json( cities );
        
    } )
//    res.send('show all cities!'); 
});

module.exports = router;

// // home page route (http://localhost:8080)
// router.get('/', (req, res) => {
//     res.send('im the home page!');  
// });


