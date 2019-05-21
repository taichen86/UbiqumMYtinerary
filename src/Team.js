import React from 'react';
import TeamMember from './TeamMember';

const MEMBERS = [{ name: "Marting Wright", avatarURL: "avatarMartin.png" },
                { name: "Sabrina Miller", avatarURL: "avatarSabrina.png"}];

function Team( ){
    return (
        <div>
            <h2>MYtinerary Project Team</h2>
            {MEMBERS.map( member => {
               return <TeamMember name={member.name} avatarURL={member.avatarURL}></TeamMember>;
            })};

        </div>
    );
}

export default Team;
