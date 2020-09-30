import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx'
import Message from './components/Message.jsx'

// здесь надо пройтись по массиву с сообщениями
// нужен хендлер, который принимает в себя 3 параметра (value as text, author через текст инпут, id при помощи uuidv4())
// с ключами объекта из message, через props передаем его в MessageField, чтобы повесить на кнопку "Send"
class App extends Component {
  state = {
    messages: [{
      id: 0,
      author: 'User',
      text: 'idk',
    }],
  };

  componentDidUpdate(prevState) {
    const BotMessage = {
      id: prevState.messages.length + 1,
      author: 'Bot',
      text: 'idk',
    }

    if (this.state.messages.length % 2 !== 0) {
      this.setState([...prevState.messages,])
    }
  }

  render() {
    const { messages } = this.state;

    return (messages.map((item) => { <Message author={item.author} text={item.text} /> }))
  }
}

ReactDOM.render(<App />, document.getElementById('root'))