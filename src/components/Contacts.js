import React from 'react';
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const Contacts = () => {
  return (
    <div id="contacts" className="content">
      <span style={{ textShadow: '0 0 4px #006600', color: 'white', fontSize: 30, fontWeight: 'bold' }}>contatos</span>
      <ul>
        <li onClick={() => window.open('https://linkedin.com/in/dayvid-montovanelli-009067177/', '_blank')}>
          <LinkedinOutlined />
        </li>
        <li onClick={() => window.open('https://facebook.com/dayvid.moreira', '_blank')}>
          <FacebookOutlined />
        </li>
        <li onClick={() => window.open('https://instagram.com/dayvidmoreira7', '_blank')}>
          <InstagramOutlined />
        </li>
        <li onClick={() => window.open('https://github.com/dayvidmoreira7', '_blank')}>
          <GithubOutlined />
        </li>
        <li>
          <WhatsAppOutlined />
        </li>
      </ul>
    </div>
  );
}

export default Contacts;