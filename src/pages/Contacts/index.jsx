import React from 'react';
import {
  SideBar,
} from '../../components';
import './styles.css';

const Contacts = () => {
  return (
    <div id="contacts">
      <SideBar activeTab="contatos" />
      <span>Contatos</span>
    </div>
  );
}

export default Contacts;