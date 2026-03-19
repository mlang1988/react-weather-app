import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 17:00",
      description: response.data.condition.description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-between">
          <div>
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                {weatherData.date}, {weatherData.description}
              </li>
              <li>
                Humidity: {weatherData.humidity}%, Wind: {weatherData.wind}/h
              </li>
            </ul>
          </div>
          <div>
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temp">{Math.round(weatherData.temp)}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
