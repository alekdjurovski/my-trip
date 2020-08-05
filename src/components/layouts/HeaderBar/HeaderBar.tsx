import React, { useState } from "react";
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
import { Button } from "@material-ui/core";
// import {changeView} 

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

let viewDD = 'card' as any; 
export let viewMode= React.createContext(viewDD)

export const HeaderBar: React.FC<any> = ({onActiveView}) => {
  // const NewPlaces : React.FC<any>  = ({placeMock, value}) => {
  const [active, setActive] = useState(null);
  const classes = useStyles();
  let activView='list' as any;

  const changeView =(viewMode: any) => {
    setActive(viewMode);
    // activeW(active)
    };

  
    
    
  return (
    <viewMode.Provider value={active}>
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            My Travel
          </Typography>

          <div className={classes.grow} />

          <Button
          variant="outlined"
          color="secondary"
          onClick={() => onActiveView("card")}
        >
          Card View
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => onActiveView( "list")}
        >
          List View
        </Button>
          <div className={classes.sectionDesktop}>
            <AccountCircle />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </viewMode.Provider>
  );
}

export default HeaderBar;