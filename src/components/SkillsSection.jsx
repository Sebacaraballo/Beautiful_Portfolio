import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "HTML/CSS", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "MATLAB", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },

  // Technologies
  { name: "React", category: "technologies" },
  { name: "Next.js", category: "technologies" },
  { name: "Node.js", category: "technologies" },
  { name: "Tailwind", category: "technologies" },
  { name: "Vite", category: "technologies" },
  { name: "PostgreSQL", category: "technologies" },
  { name: "FastAPI", category: "technologies" },
  { name: "Docker", category: "technologies" },
  { name: "Git/GitHub", category: "technologies" },
  { name: "Vercel", category: "technologies" },
  { name: "Figma", category: "technologies" },
  { name: "Fusion 360", category: "technologies" },
  { name: "Onshape", category: "technologies" },
  { name: "SolidWorks", category: "technologies" },
  { name: "Siemens NX", category: "technologies" },
  { name: "AutoCAD", category: "technologies" },
  { name: "ArduPilot", category: "technologies" },

  // Equipment
  { name: "CNC Mill", category: "equipment" },
  { name: "3D Printing", category: "equipment" },
  { name: "Laser Cutting", category: "equipment" },
  { name: "Soldering", category: "equipment" },
  { name: "PCB Assembly", category: "equipment" },
  { name: "System Wiring", category: "equipment" },
  { name: "Raspberry Pi", category: "equipment" },
  { name: "Arduino", category: "equipment" },
  { name: "DAQ Systems", category: "equipment" },
  { name: "Oscilloscopes", category: "equipment" },
  { name: "Flow Meters", category: "equipment" },
];

const categories = ["all", "languages", "technologies", "equipment"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

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
            className="pt-24 pb-16 px-4 relative bg-secondary"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                <div className="flex flex-wrap justify-center gap-3">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card px-5 py-2 rounded-full shadow-xs card-hover"
                        >
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </section>
    );
};
