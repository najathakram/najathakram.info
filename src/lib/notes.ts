// Notes recovered from the previous site so the writing survives the rebuild.
// Bodies are the author's own words. Blocks render in order.
//
// Deliberate omissions, to keep the site's no-third-party-names rule: the O-RAN
// piece drops its "Case studies" section, which named specific operators, and
// the autonomous-vehicles piece drops its quoted third-party statistics.
//
// PHYSICS CORRECTIONS, 2026-08-07. The default is still not to edit the prose,
// but three sentences in "Do we really need 5G?" were factually wrong, and a
// wrong equation on a signal-processing PhD's own site is a credibility
// liability rather than a stylistic quirk. Corrected, minimally, keeping voice:
//   1. "the aperture of an antenna is equal to lambda/2" was dimensionally
//      wrong. lambda/2 is the physical LENGTH of a half-wave dipole; aperture
//      is an AREA. Effective aperture scales as lambda squared, which is what
//      actually carries the argument for arrays, so that is what it now says.
//   2. Rain and dust attenuation was attributed to diffraction. Wrong
//      mechanism (absorption and scattering), and backwards on the interesting
//      point: mm-wave diffracts POORLY, which is why obstacles shadow it.
//   3. "bandwidth is the fluctuation of the frequency" defined nothing.
// Style edits still need the owner. Factual errors do not.

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ol"; items: { lead?: string; text: string }[] };

export type Note = {
  slug: string;
  title: string;
  date: string;
  year: string;
  dek: string;
  featured?: boolean;
  body: Block[];
};

