import React from 'react';
import Project from './Project';
import { ProjectProps } from './Project';
import { ProjectDetailsProps } from './ProjectDetails';

const ambientTrustDetails: ProjectDetailsProps = {
    dates: "May 2008 - May 2010",
    technologies: ["JavaScript, C, C#, MySQL, Arduino"],
    projectSites: [
        {url: "https://ethos.soic.indiana.edu/projects/ambient-trust", label: "ETHOS - Ambient Trust"},
        {url: "http://www.ljean.com/NetTrust/", label: "Net Trust"},
    ],
    sourcecode: [
        {url: "https://code.google.com/p/ambienttrust/", label: "Google Code - Ambient Trust"},
        {url: "https://code.google.com/p/nettrust/source/browse/branches/AmbientTrust/", label: "Google Code - Net Trust (branch)"},
        
    ],
    license: "Apache 2.0",
}

const ambientTrust: ProjectProps = {
    projectName:  'Ambient Trust',
    projectDetails: ambientTrustDetails, 
//    body: string, // todo how to handle this?
}

export default function AmbientTrustProject() {
  
    return (
        <Project {...ambientTrust}></Project>
    );
  }