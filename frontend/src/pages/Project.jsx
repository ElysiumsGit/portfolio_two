import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StoreWatch from "../assets/store/storeWatch.png";
import adminStore from "../assets/store/admin.png";
import loginStore from "../assets/store/loginStore.png";
import landingStore from "../assets/store/landingStore.png";
import dashboardBusiness from "../assets/businessSuite/dashboard.png";
import employeeList from "../assets/businessSuite/employeeList.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import VirtualLabDashboard from "../assets/virtualLab/dashboard.png";
import VirtualLabAdminList from "../assets/virtualLab/adminList.png";
import VirtualLabLogin from "../assets/virtualLab/login.png";
import digestiveWorkSheet1 from "../assets/bioverse/digestive.png";
import digestiveWorkSheet2 from "../assets/bioverse/digestive2.png";
import digestiveWorkSheet3 from "../assets/bioverse/digestive3.png";
import threeJsModel from "../assets/bioverse/threejsModel.png";
import bioverseHome from "../assets/bioverse/bioverseHome.png";


const services = [
  {
    title: "Praetorian Business Suite",
    image: "",
    description:
      "An integrated enterprise management platform that streamlines operations across finance, HR, inventory, and analytics with real-time dashboards.",
    stack: [
      "Dart (Frontend)",
      "Flutter (UI Framework)",
      "NodeJS (Backend)",
      "Typescript (Backend Language)",
      "Firebase (Database)",
    ],
    results: [
      { type: "web", image: dashboardBusiness, visibility: "private" },
      { type: "web", image: employeeList, visibility: "private" },
    ],
  },
  {
    title: "Store Watch",
    image: StoreWatch,
    description:
      "A store monitoring system that tracks customer activity, sales metrics, and product engagement using visual analytics and reports.",
    stack: [
      "Dart (Frontend)",
      "Flutter (UI Framework)",
      "NodeJS (Backend)",
      "ExpressJS (Backend Framework)",
      "Firebase (Database)",
    ],
    results: [
      { type: "mobile", image: landingStore, visibility: "private" },
      { type: "mobile", image: loginStore, visibility: "private" },
      { type: "mobile", image: adminStore, visibility: "private" },
    ],
  },
  {
    title: "Virtual Lab Cookery Admin Side",
    image: "",
    description:
      "A cross-platform virtual cooking platform where students use the mobile app to simulate culinary procedures and submit their outputs, including tools used, to the admin panel. On the web interface, admins review and score student submissions in real time, creating an interactive and educational feedback loop.",
    stack: [
      "React (Frontend Admin)",
      "MongoDB (Database)",
      "Dart (Frontend Client)",
      "Flutter (UI Framework Client)",
      "Material UI",
      "NodeJS (Backend)",
      "ExpressJS (Backend Framework)",
      "Zustand (State Management in React)",
      "OBX (State Management in Flutter)"
    ],
    results: [
      { type: "web", image: VirtualLabLogin, visibility: "public" },
      { type: "web", image: VirtualLabDashboard, visibility: "public"  },
      { type: "web", image: VirtualLabAdminList, visibility: "public"  },
      { type: "web", image: VirtualLabAdminList, visibility: "public"  },
    ],
  },
  {
    title: "Bioverse",
    image: "",
    description:
      "A collaborative biology research and journal platform for students and scientists to publish, peer-review, and explore biological discoveries.",
    stack: [
      "React (Frontend Admin)",
      "MongoDB (Database)",
      "Material UI",
      "PHP (Backend)",
      "ThreeJS (Render 3d object)",
    ],
    results: [
      { type: "web", image: bioverseHome, visibility: "public"  },
      { type: "web", image: digestiveWorkSheet1, visibility: "public"  },
      { type: "web", image: digestiveWorkSheet2, visibility: "public"  },
      { type: "web", image: digestiveWorkSheet3, visibility: "public"  },
      { type: "web", image: threeJsModel, visibility: "public"  },
    ],
  },
  {
    title: "Document Repository",
    image: "",
    description:
      "A secure digital archive system that allows users to upload, manage, and share official documents with version tracking.",
    stack: [
      "MongoDB (Database)",
      "ExpressJS (Backend Framework)",
      "React (Frontend)",
      "NodeJS (Backend)",
    ],
    results: [],
  },
  {
    title: "Popina",
    image: "",
    description:
      "A social media platform focused on short-form restaurant reviews, dish ratings, and interactive food content.",
    stack: [
      "Flutter (Framework)",
      "Dart (Frontend)",
      "MySQL",
      "NodeJS (Backend)",
      "ExpressJS (Backend Framework)",
    ],
    results: [],
  },
  {
    title: "HR Haven Mobile",
    image: "",
    description:
      "A mobile-first HR management app for employee tracking, leave applications, timesheets, and payroll reports.",
    stack: [
      "Flutter (Framework)",
      "Dart (Frontend)",
      "MySQL",
      "NodeJS (Backend)",
      "ExpressJS (Backend Framework)",
    ],
    result: [],
  },
  {
    title: "Portfolio",
    image: "",
    description:
      "A personal developer portfolio showcasing project experience, GitHub contributions, and tech stack expertise.",
    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS (Contact Form)",
      "GitHub API",
      "Vercel",
    ],
    result: [],
  },
];

