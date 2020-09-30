import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import { TextField, Button, withStyles } from '@material-ui/core';
// import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    backgroundColor: "#3f50b5",
    border: "none",
    width: "100%",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    height: 48,
  },
});

class FormMessage extends Component {
    state = {
        author: '',
        message: '',
    };

    onSubmit = e => {
        console.log(e);
        e.preventDefault();
        const { addMessage } = this.props;
        addMessage(this.state);
        // this.form.reset();
    };

    onChange = ({ target }) => {
        const { value, name } = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { author, message } = this.state;
        return (
          <form className={classes.root} onSubmit={this.onSubmit}>
            <TextField
              name="author"
              label="Author"
              onChange={this.onChange}
              value={author}
              autoComplete="off"
            />
            <TextField
              name="message"
              label="Message text"
              onChange={this.onChange}
              value={message}
              autoComplete="off"
            />
            <button className={ classes.button } variant="contained" color="primary" type="submit">
              Add
            </button>
          </form>
        );
    }
}

FormMessage.propTypes = {
    addMessage: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
