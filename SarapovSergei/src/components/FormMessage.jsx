import React, { Component, useState } from "react";
import PropTypes from "prop-types";

function FormMessage(props) {
  const [messageForm, newMessage] = useState({ author: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = props;
    addMessage(messageForm);
    newMessage({ ...messageForm, message: "" });
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    newMessage({
      ...messageForm,
      [name]: value,
    });
  };

  const onTyping = () => {
    const { setIsTyping } = props;
    setIsTyping(true);
  };
  const offTyping = () => {
    const { setIsTyping } = props;
    setIsTyping(false);
  };

  const { author, message } = messageForm;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          <span>Author: </span>
          <input type="text" name="author" onChange={onChange} value={author} />
        </label>
      </div>
      <div>
        <label style={{ display: "flex" }}>
          <span style={{ width: "54px" }}>Text: </span>
          <input
            type="text"
            name="message"
            onChange={onChange}
            value={message}
            onFocus={onTyping}
            onBlur={offTyping}
          />
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

/*
class FormMessage extends Component {
  state = {
    author: "",
    message: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    this.setState({
      author: e.target.author.value,
      message: e.target.message.value,
    });
    addMessage(this.state);
    this.setState({
      message: "",
    });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  onTyping = () => {
    const { setIsTyping } = this.props;
    setIsTyping(true);
  };
  offTyping = () => {
    const { setIsTyping } = this.props;
    setIsTyping(false);
  };

  render() {
    const { author, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
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
          <label style={{ display: "flex" }}>
            <span style={{ width: "54px" }}>Text: </span>
            <input
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
              onInput={this.onTyping}
              onBlur={this.offTyping}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}
*/

FormMessage.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
};

export default FormMessage;
