import React, { useContext } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <div id="experience" className="py-16 px-4 md:px-16 bg-gray-900 dark:bg-gray-900">
      <Fade bottom duration={1000} distance="20px">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h1
            className={`text-3xl md:text-4xl font-bold mb-10 text-center ${
              isDark ? "text-white" : "text-gray-100"
            }`}
          >
            Experiences
          </h1>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard
                key={i}
                isDark={isDark}
                cardInfo={card}
                className="bg-white dark:bg-gray-800 rounded-xl 
                           shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                           ring-1 ring-white/20 
                           hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
                           hover:ring-2 hover:ring-white/50 
                           transform hover:-translate-y-2 transition-all duration-300 
                           p-6"
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
