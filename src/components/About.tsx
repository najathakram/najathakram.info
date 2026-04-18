import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section
      id="about"
      index="/ 02"
      eyebrow="Profile"
      title={
        <>
          A decade designing the bits and waveforms that
          <span className="font-display italic text-foreground"> move modern radios</span>.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-strong text-pretty">
          <p>
            I am a signal processing engineer with a Ph.D. in Electrical &
            Computer Engineering from <span className="text-foreground">Florida International University</span>,
            and a decade of work spanning university research labs, MathWorks, Jabil,
            and now <span className="text-foreground">Airspan Networks</span>.
          </p>
          <p>
            My focus is the physical layer — the part of a wireless system where
            information becomes electromagnetic energy and back again. I design
            digital front-ends and beamforming algorithms for O-RAN remote radio
            units, model them bit-accurately in MATLAB, and shepherd them through
            FPGA realization for production 5G and emerging 6G hardware.
          </p>
          <p>
            More recently, I&apos;ve been applying machine learning to the same domain:
            using AI to estimate impairments, optimize waveforms, and bring
            data-driven intelligence into the RAN.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={150}>
          <div className="panel rounded-sm p-8 sm:p-10">
            <p className="font-mono-tabular text-xs uppercase tracking-[0.25em] text-muted mb-6">
              At a glance
            </p>
            <dl className="space-y-5 text-sm">
              <div className="flex justify-between gap-6 border-b border-border pb-4">
                <dt className="text-muted">Current</dt>
                <dd className="text-foreground text-right">Signal Processing Engineer · Airspan Networks</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-border pb-4">
                <dt className="text-muted">Discipline</dt>
                <dd className="text-foreground text-right">DSP, O-RAN, Wireless Systems, AI/ML</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-border pb-4">
                <dt className="text-muted">Education</dt>
                <dd className="text-foreground text-right">Ph.D., FIU · 2020</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-border pb-4">
                <dt className="text-muted">Publications</dt>
                <dd className="text-foreground text-right">IEEE Access · TCAS-II · DSP · ICAS · COMCAS</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-muted">Based in</dt>
                <dd className="text-foreground text-right">Houston, Texas</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
