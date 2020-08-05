import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  })
);

export default function HeaderBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            My Travel
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <AccountCircle />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
