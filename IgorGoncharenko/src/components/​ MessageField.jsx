import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(10),
    },
    button: {},
  },
}));

const MessageFiled = () => {
  const classes = useStyles();
  const [val, setVal] = React.useState({ author: "", post: "", message: [] });
  const handlerChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };
  const addMessege = (e) => {
    e.preventDefault();
    const author = val.author;
    const post = val.post;
    val.message.push({ author, post });
  };

  return (
    <Grid>
      <Box>
        {val.message.map((mes, index) => (
          <Box key={index}>
            <Typography paragraph>{mes.author}</Typography>
            <Typography paragraph>{mes.post}</Typography>
          </Box>
        ))}
        ;
      </Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="author"
          type="text"
          onChange={handlerChange}
          value={val.author}
          name="author"
          label="Author"
        />
        <TextField
          id="post"
          onChange={handlerChange}
          value={val.post}
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
