import * as React from "react";
import axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import PlaceIcon from "@mui/icons-material/Place";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Wetherapi() {
  const [open, setOpen] = React.useState(true);
  const [item, setitem] = React.useState(0);
  const [place, setplace] = React.useState("");

  const locations = [
    { APIkey: "ea6e72aba7d75fbbf6be2aedc208af98" },
    { Placename: "Uthukottai", lat: 13.3339, lon: 79.8927 },
    { Placename: "Tiruvallur", lat: 13.1231, lon: 79.912 },
    { Placename: "Chennai", lat: 13.0827, lon: 80.2707 },
    { Placename: "Bangaluru", lat: 12.9716, lon: 77.5946 },
    { Placename: "Hyderabad", lat: 17.385, lon: 78.4867 },
    { Placename: "Mumbai", lat: 19.076, lon: 72.8777 },
    { Placename: "Delhi", lat: 28.7041, lon: 77.1025 },
  ];

  const data = async (lat, lon) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${locations[0].APIkey}`
    );
    let kelvin = res.data.main.temp;
    let celsius = Math.round(kelvin - 273.15);
    setitem(celsius);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickuth = () => {
    setplace(locations[1].Placename);
    data(locations[1].lat, locations[1].lon);
  };
  const handleClicktir = () => {
    setplace(locations[2].Placename);
    data(locations[2].lat, locations[2].lon);
  };
  const handleClickchen = () => {
    setplace(locations[3].Placename);
    data(locations[3].lat, locations[3].lon);
  };
  const handleClickbang = () => {
    setplace(locations[4].Placename);
    data(locations[4].lat, locations[4].lon);
  };
  const handleClickhyd = () => {
    setplace(locations[5].Placename);
    data(locations[5].lat, locations[5].lon);
  };
  const handleClickmum = () => {
    setplace(locations[6].Placename);
    data(locations[6].lat, locations[6].lon);
  };
  const handleClickdel = () => {
    setplace(locations[7].Placename);
    data(locations[7].lat, locations[7].lon);
  };

  return (
    <div>
      <div>
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              LOCATIONS
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="SELECT THE PLACE" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickuth}>
                <ListItemText primary="Uthukottai" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClicktir}>
                <ListItemText primary="Tiruvallur" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickchen}>
                <ListItemText primary="Chennai" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickbang}>
                <ListItemText primary="Bangaluru" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickhyd}>
                <ListItemText primary="Hyderabad" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickmum}>
                <ListItemText primary="Mumbai" />
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickdel}>
                <ListItemText primary="Delhi" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Card
          sx={{
            width: "25rem",
            height: "15rem",
            position: "absolute",
            left: "55rem",
            top: "-29rem",
            bgcolor: "lightblue",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginTop: "1rem",
            }}
          >
            {" "}
            WEATHER
          </Typography>
          <Typography
            sx={{
              color: "brown",
              fontSize: "30px",
              marginTop: "3rem",
            }}
          >
            {place}({Math.round(item)}°C)
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
