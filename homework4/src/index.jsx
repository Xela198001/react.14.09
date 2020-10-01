import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import FormMessage from "./components/FormMessage";
import Message from "./components/Message";

class Chat extends React.Component {
  state = {
    name: "",
    messages: [
      {
        id: uuidv4(),
        author: "Bot",
        message: "Привет от бота!",
      },
    ],
    isVisible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages.length % 2 === 0) {
      this.addMessage({ author: "Bot", message: "Сам ты бот!" });
    }
  }

  Chat = () => {
    this.setState({ name: (name = prompt("Как вас зовут?")) });
    this.Visible();
  };

  ExitChat = () => {
    this.Visible();
  };

  Visible = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render() {
    const { messages, name, isVisible } = this.state;

    return (
      <div>
        {isVisible && <button onClick={this.Chat}>Войти в Чат</button>}
        {!isVisible && (
          <>
            <ul>
              {messages.map(({ id, author, message }) => (
                <Message
                  key={id}
                  author={author}
                  message={message}
                  name={name}
                />
              ))}
            </ul>
            <FormMessage name={name} addMessage={this.addMessage} />
            <button onClick={this.ExitChat}>Выйти из чата</button>
          </>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  //   <MessageHistory userName="Alex" />,
  <Chat name="chat" />,
  document.getElementById("root")
);
