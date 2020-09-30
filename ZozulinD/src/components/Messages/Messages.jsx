import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import MessageForm from './MessageForm';
import MessagesContext from './MessagesContext';
import MessagesList from './MessagesList';

const Messages = () => {
  const { id: chatId } = useParams();
  const { chats, dispatch } = useContext(MessagesContext);

  const addMessage = ({ author, message }) => {
    const newMessage = { _id: uuid(), author, message };

    dispatch({
      type: 'addMessage',
      value: {
        chatId,
        message: newMessage,
      },
    });
  };

  useEffect(() => {
    const lastMessage = chats[chatId].messages;

    if (lastMessage[lastMessage.length - 1].author !== 'Bot') {
      setTimeout(() => addMessage({ author: 'Bot', message: 'Ok!' }), 300);
    }
  });

  if (!chats[chatId]) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MessageForm addMessage={addMessage} />
      <MessagesList messages={chats[chatId].messages} />
    </>
  );
};

export default Messages;
