import React from 'react';
import {connect} from 'react-redux';
import CityCard from './CityCard';
import SearchBox from '../SearchBox';
import { fetchAllCities } from '../actions/cityActions';

import MenuButton from '../common/MenuButton';
import { loginMenu, mainMenu } from '../common/MenuButton';



class Cities extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    componentDidMount(){
        console.log( this.props );
        console.log( "did mount, call fetch all cities action")
        this.props.fetchAllCities();
    }

    updateSearchInput = ( input ) => {
        this.setState({
            searchInput: input
        })
    }
    

    render()
    {
        console.log( "RENDER check props... ", this.props );
        const filteredCities = Array.from( this.props.cities ).filter( city => {
            return String( city.city ).toLowerCase().includes( this.state.searchInput.toLowerCase() )
        } );
        console.log( "filtered cities", filteredCities );

        const filteredCityCards = filteredCities.map( city => {
            return <CityCard city={city} ></CityCard>
        });
        console.log( "filtered city cards", filteredCityCards );

        return (
            <div>
                <div id="header-bar">
                    <MenuButton menuItemWords={loginMenu.items} imgURL={loginMenu.url} ></MenuButton>
                    <MenuButton menuItemWords={mainMenu.items} imgURL={mainMenu.url} ></MenuButton>
                </div>

                <h5>Find our current cities:</h5>
                <SearchBox onChange={this.updateSearchInput}></SearchBox>
                <label>{this.props.isLoading ? 'Fetching data...' : ''}</label>
                {filteredCityCards}
            </div>
        );
    }

}

const mapStateToProps = ( state ) => {
    console.log( "updated state" , state );
    return {
        cities: state.citiesReducer.cities,
        isLoading: state.citiesReducer.isLoading
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