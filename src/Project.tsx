import React from 'react';
import Card from 'react-bootstrap/Card'
import { ProjectDetailsProps } from './ProjectDetails'

export type ProjectProps = {
    projectName:  string,
    projectDetails?: ProjectDetailsProps, 
    body?: string, // todo how to handle this?
}

export default function Project(props: ProjectProps) {
  
    return (
        <Card>
            <h1>{props.projectName}</h1>
            <hr/>
        </Card>
    );
  }