import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/layouts/HeaderBar/HeaderBar";
import { Box, makeStyles } from "@material-ui/core";
import NewPlaces from "./components/NewPlaces/NewPlaces";
import AddNewFormDialog from "./shared/modals/AddNewFormModal/AddNewFormModal";

const style = makeStyles((theme) => ({
  home: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg')`,
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export const placesMock = [
  {
    id: 0,
    location: "Macedonia",
    placeName: "Galicica",
    cardTitle: "Galicica",
    cardDescription: "Galicica stretches between two lakes, Prespa and Ohrid",
    img:
      "https://images.myguide-cdn.com/macedonia/companies/national-park-galicica/large/national-park-galicica-187040.jpg",
    username: "Aleksandar Djurovski",
    date: "June 4, 2019",
  },
  {
    id: 1,
    location: "Prespa",
    placeName: "Otesevo",
    cardTitle: "Prespa - Otesevo",
    cardDescription: "Otesevo is located in the west cast of Prespa Lake",
    img:
      "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__340.jpg",
    username: "Aleksandar",
    date: "May 14, 2020",
  },
  {
    id: 2,
    location: "Macedonia",
    placeName: "Mavrovo",
    cardTitle: "Mavrovo",
    cardDescription:
      "Mavrovo is national park in stretches between two lakes, Prespa and Ohrid",
    img:
      "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508__340.jpg",
    username: "Aleksandar Djurovski",
    date: "June 4, 2019",
  },
  {
    id: 3,
    location: "Macedonia",
    placeName: "Mavrovo",
    cardTitle: "Mavrovo - Bigorski",
    cardDescription: "Monastiry St Jovan Bigorski",
    img:
      "https://bigorski.org.mk/wp-content/uploads/2018/03/jovan_bigorski.jpg",
    username: "Aleksandar",
    date: "May 14, 2020",
  },
  {
    id: 4,
    location: "Macedonia",
    placeName: "Slivnica",
    cardTitle: "Prespa - Slivnica",
    cardDescription: "Slivnica is located in the east castt of Prespa lake",
    img: "https://bitolskivesnik.mk/wp-content/uploads/2016/07/slivnica-2.jpg",
    username: "Nikola",
    date: "June 4, 2019",
  },
  {
    id: 5,
    location: "Macedonia",
    placeName: "pelister",
    cardTitle: "Bitola - Pelister",
    cardDescription: "Pelister stretches between Prespa Lake and Bitola",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDv20aRL9R4lY2_odzird-mHpn-N22OPl5fY3cOX_79w&usqp=CAU&ec=45688575",
    username: "Igor",
    date: "June 4, 2019",
  },
  {
    id: 6,
    location: "Macedonia",
    placeName: "Bitola",
    cardTitle: "Bitola",
    cardDescription: "Bitola",
    img:
      "https://2.bp.blogspot.com/-5utlnZArpNQ/WPtNonh9foI/AAAAAAAANJ0/FNoLLpYCAqs2K43JmhPTcf-hJ0vn5OQ0gCLcB/s1600/18033920_10156457005569815_2048440857739070981_n.jpg",
    username: "Igor",
    date: "June 4, 2019",
  },
  {
    id: 7,
    location: "Macedonia",
    placeName: "St Naum",
    cardTitle: "Ohrid - St Naum",
    cardDescription: "St Naum",
    img:
      "https://lh3.googleusercontent.com/proxy/IjpOC2vXdUDY0WbBKgiRqjCn9Rob7iNGX1csrLDXw9_XXqtwJECfwdQf7tVskfhuqO6zFuqnTnVwBTPMyeYSRGvoVdcNBfN6FQFvhpQSJhd3uOfXZVtZPOFCNw",
    username: "Aleksandar Djurovski",
    date: "June 4, 2019",
  },
];

const addPlace = (e: any) => {
  const id = placesMock.length;
  placesMock.push({ ...e, id: id });
  console.log("placesMock", placesMock);
};

function App() {
  const classes = style();

  return (
    <Router>
      <div>
        <HeaderBar></HeaderBar>
        <Box className={classes.home}>
          <AddNewFormDialog newPlace={addPlace}></AddNewFormDialog>
        </Box>
        <NewPlaces placeMock={placesMock}></NewPlaces>
      </div>
    </Router>
  );
}

export default App;
