import React from "react";

const TechStack = ({ tech }) => {
  const isExpress = tech.name === "Express";

  return (
    <div className="relative group flex flex-col items-center justify-center">
      <img
        src={tech.image}
        alt={tech.name}
        className={` ${isExpress && "bg-white border rounded-sm"} w-7 h-7 object-contain`}
      />
      <span className="absolute bottom-[-20px] text-[10px] bg-black text-white px-1 rounded opacity-0 group-hover:opacity-100 transition">
        {tech.name}
      </span>
    </div>
  );
};

export default TechStack;
