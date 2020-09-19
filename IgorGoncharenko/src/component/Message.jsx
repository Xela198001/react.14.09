import React from "react";
export function Message(props) {
  const messageItem = props.items.map((item, i) => <div key={i}>{item}</div>);
  return <div>{messageItem}</div>;
}
