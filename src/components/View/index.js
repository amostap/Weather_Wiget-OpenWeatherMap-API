import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

class View extends Component {

  shouldComponentUpdate(newProps) {
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Col lg={6} md={6} sm={12} xs={12}>
        <h3>{this.props.data.name} - {this.props.data.weather[0].description}
        </h3>
        <p>Current temp.:<big>
          <strong>{Math.floor(this.props.data.main.temp - 273)}°C</strong>
        </big>
        </p>
        <p>Clouds: <big><strong>{this.props.data.clouds.all}%</strong></big></p>
        <p>Humidity: <big><strong>{this.props.data.main.humidity}%</strong></big></p>
        <p>Pressure: <big><strong>{this.props.data.main.pressure} hpa</strong></big></p>
        <p>Wind speed: <big>
          <strong>
            {this.props.data.wind.speed}m/s, deg: {Math.floor(this.props.data.wind.deg)}°
          </strong>
        </big>
        </p>
      </Col>
    );
  }
}

View.propTypes = {
  data: PropTypes.object.isRequired,
};

export default View;
