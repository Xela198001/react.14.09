import React, { Component } from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

class MessageField extends Component {
  state = {
    author: '',
    message: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
    this.setState({
      author: '',
      message: ''
    })
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render () {
    const { author, message } = this.state;
    return (
      <div className='layout'>
        <form id='main' className='message-field' onSubmit={this.onSubmit}>
          <div>
            <label>
              <span>Author: </span>
              <input
                type="text"
                name="author"
                onChange={this.onChange}
                value={author}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Text: </span>
              <input
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default MessageField;