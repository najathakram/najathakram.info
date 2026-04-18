export const profile = {
  name: "Najath Akram",
  credential: "Ph.D.",
  location: "Houston, Texas",
  email: "akram.m.n@ieee.org",
  phone: "+1 (330) 990-8406",
  linkedin: "https://www.linkedin.com/in/najath",
  scholar: "https://scholar.google.com/citations?user=najath",
  ieee: "https://ieeexplore.ieee.org/author/37086418999",
  tagline: "Signal processing for the next generation of wireless.",
  positioning:
    "I architect the physical layer of 5G and 6G — from MATLAB models to FPGA realization — and bring AI to bear on the hardest problems in RF.",
};

export const expertise = [
  {
    id: "dsp",
    label: "01",
    title: "Signal Processing & Phased Arrays",
    body:
      "Digital beamforming, multidimensional DSP, and hardware-efficient architectures for wideband, high-frequency RF. From approximate-DFT cores to frequency-multiplexed RFSoC receivers operating at 28 GHz.",
    keywords: [
      "Digital Beamforming",
      "Massive MIMO",
      "Phased Arrays",
      "Approximate FFT",
      "Sigma-Delta ADCs",
      "RFSoC",
    ],
  },
  {
    id: "oran",
    label: "02",
    title: "O-RAN, 5G & 6G Radio Systems",
    body:
      "End-to-end PHY for O-RAN remote radio units — DFE, CFR, EVM optimization, PIM cancellation — across single-, dual-, and tri-band FDD/TDD configurations, validated against 3GPP performance targets.",
    keywords: [
      "O-RAN RRUs",
      "Digital Front-End",
      "CFR / DPD",
      "PIM Cancellation",
      "OFDM / OTFS",
      "3GPP",
    ],
  },
  {
    id: "ai",
    label: "03",
    title: "AI for Wireless & RF Systems",
    body:
      "Applying machine learning to the physical layer: model-driven impairment estimation, learned waveform design, and hardware-aware AI for next-generation RAN intelligence and 6G research.",
    keywords: [
      "AI/ML for RAN",
      "Learned Beamforming",
      "Waveform Design",
      "Model-Driven ML",
      "6G Research",
    ],
  },
];

