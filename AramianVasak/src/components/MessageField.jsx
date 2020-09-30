import React, { Component } from 'react';

// инпуты и кнопки, создаем новый объект и записываем в массив с сообщениями
// как записать в state?
class MessageField extends Component {
    render() {

        return (
            <React.Fragment>
                <input type="text" placeholder="Type your message" />
                <button type="submit">Send</button>
            </React.Fragment>)
    }
}

export default MessageField