import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export const Displaycalendar = () => {
  const params = useParams();
  const [calendars, setcalendars] = useState([]);
  const data = params.location;
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
  const calendar = async (lat, lon) => {
    let res = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=b1b15e88fa797225412429c1c50c122a1`
    );
    let data = res.data.list;
    setcalendars(
      data.map((cal) => {
        return {
          date: new Date(cal.dt * 1000).getDate(),
          temp: Math.round(cal.temp.day - 273.15),
        };
      })
    );
  };
  const handleClicks = () => {
    let lat = getlocation.locations[data]["lat"];
    let lon = getlocation.locations[data]["lon"];
    calendar(lat, lon);
  };
  handleClicks();
  return (
    <div>
      <Box sx={{ width: "40rem", marginLeft: "27.5rem" }}>
        <Typography
          sx={{
            marginTop: "18px",
            color: "brown",
            fontSize: "30px",
            bgcolor: "lightblue",
          }}
        >
          Weather for next 30 days in {data}
        </Typography>
        <Box
          sx={{
            width: "40rem",
            height: "auto",
            bgcolor: "#d3d6d8",
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
          }}
        >
          {calendars.map((data) => (
            <Box
              sx={{
                width: "87.4px",
                height: "7rem",
                bgcolor: "lightblue",
                border: "2px solid black",
              }}
            >
              <Typography
                sx={{ marginTop: "18px", color: "brown", fontSize: "30px" }}
              >
                {data.date}
              </Typography>
              <Typography sx={{ marginTop: "18px" }}>
                Temp:{data.temp}°C
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Link
        to="/"
        style={{
          border: "2px solid black",
          backgroundColor: "lightblue",
          color: "brown",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          padding: "10px 20px",
          marginRight: "50.5rem",
          marginTop: "10rem",
        }}
      >
        BACK
      </Link>
    </div>
  );
};
