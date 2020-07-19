import React from 'react';
import Project from './Project';
import { ProjectProps } from './Project';

const ambientTrust: ProjectProps = {
    projectName:  'Ambient Trust',
//    projectDetails: ProjectDetailsProps, 
//    body: string, // todo how to handle this?
}

export default function AmbientTrustProject() {
  
    return (
        <Project {...ambientTrust}></Project>
    );
  }