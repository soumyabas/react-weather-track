import React from "react"
import "./App.css";
import Weather from "./Weather"



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Track</h1>
        <Weather defaultCity ="London" />
        <footer>
          This project is coded by {" "}
          <a href=" https://soumyabasnet.com/ ">Soumya Basnet </a>{" "} , and  {" "}
          <a href="https://github.com/soumyabas/react-weather-track" target=" ">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}


