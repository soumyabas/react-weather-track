import React from "react";
import "./WeatherDetails.css";
import DateToday from "./DateToday";
import TempUnits from "./TempUnits";

export default function WeatherDetails(props) {

  return (
    <div className="WeatherDetails">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <DateToday date={props.data.date} />
        </li>
        <li className="text-capitalize">
          {props.data.description}
        </li>
      </ul>

      <div className="row">
        <div className="col-8">
          <img
            src={props.data.iconImg}
            alt="cloudy"
          />
          <TempUnits celsius={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul className="description">
            <li> Humidity: {props.data.humidity}%</li>
            <li>Wind : {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}