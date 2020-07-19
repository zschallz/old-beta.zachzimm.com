import React from 'react';
import Table from 'react-bootstrap/Table'

export type ProjectDetailsProps = {
    dates: string,
    technologies: string[],
    projectSites: string[],
    sourcecode: string[],
    license: string,
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  
    return (
        <Table>

        </Table>
    );
  }