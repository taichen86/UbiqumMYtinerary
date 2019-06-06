import React from 'react';

class SearchBox extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            searchInput :  "" // need this???
        }
    }

    handleChange = (e) => {
        console.log( e.target.value );
        this.setState({
            searchInput: e.target.value
        })
        this.props.onChange( e.target.value );
    }

    render(){

        return(
            <div>
                <input type="text" placeholder="Search.." id="filter"
                value={this.state.searchInput}
                onChange={this.handleChange}></input>
            </div>
        );

    }

}

export default SearchBox;