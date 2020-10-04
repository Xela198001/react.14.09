const initialState = {
  chats: {
    1: {
      id: 1,
      title: "Чат 1",
      messageList: [1],
    },
    2: {
      id: 2,
      title: "Чат 2",
      messageList: [2],
    },
    3: {
      id: 3,
      title: "Чат 3",
      messageList: [3],
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_message':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;