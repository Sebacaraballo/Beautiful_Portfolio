import { ExternalLink, ArrowRight, TrendingUp, Building2, RadioTower } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
    {
        id: "fitscript",
        title: "FitScript",
        description: "AI nutrition coach for people managing diabetes and GLP-1 treatment. Founded and built solo in Next.js, TypeScript, and PostgreSQL: an LLM coach with persistent memory, condition-aware meal logging, and retention analytics. In private beta with 60+ users.",
        imageUrl: "/projects/fitscript-mark-cream.png",
        tags: ["Founder", "AI", "Live Product"],
        link: "/projects/fitscript",
    },
    {
        id: "earnings-trader",
        title: "Earnings Trader",
        description: "LLM system that reads SEC 8-K filings and turns earnings language into trade signals: GPT-4o-mini scores sentiment, guidance quality, and risk, then a vectorbt engine backtests every signal against SPY with Sharpe, win rate, and drawdown. Live FastAPI + React dashboard.",
        imageUrl: "/projects/earnings-trader-hero.png",
        icon: TrendingUp,
        tags: ["Personal", "AI", "Fintech"],
        link: "/projects/earnings-trader",
        githubUrl: "https://github.com/Sebacaraballo/Trading-Bot",
    },
    {
        id: "algoma",
        title: "Algoma",
        description: "Software engineering intern, two summers, at an AI platform for real estate feasibility. Built the rent comparables analytics dashboard from Figma prototypes to production: interactive charts with trend lines and dynamic filtering. Now shipping features through ticketed PRs and code review.",
        icon: Building2,
        tags: ["Internship", "Software"],
        link: "/projects/algoma",
    },
    {
        id: 1,
        title: "PURPL",
        description: "Working on Purdue's only undergraduate air-breathing propulsion project.",
        imageUrl: "/projects/Screenshot 2026-04-08 101218.png",
        tags: ["Purdue", "Club"],
        link: "/projects/1",
    },
    {
        id: 2,
        title: "Vlachos Research Group",
        description: "Cardio Fabrication and Flow Loop teams in the Vlachos Research Group. I led bring-up of a fluidic testbed with DAC/ADC boards and high-fidelity sensors, wrote Python workflows that sync high-speed imaging with sensor data, and 3D-print dissolvable shell molds for casting PDMS vessel models.",
        imageUrl: "/projects/VlachosCover1.jpg",
        tags: ["Purdue", "Research"],
        link: "/projects/2",
    },
    {
        id: "nsds",
        title: "Rapid Radio Development (Purdue NSDS)",
        description: "Unmanned Systems team project: a hexacopter that places self-sufficient Meshtastic radio repeaters on water towers to restore communications after natural disasters, partnered with emergency responders in Jefferson County, Florida. I work on drone construction, the payload deployment mechanism, and ArduPilot integration.",
        icon: RadioTower,
        tags: ["Purdue", "Club", "UAV"],
        link: "/projects/nsds",
    },
    {
        id: 3,
        title: "FRC Team",
        description: "Designed and built a competition robot with my high school robotics team.",
        imageUrl: "/projects/PortfolioFRC_Front.jpg",
        tags: ["Highschool", "Robotics"],
        link: "/projects/3",
    },
    {
        id: 4,
        title: "WNYUA Research",
        description: "Research assistant at a urology practice in Western New York.",
        imageUrl: "/projects/WNYUA_FRONT.jpg",
        tags: ["Highschool", "Research"],
        link: "/projects/4",
    },
];

const courseworkProjects = [
    {
        id: 5,
        title: "MFET 16300 Projects",
        description: "CAD assignments from my MFET 16300 course at Purdue, ending in a fully assembled model engine.",
        tags: ["Purdue", "Classwork"],
        link: "/projects/5",
    },
    {
        id: 7,
        title: "ME23900 Projects",
        description: "Python homework from my data science course at Purdue.",
        tags: ["Purdue", "Classwork"],
        link: "/projects/7",
        githubUrl: "https://github.com/Sebacaraballo/ME239---Data-Science-for-ME",
    },
    {
        id: 6,
        title: "Arduino Milestone Projects",
        description: "A few Arduino projects from my embedded systems coursework at Purdue.",
        tags: ["Purdue", "Personal"],
        link: "/projects/6",
        githubUrl: "https://github.com/Sebacaraballo/Arduino-Milestones",
    },
    {
        id: 8,
        title: "Portfolio Website",
        description: "The site you're on right now.",
        tags: ["Purdue", "Personal"],
        link: "/projects/8",
        githubUrl: "https://github.com/Sebacaraballo/Beautiful_Portfolio",
    },
];

const isExternal = (href) => /^https?:\/\//.test(href);

const GithubIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
);

const ProjectLink = ({ href, children }) =>
    isExternal(href) ? (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
            {children}
        </a>
    ) : (
        <Link
            to={href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
            {children}
        </Link>
    );

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A mix of what I'm building now and what I've built before.
                    I like problems that pull from more than one discipline.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                {project.imageUrl ? (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/25 via-primary/10 to-card transition-transform duration-500 group-hover:scale-110">
                                        {project.icon && (
                                            <project.icon
                                                className="h-14 w-14 text-primary/70"
                                                strokeWidth={1.5}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
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

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <ProjectLink href={project.link}>
                                            <ExternalLink size={20} />
                                        </ProjectLink>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <GithubIcon size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coursework & Early Projects: quieter secondary section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-2">
                        Coursework <span className="text-primary">&amp; Early Projects</span>
                    </h3>
                    <p className="text-center text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
                        Earlier classwork and the build behind this site.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courseworkProjects.map((project, key) => (
                            <div
                                key={key}
                                className="group bg-card/60 border border-border rounded-lg p-5 flex flex-col card-hover"
                            >
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-primary/10 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="text-base font-semibold mb-1">{project.title}</h4>
                                <p className="text-muted-foreground text-xs mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex space-x-3">
                                    <ProjectLink href={project.link}>
                                        <ExternalLink size={18} />
                                    </ProjectLink>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <GithubIcon size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Sebacaraballo"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
