import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import useStyles from './stylesHeader.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
            Create your journey
        </Typography>
        <Link to="/" className="btn-logout" style={{ color: 'white', marginRight: '10px' }}><FaHome size={20} /></Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;