import React, { useState } from "react";
const Message = () => {
  const [items, addMessage] = useState([]);
  let listItems=items.map(element=><li key={items.indexOf(element)}>{element}</li>);
  return (
    <div>
      <button onClick={()=>{
        items.push('some message');
       addMessage([...items]);
      }}>message</button>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};
export default Message;
