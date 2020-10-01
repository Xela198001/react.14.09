import React, { Component } from 'react';
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
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  },
  chat: {
    width: "90%",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
};

const HelloMessage = ({ children, classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      {children}
    </div>
  );
};
    
FormMessage.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(HelloMessage);