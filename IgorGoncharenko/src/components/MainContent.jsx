import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageFiled from "./​ MessageField.jsx";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <Box className={classes.fullWidth}>
      <div className={classes.content}>
        <MessageFiled />
      </div>
    </Box>
  );
}

export default MainContent;
