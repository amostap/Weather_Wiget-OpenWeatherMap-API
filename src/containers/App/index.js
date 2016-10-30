import React from 'react';
import { Grid } from 'react-bootstrap';
import localStorage from 'localStorage';
import List from '../List';

const arr = ['London', 'Kharkiv', 'Kiev'];

const json1 = {
  activeKey: 0,
};

function initLC(array) {
  localStorage.setItem('cities', array.join());
  console.dir(array);
  return array;
}

function initLCActiveKey() {
  localStorage.setItem('activeKey', JSON.stringify(json1));
  return json1;
}

let cities = localStorage.getItem('cities') ? localStorage.getItem('cities').split(',') : initLC(arr);
let activeKey = JSON.parse(localStorage.getItem('activeKey')) || initLCActiveKey();

const App = () => (
  <Grid className="app">
    <List cities={cities} activeKey={activeKey} />
  </Grid>
);

export default App;
