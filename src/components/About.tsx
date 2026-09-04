import { Code2, Rocket, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const points = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I'd rather spend 10 extra minutes now than leave a mess for the next person — usually future me.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "Ideas are cheap. I like turning them into things people can actually click on.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "The best code I've written came out of a good conversation, not a solo sprint.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mb-12">
        <p className="mb-2 font-mono text-sm text-accent">01. About</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          A bit about me
        </h2>
      </Reveal>

      <StaggerGroup className="grid gap-10 sm:grid-cols-3">
        {points.map(({ icon: Icon, title, description }) => (
          <StaggerItem
            key={title}
            className="rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={22} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{description}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
