import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Displaycalendar.css";

export const Displaycalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar className="calendar" onChange={onChange} value={value} />
    </div>
  );
};
