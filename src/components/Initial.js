import React from 'react';
import { Row, Col, Avatar, Divider } from 'antd';
import { Perfil } from '../assets';

const Initial = () => {
  return (
    <div id="initial" className="content">
      <Row justify="center">
        <Col span={24} className="title" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', lineHeight: 0.9, marginTop: 20 }}>
          <div>
            <span style={{ textShadow: '0 0 4px #006600', color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              bem-vindo!
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ textShadow: '0 0 4px #006600', color: 'white', fontSize: 30, fontWeight: 'bold', marginRight: 6 }}>
              sou
            </span>
            <span style={{ color: '#006600', fontSize: 50, fontWeight: '700', textShadow: '2px 1px 6px #00000088' }}>
              DAYVID MONTOVANELLI MOREIRA
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ lineHeight: 1, display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: 16, marginTop: 20, }}>
          <span style={{ textAlign: 'right' }}>
            Desenvolvedor Full Stack com 4 anos de experiência no mercado trabalhando com
            <br />
            tecnologias como Javascript, React-Native, ReactJS, NodeJS, Python
          </span>
        </Col>
        <Divider style={{ marginTop: 30 }} />
      </Row>
      <Row align="middle" justify="center">
        <Col style={{ marginTop: 10 }}>
          <Avatar src={Perfil} style={{ width: 330, height: 330 }} /> 
        </Col>
      </Row>
    </div>
  );
}

export default Initial;