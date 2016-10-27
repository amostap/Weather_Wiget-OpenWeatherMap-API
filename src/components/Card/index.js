import React, { Component } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

const CARDSTYLES = {
  border: '1px solid black',
  borderRadius: '5px',
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityName: this.props.cityName,
      temp: '',
      humidity: '',
      data: '',
      pressure: '',
      wind: '',
      ID: 'f856f022efa1df9a0c367c7ccff0df1f',
    };
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${this.state.ID}`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          temp: Math.floor(response.data.main.temp - 273.15),
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          wind: response.data.wind,
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (this.state.loading ?
      <h3>loading...</h3> :
        <Col style={CARDSTYLES} lg={4} md={4} sm={4} xs={6}>
          <h3>{this.state.data.name}</h3>
          <p>Current temp: {this.state.temp}°C</p>
          <p>Humidity: {this.state.humidity}%</p>
          <p>Pressure: {this.state.pressure} hpa</p>
          <p>WindSpeed: {this.state.wind.speed}m/s</p>
          <p>WindDeg: {this.state.wind.deg}°</p>
        </Col>
    );
  }
}

export default Card;
