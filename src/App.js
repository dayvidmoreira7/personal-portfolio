import React from 'react';
import Router from './router';
import './App.css';
import 'antd/dist/antd.css';

import { Copyright } from './components';

function App() {
  if(!localStorage.getItem('menu')) localStorage.setItem('menu', '0');

  return (
    <div className="App">
      <Router />
      <Copyright />
    </div>
  );
}

export default App;
