import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Wetherapi from "./components/currentweather/Wetherapi";
import { Displaycalendar } from "./components/calendar/Displaycalendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wetherapi />} />
        <Route
          path="/Displaycalendar/:location"
          element={<Displaycalendar />}
        />
      </Routes>
    </div>
  );
}

export default App;
