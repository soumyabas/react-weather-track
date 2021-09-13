import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails.js";
import WeatherForecast from "./WeatherForecast.js";


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon, 
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "e12d4984bdb9b1f3003f6782997bbdc8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter name of the city" className={"Enter"} onChange={handleCitySearch} />
              <input type="Submit" value="Search" className="btn-btn-primary" />
            </form>
            <WeatherDetails data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
        </div>
      </div >
    );
  } else {
    search();
    return (
      "Loading . . ."
    );
  }
}