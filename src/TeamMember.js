import React from 'react'


class TeamMember extends React.Component {

    constructor( props ){
        super( props );
        this.state = { isVisible: true };
        this.toggleVisibility = this.toggleVisibility.bind( this );
    }

    toggleVisibility(){
        console.log( "clicked ");
        this.setState( state => ({
            isVisible : !state.isVisible
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleVisibility}>
                Toggle Visibility
                </button>
                <h5>Team Member's Name: {this.props.name}</h5>
                <img src={this.props.avatarURL} />
            </div>
        );
    }

}
export default TeamMember;