export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-4">
      {/* Profile section */}
      <section className="w-full h-128 sm:h-80 flex flex-col sm:flex-row justify-center items-center sm:gap-8 rounded">
        <div className="w-48 h-48">
          <img
            src="/profile-picture.jpeg"
            alt="Foto perfil Esteban Castillo"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-2xl sm:text-4xl font-bold mt-4">
            Esteban Castillo
          </h1>
          <p className="max-w-sm text-sm sm:text-lg text-justify hyphens-auto sm:text-left mt-2">
            Analista Programador y actual estudiante de Ingeniería en
            Ciberseguridad. Interesado en el Desarrollo Web.
         </p>
          <ul className="w-full text-sm sm:text-lg mt-2">
            <li>Curriculum</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>esteban.castillo.contact@gmail.com</li>
          </ul>
        </div>
      </section>

      {/* Projects section */}
      <section className="flex flex-col w-full grow rounded">
        <h2 className="text-2xl font-semibold mt-16">Proyectos</h2>
        {proyects.map((proyect) => (
          <article
            key={proyect.id}
            className="h-128 sm:h-60 flex flex-col sm:flex-row sm:items-center mt-8 sm:gap-6 rounded"
          >
            <div className="h-72 sm:w-1/2 sm:h-full">
              <img
                src={proyect.image}
                alt={`Imagen del proyecto ${proyect.name}`}
                className="object-cover w-full h-full rounded"
              />
            </div>
            <div className="sm:w-1/2">
              <div className="mt-2">
                <h3 className="text-xl font-medium mt-4">
                  {proyect.name}
                </h3>
                <p className="mt-2">{proyect.description}</p>
                <div className="mt-2">
                  {proyect.techStack.join(' - ')}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="bg-gray-300 px-4 py-2 rounded">
                  <a href={proyect.demoUrl}>Demo</a>
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded">
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
