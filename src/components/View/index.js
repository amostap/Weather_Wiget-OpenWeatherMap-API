import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

class View extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onDel = this.onDel.bind(this);
  // }
  // onDel() {
  //   this.props.onDel(this.props.data.name);
  // }

  render() {
    return (
      <Col lg={4} md={4} sm={4} xs={6}>
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
          <strong>{this.props.data.wind.speed}m/s, deg.: {this.props.data.wind.deg}°</strong>
        </big>
        </p>
        {/* <Button onClick={this.onDel}>Delete</Button> */}
      </Col>
    );
  }
}

View.propTypes = {
  data: PropTypes.object.isRequired,
};

export default View;
