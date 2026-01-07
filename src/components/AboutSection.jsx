import { Code, Wrench, Briefcase } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id ="about" className="py-24 px-4 relative">
            {""}
            <div className="containerr mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">How I Work</h3>

                        <p className="text-muted-foreground">
                            I enjoy working on projects where design, analysis, and implementation all matter. 
                            Whether I’m modeling mechanical components, writing code, or iterating on a system design, I care about understanding how things work end to end. 
                            I’m especially drawn to environments where attention to detail, ownership, and collaboration are expected, and where designs are meant to leave the screen and become real.
                        </p>

                        <p classNamw="text-muted-foreground">
                            Outside of coursework, I enjoy exploring personal projects that help me learn new tools and technologies. I also like staying active through lifting, basketball, and golf (still working on lowering my handicap). 
                            Outside of engineering, I’m a big Marvel fan — with Spider-Man as my favorite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                {""}
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {""}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                       Building clean, responsive interfaces and engineering tooling using modern frameworks, 
                                       with an emphasis on usability and maintainable code.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Wrench className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Mechanical Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing and iterating mechanical components and assemblies 
                                        with attention to manufacturability, tolerances, and real-world constraints.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Ownership</h4>
                                    <p className="text-muted-foreground">
                                        Taking responsibility for projects from concept through execution, 
                                        coordinating across disciplines to meet technical and time constraints.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
