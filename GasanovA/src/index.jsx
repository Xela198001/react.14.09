import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message';

class HelloMessage extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0, 
      messages: [],
    }

    this.onClick = this.onClick.bind(this);
    this.addMessege = this.addMessege.bind(this);
  }
    onClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
    }

    addMessege() {
      const { messages, count } = this.state;
      this.setState({ messages: [...messages, `Новое сообщение ${count}`]});
      console.log(messages);
    }

    render() {
      const {count, messages} = this.state;

      return (
        <div>
          Hello {this.props.name}
          <p>{count}</p>
          <button onClick={this.onClick}>увеличить</button>
          <button onClick={this.addMessege}>Сообщение</button>
          <ul>
            {messages.map((item, index)=>(
              //<li key={index}>{item}</li>
              <Message key={index} item={item}/>
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