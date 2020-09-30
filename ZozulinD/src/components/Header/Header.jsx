import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: 'calc(100% - 240px)',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.link}>
          ChatBot
        </Link>
      </Typography>
      <Button color="inherit">
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>
      </Button>
    </AppBar>
  );
};

export default Header;
