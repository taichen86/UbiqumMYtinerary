import React from 'react';

class Button extends React.Component {

    render(){
        return (
            <div>
                <input type="image" id="image" alt={this.props.altText}
                src={this.props.imgURL}></input>
            </div>
        );
    }

}

export default Button;