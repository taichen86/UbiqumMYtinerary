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
        let content;

        if( this.state.isVisible ) {
            content = <div><h5>Team Member's Name: {this.props.name}</h5>
            <img src={this.props.avatarURL} /></div>;
        }
        return(
           

            <div>
                <button onClick={this.toggleVisibility}>
                Toggle Visibility
                </button>
                { content }
                 
                
            </div>
          
        );
    }

}
export default TeamMember;