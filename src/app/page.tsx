import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-5">
      {/* Profile section */}
      <section className="w-full h-128 sm:h-96 flex flex-col sm:flex-row justify-center items-center sm:gap-16 sm:mt-16">
        <div className="w-48 h-48 sm:w-56 sm:h-56">
          <img
            src="/profile-picture.png"
            alt="Foto perfil Esteban Castillo"
            className="rounded-full w-full h-full object-cover shadow-inner"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-montserrat font-bold text-sky-950 text-2xl sm:text-4xl mt-4 sm:mt-0">
            Esteban Castillo
          </h1>
          <p className="max-w-sm text-sky-900 text-sm sm:text-lg text-justify hyphens-auto sm:text-left mt-4">
            Analista Programador y estudiante de Ingeniería Informática
            — Desarrollo Web.
          </p>
          <ul className="w-full bg-sky-100 text-sm sm:text-lg mt-6 sm:mt-6 border border-sky-300 rounded shadow-lg">
            <li className="flex gap-2 font-bold text-sky-950 py-2 ps-4 border-b border-sky-300 hover:bg-sky-200">
              <FaFilePdf
                color={'#F40F02'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              Currículum
            </li>
            <li className="flex gap-2 font-bold text-sky-950 py-2 ps-4 border-b border-sky-300 hover:bg-sky-200">
              <FaGithub
                color={'#24292E'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              GitHub
            </li>
            <li className="flex gap-2 font-bold text-sky-950 py-2 ps-4 border-b border-sky-300 hover:bg-sky-200">
              <FaLinkedin
                color={'#0077B5'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              LinkedIn
            </li>
            <li className="flex gap-2 font-bold text-sky-950 py-2 ps-4 hover:bg-sky-200">
              <IoIosMail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1" />
              esteban.castillo.contact@gmail.com
            </li>
          </ul>
        </div>
      </section>

      {/* Projects section */}
      <section className="flex flex-col w-full grow mt-8 sm:mt-12">
        <h2 className="font-montserrat font-bold text-sky-900 text-xl sm:text-2xl">
          Proyectos
        </h2>
        {proyects.map((proyect, index) => (
          <article
            key={proyect.id}
            className={`sm:h-60 flex flex-col sm:flex-row sm:items-center ${
              index == 0 ? 'mt-9 sm:mt-10' : 'mt-20'
            } sm:gap-10 rounded`}
          >
            <img
              src={proyect.image}
              alt={`Imagen del proyecto ${proyect.name}`}
              className="object-cover w-full sm:w-1/2 aspect-[3/2] rounded-xl shadow-xl"
            />
            <div className="sm:w-1/2">
              <div className="mt-2">
                <h3 className="font-montserrat font-bold text-sky-950 text-xl mt-6">
                  {proyect.name}
                </h3>
                <p className="text-sky-900 mt-3">
                  {proyect.description}
                </p>
                <div className="font-bold text-sky-900 mt-3">
                  {proyect.techStack.join(' - ')}
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <button className="bg-sky-100 border border-1 border-sky-300 font-bold text-sky-950 px-4 py-2 rounded-full shadow-lg active:shadow hover:bg-sky-300">
                  <a href={proyect.demoUrl}>Demo</a>
                </button>
                <button className="bg-sky-100 border border-1 border-sky-300 font-bold text-sky-950 px-4 py-2 rounded-full shadow-lg active:shadow hover:bg-sky-300">
                  <a href={proyect.repoUrl}>Repo</a>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Contact section */}
      <section></section>
    </main>
  );
}

const proyects = [
  {
    id: 1,
    name: 'Proyecto 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 2,
    name: 'Proyecto 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 3,
    name: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 4,
    name: 'Proyecto 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 5,
    name: 'Proyecto 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
  {
    id: 6,
    name: 'Proyecto 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem.',
    techStack: ['React', 'Tailwind', 'Next.js'],
    image: 'https://picsum.photos/200/300',
    demoUrl: 'https://www.google.com',
    repoUrl: 'https://www.google.com',
  },
];
