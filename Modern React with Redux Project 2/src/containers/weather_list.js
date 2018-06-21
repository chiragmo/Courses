import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Charts from '../components/chart';
import Maps from '../components/maps';

class WeatherList extends Component {

  renderWeather(cityData) {
  	const name = cityData.city.name;
  	const temp = cityData.list.map(weather=>weather.main.temp);
 	const { lon, lat } = cityData.city.coord;

  	return (
  		<tr key={name}>
  		<td>{cityData.city.name}</td>
  		<td>
        <Charts temperature={temp}/>
  		</td>
  		<td> <Maps lat={cityData.city.lat} lon={cityData.city.lon} /></td>
  		</tr>
  		);
   }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>	
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect (mapStateToProps) (WeatherList);