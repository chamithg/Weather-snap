import React from "react";

function Body() {
  return (
    <div className="body">
      <div className="body-content">
        <div className="card today-basic">
          <h2>city name:</h2>
          <h1>63°</h1>
          <div className="icon">Cloud</div>
          <h2>mostly cloudy</h2>
          <h2>H:</h2>
          <h2>L:</h2>
        </div>
        <div className="card today-more">
          <h3>humidity:</h3>
          <h3>pressure:</h3>
          <h3>uvIndex:</h3>
          <h3>wind gust:</h3>
          <h3>avg wind speed:</h3>
        </div>
        <div className="day day1">day1</div>
        <div className="day day2">day2</div>
        <div className="day day3">day3</div>
        <div className="day day4">day4</div>
        <div className="day day5">day5</div>
        <div className="day day6">day6</div>
        <div className="day day7">day7</div>
      </div>
    </div>
  );
}

export default Body;
