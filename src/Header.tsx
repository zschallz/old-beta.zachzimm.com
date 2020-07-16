import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

type SectionsProps = {
  sections: Array<Section>,
}

type HeaderProps = {
  mainSections: Array<Section>, 
  subSections:  Array<Section>, 
  title:        String,
}

type Section = {
  title: String,
  url: String,
}

const NavBar = (props: SectionsProps) => {
  const classes = useStyles();

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {props.sections.map((section: any) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          className={classes.toolbarLink}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  )
}

// const navBar(props: any)

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { mainSections, subSections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <NavBar sections={mainSections}/>
      <NavBar sections={subSections}/>
    </React.Fragment>
  );
}

Header.propTypes = {
  mainSections: PropTypes.array,
  title: PropTypes.string,
};