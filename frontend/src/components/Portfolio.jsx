import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const services = [
    {
      title: "Praetorian Business Suite",
      image: "",
    },
    {
      title: "Store Watch",
      image: "",
    },
    {
      title: "Virtual Lab Cookery",
      image: "",
    },
    {
      title: "Bioverse",
      image: "",
    },
    {
      title: "Document Repository",
      image: "",
    },
    {
      title: "Popina",
      image: "",
    },
    {
      title: "HR Haven Mobile",
      image: "",
    },
     {
      title: "Portfolio",
      image: "",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#2c2c3c] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
                No Image Available
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Elit
                sequi commodi dignissimos.
              </p>
              <Link to={`/project/${index}`}>
                <button className="text-yellow-400 font-semibold text-sm hover:underline">
                  READ MORE &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
