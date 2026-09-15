import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Download,
} from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const roles = [
  "Software Developer",
  "React Developer",
  "Frontend Developer",
  "Digital Creator",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Main content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* Left side */}
          <div className="fade-up">

            {/* Small intro */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Available for opportunities
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm{" "}
              <span className="gradient-text">
                Douglas Kipruto
              </span>
            </h1>

            {/* Typing text */}
            <div className="mt-5 min-h-[48px] text-2xl font-bold text-slate-200 sm:text-3xl">
              I'm a{" "}
              <span className="text-cyan-400">
                {text}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive and user-friendly web applications
              using technologies like React, JavaScript, Firebase and Tailwind
              CSS.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View My Work
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/Douglas-Kipruto-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800"
              >
                <Download size={19} />
                Download CV
              </a>

            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-4">

              <a
                href="https://github.com/Iamprogrammer001"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://X.com/onlineworker001"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaTwitter size={20} />
              </a>

            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              className="mt-12 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
            >
              <ArrowDown size={17} className="animate-bounce" />
              Scroll to explore
            </a>

          </div>

          {/* Right side - Profile */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl sm:h-96 sm:w-96" />

            {/* Profile card */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-3 shadow-2xl">

                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/profile.jpg"
                    alt="Douglas Kipruto"
                    className="h-[360px] w-[280px] object-cover transition duration-500 hover:scale-105 sm:h-[440px] sm:w-[350px]"
                  />
                </div>

              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-700 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-12">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Focus
                </p>
                <p className="mt-1 font-bold text-white">
                  Building Digital Solutions
                </p>
              </div>

              {/* Tech badge */}
              <div className="absolute -right-5 -top-5 rounded-2xl border border-cyan-400/20 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur-md">
                <p className="text-sm font-bold text-cyan-400">
                  React + Firebase
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;