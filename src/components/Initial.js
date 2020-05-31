import React from 'react';
import { Row, Col, Avatar, Divider } from 'antd';
import { Perfil } from '../assets';

const Initial = () => {
  return (
    <div id="initial" className="content">
      <Row justify="center">
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', lineHeight: 0.9, marginTop: 20 }}>
          <div>
            <span style={{ WebkitTextStroke: '1px #009900', color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              bem-vindo!
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ WebkitTextStroke: '1px #009900', color: 'white', fontSize: 30, fontWeight: 'bold', marginRight: 6 }}>
              sou
            </span>
            <span style={{ color: '#009900', fontSize: 50, fontWeight: '700' }}>
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
        <Divider style={{ marginTop: 40 }} />
      </Row>
      <Row align="middle" justify="center">
        <Col style={{ marginTop: 20 }}>
          <Avatar src={Perfil} style={{ width: 330, height: 330 }} /> 
        </Col>
      </Row>
    </div>
  );
}

export default Initial;