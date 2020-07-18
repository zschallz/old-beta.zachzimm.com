import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

type AboutProps = {
    title:        string,
    employer:     string, 
    location:     string, 
}

export default function About(props: AboutProps) {
  
    return (
        <Card>
            <Jumbotron>
            <h1>Hi!</h1>
            <hr/>
            <p>
                I'm Zach Zimmerman. I'm an {props.title} at {props.employer} in {props.location}.
            </p>
            <p>
                If you'd like to know more about my professional experience or see examples of my work, please check out my <a href='https://www.linkedin.com/in/zachnzimmerman/'>LinkedIn</a> and <a href="https://github.com/zschallz/">GitHub</a> profiles, or check out some of my projects above.
            </p>
            <p>
                Opinions, etc of course my own.
            </p>
            <p>
                <Button variant="primary">Contact me</Button>
            </p>
            </Jumbotron>
        </Card>
    );
  }
  
  About.propTypes = {
    sections: PropTypes.array,
    socialMedia: PropTypes.array,
  };