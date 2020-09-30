import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, OutlinedInput, TextField, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    backgroundColor: '#fff',
    margin: theme.spacing(0),
    padding: theme.spacing(2),
    bottom: 0,
    position: 'fixed',
    marginLeft: 240,
    boxSizing: 'border-box',
    width: `calc(100% - 240px)`,
  },
});

class FormMessage extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  state = {
    messageText: '',
  };

  /**
   * Сохраняет в state значение введённое в текстовое поле
   * @param inputEl
   */
  onInputChange = (inputEl) => {
    const { messageText } = this.state;
    this.setState({ messageText: inputEl.target.value });
  };

  /**
   * Ставит фокус на поле для ввода сообщения. Нужно чтобы постоянно не приходилось кликать на текстовое поле.
   */
  inputFocus() {
    this.textInput.current.focus();
  }

  /**
   * Передаёт автора и текст сообщения в родительский компонент и очищает текстовое поле
   * @param event событие отправки данных формы
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { addMessage } = this.props;
    const { messageText } = this.state;

    addMessage(messageText);

    this.setState({
      messageText: '',
    });
    this.inputFocus();
  };

  render() {
    const { classes } = this.props;
    const { messageText } = this.state;

    return (
      <form onSubmit={this.onSubmit} className={classes.root}>
        <OutlinedInput
          name="messageText"
          onChange={this.onInputChange}
          placeholder="Введите текст сообщения"
          value={messageText}
          fullWidth
          autoFocus
          autoComplete="off"
          type="text"
          ref={this.textInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={this.onSubmit}>
                <Send />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
