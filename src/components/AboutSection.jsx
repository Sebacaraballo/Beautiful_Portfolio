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
                            I like projects where I have to think about more than one thing at a time.
                            Modeling a part, writing code, figuring out how a system fits together.
                            What matters to me is actually understanding how something works, not just getting an answer.
                            I do my best work when what I’m building is meant to eventually exist in the real world.
                        </p>

                        <p className="text-muted-foreground">
                            Outside of class, I’m usually working on a personal project or picking up something new.
                            I stay active through lifting, basketball, and golf, although I am still working on lowering the handicap.
                            I'm also a big movie buff, and I try to see as many films as I can in theaters. My favorite movie is The Prestige, but I also have a soft spot for all the Spider-Man movies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                {""}
                                Get In Touch
                            </a>

                            <a 
                                href="/resume/04.5.26_Resume_Base.pdf" 
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
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
                                        I build web interfaces and internal tooling. Clean layouts that work on any screen, code that's easy to come back to later.
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
                                        I design parts and assemblies with an eye on how they'll actually be made. Tolerances, material choices, how things fit together in the real world.
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
                                        I like owning a project from the first idea to the final result. That means coordinating across different teams and making sure things actually get done.
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
