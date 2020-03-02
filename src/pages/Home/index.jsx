import React from 'react';
import {
  SideBar,
} from '../../components';
import './styles.css';

const Home = () => {
  return (
    <div id="landing">
      <SideBar activeTab="inicio" />
      <span>Inicio</span>
    </div>
  );
}

export default Home;