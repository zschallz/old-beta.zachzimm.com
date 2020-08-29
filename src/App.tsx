import React from 'react';
import './App.css';
import Header from './Header';
import {Section, SocialMedia} from './Header';
import About from './About';
import Contact from './Contact';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import AmbientTrustProject from './AmbientTrustProject';
import NetTrustProject from './NetTrustProject';
import DeweyProject from './DeweyProject';

const projectSections: Section[] = [
  { title: 'Ambient Trust', url: './ambientTrust' },
  { title: 'Net Trust', url: './netTrust' },
  { title: 'Dewey', url: './dewey' },
  { title: 'Fluency', url: './fluency' },
]; 

const navigationSections: Section[]  = [
  { title: 'About me', url: './' },
  { title: 'Projects', url: '#', subSections: projectSections },
  { title: 'Blog', url: './blog' },
  { title: 'Contact', url: './contact' },
];

const socialMedia: SocialMedia[] = [
  { altText: 'GitHub', url: 'https://github.com/zschallz', imageUrl: 'github.jpg' },
  { altText: 'LinkedIn', url: '#', imageUrl: '' },
  { altText: 'Twitter', url: 'https://twitter.com/zschallz', imageUrl: '' },
];

const aboutMe = {
  title: "Engineering Manager",
  employer: "The Economist",
  location: "Birmingham, UK",
}

function App() {
  return (
    <div>
      <Router>
        <Header sections={navigationSections} socialMedia={socialMedia}/>
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route path="/beta/contact">
                  <Contact/>
                </Route>
                <Route path="/beta/blog">
                  <Card body>Blog Testy</Card>
                </Route>
                <Route path="/beta/ambientTrust">
                  <AmbientTrustProject/>
                </Route>
                <Route path="/beta/netTrust">
                  <NetTrustProject/>
                </Route>
                <Route path="/beta/dewey">
                  <DeweyProject/>
                </Route>
                <Route path="/beta/">
                  <About {...aboutMe}/>
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
