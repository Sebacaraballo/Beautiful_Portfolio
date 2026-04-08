import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";

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
    description: "Designed, built, and tested a turbo jet engine with PURPL.",
    tags: ["Propulsion", "Turbomachinery", "Hardware", "Purdue"],
    githubUrl: null,
    sidebarLabel: "Focus Areas",
    heroImage: "/projects/Screenshot 2026-04-08 022236.png",
    galleryImages: [],
    footerVideos: [],
    footerLabel: null,
    publications: [],
    sections: [],
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
                  CAD Models
                </p>
                {project.galleryImages.map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-xs border border-border">
                    <img
                      src={src}
                      alt={`${project.title} CAD ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </>
            )}
          </div>

        </div>

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
