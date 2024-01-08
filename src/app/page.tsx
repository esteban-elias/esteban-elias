import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { TbWorldWww } from "react-icons/tb";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-5">
      {/* Profile section */}
      <section className="w-full h-128 sm:h-96 flex flex-col sm:flex-row justify-center items-center sm:gap-16 mt-10 sm:mt-16">
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
          <ul className="w-full bg-sky-100 text-sm sm:text-lg mt-6 sm:mt-6 rounded shadow-lg">
            <ContactListItem border>
              <FaFilePdf
                color={'#F40F02'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              Currículum
            </ContactListItem>
            <ContactListItem border>
              <FaGithub
                color={'#24292E'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              GitHub
            </ContactListItem>
            <ContactListItem border>
              <FaLinkedin
                color={'#0077B5'}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              LinkedIn
            </ContactListItem>
            <ContactListItem>
              <IoIosMail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1" />
              esteban.castillo.contact@gmail.com
            </ContactListItem>
          </ul>
        </div>
      </section>

      {/* Projects section */}
      <section className="flex flex-col mt-8 sm:mt-12">
        <h2 className="font-montserrat font-bold text-sky-900 text-xl sm:text-2xl">
          Proyectos
        </h2>
        <div className='flex flex-col gap-20 mt-9 sm:mt-10'>
          {proyects.map((proyect) => (
            <ProyectArticle key={proyect.id} proyect={proyect} />
          ))}
        </div>
      </section>
    </main>
  );
}

interface ContactListItemProps {
  children: React.ReactNode;
  border?: boolean;
}

function ContactListItem({ children, border }: ContactListItemProps) {
  return (
    <li
      className={`flex gap-2 font-bold text-sky-950 py-3 ps-4 ${
        border ? 'border-b border-sky-300' : ''
      } hover:bg-sky-200`}
    >
      {children}
    </li>
  );
}

interface Proyect {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

interface ProyectArticleProps {
  proyect: Proyect;
}

function ProyectArticle({ proyect }: ProyectArticleProps) {
  return (
    <article className='sm:h-60 flex flex-col sm:flex-row sm:items-center sm:gap-10 rounded'>
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
          <button className="bg-sky-100 border border-1 border-sky-300 font-bold text-sky-950 px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg active:shadow hover:bg-sky-300">
            <a href={proyect.demoUrl} className='flex gap-2'>
              <TbWorldWww
                className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-0.5"
              />
              Demo
            </a>
          </button>
          <button className="bg-sky-100 border border-1 border-sky-300 font-bold text-sky-950 px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg active:shadow hover:bg-sky-300">
            <a href={proyect.repoUrl} className='flex gap-2'>
              <FaGithub
                className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-0.5"
                color={'#24292E'}
              />
              Repo
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}

const proyects: Proyect[] = [
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
