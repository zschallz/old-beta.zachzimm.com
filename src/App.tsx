import React from 'react';
import './App.css';
import Header from './Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const projectSections = [
  { title: 'Ambient Trust', url: './ambientTrust' },
  { title: 'Net Trust', url: './netTrust' },
  { title: 'Dewey', url: './dewey' },
  { title: 'Fluency', url: './fluency' },
]; 

const navigationSections = [
  { title: 'Home', url: './' },
  { title: 'Projects', url: '#', subSections: projectSections },
  { title: 'Blog', url: './blog' },
  { title: 'Contact', url: './contact' },
];

const socialMedia = [
  { altText: 'GitHub', url: 'https://github.com/zschallz', imageUrl: 'github.jpg' },
  { altText: 'LinkedIn', url: '#', imageUrl: '' },
  { altText: 'Twitter', url: 'https://twitter.com/zschallz', imageUrl: '' },
];

function App() {
  return (
    <div>
      <Header sections={navigationSections} socialMedia={socialMedia}/>
      <Container fluid>
        <Row>
          <Col>
            <Card body>Testy</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
