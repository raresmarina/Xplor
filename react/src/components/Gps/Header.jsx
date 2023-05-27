import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

import useStyles from './stylesHeader.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
            Create your journey
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;