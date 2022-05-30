import React from "react";
import { useGlobalContext } from "../context";
import thunder from "../assets/thunder.mp4";
import drizzle from "../assets/drizzle.mp4";
import light_rain from "../assets/light_rain.mp4";
import heavy_rain from "../assets/heavy_rain.mp4";
import snow from "../assets/snow.mp4";
import fog from "../assets/fog.mp4";
import partly_cloudy from "../assets/partly_cloudy.mp4";
import clear_sky from "../assets/clear_sky.mov";
import overcast_clouds from "../assets/overcast_clouds.mp4";
import defaultVideo from "../assets/default.mp4";

function Video() {
  const { weatherData } = useGlobalContext();

  let currentVideo = {};

  const statusCode = 1000;
  if (statusCode >= 200 && statusCode <= 233) {
    currentVideo = thunder;
  } else if (statusCode >= 300 && statusCode <= 302) {
    currentVideo = drizzle;
  } else if (statusCode >= 500 && statusCode <= 501) {
    currentVideo = light_rain;
  } else if (statusCode >= 502 && statusCode <= 522) {
    currentVideo = heavy_rain;
  } else if (statusCode >= 601 && statusCode <= 623) {
    currentVideo = snow;
  } else if (statusCode >= 700 && statusCode <= 751) {
    currentVideo = fog;
  } else if (statusCode >= 801 && statusCode <= 803) {
    currentVideo = partly_cloudy;
  } else if (statusCode === 800) {
    currentVideo = clear_sky;
  } else if (statusCode === 804) {
    currentVideo = overcast_clouds;
  } else {
    currentVideo = defaultVideo;
  }

  return (
    <video autoPlay muted loop id="myVideo">
      <source src={currentVideo} type="video/mp4" />
    </video>
  );
}

export default Video;
