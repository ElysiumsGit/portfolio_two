import React from "react";

const services = [
  { title: "Web Development" },
  { title: "UI/UX Design" },
  { title: "Sound Design" },
  { title: "Game Design" },
  { title: "Advertising" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "143", label: "Completed Projects" },
  { value: "114", label: "Happy Customers" },
  { value: "20+", label: "Honors and Awards" },
];

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden text-white flex flex-col gap-16">
      
      {/* Hero Section */}
      <section className="bg-foreground-1 p-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Discover my Amazing <br /> Art Space!
          </h1>
          <p className="text-lg font-mono mb-6">
            <span className="text-yellow-400">&lt;code&gt;</span> I build web and mobile application <span className="text-yellow-400">&lt;/code&gt;</span>
          </p>
          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300">
            EXPLORE NOW
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-yellow-400 text-3xl font-bold">{stat.value}</h2>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-foreground-1 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg mb-4">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
              </p>
              <button className="text-yellow-400 font-semibold text-sm hover:underline">
                ORDER NOW &gt;
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
