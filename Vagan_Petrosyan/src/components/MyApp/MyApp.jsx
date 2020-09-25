import React from "react";
import Layout from "../Layout";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme();

const MyApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout />
        </ThemeProvider>
    );
};

export default MyApp;