export type Role = {
  company: string;
  location: string;
  positions: { title: string; period: string }[];
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Airspan Networks",
    location: "Houston, TX",
    positions: [{ title: "Signal Processing Engineer", period: "2025 — Present" }],
    highlights: [
      "Lead system-level modeling, verification, and performance analysis of multi-band LTE and 5G NR O-RAN Remote Radio Units.",
      "Design end-to-end DSP chains — DFE, CFR, filtering, EVM optimization — using system-level and bit-accurate MATLAB models.",
      "Bridge engineering and customer stakeholders, translating requirements into executable models and reference architectures.",
      "Extend system models for early 6G research: next-gen architectures, spectrum strategies, and hardware-efficient DSP.",
    ],
  },
  {
    company: "Jabil Inc.",
    location: "Warren, NJ · Houston, TX",
    positions: [
      { title: "Principal Design Engineer, Wireless Systems", period: "2023 — 2024" },
      { title: "Lead Design Engineer, Wireless Systems", period: "2021 — 2023" },
      { title: "Senior FPGA Engineer, Wireless Systems", period: "2020 — 2021" },
    ],
    highlights: [
      "Owned system architecture and MATLAB modeling for LTE / 5G NR O-RAN radios across uplink, downlink, PRACH and multi-band FDD/TDD.",
      "Built bit-accurate simulation models for waveform performance, filtering, CFR, EVM, spectral emissions, and PIM behavior.",
      "Led customer-facing investigations into PIM and interference, correlating MATLAB simulation with lab measurements.",
      "Generated stimulus vectors and reference models for RTL/UVM verification, integrating Xilinx C-models for hardware alignment.",
      "Shaped strategic evaluations of massive MIMO and O-RAN functional splits — quantifying complexity and implementation trade-offs.",
    ],
  },
  {
    company: "Florida International University",
    location: "Miami, FL",
    positions: [{ title: "Graduate Research Assistant", period: "2018 — 2020" }],
    highlights: [
      "Developed digital and mixed-domain hardware-reduction algorithms for massive MIMO, targeting 5G and emerging 6G.",
      "Built a digital beamforming array receiver at 28 GHz with 800 MHz/channel — cutting ADC count by 75% via FDM-based digitization.",
      "Proved 50% ADC reduction for 2D phased arrays via multidimensional signal processing, validated through over-the-air testing.",
      "Implemented advanced DSP on Xilinx RFSoC platforms (ZCU111, ZCU1275, ZCU1285).",
    ],
  },
  {
    company: "MathWorks",
    location: "Natick, MA",
    positions: [{ title: "Engineering Intern", period: "2019" }],
    highlights: [
      "Won two awards in the MathWorks intern hackathon, Fall 2019.",
      "Enhanced HDL Verifier capabilities by optimizing Xilinx Vivado workflows.",
      "Developed and verified Ethernet PHY IP designs across Artix, Kintex, and Virtex FPGAs.",
    ],
  },
  {
    company: "The University of Akron",
    location: "Akron, OH",
    positions: [{ title: "Graduate Research Assistant", period: "2016 — 2018" }],
    highlights: [
      "DARPA- and NSF-funded research on DSP for multidimensional computational RF systems.",
      "Implemented FFT and approximate-DFT cores for digital beamforming — preserving precision while collapsing computational complexity.",
      "Designed multidimensional sigma-delta ADC architectures to replace conventional multi-ADC topologies in phased array receivers.",
    ],
  },
  {
    company: "Synopsys",
    location: "Colombo, Sri Lanka",
    positions: [{ title: "Product Verification Intern", period: "2015" }],
    highlights: [
      "Worked across Spyglass, VHDL, SystemVerilog and Xilinx-based ASIC flows.",
      "Built and automated product verification test cases via Perl.",
    ],
  },
];

export const publications = [
  {
    title:
      "Digital and Mixed-Domain Hardware Reduction Algorithms and Implementations for Massive MIMO",
    venue: "Ph.D. Dissertation · Florida International University",
    year: "2021",
    type: "Dissertation",
  },
  {
    title:
      "Frequency-Multiplexed Array Digitization for MIMO Receivers: 4-Antennas/ADC at 28 GHz on Xilinx ZCU-1285 RF SoC",
    venue: "IEEE Access, vol. 9",
    year: "2021",
    type: "Journal",
  },
  {
    title:
      "Spacetime Frequency-Multiplexed Digital-RF Array Receivers with Reduced ADC Count",
    venue: "IEEE Trans. on Circuits and Systems II: Express Briefs, vol. 68",
    year: "2021",
    type: "Journal",
  },
  {
    title: "Fast Radix-32 Approximate DFTs for 1024-Beam Digital RF Beamforming",
    venue: "IEEE Access, vol. 8",
    year: "2020",
    type: "Journal",
  },
  {
    title:
      "A Direct-Conversion Digital Beamforming Array Receiver with 800 MHz Channel Bandwidth at 28 GHz Using Xilinx RF SoC",
    venue: "IEEE COMCAS, Israel",
    year: "2019",
    type: "Conference",
  },
  {
    title:
      "Sampling H- & V-Polarized Antennas using a Single ADC for Digital Antenna Arrays",
    venue: "IEEE 23rd Int. Conf. on Digital Signal Processing, China",
    year: "2018",
    type: "Conference",
  },
];

export const education = [
  {
    school: "Florida International University",
    degree: "Ph.D., Electrical & Computer Engineering",
    location: "Miami, FL",
    year: "2020",
  },
  {
    school: "University of Ruhuna",
    degree: "B.S. (Hons.), Electrical & Information Engineering",
    location: "Galle, Sri Lanka",
    year: "2016",
  },
];

export const recognition = [
  "Tau Beta Pi Engineering Honor Society",
  "IEEE Member since 2013",
  "MathWorks Intern Hackathon — two awards, Fall 2019",
  "DARPA & NSF-funded research contributor",
];
