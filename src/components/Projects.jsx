import {
  ExternalLink,

  ArrowRight,
} from "lucide-react";
import { FaGithub} from "react-icons/fa";
const projects = [
  {
    title: "Apply Abroad",
    category: "Education Platform",
    description:
      "A React and Firebase platform designed to help students explore study destinations, scholarships and schools.",
    image: "/projects/apply-abroad.jpg",
    technologies: ["React", "Firebase", "Firestore", "Tailwind"],
    github: "https://github.com/Iamprogrammer001",
  },
  {
    title: "Food Delivery Platform",
    category: "Web Application",
    description:
      "A responsive food delivery interface featuring menus, shopping cart functionality and a modern ordering experience.",
    image: "/projects/food-delivery.jpg",
    technologies: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/Iamprogrammer001",
  },
  {
    title: "Movie Discovery App",
    category: "Entertainment",
    description:
      "A movie discovery application with search, movie information, categories and user-focused navigation.",
    image: "/projects/movie-app.jpg",
    technologies: ["React", "REST API", "Firebase"],
    github: "https://github.com/Iamprogrammer001",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900/40">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Projects I've <span className="gradient-text">Built</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            A selection of projects that demonstrate my experience building
            practical web applications.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/profile.jpg";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-cyan-400"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Discuss Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Iamprogrammer001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={19} />
            See More Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;