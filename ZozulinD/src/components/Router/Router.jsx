import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Router = props => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;
