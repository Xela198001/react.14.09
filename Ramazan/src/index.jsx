import React from 'react';
import ReactDOM from 'react-dom';
// import message from './components/Message.jsx';

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: [],
    };
    // this.onClick = this.onClick.bind(this);
    this.addmessage = this.addmessage.bind(this);
  }

  // onClick() {
  //   const { count } = this.state;
  //   this.setState({ count: count + 1 });
  // }

  addmessage() {
    const { message, count } = this.state;
    this.setState({ count: count + 1 });
    this.setState({ message: [...message, `сообщение: ${count + 1}`] });
    console.log(this.state.message);
  }
  render() {
    const { count, message } = this.state;

    return (
      <div>
        <p>{count}</p>
        {/* <button>increment</button> */}
        <button onClick={this.addmessage}>addmessage</button>
        <ul>
          {message.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
