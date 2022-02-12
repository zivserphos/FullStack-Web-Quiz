import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@mui/material/ListItemText";
import "./side-bar.scss";

const useStyles = makeStyles({
  listItemText: {
    fontSize: "1.4rem",
    color: "white",
    textAlign: "center",
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#2a2e39",
  },
});

const TemporaryDrawer = function () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, left: open });
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="side-bar"
    >
      <List>
        {["Home", "About", "Contact-us", "Sign-Up"].map((text) => (
          <ListItem button key={text} className="li-item">
            <ListItemText
              primary={text}
              sx={{ fontSize: "1.4rem" }}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ background: "black" }}>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.paper }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
