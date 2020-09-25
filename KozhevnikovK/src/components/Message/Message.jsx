import React from 'react';
import cn from 'classnames';

const Message = ({ author, message, className }) => {
  return (
    <li
      className={cn('list', {
        'author-bot': author === 'Bot',
        author: author !== 'Bot',
        className,
      })}
    >
      <span>{`${author}: ${message}`}</span>
    </li>
  );
};

export default Message;
