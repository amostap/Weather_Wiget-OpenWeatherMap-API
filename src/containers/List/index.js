import React, { Component } from 'react';
import { Row, FormGroup, FormControl, Button, Tabs, Tab, Form } from 'react-bootstrap';
import localStorage from 'localStorage';
import Card from '../../containers/Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: '',
      cities: this.props.cities,
      activeKey: this.props.activeKey,
    };
    this.addCity = this.addCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(city) {
    const cities = this.state.cities;
    cities.splice(cities.indexOf(city), 1);
    localStorage.setItem('cities', cities.join());
    this.setState({
      cities,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cities = this.state.cities;
    cities.push(this.state.newCity);
    localStorage.setItem('cities', cities.join());
    this.setState({
      cities,
    });
  }

  handleSelect(key) {
    localStorage.setItem('key', key);
    this.setState({
      activeKey: key,
    });
  }

  addCity(event) {
    this.setState({
      newCity: event.target.value,
    });
  }

  render() {
    return (
      <Row>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="City"
              value={this.state.newCity}
              onChange={this.addCity}
            />
            <Button type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
        <Tabs activeKey={+this.state.activeKey} onSelect={this.handleSelect} id="tab">
          {
            this.state.cities.map((el, key) =>
              <Tab eventKey={key} key={key} title={el}>
                <Card cityName={el} key={this.key} onDel={this.handleDelete} />
              </Tab>
            )
          }
        </Tabs>
      </Row>
    );
  }
}

List.propTypes = {
  cities: React.PropTypes.array.isRequired,
  activeKey: React.PropTypes.string.isRequired,
};

export default List;
