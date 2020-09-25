import React from 'react';
import {makeStyles} from '@material-ui/core';
import cn from 'classnames';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  bot: {
    color: 'black',
    minWidth: 150,
    minHeight: 30,
    background: 'blanchedalmond',
    borderRadius: 10,
    listStyle: 'none',
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user:{
    color: 'black',
    minWidth: 150,
    minHeight: 30,
    background: 'paleturquoise',
    borderRadius: 10,
    listStyle: 'none',
    marginTop: '2%',
    marginLeft: '180%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

}));
const name = (author) =>{
  const classes = useStyles();
  if (author === 'Bot') return String(classes.bot);
    else return String(classes.user);
}
const Message = ({ author, message, className }) => {
  //const classes = useStyles();
  return (
    <li
      // className={cn('list', {
      //    bot: author === 'Bot',
      //    author: author !== 'Bot',
      //   //className
      // })}
          className = { name(author) }
  
    >
      <span>{`${author}: ${message}`}</span>
    </li>
  );

};

export default Message;
