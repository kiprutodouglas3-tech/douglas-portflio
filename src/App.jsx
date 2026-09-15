import { MessageCircle } from "lucide-react";


import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubProjects from "./components/GitHubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Contact />
      </main>

      <Footer />

      <a
        href="https://wa.me/254746621875"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-900/30 transition hover:scale-110 hover:bg-cyan-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}

export default App;
