import React from "react";

const Box = ({ title, value, valueSize }) => {
  return (
    <div className="bg-slate-500 w-60 py-8 mx-auto rounded-md flex flex-col justify-center items-center gap-8">
      <h2 className="text-3xl text-white text-center">{title}</h2>
      <p className="text-white text-center flex items-center gap-2">
        <span className="text-3xl">{value}</span> <span>{valueSize}</span>
      </p>
    </div>
  );
};

export default Box;
