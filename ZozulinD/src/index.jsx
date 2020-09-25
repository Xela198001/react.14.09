import React from 'react';
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';

import Layout from './components/Layout';

const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout/>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
