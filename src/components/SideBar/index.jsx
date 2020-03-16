import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import {

// } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  RadarChartOutlined,
  CodeOutlined,
  MessageOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

import './styles.css'

const navOptions = [
  { name: 'Início', value: 'inicio', path: '/', icon: <HomeOutlined /> },
  { name: 'Sobre', value: 'sobre', path: '/about', icon: <UserOutlined /> },
  { name: 'Habilidades', value: 'habilidades', path: '/skills', icon: <RadarChartOutlined /> },
  { name: 'Trabalhos', value: 'trabalhos', path: '/works', icon: <CodeOutlined /> },
  { name: 'Contatos', value: 'contatos', path: '/contacts', icon: <MessageOutlined /> },
]

const SideBar = ({
  activeTab,
}) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(
    localStorage.getItem('menu') === '0' ? false : true
  );
  return (
    <div id="sidebar">
      <nav className={`${expanded && 'expanded'}`}>
        <ul>
          <div>
            {
              navOptions.map(({
                name,
                value,
                path,
                icon,
              }) => (
                <li
                  title={!expanded && name}
                  className={activeTab === value ? 'active' : ''}
                  onClick={() => history.push(path)}
                  key={value}
                >
                  {icon}
                  <span className="nav-label">{name}</span>
                </li>
              ))
            }
          </div>
          <div>
            <li
              className="collapse"
              onClick={() => {
                setExpanded(!expanded)
                localStorage.setItem('menu', expanded ? '0' : '1');
              }}
            >
              {expanded ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              <span className="nav-label">Menu</span>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;