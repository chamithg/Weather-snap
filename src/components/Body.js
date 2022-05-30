import React from "react";
import { useGlobalContext } from "../context";
import Video from "./video";
function Body() {
  const { weatherData } = useGlobalContext();

  const overallWeather = weatherData.weather;

  return (
    <div className="body">
      <div className="today-basic">
        <Video />
        <div className="basic-info">
          <h2>{weatherData.city_name}city</h2>
          <h1>{weatherData.temp}°f</h1>
          <h2>{overallWeather ? overallWeather.description : null}des</h2>
          <h2>icon</h2>
          <h2>
            date{weatherData.ob_time ? weatherData.ob_time.slice(0, 10) : null}
          </h2>
        </div>
        <div className="more-info">
          <div className="card rh">
            <h4>humidity:</h4>
            <h3>{weatherData.rh}%</h3>
          </div>
          <div className="card pres">
            <h4>air pressure:</h4>
            <h3>{weatherData.pres}mb</h3>
          </div>
          <div className="wind-dir card">
            <h4>Wind direction:</h4>
            <h3>{weatherData.uv}</h3>
          </div>
          <div className="wind-spd card">
            <h4>avg wind speed:</h4>
            <h3>{weatherData.wind_spd} mph</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
