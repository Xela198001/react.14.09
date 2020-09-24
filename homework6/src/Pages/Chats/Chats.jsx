import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
// import produce from 'immer';
import { connect } from "react-redux";
import MessageList from "../../components/MessageList";
import FormMessage from "../../components/FormMessage";
import Layout from "../../components/Layout/Layout";
import { addMessage } from "../../reducers/messagesReducer";

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
  // componentDidUpdate() {
  //   const lastMessage = this.messages;
  //   if (lastMessage[lastMessage.length - 1]?.author !== "Bot") {
  //     setTimeout(() => {
  //       this.addMessage({ author: "Bot", message: "I am Bot" });
  //     }, 1000);
  //   }
  // }

  get messages() {
    const {
      match: {
        params: { id },
      },
      chats,
      messages,
    } = this.props;

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
    return (
      <Layout>
        <MessageList />
        <FormMessage addMessage={this.addMessage} />
        <button onClick={() => this.props.addMessage()}>add message</button>
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
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
