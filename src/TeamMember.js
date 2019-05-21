import React from 'react'


function TeamMember( props ){
    return(
        <div>
            <h5>Team Member's Name: {props.name}</h5>
            <img src={props.avatarURL} />
        </div>
    );
}
export default TeamMember;