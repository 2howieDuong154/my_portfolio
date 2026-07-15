import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import BuiltWith from "./components/BuiltWith";
import GitHubCTA from "./components/GitHubCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <BuiltWith />
        <GitHubCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
