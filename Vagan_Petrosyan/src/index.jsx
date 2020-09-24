import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message"

class HelloMessage extends React.Component {
   constructor() {
       super();
       this.state = {
           count: 0,
           messages: [],
       }

       this.onClick = this.onClick.bind(this);
       this.addMessage = this.addMessage.bind(this);
   }

   onClick() {
       const { count } = this.state;
       this.setState({count: count + 1});
   }
    addMessage() {
        const { messages, count } = this.state;
        this.setState({messages: [...messages, `новое сообщение ${ count }`]})
    }
    render() {
       const { count, messages } = this.state
        return (
            <div>
                <h2>Hi! {this.props.name}</h2>
                <h4>soft</h4>
                <p>{ count }</p>
                <button onClick={this.onClick}>increment</button>
                <button onClick={this.addMessage}>add message</button>
                <ul>
                    {messages.map((item, index) => (
                        <Message key = { index } item = { item }/>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor my friend!" />,
    document.getElementById("hello-example")
);