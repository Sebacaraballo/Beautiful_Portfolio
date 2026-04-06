import { ExternalLink, Github, ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        imageUrl: "/projects/portfolio-website.png",
        tags: ["Purdue", "Personal"],
        demoUrl: "/projects/1",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "FRC Robot",
        description: "Designed and built a competitive robot for the FIRST Robotics Competition.",
        imageUrl:" ",
        tags: ["Highschool", "Robotics"],
        demoUrl: "/projects/2",
        githubUrl: "#",
    },
    {
        id: 3, 
        title: "Published Research Papers",
        description: "Conducted research in the field of biomedical engineering to determine more cost efficient methods of operations at Western New York Urology Associates.",
        imageUrl: " ",
        tags: ["Highschool", "Research"],
        demoUrl: "/projects/3",
    },
    {
        id: 4,
        title: "Turbo Jet",
        description: "Designed, built, and tested a turbo jet engine with PURPL.",
        imageUrl: " ",
        tags: ["Purdue", "Hardware"],
        demoUrl: "/projects/4",
    },
    {
        id: 5,
        title: "MFET 16300 Projects",
        description: "All the CAD assignments and projects from my MFET 16300 course at Purdue.",
        imageUrl: " ",
        tags: ["Purdue", "CAD"],
        demoUrl: "/projects/5",
    },
    {
        id: 6,
        title: "Arduino Milestone Projects",
        description: "A collection of projects built using Arduino.",
        imageUrl: " ",
        tags: ["Purdue", "Arduino"],
        demoUrl: "/projects/6",
        githubUrl: "#",
    },
    {
        id: 7,
        title: "ME23900 Projects",
        description: "All the python assignments from my Data Science course at Purdue.",
        imageUrl: " ",
        tags: ["Purdue", "Python"],
        demoUrl: "/projects/7",
        githubUrl: "#",
    },
    {
        id: 8,
        title: "Vlachos Research Group",
        description: "Research applying Mechanical Engineering principles in the biomedical field at Purude",
        imageUrl: " ",
        tags: ["Purdue", "Research"],
        demoUrl: "/projects/8",
    },
    {
        id: 9,
        title: "AI Nutrition Start-up",
        description: "An unamed (for now) start-up that uses AI to provide personalized nutrition plans and meal recommendations.",
        imageUrl: " ",
        tags: ["Personal", "AI", "Start-up"],
        demoUrl: "/projects/9",
        githubUrl: "#",
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
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <Github size={20}/>
                                    </a>
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