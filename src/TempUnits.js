import React, { useState } from "react";
import "./TempUnits.css";


export default function TempUnits(props) {
  const [unit, setUnit] = useState("celsius")
  function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "celsius") {
    return (
      
      <div className="float-left TempUnits">
        
        <span className="Temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C | {" "}
          <a href="/" onClick={showFarenheit}> °F </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32
    return (
      <div className="TempUnits">
        <span className="Temp">{Math.round(fahrenheit)} </span>
        <span className="unit">
          <a href="/" onClick={showCelsius}> °C </a> {" "}
          | °F
        </span>
      </div>
    );
  }
}