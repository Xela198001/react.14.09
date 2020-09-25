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
        message: "What do you want?",
      }],
      user: "noName",
      count: 0,
      authorMessages: [],
      botMessages: ['What?', 'Please, say me what you want?', 'May be later?'],
  };

  addMessage = (message) => {
    const { messages, authorMessages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
    if(messages.length % 2 !== 0) {
      this.setState({ authorMessages: [...authorMessages, message]})
    };
    console.log(authorMessages);
  };

componentDidUpdate(prevPrors, prepState) {
  const {messages, user, botMessages, count} = this.state;
  if(messages.length % 2 === 0) {
    this.addMessage({ author: "Bot", message: `${user} ${botMessages[count]}` });
    this.setState({ count: count+1 });
    
  }
}

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