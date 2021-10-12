import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./WeatherForecast.css";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {

    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "WIND",
    "11n": "WIND",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "MIST",
    "50n": "MIST",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color='#969696'
      size={props.size}
      animate={true}
    />
  );
}


