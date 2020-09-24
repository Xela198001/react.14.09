import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>from GeekBrains</p>
        <p>{count}</p>
        <button onClick={this.onClick}>increment</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);
