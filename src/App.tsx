import React from 'react';
import './App.css';
import Header from './Header';

const siteTitle = 'Zachary Zimmerman';

const projectSections = [
  { title: 'Ambient Trust', url: '#' },
  { title: 'Net Trust', url: '#' },
  { title: 'Dewey', url: '#' },
  { title: 'Fluency', url: '#' },
];

const navigationSections = [
  { title: 'Home', url: '#' },
  { title: 'Projects', url: '#', subSections: projectSections },
  { title: 'Blog', url: '#' },
  { title: 'Contact', url: '#' },
];

const socialMedia = [
  { altText: 'GitHub', url: 'https://github.com/zschallz', imageUrl: 'github.jpg' },
  { altText: 'LinkedIn', url: '#', imageUrl: '' },
  { altText: 'Twitter', url: 'https://twitter.com/zschallz', imageUrl: '' },
];

function App() {
  return (
    <Header mainSections={navigationSections} title={siteTitle} socialMedia={socialMedia}/>
  );
}

export default App;
