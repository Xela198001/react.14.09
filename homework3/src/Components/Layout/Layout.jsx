import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import FormMessage from '../FormMessage';
import Header from '../Header';
import Message from '../Message';
import ChatList from '../ChatList';
import MessageList from '../MessageList';

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
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
};

class HelloMessage extends Component {
    state = {
        messages: [
            {
                id: uuidv4(),
                author: 'Bot',
                message: 'Привет от бота',
            },
        ],
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (messages.length % 2 === 0) {
            setTimeout(() => {
                this.addMessage({ author: 'Bot', message: 'привет, я бот' });
            }, 500);
        }
    }

    addMessage = message => {
        const { messages } = this.state;

        this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
    };

    render() {
      const { classes } = this.props;
      console.log(this.props);
        const { messages } = this.state;

        return (
          <div className={classes.root}>
            <Header />
            <ChatList />
            <Box className={classes.box} component="div" m={1}>
              <Box className={classes.chat} component="div" m={2}>
              <MessageList messages={ messages } />
              <FormMessage addMessage={this.addMessage} />
              </Box>
            </Box>
          </div>
        );
    }
}

export default withStyles(styles)(HelloMessage);