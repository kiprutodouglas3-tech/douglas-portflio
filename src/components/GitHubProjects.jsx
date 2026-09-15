import { useEffect, useState } from "react";
import {

  ExternalLink,
  Star,
  GitFork,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const username = "Iamprogrammer001";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=9`
        );

        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories.");
        }

        const data = await response.json();

        const publicRepos = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at) - new Date(a.updated_at)
          );

        setRepos(publicRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadRepositories();
  }, []);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
              GitHub
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              My Latest <span className="gradient-text">Code</span>
            </h2>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <FaGithub size={18} />
            View GitHub Profile
          </a>
        </div>

        {loading && (
          <div className="mt-14 flex justify-center">
            <LoaderCircle
              className="animate-spin text-cyan-400"
              size={35}
            />
          </div>
        )}

        {error && (
          <div className="mt-10 flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-5 text-red-300">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="card-hover rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <FaGithub className="text-cyan-400" size={25} />

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {repo.stargazers_count}
                    </span>

                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {repo.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {repo.description || "A software development project."}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300">
                    {repo.language || "JavaScript"}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-cyan-400"
                  >
                    View
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubProjects;