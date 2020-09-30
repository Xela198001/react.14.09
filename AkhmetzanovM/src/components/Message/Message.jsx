import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  message: {
    borderRadius: 4,
    padding: '4px 12px',
    margin: '12px 0px',
    backgroundColor: '#efefef',
    width: 400,
  },
  author: {
    color: 'gray',
  },
}));

const Message = ({ message, userName }) => {
  const classes = useStyles();

  return (
    <div className={classes.message}>
      <Typography variant="body1">
        <span className={classes.author}>{message.author == userName ? 'Вы' : message.author}:</span>{' '}
        {message.messageText}
      </Typography>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Message;
