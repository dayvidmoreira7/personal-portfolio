import React from 'react';
import {
  SideBar,
} from '../../components';
import './styles.css';

const About = () => {
  return (
    <div id="about">
      <SideBar activeTab="sobre" />
      <span>Sobre</span>
    </div>
  );
}

export default About;