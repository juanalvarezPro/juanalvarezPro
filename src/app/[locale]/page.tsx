import About from "@/src/components/about";
import Experience from "@/src/components/experience";
import Hero from "@/src/components/hero";
import Projects from "@/src/components/projects";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <Experience />
      <Projects />
      <About />
    </div>
  );
}
