import React from 'react';
import ProjectHeader from './ProjectHeader';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
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
        <Card>
            <ProjectHeader {...netTrust}></ProjectHeader>
            <Row>
                <Card>
                    <h2>Description</h2>
                    <p>Net Trust is an open-source anti-phishing toolbar developed by a team at Indiana University. Net Trust serves as a reputation system for websites based on the user's social network's browsing histories. Through the toolbar the user can get an idea about whether or not a website is trustworthy based on how many times his or her friends visisted the website, along with other information from third-party sources such as McAfee SiteAdvisor.</p>

                    <p>During my undergraduate studies I was chosen by Professor L. Jean Camp, the director of the Security Informatics Program at Indiana University, to have the opportunity of contributing to this open source project as part of a funded research assistantship made possible by Google and the National Science Foundation. My main contribution was the design, maintenance, and development of an alternative interface called Ambient Trust, which was the subject of a study and a published workshop paper.</p>

                    <p>Most of my contributions on this project consisted of:</p>

                    <ul>
                        <li>Designing and developing a hardware interface to the toolbar (see <a href="./ambientTrust">Ambient Trust</a>)</li>
                        <li>Updating compatibility for new versions of Firefox</li>
                        <li>Integrating the toolbar with a third party reputation source</li>
                    </ul>
                </Card>
            </Row>
        </Card>
    );
  }