import React from "react";

const Message = ({ count }) => {
  return (
    <div>
      <h3>Привет, я функциональнй компонент</h3>
      <p>{count}</p>
    </div>
  );
};

export default Message;
