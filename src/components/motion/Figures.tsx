// Monochrome line figures drawn from the subject's own world: a signal that
// survives a trip through the air, an antenna array steering, a melody line,
// an aperture. Every stroke uses currentColor so the figures inherit ink, and
// each path carries `draw-N` classes that globals.css animates in sequence.

type FigureProps = { className?: string };

/**
 * The site's thesis as a drawing: clean bits, then the waveform they ride on,
 * noise picked up in transit, then the bits recovered on the far side.
 * Reads left to right, draws in that order.
 */
export function SignalJourney({ className = "" }: FigureProps) {
  // A carrier that starts clean, roughens in the middle, and settles again.
  const wave = (() => {
    const pts: string[] = [];
    for (let x = 0; x <= 300; x += 2) {
      const t = x / 300;
      // Noise swells across the middle third and fades out by the end.
      const swell = Math.max(0, 1 - Math.abs(t - 0.5) * 3.1);
      const jitter =
        swell * (Math.sin(x * 1.7) * 3.4 + Math.sin(x * 0.61) * 2.6);
      const y = 40 + Math.sin(t * Math.PI * 9) * 15 + jitter;
      pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`);
    }
    return pts.join(" ");
  })();

  return (
    <svg
      viewBox="0 0 460 80"
      fill="none"
      aria-hidden="true"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* bits going in */}
      <g className="draw-1" stroke="currentColor" strokeWidth="1.25">
        <path d="M2 56 h10 v-32 h10 v32 h10 v-32 h10 v32 h10 v-32 h10" />
      </g>
      {/* the carrier they ride */}
      <g
        className="draw-2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        transform="translate(76 0)"
      >
        <path d={wave} />
      </g>
      {/* bits coming back out */}
      <g className="draw-3" stroke="currentColor" strokeWidth="1.25">
        <path d="M382 56 h10 v-32 h10 v32 h10 v-32 h10 v32 h10 v-32 h10" />
      </g>
      {/* the two boundaries the signal crosses */}
      <g className="draw-4" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M70 8 v64" strokeDasharray="3 4" />
        <path d="M378 8 v64" strokeDasharray="3 4" />
      </g>
    </svg>
  );
}

/** A uniform array with its main lobe: the shape of steering. */
export function ArrayBeam({ className = "" }: FigureProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* the main lobe */}
      <g className="draw-1" stroke="currentColor" strokeWidth="1.1">
        <path d="M32 40 C 18 26, 22 8, 32 3 C 42 8, 46 26, 32 40" />
      </g>
      {/* sidelobes */}
      <g className="draw-2" stroke="currentColor" strokeWidth="1" opacity="0.45">
        <path d="M32 40 C 22 34, 12 30, 6 32" />
        <path d="M32 40 C 42 34, 52 30, 58 32" />
      </g>
      {/* the element row */}
      <g className="draw-3" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 43 h36" />
        <path d="M20 43 v4M28 43 v4M36 43 v4M44 43 v4" />
      </g>
    </svg>
  );
}

/** Two staves and a line that rises: a melody, not a waveform. */
export function MelodyLine({ className = "" }: FigureProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="draw-1" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <path d="M4 14 h56M4 22 h56M4 30 h56M4 38 h56" />
      </g>
      <g
        className="draw-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      >
        <path d="M6 34 C 16 34, 18 18, 28 18 C 38 18, 40 30, 50 26 C 56 24, 58 18, 60 12" />
      </g>
      <g className="draw-3" fill="currentColor" stroke="none">
        <circle cx="28" cy="18" r="2.4" />
        <circle cx="50" cy="26" r="2.4" />
      </g>
    </svg>
  );
}

/** An aperture, opening. */
export function Aperture({ className = "" }: FigureProps) {
  const blades = [0, 60, 120, 180, 240, 300];
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="draw-1" stroke="currentColor" strokeWidth="1.2">
        <circle cx="32" cy="24" r="17" />
      </g>
      <g className="draw-2" stroke="currentColor" strokeWidth="1" opacity="0.55">
        {blades.map((deg) => (
          <path
            key={deg}
            d="M32 24 L 32 7"
            transform={`rotate(${deg} 32 24)`}
          />
        ))}
      </g>
      <g className="draw-3" stroke="currentColor" strokeWidth="1.2">
        <circle cx="32" cy="24" r="6" />
      </g>
    </svg>
  );
}
