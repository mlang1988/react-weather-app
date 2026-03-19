import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Berlin</h1>
          <ul>
            <li>Wednesday 17:00, Sunny</li>
            <li>Humidity: 46%, Wind: 10km/h</li>
          </ul>
        </div>
        <div>
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
            alt="Sunny"
          />
          <span className="temp">6</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
