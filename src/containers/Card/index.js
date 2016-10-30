import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import View from '../../components/View';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityName: this.props.cityName,
      data: '',
      ID: 'f856f022efa1df9a0c367c7ccff0df1f',
    };
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&APPID=${this.state.ID}`)
      .then((response) => {
        this.setState({
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
      </Col> : <View data={this.state.data} onDel={this.props.onDel} />
    );
  }
}

Card.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default Card;
