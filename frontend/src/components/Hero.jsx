import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-foreground-1 p-10">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover my Amazing <br /> Development Space!
        </h1>
        <p className="text-lg font-mono mb-6 min-h-[40px]">
          <span className="text-yellow-400">&lt;code&gt;</span>{" "}
          <span className="inline-block min-w-full">
            <TypeAnimation
              sequence={[
                "I build responsive web apps",
                1000,
                "I develop full-stack applications",
                1000,
                "I turn ideas into code",
                1000,
                "I craft scalable backend APIs",
                1000,
                "I design sleek user interfaces",
                1000,
                "I debug like a boss",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "16px",
                display: "inline-block",
                whiteSpace: "nowrap",
                minHeight: "24px", 
              }}
              repeat={Infinity}
            />
          </span>
          <span className="text-yellow-400">&lt;/code&gt;</span>
        </p>
        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300">
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
