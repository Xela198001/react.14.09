<<<<<<< HEAD
import React, {Component} from 'react';
import Message from '../Message';
import PropTypes from "prop-types";
import { Box,makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'block',
  },
}));

const MessageList = ({ messages }) => {
  const classes = useStyles();
  // console.log(classes.listul);
  return (
      <Box className={classes.list} component="ul">
        {messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} />
        ))}
      </Box>
=======
import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(9, 2, 11, 2),
    boxSizing: 'border-box',
    height: '100vh',
    overflow: 'scroll',
    width: '100%',
  },
}));

const MessageList = ({ currentChatId }) => {
  const classes = useStyles();

  const chatList = useSelector((store) => store.chats.chatList);
  const userName = useSelector((store) => store.chats.userName);
  const messageList = useSelector((store) => Object.values(store.chats.messageList));
  const messages = chatList[currentChatId].messageIdList.map((messageId) => messageList[messageId]);

  return (
    <Container className={classes.list}>
      {messages.map((message) => (
        <Message key={message.id} message={message} userName={userName} />
      ))}
    </Container>
>>>>>>> c35d23bb8610d070804f11833212308d3d97a141
  );
};

MessageList.propTypes = {
<<<<<<< HEAD
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};

export default MessageList;


=======
  currentChatId: PropTypes.string.isRequired,
  // userName: PropTypes.string.isRequired,
};

export default MessageList;
>>>>>>> c35d23bb8610d070804f11833212308d3d97a141