const Project = () => {
  const { id } = useParams();
  const project = services[parseInt(id)];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (index) => {
    const isPrivate = project.results[index].visibility === "private";
    if (!isPrivate) {
      setSelectedIndex(index);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % project.results.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex(
      (prev) => (prev - 1 + project.results.length) % project.results.length
    );
  };

  if (!project) {
    return <div className="text-white">Project not found.</div>;
  }

  const isWeb = project.results?.[0]?.type === "web";

  return (
    <div className="text-white flex flex-col gap-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-70 object-cover mb-4"
          />
        ) : (
          <div className="w-full h-96 bg-gray-700 flex items-center justify-center text-gray-400 text-sm mb-4">
            No Image Available
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Info Project</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-2 w-full md:w-2/3 flex flex-col gap-4 items-start bg-foreground-1 p-6 rounded-sm shadow">
            <h1 className="text-lg font-semibold">Description</h1>
            <p>{project.description}</p>
            <button className="text-yellow-400 font-semibold text-sm hover:underline">
              READ MORE &gt;
            </button>
          </div>

          <div className="flex-1 w-full md:w-1/3 flex flex-col gap-4 items-start bg-foreground-1 p-6 rounded-sm shadow">
            <h1 className="text-lg font-semibold">Tech Stack</h1>
            <ul className="list-disc list-inside text-sm space-y-1">
              {project.stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Result</h2>
        <div
          className={`grid gap-6 ${
            isWeb
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {project.results && project.results.length > 0 ? (
            project.results.map((result, index) => {
              const isPrivate = result.visibility === "private";
              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`overflow-hidden shadow-lg transition-transform transform ${
                    isPrivate ? "cursor-not-allowed" : "hover:scale-105 cursor-pointer"
                  } ${result.type === "mobile" && "border"} border-gray-600 ${
                    result.type === "mobile"
                      ? "w-[250px] h-[500px] mx-auto rounded-2xl bg-black p-2 flex items-center justify-center"
                      : "w-full h-[250px]"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={result.image}
                      alt={`Result ${index + 1}`}
                      className={`object-cover w-full h-full rounded ${
                        isPrivate ? "blur-md grayscale opacity-60" : ""
                      }`}
                    />
                    {isPrivate && (
                      <div className="absolute inset-0 flex items-center justify-center text-white bg-black/60 rounded">
                        <span className="text-sm font-semibold">Private Image</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  Placeholder {index + 1}
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {showModal && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-[90%] flex items-center justify-between">
            <img
              src={project.results[selectedIndex].image}
              alt="Enlarged"
              className="rounded-lg shadow-lg"
            />
            {project.results.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 bg-black/50 px-4 py-4 rounded hover:bg-black cursor-pointer"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 bg-black/50 px-4 py-4 rounded hover:bg-black cursor-pointer"
                >
                  <IoIosArrowForward />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

