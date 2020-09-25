import React from 'react'
import { makeStyles } from '@material-ui/core'

import ChatList from '../ChatList'
import Header from '../Header'
import Messages from '../Messages'
import Container from '../Container'

const Layout = () => {
  return (
    <>
      <Header />
      <ChatList />
      <Container>
        <Messages />
      </Container>
    </>
  )
};

export default Layout;
