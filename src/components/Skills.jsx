const skills = [
  ["React", 90],
  ["JavaScript", 88],
  ["HTML & CSS", 92],
  ["Tailwind CSS", 90],
  ["Firebase", 82],
  ["Next.js", 78],
  ["Git & GitHub", 85],
  ["REST APIs", 80],
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
              My Skills
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I use modern web technologies to create applications that are
              functional, responsive and easy to maintain.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map(([skill, percentage]) => (
              <div key={skill}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-200">
                    {skill}
                  </span>

                  <span className="text-slate-500">{percentage}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;