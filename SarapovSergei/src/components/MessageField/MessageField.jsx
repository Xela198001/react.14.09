import React from "react";
import MessageComponent from "../MessageComponent/MessageComponent.jsx";

export default function MessageField(props) {
  return props.messages.map((message, i) => (
    <MessageComponent key={i} text={message} />
  ));
}
