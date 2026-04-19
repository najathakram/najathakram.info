import { Sidebar } from "../components/Sidebar";
import { About } from "../components/About";
import { Expertise } from "../components/Expertise";
import { Experience } from "../components/Experience";
import { Publications } from "../components/Publications";
import { Aside } from "../components/Aside";
import { Contact } from "../components/Contact";
import { profile } from "../lib/site-data";

export default function Home() {
  return (
    <div id="top" className="lg:grid lg:grid-cols-[320px_minmax(0,1fr)]">
      <Sidebar />
      <main className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-2xl space-y-24 sm:space-y-28">
          <section className="anim-fade-in">
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
              Now
            </p>
            <p className="font-display text-[1.7rem] sm:text-[2.25rem] leading-[1.2] text-foreground text-pretty">
              {profile.intro}
            </p>
          </section>

          <About />
          <Expertise />
          <Experience />
          <Publications />
          <Aside />
          <Contact />
        </div>
      </main>
    </div>
  );
}
