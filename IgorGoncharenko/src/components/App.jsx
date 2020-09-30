import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "../pages/RootRouter/RootRouter.jsx";
//import { Provider } from "react-redux";
//import store from "../store/store.js";
const theme = createMuiTheme();
const App = () => {
  return (
    //<Provider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </BrowserRouter>
    //</Provider>
  );
};

export default App;
