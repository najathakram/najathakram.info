import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          About
        </p>
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-strong text-pretty">
          <p>
            Hello. I&apos;m Najath. I did my PhD in Electrical and Computer
            Engineering at Florida International University, with stops at
            Akron, MathWorks, and Jabil along the way.
          </p>
          <p>
            The work lives somewhere between math, hardware, and patience.
            Most of my days are spent in MATLAB, in front of a spectrum
            analyzer, or in a document describing why a particular combination
            of frequencies decided to interfere with itself.
          </p>
          <p>
            Lately I&apos;ve been bringing machine learning to bear on the
            same problems, slowly, and only where it earns its place alongside
            the physics. I keep a reading list, a running simulation, and a
            sense of humour about the field, in roughly that order.
          </p>
          <p>
            Outside the lab, my wife Maznah and I run a small wedding
            photography studio in Houston called Pixel Parchment, which keeps
            me holding a camera more often than an oscilloscope probe.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
