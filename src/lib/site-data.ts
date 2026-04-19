export const profile = {
  name: "Najath Akram",
  location: "Houston, Texas",
  email: "akram.m.n@ieee.org",
  phone: "+1 (330) 990-8406",
  linkedin: "https://www.linkedin.com/in/najath",
  scholar: "https://scholar.google.com/citations?user=najath",
  ieee: "https://ieeexplore.ieee.org/author/37086418999",
  role: "Signal processing engineer",
  short: "I work on the physical layer of wireless systems.",
  intro:
    "I work on the physical layer of wireless systems. The part of a radio where information becomes electromagnetic waves and, with a bit of luck, becomes information again on the other end. These days that means O\u2011RAN, 5G, some early 6G, and a careful amount of machine learning where it earns its keep.",
};

export const focusAreas = [
  "Digital signal processing",
  "O\u2011RAN, 5G, 6G physical layer",
  "Machine learning for wireless",
];

export const expertise = [
  {
    id: "dsp",
    title: "Signal processing",
    body:
      "Digital beamforming, phased arrays, and the quiet art of doing more with fewer ADCs. A good portion of my PhD was spent convincing receivers to resolve more information than they had hardware for, using multidimensional signal processing and approximate FFTs.",
  },
  {
    id: "oran",
    title: "O\u2011RAN, 5G and 6G",
    body:
      "Digital front ends, crest factor reduction, EVM, PIM, and the rest of the acronyms that make up a modern O\u2011RAN remote radio. I spend most of my days here. If something about a waveform looks wrong on a spectrum analyzer, it usually becomes my afternoon.",
  },
  {
    id: "ai",
    title: "Machine learning, applied carefully",
    body:
      "Machine learning for wireless, mostly model\u2011driven. I like the parts where data and physics meet: where a learned model respects the structure we already know, and saves us from having to pretend it doesn\u2019t.",
  },
];

export type Role = {
  company: string;
  location: string;
  positions: { title: string; period: string }[];
  summary: string;
};

export const experience: Role[] = [
  {
    company: "Airspan Networks",
    location: "Houston, TX",
    positions: [{ title: "Signal Processing Engineer", period: "2025, Present" }],
    summary:
      "System\u2011level modelling and performance analysis for multi\u2011band LTE and 5G NR O\u2011RAN remote radios. A lot of MATLAB, a lot of 3GPP, a lot of back\u2011and\u2011forth between simulation, FPGA, and RF lab. Lately I\u2019ve been extending the models to explore what 6G might actually look like in hardware.",
  },
  {
    company: "Jabil",
    location: "Warren, NJ and Houston, TX",
    positions: [
      { title: "Principal Design Engineer, Wireless Systems", period: "2023, 2024" },
      { title: "Lead Design Engineer, Wireless Systems", period: "2021, 2023" },
      { title: "Senior FPGA Engineer, Wireless Systems", period: "2020, 2021" },
    ],
    summary:
      "Four years of O\u2011RAN radios, from single band to tri band, from specification to silicon. I owned the system architecture and bit\u2011accurate MATLAB models, worked closely with RTL and firmware teams, and spent a fair bit of time in front of customers explaining why passive intermodulation is, unfortunately, still a thing.",
  },
  {
    company: "Florida International University",
    location: "Miami, FL",
    positions: [{ title: "Graduate Research Assistant, PhD", period: "2018, 2020" }],
    summary:
      "PhD research on hardware\u2011efficient massive MIMO. I built a 28 GHz digital beamforming array receiver that used one ADC per four antennas instead of one per antenna, and a multidimensional scheme that halved the ADC count for 2D arrays. The lab had a few RFSoC boards and quite a lot of patience.",
  },
  {
    company: "MathWorks",
    location: "Natick, MA",
    positions: [{ title: "Engineering Intern", period: "2019" }],
    summary:
      "A summer helping improve HDL Verifier workflows on Xilinx Vivado, and verifying Ethernet PHY IP across a few FPGA families. Also, somewhat unexpectedly, two awards in the intern hackathon.",
  },
  {
    company: "The University of Akron",
    location: "Akron, OH",
    positions: [{ title: "Graduate Research Assistant", period: "2016, 2018" }],
    summary:
      "DARPA and NSF funded research on multidimensional DSP for RF systems. This is where I first fell for approximate DFTs and multidimensional sigma\u2011delta ADCs, and where I learned that a good algorithm and a bad one can look identical on paper and very different on silicon.",
  },
  {
    company: "Synopsys",
    location: "Colombo, Sri Lanka",
    positions: [{ title: "Product Verification Intern", period: "2015" }],
    summary:
      "My first exposure to real ASIC verification workflows. Spyglass, SystemVerilog, VHDL, and a lot of Perl scripts held together with hope.",
  },
];

