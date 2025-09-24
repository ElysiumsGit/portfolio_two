import React from "react";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white px-6 md:px-16 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-yellow-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover my <span className="text-yellow-400">Amazing</span> <br />
            Development Space!
          </h1>

          <p className="text-base md:text-lg font-mono mb-10 min-h-[40px]">
            <span className="text-yellow-400">&lt;code&gt;</span>{" "}
            <TypeAnimation
              sequence={[
                "I build responsive web apps",
                1500,
                "I develop full-stack applications",
                1500,
                "I turn ideas into code",
                1500,
                "I craft scalable backend APIs",
                1500,
                "I design sleek user interfaces",
                1500,
                "I debug like a boss",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-white"
              repeat={Infinity}
            />{" "}
            <span className="text-yellow-400">&lt;/code&gt;</span>
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300">
              🚀 Explore Now
            </button>
          </div>
        </div>

        {/* Right Section - Spline Model */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] flex justify-center">
          <Spline scene="https://prod.spline.design/YR0CTXrcqoBamJAM/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
