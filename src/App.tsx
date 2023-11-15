import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-black text-white flex flex-col items-center">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
