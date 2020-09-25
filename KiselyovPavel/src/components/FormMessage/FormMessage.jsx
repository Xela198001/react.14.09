import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
const styles = theme => ({
  root: {
    margin: 'o auto',
    marginTop: 'auto',
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 600
  },
  button: {
    margin: theme.spacing(1),
    width:100

  },
});



class FormMessage extends Component {
  state = {
    author: 'Я',
    message: '',
  };
  onSubmit = e => {
    console.log(e);
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
    this.state.message = '';
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
          name="message"
          label="Message text"
          onChange={this.onChange}
          value={message}
          autoComplete="off"
        />
        <Button
        type='submit'
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Message
      </Button>
      </form>
    );
  }
}
FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default withStyles(styles)(FormMessage);
