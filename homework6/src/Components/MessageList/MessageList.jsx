import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Message from "../Message";

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'block',
  },
}));

const MessageList = () => {
  const classes = useStyles();

  const { id } = useParams();
  const chats = useSelector(state => state.chats.byIds);
  const messagesFromRedux = useSelector(state => state.messages.byIds);

  const messages = (chats[id]?.messageList ?? []).map(idx => messagesFromRedux[idx]);

  return (
    <Box className={classes.list} component="ul">
      {messages.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </Box>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    })
  ).isRequired,
};

export default MessageList;


