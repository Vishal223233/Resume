import React from 'react';
import { Layout, Typography } from 'antd';
import Info from './components/Info';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout>
      <Header style={{ textAlign: 'center', background: '#0c2c4b' }}>
        <Title style={{ color: 'white', margin: 0 }}>Vishal Namireddy</Title>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <Info />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2024 Vishal Namireddy | Contact: vishaljv3@gmail.com
      </Footer>
    </Layout>
  );
}

export default App;
