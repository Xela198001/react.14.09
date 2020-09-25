import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class Message extends Component {
  // static propTypes = {
  //   text: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <div
      className='message'
      style={{ alignSelf: this.props.author === 'Bot' ? 'flex-start' : 'flex-end' }}>
        <div> {this.props.message} </div>
        <div className='message-sender'>{ this.props.author }</div>
      </div>
    );
  }
}

export default Message;