// Read time is DERIVED, never stored. It used to be a hand-written `minutes`
// constant and had already drifted: the O-RAN post claimed 6 minutes for a
// 603-word body. Same rule as everywhere else on this site, never hardcode a
// quantity the content already knows. 200 wpm, floor of 1.
export function readingMinutes(note: Note): number {
  const words = note.body
    .map((block) =>
      block.kind === "ol"
        ? block.items.map((i) => `${i.lead ?? ""} ${i.text}`).join(" ")
        : block.text
    )
    .join(" ")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const notes: Note[] = [
  {
    slug: "do-we-really-need-5g",
    title: "Do we really need 5G?",
    date: "August 1, 2020",
    year: "2020",
    featured: true,
    dek: "Why millimetre waves need many small antennas instead of one big one, explained with a pack of cups in the rain.",
    body: [
      { kind: "p", text: "Just about every mobile manufacturer is now concerned about releasing their 5G products. Samsung, Huawei, OnePlus and even Oppo have already released their phones, whereas Apple and Google are on the way. Let's leave all the branding and advertising aside for a second. Real questions to raise are, “What is 5G?” and “Do we really need it?”" },
      { kind: "p", text: "The key requirement for the enhancement of mobile communication is to satisfy the requirement for high data rates. Starting from 2G (GPRS), 3G and 4G (LTE) have increased the data rate; so that users could switch from downloading 480p movies to streaming high quality 4K videos. Though it may sound cool, engineers and scientists behind the stage have been working their butts off to make high data rates a possibility for the commercial use." },
      { kind: "p", text: "If you could recall those boring physics lessons from the high school (or middle school?), you might remember electromagnetic signals at known frequencies are being used as carrier waves in wireless communication. The bandwidth is the width of the slice of spectrum a signal occupies. Simply, all the information you need to send or receive has to fit inside it." },
      { kind: "p", text: "That explains why we would need a higher bandwidth to achieve high data rates. Higher the bandwidth, more data we could pack in the spectrum. As it may sound pretty obvious now, the bandwidth is much smaller than the carrier frequency. In the case of LTE, the carrier frequency lies between 700 MHz to 2.7 GHz, whereas the bandwidth is less than 20 MHz." },
      { kind: "p", text: "As you may have already heard, FCC is an agency responsible for managing the frequency spectrum and they have allocated frequency bands from 9 kHz to 275 GHz for use." },
      { kind: "p", text: "The obvious solution for the limited bandwidth problem is to increase the carrier frequency. Imagine what if we had increased it all the way up to the mm-wave range in the spectrum? That is beyond 30 GHz carrier frequency. This is an easy way to increase the bandwidth by a huge factor." },
      { kind: "p", text: "As interesting as it may sound, mm-wave communication has some obstacles to win." },
      { kind: "h", text: "Back to high school physics" },
      { kind: "p", text: "Remember the wave equation c = fλ which states that the wavelength of an electromagnetic wave reduces with the frequency? In other words, the wavelengths of mm-waves would literally lie in the range of millimeters. And the shorter the wavelength, the less willing the signal is to bend around anything in its way, so obstacles cast harder shadows than they do at sub-6 GHz. Believe it or not, even dust particles and water droplets could attenuate mm-wave propagation." },
      { kind: "p", text: "Let's say if you buy a 5G mobile phone, which operates at mm-wave spectrum. In one hand, receiver antenna of your phone would not receive strong signals as in 3G or 4G. On the other hand, the area an antenna can effectively collect power from scales with the square of the wavelength, so an mm-wave element is a much smaller collector than a sub-6 GHz one. Small antenna apertures cannot capture enough energy. As a result, the range of mm-wave communication drastically reduces to several meters." },
      { kind: "h", text: "What are we going to do about it?" },
      { kind: "p", text: "Well… How about using multiple antennas instead of one?" },
      { kind: "p", text: "We know the antenna aperture has to be small for mm-wave communication. Yet no one said anything about the number of antennas we could use. Therefore, the solution is to use multiple antenna elements and create an antenna array instead of one antenna." },
      { kind: "p", text: "Confusing?" },
      { kind: "p", text: "Imagine it is raining and you need to collect water. But all you have is a pack of small cups. What can you do? I would place them in a row and collect water separately. You can simply pour all the water into one big container later, but these are electromagnetic signals we are talking about. How do you combine them? Well, that's a story I better save for another article." },
      { kind: "p", text: "Now, this method is going to increase the hardware complexity of the RF system. Instead of using one RF chain, these systems have to use multiple chains, such that every element has an RF chain for itself. (An RF chain is the set of components connected together to retrieve the baseband signal from the received signal which includes mixers, low noise amplifiers and filters.) Last year, my colleagues at FIU and I have built a 4-element array operating at 28 GHz as a part of our course project." },
      { kind: "p", text: "Cool stuff. Right?" },
      { kind: "h", text: "Back to the story" },
      { kind: "p", text: "At FIU, we research on methods we could use to reduce the hardware complexity in antenna array systems. As most of the signal processing systems, these RF systems prefer processing in the digital domain rather than analog to reduce the complexity. Therefore, we need an analog-to-digital converter per every antenna element. Since the frequency of operation is high in these systems (some GHz range) these ADCs have to sample the analog signal at higher rates. Of course, these ADCs going to be very expensive. Well, my research is to find alternative methods to reduce this requirement." },
      { kind: "p", text: "In the next articles, I will share more about the methods we have explored so far with results, and I will try to explain some multi-dimensional signal processing theories in a more comprehensive manner. Until then, adios." },
    ],
  },
  {
    slug: "o-ran-transforming-telecom-infrastructure",
    title: "Open Radio Access Network (O-RAN): Transforming Telecom Infrastructure",
    date: "May 10, 2022",
    year: "2022",
    featured: true,
    dek: "The principles behind disaggregated RAN, the benefits operators are chasing, and the integration and security problems that come with them.",
    body: [
      // The "Introduction" and "Conclusion" sections were cut 2026-08-10. Both
      // were written in press-release register ("paradigm shift", "promising to
      // revolutionize", "paving the way for a more open and intelligent
      // future") and neither carried information the body does not. The panel
      // rated removing them the single largest quality gain on this route. The
      // post now opens on the actual subject.
      { kind: "h", text: "Principles of O-RAN" },
      { kind: "p", text: "O-RAN is built on the foundation of disaggregating hardware and software components, which traditionally have been tightly integrated into proprietary solutions. The O-RAN Alliance, a global consortium, drives the development of standards that ensure interoperability between different vendors' equipment. The key principles of O-RAN include:" },
      {
        kind: "ol",
        items: [
          { lead: "Open interfaces", text: "O-RAN advocates for open and standardized interfaces between RAN components, such as the fronthaul interface between the Remote Radio Head and the Distributed Unit. This openness allows operators to mix and match components from different vendors, fostering a competitive and innovative ecosystem." },
          { lead: "Disaggregation", text: "The traditional monolithic RAN is disaggregated into the Radio Unit, Distributed Unit, and Centralized Unit, each of which can be independently developed and optimized. This separation enhances flexibility in network deployment and scaling." },
          { lead: "Virtualization and cloudification", text: "O-RAN leverages virtualization and cloud technologies to enable the deployment of RAN functions on commodity hardware, reducing costs and enhancing scalability. Network functions can be instantiated, scaled, and managed dynamically, improving operational efficiency." },
          { lead: "Intelligent RAN", text: "O-RAN incorporates intelligent controllers, such as the near-real-time RAN Intelligent Controller, which utilizes machine learning and artificial intelligence to optimize network performance and resource allocation in real time." },
        ],
      },
      { kind: "h", text: "Benefits" },
      {
        kind: "ol",
        items: [
          { lead: "Cost efficiency", text: "O-RAN reduces capital and operational expenditures by enabling commoditized hardware and promoting competition among vendors. Operators can avoid vendor lock-in and choose the best components for their networks." },
          { lead: "Flexibility and scalability", text: "The disaggregated and virtualized nature allows operators to deploy and scale network resources as needed, responding quickly to changes in demand and new service requirements." },
          { lead: "Interoperability", text: "Open interfaces and standards foster a diverse ecosystem of vendors and developers, and ensure interoperability. This environment accelerates the development and deployment of new features and technologies." },
          { lead: "Improved network performance", text: "Intelligent RAN controllers enhance network performance through real-time optimization, leading to better resource utilization, reduced latency, and improved user experience." },
        ],
      },
      { kind: "h", text: "Challenges in adoption" },
      {
        kind: "ol",
        items: [
          { lead: "Integration complexity", text: "Integrating components from different vendors can be complex, requiring rigorous testing and validation to ensure interoperability and performance. Operators must invest in developing the expertise and infrastructure needed for successful integration." },
          { lead: "Security concerns", text: "The open and disaggregated nature introduces new security challenges. Ensuring the security of open interfaces and protecting against potential vulnerabilities in a multi-vendor environment is critical." },
          { lead: "Performance overheads", text: "Virtualization and cloudification, while offering flexibility, can introduce performance overheads. Operators need to carefully design and optimize their networks to mitigate these impacts." },
          { lead: "Standardization and maturity", text: "O-RAN is still an evolving standard, and some aspects may lack maturity and widespread adoption. Continuous development and consensus-building among industry stakeholders are necessary to address these gaps." },
          { lead: "Cultural and operational shift", text: "Transitioning requires a significant shift in telecom operators' operational and cultural mindsets. Embracing openness and collaboration across different vendors and new technologies can be challenging." },
        ],
      },
      { kind: "h", text: "Future prospects" },
      { kind: "p", text: "The future looks promising as the industry continues to evolve towards more open, flexible, and intelligent network architectures. Key areas for future work include more sophisticated AI and machine learning in the RAN Intelligent Controller, integrating edge computing to bring processing closer to end users, robust security frameworks for disaggregated networks, and continued global standardization." },
    ],
  },
  {
    slug: "the-future-of-autonomous-vehicles",
    title: "The Future of Autonomous Vehicles: Are We Ready?",
    date: "January 10, 2021",
    year: "2021",
    dek: "Where self-driving technology actually stands, and the safety, regulatory, and societal questions that arrive with it.",
    body: [
      { kind: "p", text: "Are we truly prepared for a world where cars drive themselves? Autonomous vehicles have the potential to revolutionize transportation, promising increased safety, efficiency, and convenience. However, this transition brings with it a plethora of challenges and profound societal implications. This article explores the latest advancements in self-driving technology, the hurdles we face, and the broader impact on our lives." },
      { kind: "h", text: "Advancements in self-driving technology" },
      { kind: "p", text: "Autonomous vehicles have evolved remarkably over the past few decades. From the early experiments in the 1980s to the sophisticated prototypes we see today, the journey has been driven by significant technological advancements. One of the most notable milestones was the DARPA Grand Challenge in the early 2000s, which spurred innovation and development in the field of autonomous systems." },
      { kind: "p", text: "Today, companies like Tesla, Waymo, and Uber are at the forefront of the technology. Tesla's Autopilot utilizes a combination of cameras, ultrasonic sensors, and radar to navigate roads and highways. Waymo has developed fully autonomous minivans that rely on an array of sensors, including LIDAR, which provides high-resolution 3D maps of the environment. These technologies are underpinned by advanced AI algorithms that enable real-time decision-making and navigation." },
      { kind: "p", text: "Despite these advancements, significant technical challenges remain. Sensor reliability in adverse weather conditions is a critical issue. Rain, fog, and snow can interfere with sensor accuracy, leading to potential safety risks. Moreover, integrating autonomous vehicles into existing infrastructure, which was not designed with autonomous systems in mind, presents another major hurdle." },
      { kind: "h", text: "Safety concerns and regulatory hurdles" },
      { kind: "p", text: "Safety is paramount. The public's trust hinges on robust safety protocols and fail-safe mechanisms to prevent accidents and system failures. High-profile incidents have underscored the importance of rigorous testing and validation processes." },
      { kind: "p", text: "Regulatory frameworks also play a crucial role. Currently, there is a lack of standardized laws governing autonomous vehicles, creating a patchwork of regulations that vary by region. This inconsistency poses challenges for manufacturers and developers who must navigate a complex legal landscape. Additionally, policymakers must balance the need for innovation with safety and ethical considerations." },
      { kind: "p", text: "Ethical dilemmas further complicate adoption. In unavoidable accident scenarios, how should a vehicle prioritize the safety of its passengers versus pedestrians? These moral questions require careful consideration and consensus among stakeholders, including engineers, ethicists, and the general public." },
      { kind: "h", text: "Impact on society" },
      { kind: "p", text: "The widespread adoption of autonomous vehicles could have profound economic, environmental, and social implications. Economically, they have the potential to disrupt industries and job markets. While they promise increased efficiency and cost savings, they also pose a threat to jobs in driving and related sectors." },
      { kind: "p", text: "Environmentally, they offer potential benefits such as reduced emissions and optimized traffic flow. However, the energy demands of the data centers required for their operation, and the manufacturing processes, must be weighed against these benefits." },
      { kind: "p", text: "Urban planning could also be significantly impacted. With fewer parking needs and more efficient traffic management, cities might see changes in their landscapes. Public transportation systems could integrate with autonomous fleets, creating more dynamic and adaptable urban environments." },
      { kind: "p", text: "Socially, autonomous vehicles could enhance mobility for the elderly and disabled, offering newfound independence. However, they also raise questions about data privacy and security. The balance between convenience and privacy will be crucial as the technology continues to develop." },
      { kind: "h", text: "Are we ready?" },
      { kind: "p", text: "Public perception is a mixed bag. While some embrace the technology, others remain skeptical. Building trust through transparency and proven safety records is essential for widespread acceptance. Real-world testing provides valuable insights, and pilot programs in cities worldwide reveal both the promise and the pitfalls." },
      { kind: "p", text: "Another critical question is the readiness of our infrastructure. Roads, traffic signals, and communication networks need upgrades. Investments in smart infrastructure, such as connected traffic lights and dedicated lanes, will be pivotal." },
      { kind: "p", text: "Looking ahead, the timeline for widespread adoption is uncertain. While significant progress has been made, overcoming technical, regulatory, and societal challenges will take time. However, the potential benefits make this journey worthwhile. As we continue to explore and refine this transformative technology, staying informed and adaptable will be key." },
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
