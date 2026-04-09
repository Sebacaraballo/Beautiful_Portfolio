import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const weeks = [
  {
    label: "Week 1",
    description:
      "Introduction to 3D solid modeling. The first two assignments involved modeling a piston from engineering drawings, building intuition for extrusions, cuts, and dimensional constraints in OnShape. The hand sketch assignment focused on drawing 3D primitives — boxes, cylinders, and cones — to develop spatial visualization skills before working purely in CAD.",
    items: [
      { label: "01-1: Piston", type: "image", src: "/projects/MFET Week 01-1.png" },
      { label: "01-2: Piston (Rev)", type: "image", src: "/projects/MFET Week 01-2.png" },
      { label: "01-4: Hand Sketch – Primitives", type: "pdf", src: "/projects/MFET_01-4.pdf" },
    ],
  },
  {
    label: "Week 2",
    description:
      "Focused on sketch-driven modeling and geometric constraints in CAD. The first assignment reinforced how to fully constrain sketches using relations and dimensions — a foundational habit for parametric modeling. The rubber seal introduced revolve features and symmetric geometry. The hand sketch assignment practiced converting isometric drawings to orthographic views.",
    items: [
      { label: "02-1: Sketching in CAD with Constraints", type: "image", src: "/projects/MFET Week 02-1.png" },
      { label: "02-2: Rubber Seal", type: "image", src: "/projects/MFET Week 02-2.png" },
      { label: "02-3: Hand Sketch – Iso to Ortho", type: "pdf", src: "/projects/MFET_02-3.pdf" },
    ],
  },
  {
    label: "Week 3",
    description:
      "Introduced more complex part geometry. The coupler required modeling a connector with multiple bores and a non-trivial profile, while the butterfly valve retainer was the first part in what would become a full valve assembly built over several weeks. The hand sketch continued developing orthographic projection skills from isometric views.",
    items: [
      { label: "03-1: Coupler", type: "image", src: "/projects/MFET Week 03-1.png" },
      { label: "03-2: Butterfly Valve Retainer", type: "image", src: "/projects/MFET Week 03-2.png" },
      { label: "03-3: Hand Sketch – Iso to Ortho 2", type: "pdf", src: "/projects/MFET_03-3.pdf" },
    ],
  },
  {
    label: "Week 4",
    description:
      "Three CAD parts this week, including the first multi-component week of the course. The caster frame introduced thin-wall geometry and mounting features, while the butterfly valve arm and shaft continued building the valve sub-assembly — requiring careful attention to mating geometry that would later need to fit together in an assembly.",
    items: [
      { label: "04-1: Caster Frame", type: "image", src: "/projects/MFET Week 04-1.png" },
      { label: "04-2: Butterfly Valve Arm", type: "image", src: "/projects/MFET Week 04-2.png" },
      { label: "04-3: Butterfly Valve Shaft", type: "image", src: "/projects/MFET Week 04-3.png" },
    ],
  },
  {
    label: "Week 5",
    description:
      "A heavier week with four deliverables. The sprinkler stake was a standalone part with tapered geometry and a non-uniform profile. The butterfly valve elbow and air filter cover continued expanding the valve assembly and introduced more complex swept and shelled geometry. The hand sketch covered additional orthographic visualization practice.",
    items: [
      { label: "05-1: Sprinkler Stake", type: "image", src: "/projects/MFET Week 05-1.png" },
      { label: "05-2: Butterfly Valve Elbow", type: "image", src: "/projects/MFET Week 05-2.png" },
      { label: "05-3: Hand Sketch", type: "pdf", src: "/projects/MFET_05-3.pdf" },
      { label: "05-4: Air Filter Cover", type: "image", src: "/projects/MFET Week 05-4.png" },
    ],
  },
  {
    label: "Week 6",
    description:
      "The butterfly valve body was the most complex individual part of the assembly — requiring multiple bores, bosses, and precise interface geometry to mate with the retainer, arm, shaft, and elbow modeled in prior weeks. The extra credit practical was a timed challenge modeling an unfamiliar part from a drawing under exam conditions.",
    items: [
      { label: "06-2: Butterfly Valve Body", type: "image", src: "/projects/MFET Week 06-2.png" },
      { label: "06-3: Practice Practical (Extra Credit)", type: "image", src: "/projects/MFET Week 06-3.png" },
    ],
  },
  {
    label: "Week 8",
    description:
      "Assembly week — bringing together all the parts modeled across the semester. The spindle assembly introduced mate constraints and degrees-of-freedom management in OnShape. The butterfly valve assembly combined all five valve parts into a working assembly with proper mates. The cart assembly was a larger multi-part project demonstrating full assembly workflow from scratch.",
    items: [
      { label: "08-1: Spindle Assembly", type: "image", src: "/projects/MFET Week 08-1.png" },
      { label: "08-2: Butterfly Valve Assembly", type: "image", src: "/projects/MFET Week 08-2.png" },
      { label: "08-3: Cart Assembly", type: "image", src: "/projects/MFET Week 08-3.png" },
    ],
  },
  {
    label: "Week 9",
    description:
      "Introduction to engineering documentation and Model Based Definition (MBD). This assignment covered how modern manufacturing environments use 3D annotated models in place of traditional 2D drawings — including GD&T callouts, datum references, and tolerancing applied directly to the CAD model. A shift from drawing-centric to model-centric engineering communication.",
    items: [
      { label: "09-1: Intro to Engineering Documentation & MBD", type: "pdf", src: "/projects/MFET_09-1.pdf" },
    ],
  },
];

export const MFETWeeks = () => {
  const [openWeek, setOpenWeek] = useState(null);

  const toggle = (i) => setOpenWeek((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col gap-3 mt-10">
      <h3 className="text-xl font-semibold text-foreground mb-2">Weekly Assignments</h3>
      {weeks.map((week, i) => (
        <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="font-semibold text-foreground">{week.label}</span>
            {openWeek === i
              ? <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
              : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            }
          </button>

          {openWeek === i && (
            <div className="px-5 pb-6 border-t border-border">
              <p className="text-foreground/70 text-sm leading-relaxed mt-4 mb-6">
                {week.description}
              </p>
              <div className="flex flex-col gap-6">
                {week.items.map((item, j) => (
                  <div key={j}>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    {item.type === "image" ? (
                      <div className="rounded-lg overflow-hidden border border-border shadow-xs">
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : (
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/40 text-sm text-foreground/70 hover:text-primary hover:border-primary transition-colors duration-200"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
