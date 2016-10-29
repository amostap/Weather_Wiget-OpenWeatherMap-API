import React from 'react';
import { Grid } from 'react-bootstrap';
import localStorage from 'localStorage';
import List from '../List';

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

const json1 = {
  activeKey: 0,
};

function initLC() {
  localStorage.setItem('cities', JSON.stringify(json));
  return json;
}

function initLCActiveKey() {
  localStorage.setItem('activeKey', JSON.stringify(json1));
  return json;
}

let cities = JSON.parse(localStorage.getItem('cities')) || initLC();
let activeKey = JSON.parse(localStorage.getItem('activeKey')) || initLCActiveKey();

const App = () => (
  <Grid className="app">
    <List cities={cities} />
  </Grid>
);

export default App;
