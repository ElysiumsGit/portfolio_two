import React from "react";

const Services = () => {
  const services = [
    { title: "Web Development" },
    { title: "UI/UX Design" },
    { title: "Sound Design" },
    { title: "Game Design" },
    { title: "Advertising" },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-foreground-1 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="font-bold text-lg mb-4">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
