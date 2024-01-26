import React, { useState, useEffect } from "react";
import InputField from "./COMPONENTS/INPUTFIELD";
import Result from "./COMPONENTS/RESULT";

function App() {
  const [search, setSearch] = useState("Dhaka");
  const [weatherData, setWeatherData] = useState({
    country: "",
    cityName: "",
    temp: 0,
    windSpeed: 0,
    humidity: 0,
    icon: "",
    description: "",
    time: "",
    day: "",
    airpressure: "",
    visibility: "",
  });

  const fatchData = async () => {
    const API_KEY = "8b1667fb6ebe4b38b8945137242101";
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=no`;
    const response = await fetch(URL);
    const resjson = await response.json();
    setWeatherData({
      ...weatherData,
      country: resjson.location.country,
      cityName: resjson.location.name,
      temp: resjson.current.temp_c,
      windSpeed: resjson.current.wind_kph,
      humidity: resjson.current.humidity,
      icon: resjson.current.condition.icon,
      description: resjson.current.condition.text,
      time: resjson.location.localtime,
      day: resjson.current.is_day,
      airpressure: resjson.current.pressure_mb,
      visibility: resjson.current.vis_km,
    });
  };

  const getWeatherData = () => {
    fatchData();
  };
  useEffect(() => {
    fatchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex py-8 ">
        <img
          className="drop-shadow-lg hidden md:flex"
          width={70}
          src="./globe.png"
          alt="logo"
        />
        <h1 className="text-4xl text-white font-bold text-center my-4">
          Weather App
        </h1>
      </div>
      <InputField
        search={search}
        setSearch={setSearch}
        getWeatherData={getWeatherData}
      />
      <Result {...weatherData} />
    </div>
  );
}

export default App;
