import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'


export default function Contact() {
  
    return (
        <Card>
            <h1>Contact me</h1>
            <hr/>
            <p>Want to chat? Cool! Please us this form to drop me a line.</p>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Your email address</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control as="textarea" rows="8" />
                </Form.Group>
                </Form>
        </Card>
    );
  }