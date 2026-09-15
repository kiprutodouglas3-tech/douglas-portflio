import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Responsive web development",
  "React & JavaScript applications",
  "Firebase authentication & databases",
  "API integration",
  "Debugging & error fixing",
  "Modern UI development",
];

function About() {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="container-custom grid gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-400">
            I'm a software developer focused on creating practical and
            attractive web applications. I enjoy taking an idea, designing
            the user experience, writing the code and solving the problems
            that appear along the way.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-cyan-400"
                />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;