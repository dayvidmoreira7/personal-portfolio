import React from 'react';
import {
  Col,
  Row,
} from 'antd';
import {
  SideBar,
} from '../../components';
import './styles.css';

const Home = () => {
  return (
    <div id="landing">
      <SideBar activeTab="inicio" className="test"/>
      <div className="landing-content">
        <div className="content">
          <Row>
            <Col md={6} xs={12}>
              <div className="item">

              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="item">
                
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="item">
                
              </div>
            </Col>
            <Col md={6} xs={24}>
              <div className="item">
                
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="item">
                
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="item">
                
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;