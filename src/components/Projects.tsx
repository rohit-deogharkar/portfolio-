"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mb-12">
        <p className="mb-2 font-mono text-sm text-accent">04. Projects</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Things I&apos;ve built
        </h2>
      </Reveal>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center gap-3 text-muted">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="transition-colors hover:text-accent"
                  >
                    <GithubIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="transition-colors hover:text-accent"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface-muted px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
