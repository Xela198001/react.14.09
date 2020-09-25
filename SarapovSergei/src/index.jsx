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
    botMessages: [
      "Как дела?",
      "Огоньку не найдется?",
      "Как пройти в библиотеку?",
      "Погодка-то хорошая!",
      "Извините, что обращаюсь к вам...",
      "Ставки на спорт!",
    ],
    isTyping: false,
  };

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  setIsTyping = (props) => {
    this.setState({ isTyping: props });
  };

  componentDidUpdate() {
    const { messages, botMessages } = this.state;
    setTimeout(() => {
      if (messages[messages.length - 1].author !== "Bot") {
        this.setState({
          messages: [
            ...messages,
            {
              id: uuidv4(),
              author: "Bot",
              message:
                botMessages[Math.floor(Math.random() * botMessages.length)],
            },
          ],
        });
      }
    }, 500);
  }

  render() {
    const { messages, isTyping } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "550px",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ width: "300px" }}>
          {messages.map(({ id, author, message }) => (
            <Message key={id} author={author} message={message} />
          ))}
          {isTyping && <span style={{ fontStyle: "italic" }}>typing...</span>}
        </ul>
        <FormMessage
          setIsTyping={this.setIsTyping}
          addMessage={this.addMessage}
        />
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById("root"));
