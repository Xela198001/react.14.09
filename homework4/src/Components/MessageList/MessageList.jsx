import React, {Component} from 'react';
import Message from '../Message';
import PropTypes from "prop-types";
import { Box,makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'block',
  },
}));

const MessageList = ({ messages }) => {
  const classes = useStyles();
  // console.log(classes.listul);
  return (
      <Box className={classes.list} component="ul">
        {messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} />
        ))}
      </Box>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};

export default MessageList;


