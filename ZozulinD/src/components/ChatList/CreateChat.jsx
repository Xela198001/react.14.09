import React, { useState, useContext } from 'react';

import { Button, makeStyles, TextField } from '@material-ui/core';

import MessagesContext from '../Messages/MessagesContext';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  input: {
    marginBottom: theme.spacing(1),
  },
}));

const CreateChat = () => {
  const classes = useStyles();

  const { dispatch } = useContext(MessagesContext);

  const [chatName, setChatName] = useState('');

  const [inputError, setInputError] = useState(false);

  const clearInputs = () => {
    setChatName('');
  };

  const testInputs = () => {
    setInputError(chatName.length === 0);

    return chatName.length > 0;
  };

  const onChange = ({ target }) => {
    const { value } = target;

    setChatName(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (testInputs()) {
      dispatch({ type: 'addChat', value: { chatName } });

      clearInputs();
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.form} noValidate autoComplete="off">
      <TextField
        onChange={onChange}
        className={classes.input}
        type="text"
        value={chatName}
        error={inputError}
        name="author"
        placeholder="Chat name"
      />
      <Button type="submit" color="primary">
        Create chat
      </Button>
    </form>
  );
};

export default CreateChat;
