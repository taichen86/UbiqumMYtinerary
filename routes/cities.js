
const express = require('express');
const cityModel = require('../models/City');


const router = express.Router();


router.get('/', (req, res) => {
    console.log( "find ALL cities for req...", req );
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
});




module.exports = router;


