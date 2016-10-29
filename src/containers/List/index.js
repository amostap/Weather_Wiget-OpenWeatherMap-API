import React, { Component } from 'react';
import { Row, FormGroup, FormControl, Button, Col, Tabs, Tab, Form } from 'react-bootstrap';
import localStorage from 'localStorage';
import Card from '../../components/Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: this.props.cities.cityList,
      city: '',
      activeKey: JSON.parse(localStorage.getItem('activeKey')).activeKey,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCity = this.addCity.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    let selected = e.id.split('-');

    let json = {
      activeKey: +selected[selected.length - 1],
    };

    localStorage.setItem('activeKey', JSON.stringify(json));
    this.setState({
      activeKey: selected[selected.length - 1],
    });
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
        <Col>
          <Form onSubmit={this.handleSubmit} inline>
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
          </Form>
          <Tabs defaultActiveKey={this.state.activeKey} animation id="tab">
            {
              this.state.cities.map((el, key) =>
                <Tab eventKey={key} key={key} title={el.name} onEntered={this.onSelect}>
                  <Card key={key} cityName={el.name} />
                </Tab>
              )
            }
          </Tabs>
        </Col>
      </Row>
    );
  }
}

List.propTypes = {
  cities: React.PropTypes.object.isRequired,
};

export default List;
