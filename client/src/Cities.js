import React from 'react';
import CityCard from './CityCard';

class Cities extends React.Component {

    constructor(props) 
    {
        super(props);
    
        this.state = {
          data: [],
          isFetching: true
         
        };
    }

    componentDidMount() 
    {
        fetch( 'http://localhost:8080/cities' )
          .then( response => response.json() )
          .then( data => { 
              console.log( "got DATA: " + data );
                data.map( item => {
                    console.log( item );
                    
                });
                this.setState({ data });
                this.setState({ isFetching: false });
            } );
    }
    

    render()
    {
        const citiesLIst = this.state.data.map( city => {
            return <CityCard city={city.city} country={city.country}></CityCard>
        } );
        return (
            <div>
                CITIES PAGE
                <h2>{this.state.isFetching}</h2>
                <p>{this.state.isFetching ? 'Fetching data...' : ''}</p>
                {!this.state.isFetching && citiesLIst}
            </div>
            
        );
    }

}

export default Cities;