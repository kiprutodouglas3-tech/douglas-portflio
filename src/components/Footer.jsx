import {
  MessageCircle,
  Heart,
} from "lucide-react";
import { FaGithub, FaTwitter,FaFacebook} from "react-icons/fa";
function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <div>
            <a href="#home" className="text-2xl font-black">
              Douglas<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Software Developer & Digital Creator
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Iamprogrammer001"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://X.com/onlineworker001"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#+254746621875"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://wa.me/254746621875"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-7 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Douglas Kipruto. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-cyan-400" /> React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;