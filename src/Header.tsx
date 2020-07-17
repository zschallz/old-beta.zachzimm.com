import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

type SectionsProps = {
    sections: Array<Section>,
    socialMedia:  Array<SocialMedia>, 
}

type HeaderProps = { // ugh why does this exist
    mainSections: Array<Section>, 
    title:        string,
    socialMedia:  Array<SocialMedia>, 
}

type Section = {
    title: string,
    url: string,
    subSections: Array<Section>,
}

type SocialMedia = {
    altText: string,
    url: string,
    imageUrl: string,
}

const NavItem = (props: Section) => {
    if(props.subSections) {
        return (
            <NavDropdown title={props.title} id="collasible-nav-dropdown">
                {props.subSections.map((section: Section) => (
                    <NavDropdown.Item href={section.url}>{section.title}</NavDropdown.Item>
                ))}
            </NavDropdown>
        )
    } else {
        return (
            <Nav.Link href={props.url}>{props.title}</Nav.Link>
        )
    }
}

const TopNav = (props: SectionsProps) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">ZZ</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            {props.sections.map((section: Section) => (
                <NavItem title={section.title} url={section.url} subSections={section.subSections}/>
            ))}
        </Nav>
        <Nav>
            {props.socialMedia.map((section: SocialMedia) => (
                <Nav.Link href={section.url}>{section.altText}</Nav.Link>
            ))}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default function Header(props: HeaderProps) {
  const { mainSections, title, socialMedia } = props;

  return (
    <React.Fragment>
      <TopNav sections={mainSections} socialMedia={socialMedia}/>
    </React.Fragment>
  );
}

Header.propTypes = {
  mainSections: PropTypes.array,
  title: PropTypes.string,
  socialMedia: PropTypes.array,
};