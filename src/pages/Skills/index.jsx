import React from 'react';
import {
  SideBar,
} from '../../components';
// import {
//   Col,
//   Row,
//   Card,
// } from 'antd';
import './styles.css';

const Skills = () => {
  // const chartProps = {
  //   profissional: {
  //     options: {
  //       chart: {
  //         id: 'skills-chart',
  //       },
  //       xaxis: {
  //         categories: ['ReactJS', 'React-Native', 'NodeJS', 'Javascript', 'Python', 'HTML', 'CSS'],
  //       },
  //     },
  //     series: [
  //       {
  //         name: 'Dayvid Moreira',
  //         data: [65, 60, 55, 70, 20, 80, 65]
  //       }
  //     ],
  //   },
  //   personal: {
  //     options: {
  //       chart: {
  //         id: 'skills-chart',
  //       },
  //       xaxis: {
  //         categories: ['Extrovertido', 'Amigável', 'Interativo', 'Carismatico', 'Paciente', 'Colaborativo'],
  //       },
  //     },
  //     series: [
  //       {
  //         name: 'Dayvid Moreira',
  //         data: [90, 80, 90, 100, 70, 80]
  //       }
  //     ],
  //   }
  // };
  return (
    <div id="skills">
      <SideBar activeTab="habilidades" />
      <div className="skills-container">
        <span>Habilidades</span>
      </div>
    </div>
  );
}

export default Skills;