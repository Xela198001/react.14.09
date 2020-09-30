import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles, Container, Typography } from '@material-ui/core';

import ChatList from '../ChatList';
import Header from '../Header';
import Profile from '../Profile';
import Messages from '../Messages';
import Router from '../Router';
import MessagesContext, { chatsList, reducer } from '../Messages/MessagesContext';
import CreateChat from '../ChatList/CreateChat';

const useStyles = makeStyles({
  container: {
    marginTop: 64,
  },
});

const Layout = () => {
  const classes = useStyles();
  const [chats, dispatch] = useReducer(reducer, chatsList);

  return (
    <Router>
      <Header />
      <MessagesContext.Provider value={{ chats, dispatch }}>
        <ChatList />
        <Container className={classes.container}>
          <Switch>
            <Route exact path="/">
              <Typography variant="h2" component="h1">
                ChatBot app!
              </Typography>
            </Route>
            <Route path="/chats/:id">
              <Messages />
            </Route>
            <Route path="/addChat">
              <CreateChat />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </MessagesContext.Provider>
    </Router>
  );
};

export default Layout;
