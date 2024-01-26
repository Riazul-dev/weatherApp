import React from "react";
import { FaSearch } from "react-icons/fa";

function InputField({ search, setSearch, getWeatherData }) {
  return (
    <div className="w-[90vw] md:w-96 flex rounded-md overflow-hidden">
      <input
        className="w-full p-2 text-xl text-slate-800 outline-none rounded-none"
        type="search"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        onClick={getWeatherData}
        className="shrink-0 bg-green-500 px-4 text-xl text-white"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default InputField;
