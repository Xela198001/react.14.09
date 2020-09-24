import React from "react";

export default function MessageComponent(props) {
  const { text } = props;
  return <li>{text}</li>;
}
