import React from 'react';
import TeamMember from './TeamMember';


function Team(){
    return (
        <div>
            <h2>MYtinerary Project Team</h2>
            <TeamMember name="Martin Wright" avatarURL="avatarMarting.png"></TeamMember>
            <TeamMember name="Sabrina Miller" avatarURL="avatarSabrina.png"></TeamMember>
        </div>
    );
}

export default Team;