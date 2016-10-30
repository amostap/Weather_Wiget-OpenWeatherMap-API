import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

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
    axios.get(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${this.state.ID}`)
      .then((response) => {
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
      <Col lg={3} md={3} sm={4} xs={6}>
        <h3>{this.props.cityName}</h3>
        <h3>searching and loading...</h3>
      </Col> :
        <Col lg={3} md={3} sm={4} xs={6}>
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

Card.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default Card;
