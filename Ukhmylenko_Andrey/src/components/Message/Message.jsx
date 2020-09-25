import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Message = ({ author, message }) => {
  return (
    <li
      className={cn('list', {
        'author-bot': author === 'Bot',
        author: author !== 'Bot',
      })}
    >
      <span>{`${author}: ${message}`}</span>
    </li>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
