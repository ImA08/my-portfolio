import React from "react";
import go from "../../public/stacks/go.svg";
import js from "../../public/stacks/js.svg";
import redis from "../../public/stacks/redis.svg";
import nodejs from "../../public/stacks/nodejs.png";
import react from "../../public/stacks/react.svg";
import psql from "../../public/stacks/postgreSQL.png";
// import mongoDB from "../../public/stacks/mongodb.png";
import docker from "../../public/stacks/docker.svg";

import typescript from "../../public/stacks/typescript.svg";


function Skills() {
  const stacks = [
    { id: 1, image: go, title: "GO" },
    { id: 2, image: react, title: "React Js" },
    { id: 3, image: psql, title: "PostgreSQL" },
    { id: 4, image: redis, title: "Redis" },
    { id: 5, image: js, title: "JavaScript" },
    { id: 6, image: nodejs, title: "Node Js" },
    { id: 7, image: docker, title: "Docker" },
    { id: 8, image: typescript, title: "Typescript" },
  ];

  const SkillBox = ({ image, title }) => (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-[#1e3a8a] transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-25 sm:h-25" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
    </article>
  );
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div className="flex flex-col justify-center flex-grow absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#2154e0] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br /> and
            <span className="text-blue-600"> Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
          These are the tools and technologies I work with to craft modern digital experiences.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {stacks.map((skill) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Skills;
