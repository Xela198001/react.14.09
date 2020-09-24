import React from "react";

const Message = ({ name, author, message }) => {
  return (
    <li>
      <span>{`${author}: ${message}`}</span>
    </li>
  );
};

export default Message;
