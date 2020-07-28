import React from 'react';
import ProjectHeader from './ProjectHeader';
import { ProjectProps } from './ProjectHeader';
import { ProjectDetailsProps } from './ProjectDetails';

const netTrustDetails: ProjectDetailsProps = {
    dates: "May 2008 - May 2010",
    technologies: ["Javascript", "XPCOM", "XUL", "XML"],
    projectSites: [
        {url: "http://www.ljean.com/NetTrust/", label: "Net Trust"},
    ],
    sourcecode: [
        {url: "https://code.google.com/p/ambienttrust/", label: "Google Code - Ambient Trust"},
        {url: "https://code.google.com/p/nettrust/source/browse/", label: "Google Code - Net Trust"},
        
    ],
    license: "Apache 2.0",
}

const netTrust: ProjectProps = {
    projectName:  'Net Trust',
    projectDetails: netTrustDetails,
}

export default function NetTrustProject() {
  
    return (
        <ProjectHeader {...netTrust}></ProjectHeader>
    );
  }