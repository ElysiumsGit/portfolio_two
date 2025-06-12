import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "I build responsive, modern websites that work seamlessly across all devices, helping businesses establish a strong online presence.",
    },
    {
      title: "Mobile Development",
      description:
        "I create high-quality mobile applications for both Android and iOS, focusing on performance, usability, and clean design.",
    },
    {
      title: "Software Development",
      description:
        "I develop custom software solutions tailored to unique business needs, ensuring efficiency, scalability, and reliability.",
    },
    {
      title: "Backend Development",
      description:
        "I design and implement secure, scalable, and high-performance backends using modern technologies and best practices for APIs and databases.",
    },
    {
      title: "Frontend Development",
      description:
        "I craft visually appealing and interactive user interfaces that deliver a smooth and engaging user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "I focus on creating intuitive, user-friendly, and aesthetically pleasing designs that enhance satisfaction and improve overall usability.",
    },
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
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
