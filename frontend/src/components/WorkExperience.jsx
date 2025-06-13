import React from 'react';

const workExperienceData = [
  {
    title: 'Praetorian Intelligence Incorporation',
    role: 'Fullstack Developer',
    date: 'Jan 2024 - Present',
    description:"Developing and maintaining scalable web applications, mobile application and software using modern technologies across the full stack. Collaborating with cross-functional teams to deliver efficient and user-friendly solutions.",
  },
  {
    title: 'Freelance',
    role: 'Fullstack Developer',
    date: 'Present',
    description:"Designed and built multiple websites, web apps, and custom software solutions for various clients. Gained hands-on experience in client communication, project planning, and full-cycle development.",
  },
  {
    title: 'Family Merchant Development Corporation',
    role: 'Admin Assistant',
    date: 'Present',
    description: "Provided administrative and technical support to ensure smooth office operations. Handled data entry, document management, and assisted with IT-related tasks within the company.",
  },
  {
    title: 'AMA Daet',
    role: 'Technical Assistant',
    date: 'Present',
    description: "Supported faculty and students with technical issues, maintained computer laboratories, and assisted in managing school systems and digital resources.",
  },
];


const WorkExperience = () => {
  return (
    <section className="text-white">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <div>
        {workExperienceData.map((item, index) => (
          <div
            key={index}
            className="relative bg-foreground-1 p-6 rounded-md shadow-md mb-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="bg-foreground-2 px-3 py-1 rounded-full text-sm text-gray-300 w-max">
                {item.date}
              </span>
            </div>
            <p className="text-sm italic text-gray-400">{item.role}</p>
            <p className="text-sm mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
