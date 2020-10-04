import React, { Children } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopMenu from "./TopMenu.jsx";
import SideMenu from "./SideMenu.jsx";
import Footer from "./Footer.jsx";
import { Box } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  inner: {
    width: `calc(100% - ${drawerWidth}px)`,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    marginLeft: "auto",
    marginTop: theme.spacing(9),
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <TopMenu />
      <Box className={classes.inner}>{children}</Box>
      <SideMenu />
      <Footer />
    </div>
  );
}

export default Layout;
