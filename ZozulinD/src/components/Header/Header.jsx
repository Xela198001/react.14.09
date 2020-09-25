import React from 'react';

import { AppBar, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  appBar: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: 'calc(100% - 240px)',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          ChatBot
        </Typography>
    </AppBar>
  )
}

export default Header;
