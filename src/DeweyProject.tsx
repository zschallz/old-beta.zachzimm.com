import React from 'react';
import ProjectHeader from './ProjectHeader';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { ProjectProps } from './ProjectHeader';
import { ProjectDetailsProps } from './ProjectDetails';

const deweyDetails: ProjectDetailsProps = {
    dates: "May 2010 - Aug 2010",
    technologies: ["Arduino", "C", "PHP", "MySQL"],
    projectSites: [],
    sourcecode: [
        {url: "https://github.com/zschallz/DeweyBot", label: "GitHub - Deweybot"},
    ],
    license: "Apache 2.0",
}

const dewey: ProjectProps = {
    projectName:  'Dewey',
    projectDetails: deweyDetails,
}

export default function NetTrustProject() {
  
    return (
        <Card>
            <ProjectHeader {...dewey}></ProjectHeader>
            <Row>
                <Card>
                    <h2>Description</h2>
                    <p>During my (unfinished) Graduate studies I was chosen by Professor Selma Šabanovic to participate in a research project inspired by a class project I took titled "Human-Robot Interaction." I was chosen to participate in this project as the team's developer due to my experience in designing and developing physical prototypes using the Arduino microcontroller as a platform.</p>

                    <p>This research project aimed to determine whether or not certain kinds of robots using certain Human-Robot Interaction design concepts (such as embodiment) could increase the amount of stress-reducing breaks office workers took per day. This project was both interesting and challenging because there were no tried-and-true methods published and documented for detecting the presence of a person at his or her desk.</p>

                    <p>During this project, my main contributions were:</p>

                    <ul>
                        <li>Constructed (chose and procured parts, soldered, glued, duct taped) the hardware for a fully-functional, network-connected presence sensing and logging (detected whether a participant was at his or her desk or not)</li>
                        <li>Built a backend using PHP and MySQL that the presence sensing platform connected to to log presence data for the study</li>
                        <li>Developed code that analyzed the data collected from participants to judge when users were at their desk based on motion and temperature values collected by the sensing platform</li>
                        <li>Developed real-time reports accessible by other researchers on project using PHP</li>
                    </ul>
                </Card>
            </Row>
        </Card>
    );
  }