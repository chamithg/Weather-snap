import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    "X-RapidAPI-Key": "ab1a8c4d4amshd69a26fff30c660p1cbf57jsnbb92f919b236",
  },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherStatus, setWetherStatus] = useState({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://weatherbit-v1-mashape.p.rapidapi.com/current?&city=${searchTerm}&units=imperial`,
        options
      );
      const data = await response.json();
      setWeatherData(data.data[0]);

      console.log(weatherStatus);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        weatherData,
        searchTerm,
        setSearchTerm,
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
