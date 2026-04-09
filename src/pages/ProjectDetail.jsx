import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { MFETWeeks } from "../components/MFETWeeks";
import { ArduinoMilestones } from "../components/ArduinoMilestones";
import { ME2390Weeks } from "../components/ME2390Weeks";

const PeekingEyes = () => {
  const [state, setState] = useState("normal"); // normal | blink | left | right | up
  const timerRef = useRef(null);

  useEffect(() => {
    const schedule = () => {
      const delay = 1500 + Math.random() * 2500;
      timerRef.current = setTimeout(() => {
        const actions = ["blink", "left", "right", "up", "blink"];
        const next = actions[Math.floor(Math.random() * actions.length)];
        setState(next);
        setTimeout(() => {
          setState("normal");
          schedule();
        }, next === "blink" ? 200 : 600);
      }, delay);
    };
    schedule();
    return () => clearTimeout(timerRef.current);
  }, []);

  const eyeStyle = () => {
    const base = "w-8 h-8 bg-foreground rounded-full relative transition-transform duration-150";
    if (state === "blink") return `${base} scale-y-[0.1]`;
    return base;
  };

  const pupilOffset = () => {
    if (state === "left")  return { transform: "translate(-6px, 0)" };
    if (state === "right") return { transform: "translate(6px, 0)" };
    if (state === "up")    return { transform: "translate(0, -5px)" };
    return { transform: "translate(0, 0)" };
  };

  return (
    <div className="flex gap-6 mt-2">
      {[0, 1].map((i) => (
        <div key={i} className="w-14 h-14 bg-card border-2 border-border rounded-full flex items-center justify-center overflow-hidden">
          <div className={eyeStyle()} style={{ transition: state === "blink" ? "transform 80ms" : "transform 150ms" }}>
            <div
              className="w-3.5 h-3.5 bg-background rounded-full absolute top-1.5 left-1.5"
              style={{ ...pupilOffset(), transition: "transform 200ms ease-in-out" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Docker", "Vercel", "GitHub", "HTML"],
    githubUrl: "https://github.com/Sebacaraballo/Beautiful_Portfolio",
    sidebarLabel: "Tech Stack",
    heroImage: "/projects/portfolio-website.png",
    galleryImages: [],
    footerVideos: [],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "As I have gained more experience and refined my skills, I realized the importance of having a personal portfolio to showcase my work and share my journey. This project was a labor of love, allowing me to combine my passion for design and development into a single platform that represents who I am as a person and as an engineer. It is also my first personal project that I have deployed and shared with the world, making it a significant milestone in my journey.",
          "The design process itself was very fun. I had full creative liberty to experiment with different layouts, color schemes, and interactions. I wanted the site to feel modern and polished, while also reflecting my personality and style. I iterated on the design multiple times, seeking feedback from friends and mentors to ensure that it was both visually appealing and user-friendly. I settled on the space design because my childhood dream was to become an astronaut. While my goals have shifted tremendously, I still will always have a passion and fascination for space and the stars, so I thought it would be a fun theme to incorporate into the design.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This project was a great opportunity for me to learn and grow as a developer. I had experience with React and Tailwind CSS from previous projects, but building a full portfolio website from scratch was a new challenge. I learned how to structure a larger React application, manage state effectively, and create reusable components. I also gained experience with responsive design, ensuring that the site looks great on both desktop and mobile devices. On top of developing my front-end skills, I also got to work in the back-end by setting up a simple API to handle emails. Overall, this project was a great learning experience that allowed me to apply my skills in a real-world context and create something that I am proud of.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "FRC Robot",
    description: "Designed and built a competitive robot for the FIRST Robotics Competition.",
    tags: ["OnShape", "Java", "Laser Cutter", "3D Printer", "Machining", "Raspberry Pi", "AprilTags"],
    githubUrl: null,
    sidebarLabel: "Tools Used",
    heroImage: "/projects/FRC_TEAM2.png",
    galleryImages: [
      "/projects/FRC_CAD1.jpg",
      "/projects/FRC_CAD2.jpg",
      "/projects/PortfolioFRC_Front.jpg",
    ],
    footerVideos: [
      "/projects/FRC_VID1.mov",
      "/projects/FRC_VID2.mov",
      "/projects/FRCVID3.MOV",
    ],
    footerLabel: "Competition Footage",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Team 5557 — the BB-R8ERS — is my high school robotics team (yes, we were big Star Wars fans). We compete in the FIRST Robotics Competition (FRC), a program where high school teams are given a new game challenge every January and have six weeks to design, build, wire, and program a full-scale robot before heading to regional and world championship events.",
          "The team is organized into four sub-teams: Mechanical, Electrical, Software, and Business. I joined at the start of my junior year and served as the Mechanical Team Lead — responsible for our CAD workflow in OnShape, coordinating fabrication, and making sure our designs actually survived contact with other robots. I've stayed involved as an active mentor to this day.",
        ],
      },
      {
        heading: "Design & Engineering",
        paragraphs: [
          "The centerpiece of the robot was a multi-stage elevator and end-effector assembly designed to score game pieces at multiple height targets. Every structural component was modeled in OnShape, with assemblies iterated rapidly as constraints evolved during the build season. Weight distribution, center of gravity, and moment arm calculations were all factored into the design to ensure stability during dynamic play.",
          "Parts were fabricated using a combination of CNC milling, 3D printing, and hand machining. Prototyping was a constant part of the workflow — we tested mechanisms early and often, feeding results back into the CAD model. This tight loop between design and physical testing was one of the most valuable engineering lessons the project reinforced.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "FRC was my first real exposure to the full engineering design cycle — from concept to competition — under real time and resource constraints. I deepened my proficiency in OnShape and gained hands-on experience with manufacturing processes I had only read about before. I also grew as a collaborator, learning how to work across mechanical, electrical, and software sub-teams to integrate a system that actually works.",
          "The six-week build season is intentionally brutal, and I think that's part of the point. It forces you to make decisions with incomplete information, prioritize ruthlessly, and ship. That mindset has carried into every engineering project I've taken on since.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "WNYUA Research",
    description: "My time as a research assistant at Western New York Urology Associates.",
    tags: ["Predictive Analytics", "Statistical Analysis", "Clinical Data Modeling", "Data Analysis", "Quantitative Research"],
    githubUrl: null,
    sidebarLabel: "Research Areas",
    heroImage: "/projects/WNYUA_FRONT.jpg",
    galleryImages: [],
    footerVideos: [],
    footerLabel: null,
    publications: [
      { label: "Research Paper", href: "/projects/WNYUA%20Paper.pdf" },
      { label: "Abstract", href: "/projects/WNYUA%20Abstract.pdf" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "During high school I had the opportunity to work as a research assistant at Western New York Urology Associates (WNYUA), a urology practice based in Western New York. The goal of the research was to identify more cost-efficient methods of operations within the practice — analyzing patient data, procedural workflows, and resource allocation to find areas where outcomes could be maintained or improved while reducing unnecessary overhead.",
          "This was my first real exposure to applied research outside of a classroom setting. I worked alongside physicians and administrative staff to collect and interpret data, and ultimately contributed to published findings. The experience gave me a strong appreciation for how engineering thinking — systematic analysis, data-driven decisions, and iterative improvement — applies directly to healthcare operations.",
        ],
      },
      {
        heading: "Methodology",
        paragraphs: [
          "The research involved gathering and organizing patient procedure records, then applying statistical analysis to identify patterns in cost, time, and outcomes across different treatment protocols. Data was cleaned, categorized, and analyzed to surface meaningful comparisons between approaches, with a focus on cost efficiency without compromising quality of care.",
          "I collaborated closely with the medical staff to ensure the data being analyzed was interpreted correctly within the clinical context — a challenge that required learning the domain quickly and asking the right questions. The final findings were compiled into a formal paper and abstract submitted for publication.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This project taught me that engineering skills are not confined to machines or software — the same analytical mindset applies wherever there are systems to optimize. Working in a medical environment pushed me to communicate clearly with people from a completely different professional background and to translate technical findings into language that was actionable for clinical staff.",
          "It also introduced me to the rigor of academic research: proper citation, structured methodology, peer review, and the importance of intellectual honesty when data doesn't tell a clean story. Publishing the work made the experience feel real in a way that school projects rarely do.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "PURPL",
    description: "Designing and testing Purdue's only undergraduate air-breathing propulsion project.",
    tags: ["Propulsion", "Turbomachinery", "FEA", "AutoCAD", "Rotor Dynamics", "Thermodynamics"],
    githubUrl: null,
    sidebarLabel: "Focus Areas",
    heroImage: "/projects/Screenshot 2026-04-08 101218.png",
    galleryImages: [
      "/projects/PURPL1.png",
      "/projects/PURPL2.png",
      "/projects/PURPL5.jpg",
      "/projects/PURPL4.jpg",
    ],
    galleryLabel: "Designs",
    bottomImages: [
      "/projects/PURPL3.jpg",
    ],
    footerVideos: [],
    footerLabel: null,
    publications: [],
    specs: [
      { label: "Fuel", value: "Propane, Hydrogen, Methane" },
      { label: "Thrust", value: "50 lbf" },
      { label: "Shaft Speed", value: "80,000 RPM" },
      { label: "Diameter", value: "6 in" },
    ],
    sections: [
      {
        heading: "About the Project",
        paragraphs: [
          "PURPL's turbojet team is developing Purdue's only undergraduate air-breathing propulsion project. At 50 lbf of thrust, the engine is sized to eventually serve as a power plant for medium-sized UAVs. Beyond performance, the engine doubles as a testbed for research into sustainable aviation fuels — investigating propane, hydrogen, and methane as viable alternatives to conventional jet fuel.",
          "I joined the team drawn by the opportunity to work on real propulsion hardware at the undergraduate level. Few clubs give students the chance to design, analyze, and test something that actually produces thrust — PURPL is one of them.",
        ],
      },
      {
        heading: "AIAA SciTech 2026",
        paragraphs: [
          "The turbojet team presented their work at the 2026 AIAA SciTech Conference in Orlando, FL — one of the largest aerospace conferences in the world, attended by engineers and researchers from leading commercial, governmental, and academic institutions. The team's paper was recognized by AIAA and published through the conference proceedings, providing widespread exposure to the aerospace and defense community.",
          "Representing Purdue at an AIAA conference as an undergraduate is a significant milestone. Presenting technical work to professionals and researchers from organizations like NASA, Lockheed Martin, and the Air Force Research Laboratory reinforced the importance of communicating engineering clearly and confidently.",
        ],
      },
      {
        heading: "Design Process",
        paragraphs: [
          "Turbomachinery design is inherently complex — the three-dimensional geometry of compressor and turbine blades makes computational modeling extremely demanding. Thanks to our sponsor CFTurbo, the team gained access to industry-grade turbomachinery design software that streamlined what would otherwise be an enormously time-consuming process.",
          "The team completed a full design review this past semester, covering aerodynamic analysis, structural loading, rotor dynamics, and thermal management. Each subsystem required careful iteration to meet the performance targets while staying within the constraints of what can be manufactured and tested by an undergraduate team.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "MFET 16300 Projects",
    description: "CAD assignments and projects from my MFET 16300 course at Purdue — culminating in a fully assembled Little Blazer Engine.",
    tags: ["SiemensNX", "CAD", "GD&T", "Assembly", "Teamcenter"],
    githubUrl: null,
    sidebarLabel: "Focus Areas",
    heroImage: "/projects/MFET1.jpg",
    galleryImages: [],
    bottomImages: ["/projects/MFET1.jpg"],
    bottomLabel: "Final Assembly",
    footerVideos: [],
    footerLabel: null,
    publications: [],
    mfetWeeks: true,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "MFET 16300 is Purdue's core CAD and engineering documentation course for Mechanical Engineering Technology students. Over the semester, assignments progressed from basic solid modeling to full multi-part assemblies, with each week building on the last. The overarching project across the later weeks was building sub-assemblies that would ultimately come together as a Little Blazer Engine — a classic model engine used in engineering education.",
          "All modeling was done in OnShape. Assignments covered parametric part design, sketch constraints, revolve and sweep features, shelling, assemblies with mate constraints, and finally Model Based Definition (MBD) — a modern approach to engineering documentation that embeds GD&T annotations directly in the 3D model.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This course built the CAD foundation I use on every mechanical project. The constraint-driven approach to sketching — making sure every sketch is fully defined before extruding — is a habit that prevents a lot of problems downstream. Working through eight weeks of progressively more complex geometry also reinforced how much thought goes into designing parts that are not just correct, but manufacturable and assembleable.",
          "The assembly weeks were where everything clicked. Seeing parts I had modeled weeks earlier finally mate together — and watching the butterfly valve and cart come to life — made the semester feel cohesive. The MBD week was a glimpse into how industry is moving away from 2D drawings, and a useful reminder that communication of design intent is as important as the design itself.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Arduino Milestone Projects",
    description: "A collection of projects built using Arduino, exploring GPIO output and sensor-driven logic.",
    tags: ["Arduino", "C++", "Embedded Systems", "Breadboards", "Ultrasonic Sensors"],
    githubUrl: "https://github.com/Sebacaraballo/Arduino-Milestones",
    sidebarLabel: "Focus Areas",
    heroImage: "/projects/ArudinoCover.jpg",
    galleryImages: [],
    bottomImages: [],
    footerVideos: [],
    footerLabel: null,
    publications: [],
    arduinoMilestones: true,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "These projects were built as milestone assignments in my embedded systems coursework at Purdue, using the Arduino platform to explore physical computing fundamentals. Each milestone introduced a new concept — digital output, timing, and sensor integration — building toward reactive systems that respond to the real world.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "Working with Arduino reinforced how much precision matters in embedded systems. Timing in Morse code, distance thresholds in the ultrasonic sensor project, and the relationship between code logic and physical behavior all required careful tuning. These projects were a hands-on introduction to thinking about hardware and software together — a mindset that carries into every engineering project I work on.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "ME23900 Projects",
    description: "Weekly Python assignments from ME23900 — Data Science for Mechanical Engineers at Purdue.",
    tags: ["Python", "Data Science", "NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/Sebacaraballo/ME239---Data-Science-for-ME",
    sidebarLabel: "Topics Covered",
    heroImage: "/projects/ME2390 Cover.jpg",
    galleryImages: [],
    bottomImages: [],
    footerVideos: [],
    footerLabel: null,
    publications: [],
    me2390Weeks: true,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "ME23900 is Purdue's data science course for Mechanical Engineers, taught in Python. Over 16 weeks the course covers everything from Python basics and numerical computing through probability theory, statistical modeling, and machine learning fundamentals. Each week corresponds to a homework assignment that applies the lecture material to real engineering datasets and problems.",
          "All assignments are in Jupyter Notebook format. The progression mirrors how data science is actually practiced — starting with data handling and visualization, then building toward probability distributions, regression models, and classification algorithms.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This course changed how I think about uncertainty and measurement in engineering. Before ME23900, I treated sensor readings and simulation outputs as ground truth. Working through probability theory, distributions, and maximum likelihood estimation made it clear that all engineering data carries inherent uncertainty — and that quantifying it is as important as collecting it in the first place.",
          "On the practical side, I became comfortable using Python for data analysis: loading and cleaning datasets, building plots that actually communicate something, and fitting models to data. These skills have already carried into research and other coursework.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Vlachos Research Group",
    description: "Cardiovascular fluid dynamics research at the intersection of mechanical engineering and biomedical innovation.",
    tags: ["Biomedical", "Fluid Dynamics", "Additive Manufacturing", "PIV", "Research", "Purdue"],
    githubUrl: null,
    sidebarLabel: "Research Areas",
    heroImage: "/projects/VlachosCover1.jpg",
    galleryImages: [],
    bottomImages: [],
    footerVideos: [],
    footerLabel: null,
    publications: [],
    vlachosGalleries: {
      flowLoop: [
        "/projects/Vlachos1.jpg",
        "/projects/Vlachos2.jpg",
        "/projects/Vlachos3.jpg",
      ],
      fabrication: [
        "/projects/Vlachos4.png",
        "/projects/Vlachos5.png",
        "/projects/Vlachos6.png",
        "/projects/Vlachos7.png",
      ],
    },
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The Vlachos Research Group at Purdue focuses on cardiovascular fluid dynamics — studying how blood flows through the heart and vessels to better understand conditions like heart failure and aneurysms. The research sits at the intersection of mechanical engineering and biomedical innovation, combining experimental fluid mechanics with advanced imaging and fabrication techniques to develop more accurate, non-invasive diagnostic tools.",
          "I contribute to two sub-teams within the group: the Flow Loop/Benchtop team and the Cardio Fabrication team. Working across both gives me exposure to the full pipeline — from building physical testbeds that simulate human circulation, to fabricating the anatomical models that go inside them.",
        ],
      },
      {
        heading: "Flow Loop / Benchtop Team",
        paragraphs: [
          "On the Flow Loop team, I help design and build experimental setups that simulate human cardiovascular circulation. These benchtop systems replicate physiological flow conditions — pulsatile pressure waveforms, realistic vessel geometries, and blood-analog fluids — to create a controlled environment for studying cardiovascular behavior outside the body.",
          "My role involves integrating high-speed imaging with real-time sensors to capture how fluids behave under these conditions. The resulting data supports the development of more accurate computational models and informs surgical planning for patients with complex cardiovascular conditions.",
        ],
      },
      {
        heading: "Cardio Fabrication Team",
        paragraphs: [
          "On the fabrication side, I use additive manufacturing to create high-fidelity, scaled models of biological structures — patient-specific anatomical geometries derived from medical imaging — as well as precision molds for casting transparent, flexible flow phantoms. These models need to be optically clear and dimensionally accurate enough to support particle image velocimetry (PIV) and other advanced flow visualization techniques.",
          "The fabrication work requires careful attention to material properties, print resolution, and post-processing — the difference between a model that produces clean optical data and one that doesn't often comes down to surface finish and wall thickness on the order of fractions of a millimeter.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "Working in a research lab has fundamentally changed how I approach engineering problems. In a course, the right answer exists and the path to it is structured. In research, you're often the first person to try something — which means your judgment about whether a result is trustworthy is the only check you have. That responsibility has made me a more careful, more thorough engineer.",
          "I've also gained a deep appreciation for how much engineering goes into enabling discovery. The pumps, sensors, cameras, and fabricated models aren't the research — they're the tools that make the research possible. Building and maintaining those tools well is its own discipline.",
        ],
      },
    ],
  },
  {
    id: 9,
    comingSoon: true,
  },
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  if (project.comingSoon) {
    return (
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <StarBackground />
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="flex flex-col items-center gap-6 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Shh... <span className="text-primary">Coming Soon!</span>
            </h1>
            <PeekingEyes />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <StarBackground />
      <NavBar />
      <main className="container mx-auto max-w-4xl px-4 pt-32 pb-24 relative z-10">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>

        {/* Title block */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Hero image */}
        {project.heroImage && (
          <div className="w-full rounded-lg overflow-hidden mb-12 shadow-xs max-h-96">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main content: sections (left) + sidebar with CAD images (right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Left: text sections */}
          <div className="flex flex-col gap-10">
            {project.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {section.heading}
                </h3>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-foreground/70 text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
            {project.mfetWeeks && <MFETWeeks />}
            {project.arduinoMilestones && <ArduinoMilestones />}
            {project.me2390Weeks && <ME2390Weeks />}
          </div>

          {/* Right: sticky sidebar */}
          <div className="flex flex-col gap-4 md:sticky md:top-24">

            {/* Tags card */}
            <div className="bg-card rounded-lg p-5 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                {project.sidebarLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            {project.githubUrl && (
              <div className="bg-card rounded-lg p-5 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Links
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  GitHub Repo
                </a>
              </div>
            )}

            {/* Publications */}
            {project.publications?.length > 0 && (
              <div className="bg-card rounded-lg p-5 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Publications
                </p>
                <div className="flex flex-col gap-2">
                  {project.publications.map((pub, i) => (
                    <a
                      key={i}
                      href={pub.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {pub.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* CAD / gallery images */}
            {project.galleryImages.length > 0 && (
              <>
                <p className="text-sm font-semibold text-foreground uppercase tracking-widest px-1">
                  {project.galleryLabel ?? "CAD Models"}
                </p>
                {project.galleryImages.map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-xs border border-border">
                    <img
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </>
            )}
          </div>

        </div>

        {/* Engine / project specs */}
        {project.specs?.length > 0 && (
          <div className="mt-16">
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Engine Stats
            </p>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              {project.specs.map((stat, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-6 py-4 border-b border-border last:border-b-0"
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                  <span className="text-sm text-foreground font-mono">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vlachos team galleries */}
        {project.vlachosGalleries && (
          <>
            <div className="mt-16">
              <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Flow Loop / Benchtop Team
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.vlachosGalleries.flowLoop.map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-xs border border-border">
                    <img src={src} alt={`Flow Loop ${i + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Cardio Fabrication Team
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.vlachosGalleries.fabrication.map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-xs border border-border">
                    <img src={src} alt={`Fabrication ${i + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Bottom photo grid */}
        {project.bottomImages?.length > 0 && (
          <div className="mt-12">
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              {project.bottomLabel ?? "Photos"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.bottomImages.map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-xs border border-border">
                  <img
                    src={src}
                    alt={`${project.title} photo ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer videos */}
        {project.footerVideos.length > 0 && (
          <div className="mt-16">
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              {project.footerLabel ?? "Footage"}
            </p>

            {/* Single video: full width */}
            {project.footerVideos.length === 1 && (
              <div className="rounded-lg overflow-hidden shadow-xs border border-border">
                <video controls className="w-full h-auto" src={project.footerVideos[0]}>
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Multiple videos: left col stacked, right col spanning */}
            {project.footerVideos.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-[auto_auto]">
                <div className="rounded-lg overflow-hidden shadow-xs border border-border">
                  <video controls className="w-full h-auto" src={project.footerVideos[0]}>
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xs border border-border md:row-span-2">
                  <video controls className="w-full h-full object-cover" src={project.footerVideos[1]}>
                    Your browser does not support the video tag.
                  </video>
                </div>
                {project.footerVideos[2] && (
                  <div className="rounded-lg overflow-hidden shadow-xs border border-border">
                    <video controls className="w-full h-auto" src={project.footerVideos[2]}>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};
