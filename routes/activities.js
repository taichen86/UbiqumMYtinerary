const express = require('express');
const activityModel = require( '../models/Activity' );

const router = express.Router();



router.get('/:itinerary', (req, res) => {
    console.log( "NODE find activities for...", req );
    activityModel.find( {}, function(err, activities){
        console.log( "callback... " );
        console.log( activities );
        if( err ){
            console.log( "got error: " + err );
        }
        res.json( activities );
        
    } )
});




module.exports = router;

