import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    marginTop: 64,
  }
});

const Container = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}

export default Container
