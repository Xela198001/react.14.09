import React from 'react';
import cn from 'classnames';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          Общий чат
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
