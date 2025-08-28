import React from "react";
import { Circle } from "rc-progress";
import {
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import profile from "../assets/profile-jc.jpg";
import { IoMdCloudDownload } from "react-icons/io";
import cplusplus from "../assets/logos/cplusplus.svg";
import css from "../assets/logos/css.svg";
import electron from "../assets/logos/electron.svg";
import figma from "../assets/logos/figma.svg";
import firebase from "../assets/logos/firebase.svg";
import flutter from "../assets/logos/flutter.svg";
import github from "../assets/logos/github.svg";
import html from "../assets/logos/html.svg";
import java from "../assets/logos/java.svg";
import javascript from "../assets/logos/javascript.svg";
import mongodb from "../assets/logos/mongodb.svg";
import mysql from "../assets/logos/mysql.svg";
import nodejs from "../assets/logos/nodejs.svg";
import php from "../assets/logos/php.svg";
import postman from "../assets/logos/postman.svg";
import react from "../assets/logos/react.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import typescript from "../assets/logos/typescript.svg";
import express from "../assets/logos/express.svg";
import dart from "../assets/logos/dart.svg";
import TechStack from "./TechStack";
import resume from "../resume/ABANES_JOHN_CARLO_A.pdf";

const LeftProfile = () => {
  const otherSkills = [
    "Firebase, Postman, REST API", // Platforms & testing tools
    "GIT knowledge, GitHub", // Version control
    "Electron, Flutter", // Cross-platform frameworks
    "MySQL, MongoDB", // Databases
    "PHP, Java, C++", // Backend & general-purpose languages
    "Figma, Photoshop", // Design tools
  ];

  const techStack = [
    { name: "C++", image: cplusplus },
    { name: "CSS", image: css },
    { name: "Electron", image: electron },
    { name: "Figma", image: figma },
    { name: "Firebase", image: firebase },
    { name: "Flutter", image: flutter },
    { name: "GitHub", image: github },
    { name: "HTML", image: html },
    { name: "Java", image: java },
    { name: "JavaScript", image: javascript },
    { name: "MongoDB", image: mongodb },
    { name: "MySQL", image: mysql },
    { name: "Node.js", image: nodejs },
    { name: "PHP", image: php },
    { name: "Postman", image: postman },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwindcss },
    { name: "TypeScript", image: typescript },
    { name: "Express", image: express },
    { name: "Dart", image: dart },
  ];

  return (
    <div className="flex flex-col h-full w-[270px] bg-[#1E1E2F] text-white">
      <section className="bg-foreground-1 h-[220px] flex flex-col items-center justify-center gap-4">
        <div className="border border-white rounded-full">
          <div className="rounded-full bg-gray-600 w-[100px] h-[100px]">
            <img src={profile} alt="" className="rounded-full" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[14px] font-semibold">John Carlo A. Abanes</h1>
          <h1 className="text-[12px] text-secondary">Full-Stack Developer</h1>
        </div>
      </section>

      {/* Scrollable Middle Section */}
      <section className="flex-1 overflow-y-auto bg-foreground-2 px-6 py-6 text-sm space-y-6 scroll-hidden">
        <div>
          <div className="flex justify-between">
            <span className="font-semibold">Residence:</span>{" "}
            <span>Philippines</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Province:</span> <span>Daet</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="font-semibold">Age:</span> <span>26</span>
          </div> */}
        </div>

        <hr />

        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <TechStack key={index} tech={tech} />
          ))}
        </div>

        <div className="space-y-2 text-xs">
          {otherSkills.map((tool, i) => (
            <div key={i} className="flex items-center gap-2">
              <FaCheck className="color-primary text-[10px]" />
              <span>{tool}</span>
            </div>
          ))}
        </div>

        <hr />

        <a
          href={resume}
          download
          className="flex items-center justify-start gap-2 hover:underline hover:text-primary transition-colors duration-300"
        >
          <IoMdCloudDownload className="color-primary text-lg" />
          <h1 className="font-semibold text-xs">DOWNLOAD RESUME</h1>
        </a>
      </section>

      {/* Bottom Section */}
      <section className="bg-foreground-1 h-[40px] flex items-center justify-between gap-4 text-gray-400 text-lg px-6">
        <a
          href="https://www.linkedin.com/in/john-carlo-abanes-316217357/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={14} />
        </a>
        <a
          href="https://github.com/ElysiumsGit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={14} />
        </a>
        <a
          href="https://www.behance.net/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaBehance size={14} />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaTwitter size={14} />
        </a>
      </section>
    </div>
  );
};

export default LeftProfile;
