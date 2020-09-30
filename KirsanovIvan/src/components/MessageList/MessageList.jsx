import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Message from '../Message';

const useStyles = makeStyles(theme => ({
    list: {
        listStyle: "none",
        padding: theme.spacing(0),
        minWidth: 150,
        margin: '0 auto',
        display: "flex",
        flexDirection: "column",
        fontFamily: ("Helvetica Neue", "Helvetica", "sans-serif"),
        fontSize: 20,
        fontWeight: "normal",
      },
}));

const MessageList = ({ messages }) => {
    const classes = useStyles();

    return (
        
        <Box component="ul" className={classes.list}>
            {messages.map(({ id, author, message }) => (
              <Message key={id} author={author} message={message} />
            ))}
          </Box>
    )
};

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          author: PropTypes.string,
          message: PropTypes.string,
        }),
      ).isRequired,
};

export default MessageList;