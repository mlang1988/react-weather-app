import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
