import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Search from "./Search.js";
import DateToday from "./DateToday";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {;
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconImg: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Search />
        <h2>{weatherData.city}</h2>
        <ul>
          <li>
            <DateToday date={weatherData.date} />
          </li>
          <li className="text-capitalize">
            {weatherData.description}
          </li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconImg}
              alt="cloudy"
            />
            <span className="Temp">{Math.round(weatherData.temperature)}</span>
            <strong className="Celcius">°C / </strong>
            <a href=" " className="Farenheit"> F </a>
          </div>
          <div className="col-6">
            <ul className="description">
              <li> Humidity: {weatherData.humidity}%</li>
              <li>Wind : {weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div >
    );
  } else {
    const apiKey = "e12d4984bdb9b1f3003f6782997bbdc8";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return (
      "Loading . . ."
    );
  }

}