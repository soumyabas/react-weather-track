import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay"


export default function WeatherForecast(props) {

  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setloaded(true);

  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              )
            }
          })}
        </div>
      </div>

    );

  } else {
    let apiKey = "e12d4984bdb9b1f3003f6782997bbdc8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
    return (null);

  }
}
