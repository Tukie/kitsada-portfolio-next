import About from "./components/About";
import Experiences from "./components/Experiences";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <div className="p-10 pt-30 pb-30 md:p-20">
        <div className="container mx-auto">
          <HeroSection />
        </div>
      </div>
      <div className="p-10 md:p-20 bg-primary" id="about">
        <div className="container mx-auto">
          <About />
        </div>
      </div>
      <div className="p-10 md:p-20" id="experience">
        <div className="container mx-auto">
          <Experiences />
        </div>
      </div>
      <div className="p-10 md:p-20 bg-primary" id="skills">
        <div className="container mx-auto">
          <Skill />
        </div>
      </div>
      <div className="p-10 md:p-20" id="project">
        <div className="container mx-auto">
          <Project />
        </div>
      </div>
      <div className="p-10 md:p-20 bg-primary" id="contact">
        <div className="container mx-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
}
