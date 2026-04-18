import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A brief and honest
          <span className="font-display italic"> introduction</span>.
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-strong text-pretty">
          <p>
            Hello. I&apos;m Najath. I did my PhD in Electrical and Computer
            Engineering at Florida International University, spent time at
            Akron, MathWorks, and Jabil along the way, and I&apos;ve been at
            Airspan Networks since 2025.
          </p>
          <p>
            The work lives somewhere between math, hardware, and patience.
            Most of my days are spent in MATLAB, in front of a spectrum
            analyzer, or in a document describing why a particular
            combination of frequencies decided to interfere with itself.
            It is a genuinely lovely place to spend a career.
          </p>
          <p>
            Lately I&apos;ve been teaching myself how to bring machine
            learning to bear on the same problems, slowly, and only where
            it actually earns its place alongside the physics. I try to
            keep a reading list, a running simulation, and a sense of
            humour about the field, in roughly that order.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-4" delay={120}>
          <dl className="space-y-5 text-sm border-l border-border pl-6">
            <div>
              <dt className="text-muted text-[11px] uppercase tracking-[0.22em] mb-1.5">
                Based in
              </dt>
              <dd className="text-foreground">Houston, Texas</dd>
            </div>
            <div>
              <dt className="text-muted text-[11px] uppercase tracking-[0.22em] mb-1.5">
                Currently
              </dt>
              <dd className="text-foreground">
                Signal Processing Engineer, Airspan Networks
              </dd>
            </div>
            <div>
              <dt className="text-muted text-[11px] uppercase tracking-[0.22em] mb-1.5">
                Trained at
              </dt>
              <dd className="text-foreground">
                Florida International University, PhD, 2020
              </dd>
            </div>
            <div>
              <dt className="text-muted text-[11px] uppercase tracking-[0.22em] mb-1.5">
                Interested in
              </dt>
              <dd className="text-foreground">
                DSP, O-RAN, and where ML earns its keep
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
