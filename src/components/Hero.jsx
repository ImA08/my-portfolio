import React from "react";
import Navbar from "./Navbar";
import fbImg from '../../public/facebook.png'
import githubImg from '../../public/github.png'
import igImg from '../../public/instagram.png'
import ldinImg from '../../public/linkedin.png'
import heroImg from '../../public/heroImg.svg'
import coding1 from '../../public/coding-1.svg'
import coding2 from '../../public/coding-2.svg'
import coding3 from '../../public/coding-3.svg'
import pythonImg from '../../public/python.svg'
import cv from '../../public/docs/CV_Imanul_Aufa.pdf'

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] transform rotate-45 z-0 right-2 top-28 rounded-3xl" />
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 min-lg:px-52 sm:px-6 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#2154e0] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
            <header>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Imanul Aufa
              </h1>
              <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#0ea5e9] mb-2 italic">
                Full-stack Web Developer
              </h2>
            </header>
            <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              excepturi.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a href="#">
                <img src={fbImg} alt="facebook" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={githubImg} alt="github" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={igImg} alt="instagram" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={ldinImg} alt="linkedin" className="w-11 h-11"/>
              </a>
            </div>
            <a href={cv} download>
              <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1e3a8a] hover:shadow-[0_0_40px_rgba(128,0,128,0.7] rounded-full text-lg">
                Download CV
              </button>
            </a>
          
        </section>
        <figure data-aos='fade-up' data-aos-delays='500' className="flex-1 flex justify-center md:justify-end mt-0">
        <img src={coding1} alt="" className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px]" />
        </figure>
      </main>
    </div>
  );
}

export default Hero;
