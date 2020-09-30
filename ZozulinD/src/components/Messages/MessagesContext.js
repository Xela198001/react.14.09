import { createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const chatsList = {
  1: {
    chatId: 1,
    chatName: 'Chat 1',
    messages: [{ _id: uuid(), author: 'Bot', message: 'Hello chat 1!' }],
  },
  2: {
    chatId: 2,
    chatName: 'Chat 2',
    messages: [{ _id: uuid(), author: 'Bot', message: 'Hello chat 2!' }],
  },
  3: {
    chatId: 3,
    chatName: 'Chat 3',
    messages: [{ _id: uuid(), author: 'Bot', message: 'Hello chat 3!' }],
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addMessage': {
      const oldState = state[action.value.chatId].messages;
      const newState = [...oldState, action.value.message];

      return {
        ...state,
        [action.value.chatId]: {
          ...state[action.value.chatId],
          messages: newState,
        },
      };
    }
    case 'addChat': {
      const chatsIds = Object.keys(state);
      const newChatId = parseInt(chatsIds[chatsIds.length - 1], 10) + 1;
      const newChat = {
        chatId: newChatId,
        chatName: action.value.chatName,
        messages: [{ _id: uuid(), author: 'Bot', message: `Hello chat ${newChatId}!` }],
      };

      return { ...state, [newChatId]: newChat };
    }
    default:
      throw new Error();
  }
};

const MessagesContext = createContext();

export default MessagesContext;
