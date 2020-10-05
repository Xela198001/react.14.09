import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { asyncGetProfile } from '../../reducers/profileReducer';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';

const RootRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProfile());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chats/:id" component={Chats} />
      <Route path="/about">
        <About />
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
