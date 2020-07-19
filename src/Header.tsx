import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'

type HeaderProps = { // ugh why does this exist
    sections:     Array<Section>, 
    socialMedia:  Array<SocialMedia>, 
}

export type Section = {
    title:        string,
    url:          string,
    subSections?: Array<Section>,
}

export type SocialMedia = {
    altText:      string,
    url:          string,
    imageUrl:     string,
}

const NavItem = (props: Section) => {
    if(props.subSections) {
        return (
            <NavDropdown title={props.title} id="collasible-nav-dropdown">
                {props.subSections.map((section: Section) => (
                    <LinkContainer key={section.title} to={section.url}>
                        <NavDropdown.Item>{section.title}</NavDropdown.Item>
                    </LinkContainer>
                ))}
            </NavDropdown>
        )
    } else {
        return (
            <LinkContainer to={props.url}>            
                <Nav.Link>{props.title}</Nav.Link>
            </LinkContainer>
        )
    }
}
// todo move down...
const TopNav = (props: HeaderProps) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">ZZ</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
                {props.sections.map((section: Section) => (
                    <NavItem key={section.title} title={section.title} url={section.url} subSections={section.subSections}/>
                ))}
        </Nav>
        <Nav>
            {props.socialMedia.map((section: SocialMedia) => (
                <Nav.Link key={section.altText} href={section.url}>{section.altText}</Nav.Link>
            ))}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default function Header(props: HeaderProps) {
  const { sections, socialMedia } = props;

  return (
    <React.Fragment>
      <TopNav sections={sections} socialMedia={socialMedia}/>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  socialMedia: PropTypes.array,
};