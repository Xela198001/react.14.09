import React from 'react';
import ReactDom from 'react-dom';

console.log("Hello React!");

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  };
  
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);