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
        message: "Привет от бота, кожаный мешок",
      },
    ],
    needAnswer: false,
  };

  componentDidUpdate(){
    console.log('huyak')
    // console.log(this.state)

    this.answer()
  }

  answer = ()=>{
    if(this.state.needAnswer){
      const mustAnswer = this.state.messages[ this.state.messages.length - 1 ];
      // const mustAnsver = this.state;
      setTimeout(()=>{
        // console.log(mustAnswer.author);
        let answerMessage = {
          author: 'Bot',
          message: 'ansver for ' + mustAnswer.author,
        }
        this.addMessage(answerMessage)
      }, 2000);
      this.setState({needAnswer:false})
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;
    // console.log(messages)
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  setNeedAnswer = () => {
    this.setState({needAnswer:true})
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
        <FormMessage addMessage={this.addMessage} setNeedAnswer = {this.setNeedAnswer}/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("root")
);
