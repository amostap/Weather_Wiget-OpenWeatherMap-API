import React, { Component, PropTypes } from 'react';
import { Col, Button } from 'react-bootstrap';

class View extends Component {
  constructor(props) {
    super(props);
    this.onDel = this.onDel.bind(this);
  }

  onDel() {
    this.props.onDel(this.props.data.name);
  }

  render() {
    return (
      <Col lg={3} md={3} sm={4} xs={6}>
        <h3>{this.props.data.name}</h3>
        <p>Current temp: {Math.floor(this.props.data.main.temp - 273)}°C</p>
        <p>Humidity: {this.props.data.main.humidity}%</p>
        <p>Pressure: {this.props.data.main.pressure} hpa</p>
        <p>WindSpeed: {this.props.data.wind.speed}m/s</p>
        <p>WindDeg: {this.props.data.wind.deg}°</p>
        <Button onClick={this.onDel}>Delete</Button>
      </Col>
    )
  }
}

export default View;
