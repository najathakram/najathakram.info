"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
  /** Anchor target, so other pages can deep-link to a single revealed item. */
  id?: string;
};

// The hidden initial state lives in CSS under `prefers-reduced-motion:
// no-preference` (see globals.css), and a noscript style in the root layout
// un-hides it when JavaScript is unavailable. So neither a reduced-motion
// preference nor a missing script can leave content invisible.
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
      : undefined;

  return (
    <Tag
      ref={ref as Ref<never>}
      id={id}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
