import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

function Body() {
  const { weatherData, weatherStatus, currentVideo } = useGlobalContext();

  let icon = require(`../assets/icons 2/${
    weatherStatus ? weatherStatus.icon : "c02d"
  }.png`);

  return (
    <div className="body">
      <div className="today-basic">
        <video autoPlay muted loop id="myVideo">
          <source src={currentVideo} type="video/mp4" />
        </video>
        <div className="basic-info">
          <h2>{weatherData ? weatherData.city_name : null}</h2>
          <h1>{weatherData ? weatherData.temp : null} °f</h1>
          <h2>{weatherStatus ? weatherStatus.description : null}</h2>

          <img className="weather-Icon" src={icon} alt0="icon not found" />

          <h2>{weatherData ? weatherData.ob_time.slice(0, 10) : null}</h2>
        </div>
        <div className="more-info">
          <div className="card rh">
            <h4>humidity:</h4>
            <h3>{weatherData ? weatherData.rh : null}%</h3>
          </div>
          <div className="card pres">
            <h4>air pressure:</h4>
            <h3>{weatherData ? weatherData.pres : null}mb</h3>
          </div>
          <div className="wind-dir card">
            <h4>Wind direction:</h4>
            <h3>{weatherData ? weatherData.wind_cdir : null}</h3>
          </div>
          <div className="wind-spd card">
            <h4>avg wind speed:</h4>
            <h3>{weatherData ? weatherData.wind_spd : null} mph</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
