import React from "react";
import Box from "./Box";

function Result({
  country,
  cityName,
  temp,
  windSpeed,
  humidity,
  icon,
  description,
  time,
  day,
  airpressure,
  visibility,
}) {
  const dayStatus = () => {
    if (day === 0) {
      return "Night";
    } else {
      return "Day";
    }
  };

  return (
    <div className="flex flex-col gap-6 my-6 w-screen pb-4">
      <div className="flex flex-col md:flex-row gap-4 justify-around items-center text-white px-4">
        <div className="flex md:flex-col items-center gap-2 text-2xl tracking-wider order-2 md:order-none">
          <div className="flex flex-col gap-2 md:gap-4 justify-center">
            <p className="text-2xl md:text-4xl">
              {cityName}, {country}
            </p>
            <p className="text-xl ">{time}</p>
          </div>
          <div className="text-white md:hidden ps-6">
            <p className="text-2xl ">{description}</p>
            <p className="text-2xl">{dayStatus()}</p>
          </div>
        </div>
        <div className="order-1 md:order-none">
          <p className="flex text-7xl">
            <span>{Math.round(temp)}</span>
            <span className="text-4xl">&#8451;</span>
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-6">
          <img src={`https:${icon}`} alt={description} width={150} />
          <div className="text-white hidden md:block">
            <p className="text-2xl ">{description}</p>
            <p className="text-2xl">( {dayStatus()} )</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <Box title="WindSpeed" value={windSpeed} valueSize="k/h" />
        <div className="bg-slate-500 w-60 py-4 mx-auto rounded-md flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl text-white text-center">Humidity</h2>
          <p className="text-white text-center">
            <span className="text-3xl">{humidity}</span> <span>%</span>
          </p>
          <div className="rounded-md w-full pb-4 flex flex-col justify-center px-4">
            <p className="flex justify-between text-sm text-white">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </p>
            <progress className="h-[10px] w-full" value={humidity} max="100" />
          </div>
        </div>
        <Box title="Air Pressure" value={airpressure} valueSize="mb" />
        <Box title="Visibility" value={Math.round(visibility)} valueSize="km" />
      </div>
    </div>
  );
}

export default Result;
