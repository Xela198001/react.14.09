import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import MessageList from "../../components/MessageList";
import FormMessage from "../../components/FormMessage";
import { Box, withStyles } from "@material-ui/core";
import Layout from "../../components/Layout/Layout";
import { addMessageToState } from "../../actions/chatActions";

const styles = (theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  },
  chat: {
    width: "90%",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
});

class Chats extends Component {
  state = {
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
    messages: {
      1: {
        id: 1,
        author: "Bot",
        message: "Привет от бота",
      },
      2: {
        id: 2,
        author: "Bot",
        message: "Давай поболтаем",
      },
      3: {
        id: 3,
        author: "Bot",
        message: "Давай поболтаем, я в третьем чате",
      },
    },
  };

  componentDidUpdate() {
    const lastMessage = this.messages;
    if (lastMessage[lastMessage.length - 1]?.author !== "Bot") {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "I am Bot" });
      }, 1000);
    }
  }

  get messages() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { chats, messages } = this.state;
    if (id in chats) {
      return chats[id].messageList.map((messId) => messages[messId]);
    }
    return [];
  }

  //   addMessage = ({ author, message }) => {
  //     const { id } = this.props.match.params; // в match хранятся id наших чатов
  //     const { chats } = this.state;
  //     const newId = uuidv4();

  //     this.setState(({ chats, messages }) => ({
  //       chats: {
  //         ...chats,
  //         [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
  //       },
  //       messages: { ...messages, [newId]: { id: newId, author, message } },
  //     }));
  //   };

  //   render() {
  //     const { classes } = this.props;
  //     console.log(this.state);
  //     return (
  //       // <Layout>
  //       <Box className={classes.box} component="div" m={1}>
  //         <Box className={classes.chat} component="div" m={2}>
  //           <MessageList messages={this.messages} />
  //           <FormMessage addMessage={this.addMessage} />
  //         </Box>
  //       </Box>
  //       //</Layout>
  //     );
  //   }
  // }

  addMessage = ({ author, message }) => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));

    // with Immer.js
    // this.setState(
    //   produce(draft => {
    //     draft.chats[id].messageList.push(newId);
    //     draft.messages[newId] = { id: newId, author, message };
    //   }),
    // );
  };

  addChat = () => {
    const newId = uuidv4();
    this.setState(({ chats }) => ({
      chats: {
        ...chats,
        [newId]: { id: newId, title: `Чат ${newId}`, messageList: [] },
      },
    }));
  };

  render() {
    const { chats } = this.state;
    console.log(this.props);
    return (
      <Layout chats={Object.values(chats)} addChat={this.addChat}>
        <MessageList messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
      </Layout>
    );
  }
}


Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

const mapStateToProps = (store) => ({
  chatsFromRedux: store.chats,
});

const mapDispatchToProps = {
  addMessage: addMessageToState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
