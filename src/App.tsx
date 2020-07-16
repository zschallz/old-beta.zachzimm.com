import React from 'react';
import 'fontsource-roboto';
import Header from './Header';
import Button from '@material-ui/core/Button';
import './App.css';

const siteTitle = 'Zach\'s Technical Notes';

const navigationSections = [
  { title: 'Home', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Contact', url: '#' },
];

const projectSections = [
  { title: 'Ambient Trust', url: '#' },
  { title: 'Net Trust', url: '#' },
  { title: 'Dewey', url: '#' },
  { title: 'Fluency', url: '#' },
];

function App() {
  return (
    <div>
      <Header title={siteTitle} mainSections={navigationSections} subSections={projectSections} />
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </div>
  );
}

export default App;
