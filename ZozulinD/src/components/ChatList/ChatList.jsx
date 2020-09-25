import React from 'react';

import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    boxSizing: 'border-box',
    width: drawerWidth,
    position: 'relative',
    minHeight: '100vh',
  },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
      <List component="nav">
        <ListItem button selected>
          <ListItemText>Chat 1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Chat 2</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Chat 3</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Chat 4</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Chat 5</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
};

export default ChatList;
