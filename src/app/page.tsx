'use client';
import { useState } from 'react';

const projects = [
  {
    title: 'Colegio Mallorca Backend API',
    description:
      'Express.js Backened API para la intranet del Colegio Mallorca',
    stack: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'PlanetScale',
      'MySQL',
      'Json Web Tokens',
      'Bcrypt',
    ],
    image: 'Project 1 image',
  },
  {
    title: 'Colegio Mallorca Frontend',
    description:
      'Vanilla CSS + Vanilla JS Frontend para la intranet del Colegio Mallorca',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: 'Project 2 image',
  },
  {
    title: 'Emporio E-commerce',
    description: 'React Bootstrap E-commerce',
    stack: ['React', 'Bootstrap', 'TypeScript'],
    image: 'Project 3 image',
  },
  {
    title: 'Jersan Landing Page',
    description:
      'React Bootstrap Landing Page para Jersan, empresa constructora',
    stack: ['React', 'Bootstrap', 'TypeScript'],
    image: 'Project 4 image',
  },
  {
    title: 'PuntoClick E-commerce',
    description: 'Django Bootstrap E-commerce',
    stack: ['Python', 'Bootstrap'],
    image: 'Project 5 image',
  },
  {
    title: 'Portfolio',
    description: 'Next.js Tailwind portafolio',
    stack: ['React', 'Tailwind', 'TypeScript', 'Next.js'],
    image: 'Project 6 image',
  },
];

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <main>
      <div className="container h-screen">
        <section className="h-1/2 flex border">
          <div className="w-1/2 flex flex-col justify-center border">
            <div className="w-3/4 h-1/3 self-center border rounded">
              Picture
            </div>
            <div className="w-3/4 h-1/5 self-center mt-4 border rounded">
              ❤️ Desarrollo web 
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="w-3/4 self-center border rounded">
              Proyectos
            </h2>
            <ul className="w-3/4 h-3/5 self-center mt-4">
              {projects.map((project, index) => (
                <li
                  className={`h-1/6 border rounded mt-2 ${
                    index === currentProject
                      ? 'bg-gray-200'
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setCurrentProject(index)}
                  key={project.title}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="h-1/2 flex flex-col">
          <div className="h-full">
            <div className="h-1/2 mx-8 mt-8 border rounded">
              {projects[currentProject].image}
            </div>
            <div className="h-1/3 mx-8 mt-4 flex flex-col">
              <div className="h-1/3 border rounded">
                {projects[currentProject].description}
              </div>
              <div className="h-2/3 mt-4">
                <div className="flex flex-col flex-wrap h-full border rounded">
                  {projects[currentProject].stack.map((item) => (
                    <li className="w-1/2" key={item}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
