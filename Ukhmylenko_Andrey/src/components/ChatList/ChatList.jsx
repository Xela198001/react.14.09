import React from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import mockChats from './mockChats';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  secondList: {
    marginTop: 'auto',
  },
  chatLink: {
    textDecoration: 'none',
  },
  activeChatLink: {
    color: theme.palette.secondary.main,
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
      <List>
        <Link to="/">
          <div className={classes.toolbarIcon}>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </Link>
      </List>
      <Divider />
      <List>
        {mockChats.map(({ id, name }) => (
          <NavLink
            key={id}
            to={`/chats/${id}`}
            className={classes.chatLink}
            activeClassName={classes.activeChatLink}
          >
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider className={classes.secondList} />
      <List>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default ChatList;
