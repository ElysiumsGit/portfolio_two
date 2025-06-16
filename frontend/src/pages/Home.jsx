import React, { useState } from "react";
import { motion } from "framer-motion";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import GithubSection from "../components/GithubSection";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  const [selectYearOne, setSelectYearOne] = useState(2025);
  const [selectYearTwo, setSelectYearTwo] = useState(2025);
  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);

  const handleYearChange = (setter, loadingSetter, currentYear) => (year) => {
    if (year === currentYear) return;
    loadingSetter(true);
    setter(year);
    setTimeout(() => loadingSetter(false), 800);
  };

  return (
    <div className="relative w-full overflow-hidden text-white flex flex-col gap-16">
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WorkExperience />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">My Contributions</h2>

        <p className="text-sm text-gray-400 mb-6">
          Note: I use two GitHubs accounts —{" "}
          <span className="font-medium text-white">ElysiumsGit</span> for
          professional and collaborative work projects and{" "}
          <span className="font-medium text-white">Coding-Elysium</span> for
          personal and learning work.
        </p>

        <section className="flex flex-col gap-6">
          <GithubSection
            username="ElysiumsGit"
            selectedYear={selectYearOne}
            onYearChange={handleYearChange(
              setSelectYearOne,
              setLoadingOne,
              selectYearOne
            )}
            loading={loadingOne}
          />
          <GithubSection
            username="Coding-Elysium"
            selectedYear={selectYearTwo}
            onYearChange={handleYearChange(
              setSelectYearTwo,
              setLoadingTwo,
              selectYearTwo
            )}
            loading={loadingTwo}
          />
        </section>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
