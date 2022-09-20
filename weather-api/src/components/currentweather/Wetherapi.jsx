import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import PlaceIcon from "@mui/icons-material/Place";
import { useState } from "react";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Wetherapi() {
  const [open, setOpen] = useState(true);
  const [item, setitem] = useState(0);
  const [place, setplace] = useState("");

  const getlocation = {
    APIkey1: "ea6e72aba7d75fbbf6be2aedc208af98",
    APIkey2: "b1b15e88fa797225412429c1c50c122a1",
    locations: {
      Uthukottai: { lat: 13.3339, lon: 79.8927 },
      Tiruvallur: { lat: 13.1231, lon: 79.912 },
      Chennai: { lat: 13.0827, lon: 80.2707 },
      Bangaluru: { lat: 12.9716, lon: 77.5946 },
      Hyderabad: { lat: 17.385, lon: 78.4867 },
      Mumbai: { lat: 19.076, lon: 72.8777 },
      Delhi: { lat: 28.7041, lon: 77.1025 },
    },
  };
  const data = async (lat, lon) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${getlocation.APIkey1}`
    );
    let kelvin = res.data.main.temp;
    let celsius = Math.round(kelvin - 273.15);
    setitem(celsius);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = (event) => {
    let location = event.target.id;
    setplace(location);
    let lat = getlocation.locations[location]["lat"];
    let lon = getlocation.locations[location]["lon"];
    data(lat, lon);
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
              <ListItemButton
                id="Uthukottai"
                sx={{ pl: 4 }}
                onClick={handleClicks}
              >
                Uthukottai
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton
                sx={{ pl: 4 }}
                id="Tiruvallur"
                onClick={handleClicks}
              >
                Tiruvallur
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton
                sx={{ pl: 4 }}
                id="Chennai"
                onClick={handleClicks}
              >
                Chennai
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton
                sx={{ pl: 4 }}
                id="Bangaluru"
                onClick={handleClicks}
              >
                Bangaluru
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton
                sx={{ pl: 4 }}
                id="Hyderabad"
                onClick={handleClicks}
              >
                Hyderabad
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} id="Mumbai" onClick={handleClicks}>
                Mumbai
              </ListItemButton>
            </List>
            <List component="div">
              <ListItemButton sx={{ pl: 4 }} id="Delhi" onClick={handleClicks}>
                Delhi
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
      <Link
        to={`/Displaycalendar/${place}`}
        style={{
          border: "2px solid black",
          backgroundColor: "lightblue",
          color: "brown",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: 700,
          padding: "10px 20px",
          display: "inline-block",
        }}
      >
        WEATHER TEMP FOR NEXT 30 IN {data}
      </Link>
    </div>
  );
}
