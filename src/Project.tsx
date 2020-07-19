import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectDetailsProps } from './ProjectDetails'
import ProjectDetails from './ProjectDetails'

export type ProjectProps = {
    projectName:  string,
    projectDetails: ProjectDetailsProps, 
    body?: string, // todo how to handle this?
}

export default function Project(props: ProjectProps) {
  
    return (
        <Card>
            <h1>{props.projectName}</h1>
            <hr/>
            <Row>
                <Col>
                    <ProjectDetails {...props.projectDetails}/>
                </Col>
                <Col>
                    <p>Insert image here</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.body}
                 </Col>
            </Row>
        </Card>
    );
  }