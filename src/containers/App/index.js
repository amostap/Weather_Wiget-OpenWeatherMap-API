import React from 'react';
import { Grid } from 'react-bootstrap';
import localStorage from 'localStorage';
import List from '../List';
import Footer from '../../components/Footer';

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
    <Footer />
  </Grid>
);

export default App;
