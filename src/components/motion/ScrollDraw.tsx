"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Milliseconds before this figure starts drawing once it enters view. */
  delay?: number;
};

/**
 * Draws line art when it scrolls into view, by adding `.drawn` to the wrapper.
 * The animation itself lives in CSS (see globals.css) so that a reduced-motion
 * preference or a missing script leaves every stroke fully drawn instead of
 * invisible. Fires once and then stops observing.
 */
export function ScrollDraw({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("drawn");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("drawn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`figure ${className}`}
      style={delay ? { ["--draw-delay" as string]: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
