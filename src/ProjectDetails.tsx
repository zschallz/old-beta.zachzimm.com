import React from 'react';
import Table from 'react-bootstrap/Table'

export type ProjectDetailsProps = {
    dates: string,
    technologies: string[],
    projectSites: Link[],
    sourcecode: Link[],
    license: string,
}

export type Link = {
    url: string,
    label: string,
}

const generateLinks = (links: Link[]) => {
    return (
        links.map((link: Link) => (
            <li><a href={link.url}>{link.label}</a></li>
        ))
    )
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  
    return (
        <Table>
            <tbody>
                <tr>
                    <td>When</td>
                    <td>{props.dates}</td>
                </tr>
                <tr>
                    <td>Technologies</td>
                    <td>{props.technologies.toString()}</td>
                </tr>
                <tr>
                    <td>Project Site</td>
                    <td>
                        <ul>
                            {generateLinks(props.projectSites)}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Source</td>
                    <td>
                        <ul>
                            {generateLinks(props.sourcecode)}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>License</td>
                    <td>{props.license}</td>
                </tr>
            </tbody>
        </Table>
    );
  }