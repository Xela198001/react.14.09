import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

import Header from '../Header';
import Message from '../Message';
import FormMessage from '../FormMessage';
import { Box, withStyles } from '@material-ui/core';
import ChatList from '../ChatList/ChatList';

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    boxSizing: 'border-box',
  },
  list: {
    padding: theme.spacing(2),
    paddingTop: 64,
    paddingBottom: 88,
    boxSizing: 'border-box',
    height: '100vh',
    overflow: 'scroll',
    width: '100%',
  },
});

class Layout extends React.Component {
  state = {
    messagesList: [],
    userName: this.props.userName,
  };

  /**
   * Добавляет сообщение в общий список
   * @param {String} message
   */
  addMessage = (message) => {
    const { messagesList, userName } = this.state;
    this.setState({
      messagesList: [...messagesList, { id: v4(), author: userName, messageText: message }],
    });
  };

  /**
   * Автоответ бота
   */
  answerToMessage = () => {
    const { messagesList, userName } = this.state;
    this.setState({
      messagesList: [
        ...messagesList,
        { id: v4(), messageText: `${userName}, в чате больше никого нет. Кому ты пишешь?`, author: 'BOT' },
      ],
    });
  };

  /**
   * Проверяет, чьё сообщение было последним и если это не бот, то запускает родительский метод автоответа
   */
  componentDidUpdate() {
    const { messagesList } = this.state;
    if (messagesList[messagesList.length - 1].author != 'BOT') {
      this.answerToMessage(messagesList[messagesList.length - 1].author);
    }
  }

  render() {
    const { messagesList } = this.state;
    const { classes, userName } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <ChatList />
        <Box className={classes.list}>
          <div>
            {messagesList.map((message) => (
              <Message key={message.id} message={message} userName={userName} />
            ))}
          </div>
        </Box>

        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

Layout.propTypes = {
  userName: PropTypes.any.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Layout);