export const publications = [
  {
    title:
      "Digital and Mixed Domain Hardware Reduction Algorithms and Implementations for Massive MIMO",
    venue: "PhD Dissertation, Florida International University",
    year: "2021",
    type: "Dissertation",
  },
  {
    title:
      "Frequency Multiplexed Array Digitization for MIMO Receivers: 4 Antennas / ADC at 28 GHz on Xilinx ZCU 1285 RF SoC",
    venue: "IEEE Access, vol. 9",
    year: "2021",
    type: "Journal",
  },
  {
    title:
      "Spacetime Frequency Multiplexed Digital RF Array Receivers with Reduced ADC Count",
    venue: "IEEE Transactions on Circuits and Systems II: Express Briefs, vol. 68",
    year: "2021",
    type: "Journal",
  },
  {
    title: "Fast Radix 32 Approximate DFTs for 1024 Beam Digital RF Beamforming",
    venue: "IEEE Access, vol. 8",
    year: "2020",
    type: "Journal",
  },
  {
    title:
      "A Direct Conversion Digital Beamforming Array Receiver with 800 MHz Channel Bandwidth at 28 GHz Using Xilinx RF SoC",
    venue: "IEEE COMCAS, Israel",
    year: "2019",
    type: "Conference",
  },
  {
    title:
      "Sampling H and V Polarized Antennas using a Single ADC for Digital Antenna Arrays",
    venue: "IEEE 23rd International Conference on Digital Signal Processing, China",
    year: "2018",
    type: "Conference",
  },
];

export const education = [
  {
    school: "Florida International University",
    degree: "PhD, Electrical and Computer Engineering",
    location: "Miami, FL",
    year: "2020",
  },
  {
    school: "University of Ruhuna",
    degree: "BSc (Hons), Electrical and Information Engineering",
    location: "Galle, Sri Lanka",
    year: "2016",
  },
];

export const recognition = [
  "Tau Beta Pi, Engineering Honor Society",
  "IEEE member since 2013",
  "MathWorks intern hackathon, two awards (2019)",
  "Research contributor, DARPA and NSF funded programs",
];

export type Lyric = {
  title: string;
  titleNative?: string;
  artist: string;
  year: string;
  url: string;
};

export const lyrics: Lyric[] = [
  {
    title: "Katahada",
    titleNative: "\u0d9a\u0da7\u0dc4\u0da9",
    artist: "Nilakshi Dinusha Perera",
    year: "2021",
    url: "https://www.youtube.com/watch?v=7eozsk1uWxk",
  },
  {
    title: "Ramalanaye Sanda",
    titleNative: "\u0dbb\u0dcf\u0db8\u0dbd\u0dcf\u0db1\u0dba\u0dda \u0dc3\u0daf",
    artist: "Dushani Madhushika",
    year: "2020",
    url: "https://www.youtube.com/watch?v=tBj98Ph_dg4",
  },
  {
    title: "Yuganthaya",
    titleNative: "\u0dba\u0dd4\u0d9c\u0dcf\u0db1\u0dca\u0dad\u0dba",
    artist: "Gihan Dhanushka",
    year: "2020",
    url: "https://www.youtube.com/watch?v=w0MGP3iKVb0",
  },
  {
    title: "Midunu Seethala Hima Piyallaka",
    titleNative: "\u0db8\u0dd2\u0daf\u0dd4\u0dab\u0dd4 \u0dc3\u0dd3\u0dad\u0dbd \u0dc4\u0dd2\u0db8 \u0db4\u0dd2\u0dba\u0dbd\u0dca\u0dbd\u0d9a",
    artist: "Harshana Disanayake",
    year: "2020",
    url: "https://www.youtube.com/watch?v=nDG4PU9ZLZ0",
  },
  {
    title: "Disi Rana Liya Sadisi",
    titleNative: "\u0daf\u0dd2\u0dc3\u0dd2 \u0dbb\u0db1 \u0dbd\u0dd2\u0dba \u0dc3\u0daf\u0dd2\u0dc3\u0dd2",
    artist: "Harshana Disanayake",
    year: "2020",
    url: "https://www.youtube.com/watch?v=eqj8pKyOMls",
  },
];

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export const photos: Photo[] = [];
