import React from "react";
import { Circle } from "rc-progress";
import {
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

const LeftProfile = () => {
  const languages = [
    { label: "Tagalog", percent: 100 },
    { label: "English", percent: 90 },
    { label: "Bicol", percent: 80 },
  ];

  const skills = [
    { label: "React", percent: 90 },
    { label: "Node", percent: 95 },
    { label: "JavaScript", percent: 75 },
    { label: "Dart", percent: 65 },
    { label: "Typescript", percent: 85 },
  ];

  const otherSkills = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT knowledge",
  ];

  return (
    <div className="flex flex-col h-full w-[270px] bg-[#1E1E2F] text-white">
      {/* Top Section */}
      <section className="bg-foreground-1 h-[220px] flex flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-gray-600 w-[100px] h-[100px]" />
        <div className="flex flex-col items-center">
          <h1 className="text-[14px] font-semibold">John Carlo A. Abanes</h1>
          <h1 className="text-[12px] text-secondary">Full Stack Developer</h1>
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
          <div className="flex justify-between">
            <span className="font-semibold">Age:</span> <span>26</span>
          </div>
        </div>

        <hr />

        <div className="flex justify-between px-2">
          {languages.map((lang, i) => (
            <div key={i} className="flex flex-col items-center text-xs">
              <div className="relative w-[50px] h-[50px]">
                <Circle
                  percent={lang.percent}
                  strokeWidth={8}
                  strokeColor="#facc15"
                  trailColor="#2e2e3e"
                  className="w-full h-full"
                  style={{
                    path: { transition: "none" },
                    trail: { transition: "none" },
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">
                  {lang.percent}%
                </div>
              </div>
              <span className="mt-2">{lang.label}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="space-y-2 text-xs">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <span>{skill.label}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-800 h-1 rounded">
                <div
                  className="bg-yellow-400 h-1 rounded"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className="space-y-2 text-xs">
          {otherSkills.map((tool, i) => (
            <div key={i} className="flex items-center gap-2">
              <FaCheck className="text-yellow-400 text-[10px]" />
              <span>{tool}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="flex items-center justify-start gap-2">
          <IoMdCloudDownload className="text-yellow-400 text-lg" />
          <h1 className="font-semibold text-xs">DOWNLOAD RESUME</h1>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-foreground-1 h-[40px] flex items-center justify-between gap-4 text-gray-400 text-lg px-6">
        <FaLinkedin size={14} />
        <FaGithub size={14} />
        <FaBehance size={14} />
        <FaTwitter size={14} />
      </section>
    </div>
  );
};

export default LeftProfile;
