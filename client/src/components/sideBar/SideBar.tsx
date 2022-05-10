import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useNavigate } from "react-router-dom";
import "./side-bar.scss";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assests/images/logo.png";
import { confirmAlert } from "../../utils/alerts";
import { setIsOnQuiz } from "../../state/quiz/quiz-actions";

const useStyles = makeStyles({
  listItemText: {
    fontSize: "1.4rem !important",
    color: "white !important",
    textAlign: "center",
  },
  fullList: {
    width: "auto !important",
  },
  paper: {
    background: "#2a2e39 !important",
  },
});

const TemporaryDrawer = function ({
  closeSideBar,
}: {
  closeSideBar: () => void;
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOnQuiz } = useSelector((state: Quiz) => state);
  const [state, setState] = React.useState({
    left: true,
  });

  useEffect(() => {
    if (!state.left) closeSideBar();
  }, [closeSideBar, state]);

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

  const leaveRouter = async (e: Event, link: string) => {
    if (isOnQuiz) {
      e.preventDefault();
      const confirm = await confirmAlert();
      if (confirm) {
        dispatch(setIsOnQuiz(false));
        navigate(link);
      }
    }
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
        <NavLink
          className="navLink"
          to="/"
          onClick={(e) => leaveRouter(e as unknown as Event, "/")}
        >
          <div className="logo">
            <img src={logo} alt="page logo" className="logo" />
          </div>
        </NavLink>
        {["Contact-us", "Jobs", "Sign-up", "Dashboard"].map((text) => (
          <NavLink
            key={text}
            className="navLink"
            to={`/${text.toLowerCase()}`}
            onClick={(e) => leaveRouter(e as unknown as Event, "/")}
          >
            <ListItem button key={text} className="li-item">
              <ListItemText
                primary={text}
                sx={{ fontSize: "1.4rem" }}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
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
