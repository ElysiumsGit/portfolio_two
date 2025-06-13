import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 10, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Honors and Awards" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <h2 className="text-yellow-400 text-3xl font-bold">
            <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
          </h2>
          <p className="text-sm mt-2">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
