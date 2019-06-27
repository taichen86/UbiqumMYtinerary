import React from 'react';
import '../homepage.css';

const ActivityCard = ( {activity} ) => {

    console.log( 'ActivityCard props: ', activity.imgURL );
    return(     
    <div>
        <img src={activity.imgURL} alt={activity.name} />
        <div className="activity-name">{activity.name}</div>
    </div> );


}

export default ActivityCard;