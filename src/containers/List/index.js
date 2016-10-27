import React, { Component } from 'react';
import { Row, FormGroup, FormControl, Button } from 'react-bootstrap';
import Card from '../../components/Card';

const json = {
  cityList: [{
    name: 'London,uk',
  }, {
    name: 'Kharkiv,ua',
  }, {
    name: 'Kiev,ua',
  },
  ],
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: json.cityList,
      city: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCity = this.addCity.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  addCity(event) {
    this.setState({
      city: event.target.value,
    });
  }

  render() {
    return (
      <Row>
        <form onSubmit={this.handleSubmit}>
          <FormGroup validationState={this.state.validationState}>
            <FormControl
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.addCity}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
        {
          this.state.cities.map((el, key) =>
            <Card key={key} cityName={el.name} />
         )
        }
      </Row>
    );
  }
}

export default List;
