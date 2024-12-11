import React from "react";
import CardButton from "./Common/CardButton";

const FeatureCard = ({ src }) => {
  return (
    <div className="bg-gray-100 flex flex-col rounded-xl items-center justify-center">
      <img src={src} alt="AI" className="h-80 w-full" />
      <div className="mt-2">
        <CardButton name={"SKIFF TEAM"} />
        <h2 className="mt-4 mb-4 font-semibold">Lorem ipsum dolor sit</h2>
        <p>
          amet consectetur adipisicing elit. Autem magnam nesciunt reprehenderit
          ab saepe vero, aliquid rerum velit maiores.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
