import React, { Component } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import FormMessage from '../FormMessage';
import Header from '../Header';
import Message from '../Message';
import ChatList from '../ChatList';
import MessageList from '../MessageList';

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
};

const Layout = ({ children, classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      {children}
    </div>
  );
};
    
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Layout);