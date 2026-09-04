import { Database, Layout, Server, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const icons: Record<string, React.ElementType> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Practices": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mb-12">
        <p className="mb-2 font-mono text-sm text-accent">02. Skills</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
      </Reveal>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2">
        {skills.map(({ category, items }) => {
          const Icon = icons[category] ?? Layout;
          return (
            <StaggerItem
              key={category}
              className="rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">  
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
