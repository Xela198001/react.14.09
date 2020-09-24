import React from 'react'
import ReactDOM from 'react-dom'
import Messages from './components/Message.jsx'

class HelloMessage extends React.Component {
  state = {
    count: 0,
    messages: [],
    currentMessage: ''
  };

  onClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }

  addMessage = () => {
    this.setState({ messages: [...this.state.messages, this.state.currentMessage], currentMessage: '' })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Messages count={count} />
        <button onClick={this.onClick}>increment</button>

        <input type="text" value={this.state.currentMessage}
          onChange={(e) => {
            const { target: { value } } = e;
            this.setState({ ...this.state, currentMessage: value })
          }
          } />
        <input type="submit" onClick={this.addMessage} value='Add message' />

        <div>{this.state.messages.join(', ')}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
);