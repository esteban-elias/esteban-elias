export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-3xl mx-auto">
      {/* Profile section */}
      <section className="w-full h-96 flex flex-col sm:flex-row justify-center items-center bg-gray-100 rounded">
        <div>
          <img
            src="/profile-picture.jpeg"
            alt="Foto perfil Esteban Castillo"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start sm:ms-8">
          <h1 className="text-2xl sm:text-4xl font-bold mt-4">
            Esteban Castillo
          </h1>
          <p className="sm:text-lg w-96 mt-2">
            Analista Programador y estudiante de Ingeniería en Ciberseguridad.
            Interesado en el Desarrollo Web.
          </p>
          <div>
            <button className="bg-gray-300 rounded px-4 py-2 mt-4">
              Descargar curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="flex flex-col w-full grow rounded">
        <h2 className="text-2xl font-semibold mt-16">Proyectos</h2>
        {proyects.map((proyect) => (
          <article
            key={proyect.id}
            className="w-full h-[28rem] flex flex-col sm:flex-row justify-center items-center mt-8 bg-gray-100 rounded"
          >
            <div className="h-48 sm:w-1/2 ms-8 me-4">
              <img
                src={proyect.image}
                alt={`Imagen del proyecto ${proyect.name}`}
                className="object-cover w-96 h-full rounded"
              />
            </div>
            <div className="sm:w-1/2 sm:px-4">
              <div className="mt-2">
                <h3 className="text-xl font-medium mt-4">
                  {proyect.name}
                </h3>
                <p className="mt-2">{proyect.description}</p>
                <div className="mt-2">
                  {proyect.techStack.join(' - ')}
                </div>
              </div>
              <div className="flex space-x-4 h-12 mt-4">
                <button className="bg-gray-300 w-24 rounded">
                  <a href={proyect.demoUrl}>Demo</a>
                </button>
                <button className="bg-gray-300 w-24 rounded">
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
