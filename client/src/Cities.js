import React from 'react';
import {connect} from 'react-redux';
import CityCard from './CityCard';


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
        fetch( 'http://localhost:8080/cities' )
          .then( response => response.json() )
          .then( data => { 
              console.log( "got DATA: " + data );
                data.map( item => {
                    console.log( item );
                    console.log( "add city to dispatch..." );
                    this.props.addCity( item );
                    
                });
                this.setState({ data });
                this.setState({ isFetching: false });
            } );
    }
    

    render()
    {
        console.log( "check props... " + this.props );
        console.log( this.props );
        const citiesList = this.props.cities.map( city => {
            return <CityCard city={city} ></CityCard>
        } );
        return (
            <div>
                CITIES PAGE
                {citiesList}
                {/* <h2>{this.state.isFetching}</h2>
                <p>{this.state.isFetching ? 'Fetching data...' : ''}</p>
                {!this.state.isFetching && citiesList} */}
            </div>
            
        );
    }

}

const mapStateToProps = ( state ) => {
    return {
        cities: state.cities
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addCity: (city) => {
            dispatch({
                type: "ADD_CITY",
                cityToAdd: city
            })
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Cities )