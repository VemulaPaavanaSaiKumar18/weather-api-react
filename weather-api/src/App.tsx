import React from "react";
import "./App.css";
import Wetherapi from "./components/currentweather/Wetherapi";
// import { Displaycalendar } from "./components/calendar/Displaycalendar";

function App() {
  return (
    <div className="App">
      <Wetherapi />
      {/* <Displaycalendar /> */}
    </div>
  );
}

export default App;
