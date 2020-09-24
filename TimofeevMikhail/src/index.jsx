import React from 'react';
import ReactDom from 'react-dom';
import Message from './components/Message';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            messages: [],
        };

        this.addIncrementMessage = this.addIncrementMessage.bind(this);
        this.addDecrementMessage = this.addDecrementMessage.bind(this);
    }

    addDecrementMessage() {
        const { messages, count } = this.state;
        this.setState({ count: count - 1 })
        this.setState({ messages: [...messages, `Вы уменьшили до ${count}`] });
        console.log(messages);
    }

    addIncrementMessage() {
        const { messages, count } = this.state;
        this.setState({ count: count + 1 })
        this.setState({ messages: [...messages, `Вы увеличили до ${count}`] });
        console.log(messages);
    }



    render() {
        const { count, messages } = this.state;
        return (
            <div>
                <h1>Wassup {this.props.name}</h1>
                <p>{count}</p>
                <button onClick={this.addDecrementMessage}>-</button>
                <button onClick={this.addIncrementMessage}>+</button>
                <ul>
                    {messages.map((item, index) => (
                        <Message key={index} item={item} />
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDom.render(
    <HelloMessage name="Brooomigooo" />,
    document.getElementById("hello-example")
);