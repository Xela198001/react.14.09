import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';
import Profile from '../Profile';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chats/:id" component={Chats} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route
        render={() => (
          <div>
            <h1>I am 404</h1>
          </div>
        )}
      />
    </Switch>
  );
};

export default RootRouter;
