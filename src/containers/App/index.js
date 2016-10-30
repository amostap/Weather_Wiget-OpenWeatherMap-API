import React from 'react';
import { Grid } from 'react-bootstrap';
import localStorage from 'localStorage';
import List from '../List';

const arr = ['New York', 'Kiev', 'Kharkiv'];

function initLC(array) {
  localStorage.setItem('cities', array.join());
  return array;
}

function initLCActiveKey(num) {
  localStorage.setItem('key', num);
  return num;
}

const cities = localStorage.getItem('cities') ?
  localStorage.getItem('cities').split(',') :
  initLC(arr);

const key = localStorage.getItem('key') ?
  localStorage.getItem('key') :
  initLCActiveKey(0);

const App = () => (
  <Grid className="app">
    <List cities={cities} activeKey={key} />
  </Grid>
);

export default App;
