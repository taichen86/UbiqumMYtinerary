import React from 'react';
import {connect} from 'react-redux';
import CityCard from './CityCard';
import SearchBox from './SearchBox';
import { fetchAllCities } from './actions/cityActions';


class Cities extends React.Component {

    // constructor(props) 
    // {
    //     super(props);
    
    //     this.state = {
    //       data: [], 
    //       isFetching: true
         
    //     };
    // }

    componentDidMount() 
    {
        console.log( this.props );
        console.log( "did mount, call fetch all cities action")
        this.props.fetchAllCities();
    }

    filterCities = ( cityFilter ) => {
        console.log( "filter cities by ..." + cityFilter );

        let filteredCities = Array.from( this.props.cities ).filter( ( city ) => {
            return String( city.city ).toLowerCase().includes( cityFilter.toLowerCase() )
        } )
        console.log( "after filtering... " );
        console.log( filteredCities );

        
    }
    

    render()
    {
        console.log( "RENDER check props... " + this.props );
        console.log( this.props );
        const citiesToShow = this.props.cities.map( city => {
            return <CityCard city={city} ></CityCard>
        } );
        return (
            <div>
                ==== CITIES PAGE ===
                <h5>Find our current cities:</h5>
                <SearchBox onChange={this.filterCities}></SearchBox>
                {citiesToShow}
                {/* <h2>{this.state.isFetching}</h2>
                <p>{this.state.isFetching ? 'Fetching data...' : ''}</p>
                {!this.state.isFetching && citiesList} */}
            </div>
            
        );
    }

}

const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        cities: state.cities
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