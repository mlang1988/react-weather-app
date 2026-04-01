import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mb-5">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="mb-1">{props.data.city}</h1>
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
          <WeatherTemp celsius={props.data.temp} />
        </div>
      </div>
    </div>
  );
}
