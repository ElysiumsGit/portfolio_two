import React from "react";

const Stats = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "143", label: "Completed Projects" },
    { value: "114", label: "Happy Customers" },
    { value: "20+", label: "Honors and Awards" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <h2 className="text-yellow-400 text-3xl font-bold">{stat.value}</h2>
          <p className="text-sm mt-2">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
