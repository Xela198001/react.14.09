import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message.jsx";

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0, messages: [],
        };

        this.onClick = this.onClick.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    onClick() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    addMessage() {
        const { messages, count } = this.state;
        this.setState({ messages: [...messages, 'Новое сообщение ${count}'] }); 
    }
    render() {
        const { count, messages } = this.state;

        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>from GeekBrains</p>
                <p>{count}</p>
                <button onClick={this.onClick}>increment</button>
                <button onClick={this.addMessage}>add message</button>
                <ul>
                    {messages.map((item, index) =>(
                       <Message key={index} item={item} /> 
                        ))}
                </ul>
                
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById("hello-example")
);