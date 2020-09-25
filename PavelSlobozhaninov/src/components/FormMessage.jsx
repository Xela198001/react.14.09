import React, { Component } from "react";
import PropTypes from "prop-types";

class FormMessage extends Component {
  state = {
    author: "",
    message: "",
  };

  // componentDidUpdate(){
  //   console.log('huyak')
  //   // console.log(this.state)

  //   this.ansver()
  // }

  // ansver = ()=>{
  //   setTimeout(()=>{
  //     console.log(parent.state);
  //   }, 2000);    
  // }

  onSubmit = (e) => {
    e.preventDefault();
    const { addMessage } = this.props;
    const {setNeedAnswer} = this.props;
    console.log(setNeedAnswer)
    addMessage(this.state);
    setNeedAnswer();
  };
  
  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { author, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            <span>Author: </span>
            <input
              type="text"
              name="author"
              onChange={this.onChange}
              value={author}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Text: </span>
            <input
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

// ругается в консоль, меня это пугает
// FormMessage.propTypes = {
//   prop: PropTypes,
// };

export default FormMessage;
