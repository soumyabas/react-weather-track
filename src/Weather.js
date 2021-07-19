import React from "react";
import "./Weather.css";
import Search from "./Search.js"

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <h2>Denholme</h2>
      <ul>
        <li>
          Friday 12:00
        </li>
        <li>
          Mostly Cloudy
        </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
          <span className="Temp">20 </span>
          <span className="Celcius">°C / </span>
          <a href=" " className= "Farenheit"> F </a>   
        </div>
        <div className="col-6">
          <ul className="description">
            <li> Humidity: 72%</li>
            <li>Wind : 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div >
  );
}