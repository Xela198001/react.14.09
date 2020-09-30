import React, { Component } from 'react';
import PropTypes from 'prop-types';

//компонент со строкой сообщения. Именно в него рендерится каждый объект из массива
class Message extends Component {
    render() {
        const { author, text } = this.props;

        return (<React.Fragment>
            <span style="font-size: 10px; color: #ccc">{author}</span>
            <div>{text}</div>
        </React.Fragment>)
    }
}

Message.PropTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Message