import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    title: "Praetorian Business Suite",
    image: "",
    description:
      "An integrated enterprise management platform that streamlines operations across finance, HR, inventory, and analytics with real-time dashboards.",
    stack: [
      "React (Frontend)",
      "Tailwind CSS (Styling)",
      "Node.js (Backend)",
      "Express.js (API Layer)",
      "MongoDB (Database)",
      "JWT (Authentication)",
      "Vercel (Deployment)",
    ],
  },
  {
    title: "Store Watch",
    image: "",
    description:
      "A store monitoring system that tracks customer activity, sales metrics, and product engagement using visual analytics and reports.",
    stack: [
      "Vue.js (Frontend)",
      "Vuetify (UI Framework)",
      "Laravel (Backend)",
      "MySQL (Database)",
      "Chart.js (Visualization)",
      "AWS EC2 (Hosting)",
    ],
  },
  {
    title: "Virtual Lab Cookery",
    image: "",
    description:
      "An interactive virtual cooking platform for students to practice culinary procedures in a simulated lab environment.",
    stack: [
      "React",
      "Three.js (3D Visualization)",
      "Firebase (Auth & Storage)",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    title: "Bioverse",
    image: "",
    description:
      "A collaborative biology research and journal platform for students and scientists to publish, peer-review, and explore biological discoveries.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Auth.js (Authentication)",
      "Vercel",
    ],
  },
  {
    title: "Document Repository",
    image: "",
    description:
      "A secure digital archive system that allows users to upload, manage, and share official documents with version tracking.",
    stack: [
      "Angular",
      "Spring Boot",
      "MongoDB",
      "Docker",
      "JWT",
      "AWS S3 (File Storage)",
    ],
  },
  {
    title: "Popina",
    image: "",
    description:
      "A social media platform focused on short-form restaurant reviews, dish ratings, and interactive food content.",
    stack: [
      "Flutter (Mobile)",
      "Firebase",
      "Google Maps API",
      "Node.js",
      "Cloud Functions",
    ],
  },
  {
    title: "HR Haven Mobile",
    image: "",
    description:
      "A mobile-first HR management app for employee tracking, leave applications, timesheets, and payroll reports.",
    stack: [
      "React Native",
      "Expo",
      "Django REST Framework",
      "SQLite (Local DB)",
      "JWT",
      "Google Cloud Run",
    ],
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
  },
];



const Project = () => {
  const { id } = useParams();
  const project = services[parseInt(id)];

  if (!project) {
    return <div className="text-white">Project not found.</div>;
  }

  return (
    <div className="text-white flex flex-col gap-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-70 object-cover mb-4" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Placeholder 1
          </div>

          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Placeholder 2
          </div>

          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Placeholder 3
          </div>

          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            Placeholder 4
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
