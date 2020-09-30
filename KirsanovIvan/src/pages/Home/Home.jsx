import React from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <h1>Home Page</h1>
      <List>
        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting Page" />
          </ListItem>
        </Link>
        <Link to="/chats/1">
          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat 1" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Home;
