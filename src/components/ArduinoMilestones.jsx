import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const milestones = [
  {
    label: "SOS",
    description:
      "The first milestone was a classic introduction to GPIO output and timing in Arduino. Using a single LED, the sketch blinks the international SOS distress signal in Morse code — three short flashes, three long flashes, three short flashes — then pauses before repeating. The assignment built familiarity with delay-based timing, loop structure, and the relationship between code timing and physical output. Simple on paper, but a satisfying first proof that code can produce a meaningful, recognizable signal in the real world.",
    items: [
      { label: "Demo", type: "video", src: "/projects/Arduino1.MOV" },
    ],
  },
  {
    label: "Ultrasonic Sensor",
    description:
      "The second milestone introduced the HC-SR04 ultrasonic distance sensor and conditional logic based on real-time sensor input. The LED behavior was divided into three distance zones: beyond 30 cm the LED stays off entirely; between 10 and 30 cm it stays on continuously; and within 10 cm it triggers the SOS Morse code pattern. The assignment combined digital output, analog sensing, and branching logic — the building blocks of any reactive embedded system.",
    items: [
      { label: "Demo", type: "video", src: "/projects/Arduino2.mov" },
    ],
  },
];

export const ArduinoMilestones = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col gap-3 mt-10">
      <h3 className="text-xl font-semibold text-foreground mb-2">Milestones</h3>
      {milestones.map((milestone, i) => (
        <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="font-semibold text-foreground">{milestone.label}</span>
            {openIdx === i
              ? <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
              : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            }
          </button>

          {openIdx === i && (
            <div className="px-5 pb-6 border-t border-border">
              <p className="text-foreground/70 text-sm leading-relaxed mt-4 mb-6">
                {milestone.description}
              </p>
              <div className="flex flex-col gap-6">
                {milestone.items.map((item, j) => (
                  <div key={j}>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    {item.type === "video" ? (
                      <div className="rounded-lg overflow-hidden border border-border shadow-xs">
                        <video controls className="w-full h-auto" src={item.src}>
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div className="rounded-lg overflow-hidden border border-border shadow-xs">
                        <img src={item.src} alt={item.label} className="w-full h-auto object-cover" />
                      </div>
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
