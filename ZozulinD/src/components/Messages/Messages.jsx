import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { makeStyles } from '@material-ui/core';

import Message from './Message';
import MessageForm from './MessageForm';

const useStyles = makeStyles(theme => ({
  messagesList: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: theme.spacing(2),
    width: 500,
  }
}));

const Messages = () => {
  const classes = useStyles();

  const [messagesList, setMessagesList] = useState([{ _id: uuid(), author: 'Bot', message: 'Hello!' }]);

  const addMessage = ({ author, message }) => {
    const newMessage = { _id: uuid(), author: author, message: message };

    setMessagesList([...messagesList, newMessage]);
  }

  useEffect(() => {
    if (messagesList[messagesList.length - 1].author !== 'Bot') {
      setTimeout(() => addMessage({ author: 'Bot', message: 'Ok!' }), 300);
    }
  }, [messagesList])

  return (<>
    <MessageForm addMessage={addMessage} />
    <ul className={classes.messagesList}>
      {
        messagesList.map(({ _id, author, message }) => {
          return <Message key={_id} message={message} author={author} />
        })
      }
    </ul>
  </>);
}

export default Messages;
