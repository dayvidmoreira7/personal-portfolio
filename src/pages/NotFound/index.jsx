import React from 'react';
import { SideBar } from './../../components';
import './styles.css';

const Landing = () => {
  return (
    <div id="notfound">
      <SideBar />
      <div className="notfound-container">
        <p>
          A página que você está procurando
          <br/>
          não existe!
          <br />
          <span className="sub">
            Navegue pelas páginas utilizando o menu lateral
          </span>
        </p>
      </div>
    </div>
  );
}

export default Landing;