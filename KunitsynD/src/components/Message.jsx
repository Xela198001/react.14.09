import React from "react";

const Message = ({ author, message }) => {
  return (
    <li>
      <span>{`${author}: ${message}`}</span>
    </li>
  );
};

export default Message;
