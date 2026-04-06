import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/projects/portfolio-website.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Docker", "Vercel", "GitHub", "HTML"],
    githubUrl: "#",
    images: ["/projects/portfolio-website.png"],
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
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

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

        {project.images[0] && (
          <div className="w-full rounded-lg overflow-hidden mb-12 shadow-xs">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-start">

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
                {project.images[i + 1] && (
                  <div className="rounded-lg overflow-hidden mt-4">
                    <img
                      src={project.images[i + 1]}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <div className="bg-card rounded-lg p-5 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Tech Stack
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

            <div className="bg-card rounded-lg p-5 border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Links
              </p>
              <a
                href= "https://github.com/Sebacaraballo/Beautiful_Portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
              <Github size={15} />
              </a>
                GitHub Repo
              
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};