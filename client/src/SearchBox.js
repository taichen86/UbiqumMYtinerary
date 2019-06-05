import React from 'react';

class SearchBox extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            cityFilter :  ""
        }
    }

    handleChange = (e) => {
        console.log( e.target.value );
        this.setState({
            cityFilter: e.target.value
        })
        this.props.onChange( e.target.value );
    }

    render(){


        return(
            <div>
                <input type="text" placeholder="Search.." id="filter"
                value={this.state.cityFilter}
                onChange={this.handleChange}></input>
            </div>
        );

    }

}

export default SearchBox;