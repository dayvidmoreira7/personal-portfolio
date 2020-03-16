import React from 'react';
// import {
//   Col,
//   Row,
// } from 'antd';
import {
  SideBar,
} from '../../components';
import './styles.css';

const Home = () => {
  return (
    <div id="landing">
      <SideBar activeTab="inicio" className="test"/>
      <div className="landing-content">
       
      </div>
    </div>
  );
}

export default Home;