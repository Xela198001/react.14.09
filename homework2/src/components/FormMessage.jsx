import React, { Component } from "react";

class FormMessage extends Component {
  constructor() {
    super();
    this.state = {
      author: name,
      message: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
    this.setState({ message: "" });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <span>{name}: </span>
        <input
          type="text"
          name="message"
          onChange={this.onChange}
          value={message}
        />
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default FormMessage;
