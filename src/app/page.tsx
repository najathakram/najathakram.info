import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Expertise } from "../components/Expertise";
import { Experience } from "../components/Experience";
import { Publications } from "../components/Publications";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex flex-1 flex-col">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
