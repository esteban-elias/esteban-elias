import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
          <h1 className="font-alegreya antialiased font-bold text-sky-950 text-2xl sm:text-4xl mt-4 sm:mt-0">
            Esteban Elías
          </h1>
          <p className="max-w-sm text-sky-900 text-sm sm:text-lg text-justify hyphens-auto sm:text-left mt-4">
            a place about me and my interests
          </p>
          <ul className="w-full bg-sky-100 text-sm sm:text-lg mt-6 sm:mt-6 rounded shadow-lg">
            <ContactListItem border>
              <FaGithub
                color={"#24292E"}
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1"
              />
              <a href="https://github.com/esteban-elias">Look at my code</a>
            </ContactListItem>
            <ContactListItem>
              <IoIosMail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1" />
              <a href={`mailto:esteban.elias.contact@`}>Send me an email</a>
            </ContactListItem>
          </ul>
        </div>
      </section>

      {/* Writings section */}
      <section className="flex flex-col mt-8 sm:mt-12">
        <h2 className="font-alegreya antialiased font-bold text-sky-900 text-xl sm:text-2xl mb-4">
          🧑🏽‍💻 🖌 📜
        </h2>
        <div className="flex flex-col gap-20 mt-10 sm:mt-10">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactListItem({ children, border }: ContactListItemProps) {
  return (
    <li
      className={`flex gap-2 font-bold text-sky-950 py-3 ps-4 ${
        border ? "border-b border-sky-300" : ""
      } hover:bg-sky-200`}
    >
      {children}
    </li>
  );
}

function Post({ post }: PostProps) {
  return (
    <article className="sm:h-60 flex flex-col sm:flex-row sm:gap-10 rounded">
      <img
        src={post.image}
        alt={`Imagen del proyecto ${post.name}`}
        className="object-cover w-full sm:w-1/2 aspect-[3/2] rounded-xl shadow-xl"
      />
      <div className="sm:w-1/2">
        <div className="mt-2">
          <h3 className="font-alegreya antialiased font-bold text-sky-950 text-xl mt-6">
            {post.name}
          </h3>
          <p className="text-sky-900 mt-3">{post.description}</p>
          <div className="font-bold text-sky-900 mt-3">
            {post.tags.join(" - ")}
          </div>
        </div>
        <div className="mt-4">
          <iframe
            src={post.spotifyUrl}
            className="w-68 sm:w-60 opacity-80 self-end"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; pictue-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </article>
  );
}

const posts: Post[] = [
  {
    id: 1,
    name: "Polishing the thought",
    description: "where everything starts",
    tags: ["spirit", "spark"],
    image: "/polishing-the-thought.png",
    spotifyUrl:
      "https://open.spotify.com/embed/track/5S5ap2qVplxMQxWRulc72Z?utm_source=generator",
  },
  {
    id: 1,
    name: "The animalistic and the virtuous",
    description: "metaphysical commonplaces",
    tags: ["self-forgiveness", "self-forgotness"],
    image: "/animalistic-virtue.png",
    spotifyUrl:
      "https://open.spotify.com/embed/track/7HSs4srn1qnZhh7WRWBVOk?utm_source=generator",
  },
];
