import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

const skills = [
  // Languages
  { name: "HTML/CSS", level: 100, category: "languages" },
  { name: "JavaScript", level: 100, category: "languages" },
  { name: "TypeScript", level: 100, category: "languages" },
  { name: "Arduino", level: 100, category: "languages" },
  { name: "Python", level: 100, category: "languages" },
  { name: "MATLAB", level: 100, category: "languages" },
  { name: "C", level: 100, category: "languages" },
  { name: "C#", level: 100, category: "languages" },
  { name: "C++", level: 100, category: "languages" },
  { name: "Java", level: 100, category: "languages" },
  { name: "SQL", level: 60, category: "languages" },
  { name: "Julia", level: 50, category: "languages" },
  { name: "Assembly", level: 50, category: "languages" },
  { name: "R", level: 40, category: "languages" },

  // Technologies
  { name: "React JS", level: 100, category: "technologies" },
  { name: "Node.js", level: 100, category: "technologies" },
  { name: "Vite", level: 100, category: "technologies" },
  { name: "Next.js", level: 100, category: "technologies" },
  { name: "Tailwind", level: 100, category: "technologies" },
  { name: "GitHub", level: 100, category: "technologies" },
  { name: "Docker", level: 100, category: "technologies" },
  { name: "VS Code", level: 100, category: "technologies" },
  { name: "Claude Code", level: 100, category: "technologies" },
  { name: "MS Office Suite", level: 100, category: "technologies" },
  { name: "Figma", level: 100, category: "technologies" },
  { name: "TensorFlow", level: 65, category: "technologies" },
  { name: "AWS", level: 50, category: "technologies" },
  { name: "Firebase", level: 25, category: "technologies" },
  { name: "Netlify", level: 20, category: "technologies" },
  { name: "Flux", level: 30, category: "technologies" },
  { name: "Onshape", level: 100, category: "technologies" },
  { name: "Fusion 360", level: 100, category: "technologies" },
  { name: "Siemens NX", level: 100, category: "technologies" },
  { name: "AutoCAD", level: 75, category: "technologies" },
  { name: "CATIA", level: 10, category: "technologies" },
  { name: "Jira", level: 55, category: "technologies" },
  { name: "MeshMixer", level: 40, category: "technologies" },
  { name: "Finite Element Analysis", level: 30, category: "technologies" },

  // Equipment
  { name: "Bandsaw", level: 100, category: "equipment" },
  { name: "CNC Mill", level: 100, category: "equipment" },
  { name: "Drill Press", level: 100, category: "equipment" },
  { name: "Solder", level: 100, category: "equipment" },
  { name: "Calipers", level: 100, category: "equipment" },
  { name: "Micrometers", level: 100, category: "equipment" },
  { name: "Raspberry Pi", level: 100, category: "equipment" },
  { name: "DAQ Systems", level: 100, category: "equipment" },
  { name: "Digital Multimeters", level: 100, category: "equipment" },
  { name: "Oscilloscopes", level: 100, category: "equipment" },
  { name: "3D Printing", level: 100, category: "equipment" },
  { name: "Laser Cutting", level: 100, category: "equipment" },
  { name: "Flow Meters", level: 100, category: "equipment" },
  { name: "PCB Assembly", level: 100, category: "equipment" },
  { name: "System Wiring", level: 100, category: "equipment" },
];

const categories = ["all", "languages", "technologies", "equipment"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const filteredSkills = activeCategory === null
        ? []
        : skills.filter(
            (skill) => activeCategory === "all" || skill.category === activeCategory
          );

    const handleCategoryClick = (category) => {
        setActiveCategory((prev) => (prev === category ? null : category));
    };

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => handleCategoryClick(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {activeCategory === null && (
                    <div className="flex flex-col items-center gap-3 py-10">
                        <div className="flex gap-8">
                            <ArrowUp className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                            <ArrowUp className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                            <ArrowUp className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                            <ArrowUp className="h-5 w-5 text-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                        </div>
                        <span className="text-sm text-muted-foreground">Select a category to explore</span>
                    </div>
                )}

                {activeCategory !== null && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-l mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{width : skill.level + "%"}}
                                />   
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </section>
    );
};