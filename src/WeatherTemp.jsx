import React, { useState } from "react";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="temp">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
