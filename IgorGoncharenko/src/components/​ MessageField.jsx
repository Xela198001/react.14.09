import React from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  messeges: {
    border: "1px solid black",
    borderRadius: "4px",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
  },
  message: {
    flexGrow: "0",
    backgroundColor: "blue",
    color: "white",
    marginBottom: "2px",
  },
}));

const MessageFiled = () => {
  let { id } = useParams();
  const classes = useStyles();
  const [author, setAuthor] = React.useState("");
  const [post, setPost] = React.useState("");
  const [messegs, setMessages] = React.useState([]);
  const addMessege = (e) => {
    e.preventDefault();
    setMessages([...messegs, { [id]: { author, post } }]);
    setAuthor("");
    setPost("");
  };

  return (
    <Grid>
      <Box className={classes.messeges}>
        {messegs.map((messeg, i) => (
          <Box className={classes.message} key={i}>
            <Typography variant="h5" gutterBottom>
              {messeg[id].post}
            </Typography>
            <Typography variant="caption" paragraph>
              Author:{messeg[id].author}
            </Typography>
          </Box>
        ))}
        ;
      </Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="author"
          type="text"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          name="author"
          label="Author"
        />
        <TextField
          id="post"
          value={post}
          onChange={(event) => setPost(event.target.value)}
          type="text"
          name="post"
          label="Your Massege"
        />

        <Button
          onClick={addMessege}
          type="submint"
          size="medium"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Grid>
  );
};
export default MessageFiled;
