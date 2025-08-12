import React from "react";
import aboutme1 from "../../public/coding-5-7.svg";
import aboutme2 from "../../public/network-80.svg";
import aboutme3 from "../../public/bug-fixing-60.svg";
import aboutme4 from "../../public/user-interface-1-100.svg";

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center pt-6 md:pt-0 text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#203669] via-[#1e3a8a] to-[#0ea5e9] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
          <img
            src={aboutme3}
            alt="bug fixing"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg "
          />
          <img
            src={aboutme1}
            alt="coding"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
          />
          <img
            src={aboutme2}
            alt="server"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>
        <article
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#2154e0] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg sm:text-justify text-left md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Hi! I'm Imanul Aufa, a passionate software developer with a focus on
            building clean, efficient, and user-friendly applications. With a
            strong foundation in backend and frontend development, I love
            turning complex problems into simple, functional solutions.<br />
            I'm always eager to learn new technologies and take on challenges that push my skills forward. Whether it's crafting responsive interfaces or designing robust APIs, I aim to create meaningful digital experiences that have real-world impact.<br />
            Outside of coding, I enjoy exploring new ideas, collaborating on projects, and constantly growing both personally and professionally.
          </p>
          <footer>
            <button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#2a4d9b] hover:shadow-[0_0_40px_rgba(128,0,128,0.75)] rounded-full text-sm sm:text-lg">
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
