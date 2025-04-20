import React from "react";

const StatsCard = ({ stat }) => {
  return (
    <>
      <div className="h-full mt-8 font-primary">
        <div className="bg-tan p-6 rounded-lg shadow-lg flex flex-col justify-start h-full">
          <h3 className="text-2xl lg:text-3xl font-bold  text-brown">
            {stat.title}
          </h3>
          <p className="font-medium text-lg  text-gray mb-4">{stat.fun}</p>
          <p className="text-3xl lg:text-4xl font-bold text-dark-brown">
            {stat.value}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
