import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Code2,
  Download,
  MessageCircle,
} from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-xl">
      <nav className="container-custom flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-400">
            <Code2 size={23} />
          </div>

          <span className="text-xl font-bold">
            Douglas<span className="text-cyan-400">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {name}
            </a>
          ))}

          <a
            href="/Douglas-Kipruto-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <Download size={16} />
            CV
          </a>

          <a
            href="https://wa.me/254746621875"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-slate-700 p-2.5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom flex flex-col gap-2 py-5">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              {name}
            </a>
          ))}

          <a
            href="/Douglas-Kipruto-CV.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-200"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="https://wa.me/254746621875"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;