import {
  Code2,
  Database,
  Bug,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern websites and web applications built with clean, maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Interfaces that work beautifully across phones, tablets and desktop screens.",
  },
  {
    icon: Database,
    title: "Firebase Solutions",
    text: "Authentication, Firestore databases and backend services using Firebase.",
  },
  {
    icon: Bug,
    title: "Debugging",
    text: "Finding errors, improving existing code and getting applications working correctly.",
  },
  {
    icon: Globe,
    title: "API Integration",
    text: "Connecting applications to external APIs and building useful data-driven features.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Improving usability, structure and performance for a smoother experience.",
  },
];

function Services() {
  return (
    <section id="services" className="section-padding bg-slate-900/40">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Services I <span className="gradient-text">Offer</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Practical development services designed to help individuals and
            businesses build a stronger online presence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="card-hover rounded-2xl border border-slate-800 bg-slate-950 p-7"
              >
                <div className="mb-6 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;