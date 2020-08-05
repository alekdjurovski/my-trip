import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Avatar,
  InputBase,
  fade,
  Button,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AddNewFormDialog from "../../shared/modals/AddNewFormModal/AddNewFormModal";
import { placesMock } from "../../App";
import Places from "../Places/Places";
// import {viewMode} from "../layouts/HeaderBar/HeaderBar"

const style = makeStyles((theme) => ({
  cardsContainer: {
    paddingTop: theme.spacing(3),
  },
  title: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const NewPlaces : React.FC<any>  = ({placeMock, value}) => {
  console.log('NWEEW', value)
  const classes = style();

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  

  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState([] as any);
  const [view, setView] = useState("");

  useEffect(() => {
    setPlaces(placeMock as any);
  }, [placeMock, filteredPlaces]);

  useEffect(() => {
    setView(value);
  } );

  useEffect(() => {
    setFilteredPlaces(
      places.filter((place: any) =>
        place.cardTitle.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, places]);

  const changeView = ( viewMode: any) => {
    setView(viewMode);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.cardsContainer}>
        
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h4" className={classes.title}>
                NEW PLACES
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AddNewFormDialog></AddNewFormDialog>
            </Grid>
          </Grid>
        </div>

        {view === "list" ? (
          <Places></Places>
        ) : (
          <Grid container spacing={3}>
            {filteredPlaces.map((place: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={place.img} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {place.cardTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {place.cardDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {place.username}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                        >
                          {place.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default NewPlaces;
