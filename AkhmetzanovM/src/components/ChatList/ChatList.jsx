import React from 'react';
import cn from 'classnames';
import { Divider, Drawer, List, ListItemIcon, makeStyles, Typography } from '@material-ui/core';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <div className={classes.toolbarIcon}>
        <Typography component="h6" variant="h6" color="inherit" noWrap className={classes.title}>
          Список чатов
        </Typography>
      </div>
      <List>
        <ListItem button selected>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Общий чат" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 4" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default ChatList;
