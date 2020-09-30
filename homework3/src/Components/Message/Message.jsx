import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  listitem: {
    display: 'block',
width: '100%',
  },
  bot: {
    display: 'block',
    width: '45%',
    padding: '5px',
    marginTop: 5,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '5px',
    marginRight: 'auto',

      
    },
  piople: {
    display: 'block',
    width: '45%',
    padding: '5px',
    margin: '5px 0 0 auto',
    boxSizing: 'border-box',
    backgroundColor: 'dodgerblue',
    borderRadius: '5px',
    },
}));

const Message = ({ author, message }) => {
    const classes = useStyles();
    // console.log(author);
    return (
      <Box component="li" className={classes.listitem}>
        <span className={author !== "Bot" ? classes.piople : classes.bot}>{`${author}: ${message}`}</span>
      </Box>
    );
};

export default Message;