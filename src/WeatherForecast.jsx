import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="ForecastDay">Thu</div>
        <div>
          <img src={props.icon} className="ForecastIcon" />
        </div>
        <div className="ForecastTemperatures">
          <span className="tempMax">19°</span>
          <span className="tempMin">9°</span>
        </div>
      </div>
    </div>
  );
}
