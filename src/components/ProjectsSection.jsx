import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "The site you're on right now.",
        imageUrl: "/projects/portfolio-website.png",
        tags: ["Purdue", "Personal"],
        demoUrl: "/projects/1",
        githubUrl: "https://github.com/Sebacaraballo/Beautiful_Portfolio",
    },
    {
        id: 2,
        title: "FRC Team",
        description: "Designed and built a competition robot with my high school robotics team.",
        imageUrl:"/projects/PortfolioFRC_Front.jpg",
        tags: ["Highschool", "Robotics"],
        demoUrl: "/projects/2",
    },
    {
        id: 3,
        title: "WNYUA Research",
        description: "Research assistant at a urology practice in Western New York.",
        imageUrl: "/projects/WNYUA_FRONT.jpg",
        tags: ["Highschool", "Research"],
        demoUrl: "/projects/3",
    },
    {
        id: 4,
        title: "PURPL",
        description: "Working on Purdue's only undergraduate air-breathing propulsion project.",
        imageUrl: "/projects/Screenshot 2026-04-08 101218.png",
        tags: ["Purdue", "Club"],
        demoUrl: "/projects/4",
    },
    {
        id: 5,
        title: "MFET 16300 Projects",
        description: "CAD assignments from my MFET 16300 course at Purdue, ending in a fully assembled model engine.",
        imageUrl: "/projects/MFET1.jpg",
        tags: ["Purdue", "Classwork"],
        demoUrl: "/projects/5",
    },
    {
        id: 6,
        title: "Arduino Milestone Projects",
        description: "A few Arduino projects from my embedded systems coursework at Purdue.",
        imageUrl: "/projects/ArudinoCover.jpg",
        tags: ["Purdue", "Personal"],
        demoUrl: "/projects/6",
        githubUrl: "https://github.com/Sebacaraballo/Arduino-Milestones",
    },
    {
        id: 7,
        title: "ME23900 Projects",
        description: "Python homework from my data science course at Purdue.",
        imageUrl: "/projects/ME2390 Cover.jpg",
        tags: ["Purdue", "Classwork"],
        demoUrl: "/projects/7",
        githubUrl: "https://github.com/Sebacaraballo/ME239---Data-Science-for-ME",
    },
    {
        id: 8,
        title: "Vlachos Research Group",
        description: "Cardiovascular fluid dynamics research at Purdue.",
        imageUrl: "/projects/VlachosCover1.jpg",
        tags: ["Purdue", "Research"],
        demoUrl: "/projects/8",
    },
    {
        id: 9,
        title: "AI Nutrition Start-up",
        description: "An unnamed start-up using AI for personalized nutrition. More coming soon.",
        imageUrl: "/projects/StartupPlaceholder.jpg",
        tags: ["Personal", "AI", "Start-up"],
        demoUrl: "/projects/9",
        githubUrl: "/projects/9",
    }
]



export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {""} 
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. 
                    I'm always excited to take on new challenges and collaborate on innovative ideas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
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
                                    <Link to={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </Link>
                                    {project.githubUrl && (
                                        project.githubUrl.startsWith("/projects/") ? (
                                            <Link
                                                to={project.githubUrl}
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                                </svg>
                                            </Link>
                                        ) : (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                                </svg>
                                            </a>
                                        )
                                    )}
                                </div>
                                </div>
                            </div>

                        </div>
                    ))}      
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Sebacaraballo"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};