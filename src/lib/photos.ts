// Static imports give next/image intrinsic dimensions and blur placeholders.
// The intrinsic size also drives layout: the page reads width vs height to give
// landscape frames a double-width cell, so nothing is cropped to portrait.
//
// Array order is display order. The page is one grid with no captions and no
// labels, so weddings, nature, and city frames are interleaved deliberately
// rather than grouped: nothing on the page announces which is which.
//
// Two landscape frames, at index 0 and 11. A col-span-2 cell with only one
// column free in its row wraps to the next row and leaves a hole behind it; a
// plain (portrait) cell never does.
//
// The rule, counting CELLS not entries (a landscape entry occupies 2 cells):
// the cell count before each landscape entry must be a multiple of SIX. The
// grid is 3 columns on desktop and 2 on mobile, so it has to start a fresh row
// in both, and 6 is the common multiple. Here: 0 cells before index 0, and 12
// before index 11 (one landscape = 2, plus ten portraits). Both clear.
//
// Multiple of 3 is NOT sufficient and was an actual bug: 9 cells starts a fresh
// row on the 3-col grid but lands mid-row on the 2-col one, which left a hole
// on mobile only.
//
// Re-check that sum before adding, removing, or reordering anything ahead of
// the last landscape entry. Appending plain portraits at the very end is
// always safe. A ragged final row is fine; a gap mid-grid is not.
import type { StaticImageData } from "next/image";
import nature01 from "../../public/photos/nature-01.jpg";
import nature02 from "../../public/photos/nature-02.jpg";
import nature03 from "../../public/photos/nature-03.jpg";
import nature04 from "../../public/photos/nature-04.jpg";
import nature05 from "../../public/photos/nature-05.jpg";
import nature06 from "../../public/photos/nature-06.jpg";
import urban01 from "../../public/photos/urban-01.jpg";
import urban03 from "../../public/photos/urban-03.jpg";
import urban04 from "../../public/photos/urban-04.jpg";
import urban05 from "../../public/photos/urban-05.jpg";
import urban06 from "../../public/photos/urban-06.jpg";
import urban07 from "../../public/photos/urban-07.jpg";
import urban08 from "../../public/photos/urban-08.jpg";
import urban09 from "../../public/photos/urban-09.jpg";
import urban10 from "../../public/photos/urban-10.jpg";
import urban11 from "../../public/photos/urban-11.jpg";
import urban12 from "../../public/photos/urban-12.jpg";
import wedding01 from "../../public/photos/wedding-01.jpg";
import wedding03 from "../../public/photos/wedding-03.jpg";
import wedding05 from "../../public/photos/wedding-05.jpg";
import wedding07 from "../../public/photos/wedding-07.jpg";

export type SitePhoto = {
  image: StaticImageData;
  /**
   * Alt text, for screen readers. Never rendered as a visible caption.
   * Describe only what is in the frame: no place or event the image does not
   * itself show.
   */
  alt: string;
};

export const photos: SitePhoto[] = [
  { image: nature05, alt: "A bald eagle in flight against pale cloud" },
  { image: urban08, alt: "Notre-Dame under scaffolding beside a Paris rooftop" },
  { image: nature01, alt: "A heron on a bare branch in falling rain" },
  { image: urban03, alt: "The Chrysler Building lit at night, seen from above" },
  { image: urban07, alt: "Mosques and rooftops above the water in Istanbul" },
  { image: wedding03, alt: "Bride and groom photographed in black and white" },
  { image: nature06, alt: "Sunrise over a lake, with a canoe at a wooden dock" },
  { image: urban04, alt: "The stone arches and cables of the Brooklyn Bridge" },
  { image: urban06, alt: "A domed state capitol under bare winter branches" },
  { image: wedding01, alt: "A couple beneath a lit garden gazebo" },
  { image: urban05, alt: "Manhattan and a lit suspension bridge at night" },
  { image: nature03, alt: "Gulls scattering above sea lions in the surf" },
  { image: wedding05, alt: "A couple walking through trees, in black and white" },
  { image: nature02, alt: "A pelican with its bill open on a coastal bank" },
  { image: urban01, alt: "The canopy of a hot air balloon seen from below" },
  { image: nature04, alt: "Sea lions hauled out on a rock below a misty forest" },
  { image: wedding07, alt: "A groom dipping the bride in an avenue of trees" },
  { image: urban09, alt: "Worshippers inside a mosque arcade, lit by hanging lamps" },
  { image: urban10, alt: "A mosque courtyard and arcade under blue sky" },
  { image: urban11, alt: "An ornate painted dome ceiling inside a mosque" },
  { image: urban12, alt: "The CN Tower in silhouette against an orange sunset" },
];
