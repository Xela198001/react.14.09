import React from "react";
import { Message } from "./Message.jsx";
let array = ["Привет", "Как дела"];
function App() {
  const [messageValue, setMessageValue] = React.useState("");
  const [newMessage, setNewMessage] = React.useState(array);
  function inputChange(event) {
    setMessageValue(event.target.value);
  }
  function sendMessage() {
    setNewMessage(newMessage.push(messageValue));
  }

  return (
    <div>
      <h1>Hello React{messageValue}</h1>
      <Message items={newMessage} />
      <p>{messageValue}</p>
      <input type="text" value={messageValue} onChange={inputChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
export default App;
