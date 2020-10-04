import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import mockchats from "./mockchats.jsx";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: "grey",
  },
  bigAvatar: {
    margin: 30,
    width: 70,
    height: 70,
  },
}));
let newId = 1;
function SideMenu() {
  const classes = useStyles();
  const [addChat, setAddChat] = React.useState(mockchats);
  const onChat = () => {
    newId = newId + 1;
    setAddChat([...addChat, { id: newId, name: "Chat" }]);
  };

  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Avatar
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          className={classes.bigAvatar}
        />
      </Grid>
      <List>
        {addChat.map(({ name, id }) => (
          <Link key={id} to={`/chats/:${id}`}>
            <ListItem key={id}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={`${name}:${id}`} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Button size="small" variant="contained" onClick={onChat}>
        Add Chat
      </Button>
    </Drawer>
  );
}

export default SideMenu;
