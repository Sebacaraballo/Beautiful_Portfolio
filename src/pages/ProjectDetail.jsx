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
    description: "The site you're on right now.",
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
          "I built this portfolio because I wanted somewhere to put everything I've worked on. As I took on more projects, it made sense to have a place to show them off. This is also the first project I've actually deployed and shared publicly, so that felt like a real milestone.",
          "Designing it was genuinely fun. I had full freedom on the layout, colors, and interactions. The space theme came from something real: growing up, I wanted to be an astronaut. That dream changed, but the interest in space never really did. So it made sense to work it in.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "I had used React and Tailwind before, but building a full site from scratch was different. I had to figure out how to structure a bigger React app, keep components clean, and make sure everything looked right on mobile. Setting up the email API was new for me too. I came out of it with a better sense of how everything fits together on a real project.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "FRC Robot",
    description: "Designed and built a competition robot with my high school robotics team.",
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
          "Team 5557, the BB-R8ERS, is my high school robotics team. Yes, we were big Star Wars fans. We compete in the FIRST Robotics Competition, where teams get a new game challenge every January and have six weeks to design, build, wire, and program a full-scale robot. Then you take it to regional and world championship events.",
          "The team splits into four groups: Mechanical, Electrical, Software, and Business. I joined my junior year as the Mechanical Team Lead. My job was to manage the CAD workflow in OnShape, coordinate fabrication, and make sure our designs could hold up to actual competition. I still mentor the team today.",
        ],
      },
      {
        heading: "Design & Engineering",
        paragraphs: [
          "The main mechanism was a multi-stage elevator and end-effector built to score game pieces at different heights. Everything structural was modeled in OnShape and updated constantly as things changed during build season. We ran weight distribution and moment arm calculations to keep the robot stable during fast movements.",
          "We fabricated parts with CNC milling, 3D printing, and hand machining. Prototyping happened early and often. We'd test a mechanism, find what didn't work, and update the model. That back and forth between design and physical testing is probably the most useful habit I took away from the program.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "FRC was my first time going through the full engineering cycle from concept to competition with real time pressure. I got much better at OnShape and got hands-on with manufacturing processes I had only ever read about. I also learned how to actually coordinate with electrical and software teams, not just hand off parts and hope for the best.",
          "The six-week build season is brutal on purpose. You have to make decisions without all the information, figure out what matters, and actually finish. That mindset has stuck with me on every project since.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "WNYUA Research",
    description: "Research assistant at a urology practice in Western New York.",
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
          "During high school I worked as a research assistant at Western New York Urology Associates. The goal was to find more cost-efficient ways to run the practice. That meant looking at patient data, procedural workflows, and where resources were being used, then figuring out where things could be trimmed without affecting care.",
          "This was my first time doing real research outside of school. I worked with doctors and administrative staff to collect and make sense of data, and the work ended up getting published. It showed me that the way engineers think about problems works just as well in healthcare as it does in a lab.",
        ],
      },
      {
        heading: "Methodology",
        paragraphs: [
          "We gathered patient procedure records, cleaned the data, and ran statistical analysis to find patterns across different treatment protocols. The focus was on cost and time, looking for cases where outcomes were the same but the approach was more expensive than it needed to be.",
          "Working with the medical staff was a real challenge because I had to learn the domain fast and ask the right questions to make sure I wasn't misreading the data. Once we had something solid, we wrote it up as a paper and abstract for publication.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "The biggest thing I took away was that engineering thinking is useful everywhere. In a medical practice, the same systematic approach to finding inefficiencies applies. I also had to get comfortable explaining technical findings to people with no engineering background, which is something I use constantly now.",
          "I also got my first real taste of academic research: proper citations, structured methodology, peer review. And the reality that data doesn't always tell a clean story. Getting the work published made it feel real in a way school assignments never do.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "PURPL",
    description: "Working on Purdue's only undergraduate air-breathing propulsion project.",
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
          "PURPL's turbojet team is working on Purdue's only undergraduate air-breathing propulsion project. The engine is designed to produce 50 lbf of thrust, enough to eventually power a medium-sized UAV. It also serves as a testbed for sustainable aviation fuels including propane, hydrogen, and methane.",
          "I joined because working on actual propulsion hardware as an undergrad doesn't come up often. PURPL is one of the few places where that's possible.",
        ],
      },
      {
        heading: "AIAA SciTech 2026",
        paragraphs: [
          "The team presented at the 2026 AIAA SciTech Conference in Orlando, one of the biggest aerospace conferences out there. The paper got published through the conference proceedings and put in front of engineers and researchers from across the industry.",
          "Getting to represent Purdue at a conference like that as an undergrad meant a lot. Presenting to people from NASA, Lockheed Martin, and AFRL pushed me to really know the work and be able to explain it clearly.",
        ],
      },
      {
        heading: "Design Process",
        paragraphs: [
          "Turbomachinery design is genuinely hard. The geometry of compressor and turbine blades makes computational modeling extremely demanding. Our sponsor CFTurbo gave the team access to industry-grade software, which made a process that would otherwise take forever much more manageable.",
          "This past semester the team finished a full design review covering aerodynamics, structural loading, rotor dynamics, and thermal management. Every subsystem needed iteration to hit the performance targets while staying within what an undergraduate team can actually build and test.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "MFET 16300 Projects",
    description: "CAD assignments from my MFET 16300 course at Purdue, ending in a fully assembled Little Blazer Engine.",
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
          "MFET 16300 is Purdue's core CAD course for Mechanical Engineering Technology students. Assignments started with basic solid modeling and worked up to full multi-part assemblies over the semester. The big project toward the end was building sub-assemblies that came together as a Little Blazer Engine, a classic model engine used in engineering education.",
          "All modeling was done in OnShape. The assignments covered parametric design, sketch constraints, revolves and sweeps, shelling, assembly mates, and Model Based Definition (MBD). MBD is basically how you embed GD&T directly in a 3D model instead of drawing a 2D print.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This course built the CAD foundation I use on every mechanical project now. Getting in the habit of fully constraining sketches before extruding is the kind of thing that prevents a lot of headaches later. The more complex the geometry got, the more I realized how much thought goes into designing something that can actually be made.",
          "The assembly weeks were the best part. Seeing parts I had modeled weeks earlier finally come together made the whole semester feel worthwhile. The MBD week was interesting too. Seeing how industry is moving away from 2D drawings made it clear that knowing how to document a design is just as important as making a good one.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Arduino Milestone Projects",
    description: "A few Arduino projects from my embedded systems coursework at Purdue.",
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
          "These were milestone assignments from my embedded systems coursework at Purdue. Each one introduced a new concept, starting with digital output, then timing, then sensor integration. The goal each time was a system that reacts to something in the real world.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "These projects made it clear how much precision matters in embedded work. Getting the timing right for Morse code, tuning the distance threshold on the sensor, figuring out why the physical behavior didn't match the code. All of it required close attention. It was a good introduction to thinking about hardware and software at the same time.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "ME23900 Projects",
    description: "Python homework from my data science course at Purdue.",
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
          "ME23900 is Purdue's data science course for Mechanical Engineers, taught in Python. Over 16 weeks it goes from Python basics all the way to probability theory, statistical modeling, and intro machine learning. Each week has a homework that applies the lecture material to real engineering data.",
          "All the assignments are in Jupyter Notebooks. The progression actually mirrors how data work gets done in practice. You start by handling and visualizing data, then work your way up to distributions, regression, and classification.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This course changed how I think about data in engineering. Before this, I treated sensor readings as ground truth. Going through probability theory and distributions made it obvious that all engineering data has uncertainty built in, and that quantifying it matters just as much as collecting it.",
          "On the practical side, I got comfortable using Python for real data work. Loading and cleaning datasets, making plots that actually mean something, fitting models. Skills that came up right away in my research and other courses.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Vlachos Research Group",
    description: "Cardiovascular fluid dynamics research at Purdue.",
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
          "The Vlachos Research Group at Purdue studies cardiovascular fluid dynamics. The work is about understanding how blood flows through the heart and vessels, with the goal of improving how we diagnose conditions like heart failure and aneurysms. It combines experimental fluid mechanics with advanced imaging and fabrication.",
          "I work on two sub-teams: the Flow Loop team and the Cardio Fabrication team. Being on both gives me a view of the full process, from building the physical setups that simulate circulation to making the anatomical models that go inside them.",
        ],
      },
      {
        heading: "Flow Loop / Benchtop Team",
        paragraphs: [
          "On the Flow Loop team, I help build experimental setups that simulate how blood moves through the body. These benchtop systems replicate realistic physiological conditions so we can study cardiovascular behavior in a controlled environment.",
          "My role is integrating high-speed imaging with sensors to capture how the fluid actually behaves. The data feeds into computational models and can inform surgical planning for patients with serious cardiovascular conditions.",
        ],
      },
      {
        heading: "Cardio Fabrication Team",
        paragraphs: [
          "On the fabrication side, I use 3D printing to make scaled models of biological structures derived from medical imaging, along with molds for casting transparent, flexible flow phantoms. These models have to be optically clear and dimensionally accurate enough to work with particle image velocimetry and other visualization techniques.",
          "It requires a lot of care around material properties, print resolution, and post-processing. Whether a model produces clean optical data or not often comes down to surface finish and wall thicknesses in the fractions of a millimeter range.",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "Working in a research lab changed how I approach problems. In a course, the right answer exists and you just need to find it. In research, you're often the first person trying something, so your judgment about whether a result is trustworthy is the main thing standing between good data and bad conclusions. That responsibility makes you more careful.",
          "I also have a much better appreciation for how much engineering work goes into just making research possible. The pumps, sensors, cameras, and fabricated models aren't the finding. They're what enables the finding. Building and maintaining that infrastructure well is a real skill.",
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
