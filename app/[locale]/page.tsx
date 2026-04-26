import About from "./components/About";
import Experiences from "./components/Experiences";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { cn } from "@/lib/utils";
import AIChat from "./components/AIChat";

const SectionWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div {...props} className={cn("p-10 md:p-20", className)}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <SectionWrapper className="pt-30 pb-30">
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper className="bg-primary" id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experiences />
      </SectionWrapper>
      <SectionWrapper className="bg-primary" id="skills">
        <Skill />
      </SectionWrapper>
      <SectionWrapper id="project">
        <Project />
      </SectionWrapper>
      <SectionWrapper className="bg-primary" id="contact">
        <Contact />
      </SectionWrapper>
      
      <AIChat />
    </div>
  );
}
