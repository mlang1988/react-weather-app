import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between">
        <div>
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div>
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="temp">{Math.round(props.data.temp)}</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
