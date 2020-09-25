import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import FormMessage from "./components/FormMessage";
import Message from "./components/Message";

class HelloMessage extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: "Bot",
        message: "Привет от бота",
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const {messages} = this.state;
    if(messages.length % 2 === 0) {
      setTimeout(()=>{
        this.addMessage({author: `Bot`, message: `Я бы что-то ответил, но пока не умею`})
      }, 600)
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>from GeekBrains</p>
        <ul>
          {messages.map(({ id, author, message }) => (
            <Message key={id} author={author} message={message} />
          ))}
        </ul>
        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("root")
);