import React from "react";
import project1 from "../../public/projects/web-portofolio.png";
import project2 from "../../public/projects/kodakofi.png";
import project3 from "../../public/projects/tickitz.png";


const ProjectsCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#2154e0] rounded-full blur-3xl opacity-50 -top-5 left-10" />
      <div className="relative z-10">
        <figure className="relative">
            <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <a href={link} target="_blank" rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-[#2154e0] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
                Preview
              </button>
            </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl nb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>

        </div>
      </div>
    </article>
  );
};




export default function Projects(){
  const listProjects =[
    {
      image:project1,
      title:'Portofolio Web',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      link: '',
    },
    {
      image:project2,
      title:'Koda Kofi',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      link: 'https://github.com/ImA08/kodakofi_client',
    },
    {
      image:project3,
      title:'Tickitz',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      link: 'https://github.com/ImA08/Tickitz',
    }
  ]

  return (
    <main className="p-4">
      <section id="projects" data-aos='fade-up' data-aos-delay='300'>
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-blue-600">Projects</span>
          </h1>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
        Highlights of my recent work in web development.
        </p>
        </header>
      </section>
      <section data-aos='fade-up' data-aos-delay='500' className="flex flex-wrap gap-4 justify-center mt-6">
        {listProjects.map((project, index)=>{
          return (<ProjectsCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
          />)
        })}
      </section>
    </main>
  )
}
