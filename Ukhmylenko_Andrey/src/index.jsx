import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message';

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 1,
            messages: [],
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
        this.setState({
            count: count + 1,
            messages: [...messages, `Message №${count}`],
        });
    }

    render() {
        const { count, messages } = this.state;
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>from GeekBrains</p>
                <p>{count}</p>
                <button onClick={this.onClick}>Increment</button>
                <button onClick={this.addMessage}>Add new message</button>
                <ul>
                    {messages.map((item, index) => (
                        <Message key={index} item={item} />
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);
