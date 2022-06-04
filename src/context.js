import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import defaultVideo from "./assets/default.mp4";
import thunder from "./assets/thunder.mp4";
import drizzle from "./assets/drizzle.mp4";
import light_rain from "./assets/light_rain.mp4";
import heavy_rain from "./assets/heavy_rain.mp4";
import snow from "./assets/snow.mp4";
import fog from "./assets/fog.mp4";
import partly_cloudy from "./assets/partly_cloudy.mp4";
import clear_sky from "./assets/clear_sky.mov";
import overcast_clouds from "./assets/overcast_clouds.mp4";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("redwood city");
  const [weatherData, setWeatherData] = useState();
  const [weatherStatus, setWeatherStatus] = useState();
  const [currentVideo, setCurrentVideo] = useState();

  const apiKey = "916ae70065604f0f9104efc6a0f5b517";

  const url = `https://api.weatherbit.io/v2.0/current?&city=${searchTerm}&key=${apiKey}&units=I`;

  const fetchData = async () => {
    setCurrentVideo("");
    setLoading(true);
    try {
      const { data } = await axios(url, {
        headers: { Accept: "application/json" },
      });
      setWeatherData(data.data[0]);
      setWeatherStatus(data.data[0].weather);
      setVideo(data ? data.data[0].weather.code : 1000);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const setVideo = (statusCode) => {
    if (statusCode >= 200 && statusCode <= 233) {
      setCurrentVideo(thunder);
    } else if (statusCode >= 300 && statusCode <= 302) {
      setCurrentVideo(drizzle);
    } else if (statusCode >= 500 && statusCode <= 501) {
      setCurrentVideo(light_rain);
    } else if (statusCode >= 502 && statusCode <= 522) {
      setCurrentVideo(heavy_rain);
    } else if (statusCode >= 601 && statusCode <= 623) {
      setCurrentVideo(snow);
    } else if (statusCode >= 700 && statusCode <= 751) {
      setCurrentVideo(fog);
    } else if (statusCode >= 801 && statusCode <= 803) {
      setCurrentVideo(partly_cloudy);
    } else if (statusCode === 800) {
      setCurrentVideo(clear_sky);
    } else if (statusCode === 804) {
      setCurrentVideo(overcast_clouds);
    } else if (statusCode > 804) {
      setCurrentVideo(defaultVideo);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  // useEffect(() => {
  //   setVideo(weatherStatus ? weatherStatus.code : 1000);
  // }, [weatherStatus]);

  return (
    <AppContext.Provider
      value={{
        loading,
        weatherData,
        searchTerm,
        setSearchTerm,
        weatherStatus,
        currentVideo,
        setCurrentVideo,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
