import React from "react";
import "./Weather.css";
import DateToday from "./DateToday";
import TempUnits from "./TempUnits";
import WeatherIcon from "./WeatherIcon"

export default function WeatherDetails(props) {

  return (
    <div className="WeatherDetails">
      <h2 className= {"CityTitle"}>{props.data.city}</h2>
      <ul>
        <li className="today">
          <DateToday date={props.data.date} />
        </li>
        <li className="text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6" >
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
            <div className="float-left">
              <TempUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="float-right">
            <ul className="description">
              <li> Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}