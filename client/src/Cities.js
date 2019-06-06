import React from 'react';
import {connect} from 'react-redux';
import CityCard from './CityCard';
import SearchBox from './SearchBox';
import { fetchAllCities } from './actions/cityActions';


class Cities extends React.Component {

    constructor(props) 
    {
        super(props);
    
        this.state = {
          citiesToShow: []
        };
    }

    componentDidMount() 
    {
        console.log( this.props );
        console.log( "did mount, call fetch all cities action")
        this.props.fetchAllCities();
    }

    filterCities = ( searchInput ) => {
        console.log( "filter cities by ..." + searchInput );
        this.state.citiesToShow = Array.from( this.props.cities )
                            .filter( ( city ) => {
                            return String( city.city ).toLowerCase()
                            .includes( searchInput.toLowerCase() )
                        })
        console.log( "after filtering... ", this.state.citiesToShow );
        
    }
    

    render()
    {
        console.log( "RENDER check props... " + this.props );
        console.log( this.props );
        this.state.citiesToShow = this.props.cities.map( city => {
            return <CityCard city={city} ></CityCard>
        } );
        return (
            <div>
                ==== CITIES PAGE ===
                <h5>Find our current cities:</h5>
                <SearchBox onChange={this.filterCities}></SearchBox>
                <label>{this.props.isLoading ? 'Fetching data...' : ''}</label>
                {this.state.citiesToShow}

            </div>
            
        );
    }

}

const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        cities: state.cities,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchAllCities : () => dispatch( fetchAllCities() )

        // addCity: (city) => {
        //     dispatch({
        //         type: "ADD_CITY",
        //         cityToAdd: city
        //     })
        // },
        // getAllCities: () => {
        //     dispatch({
        //         type: "GET_ALL_CITIES",
        //         url: 'http://localhost:8080/cities'
        //     })
        // }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Cities )