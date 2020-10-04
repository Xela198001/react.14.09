import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Setting from '../Setting';
import Chats from '../Chats';
import Home from '../Home';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chats/:id" component={Chats} />
      <Route path="/setting">
        <Setting />
      </Route>
      <Route
        render={() => (
          <div>
            <h1>404</h1>
            <h2>Not Found</h2>
          </div>
        )}
      />
    </Switch>
  );
};

export default RootRouter;
