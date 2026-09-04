"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal className="mb-12">
        <p className="mb-2 font-mono text-sm text-accent">03. Experience</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <motion.div
        className="relative border-l border-border pl-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        {experience.map((job, i) => (
          <motion.div key={job.company} variants={item} className="mb-12">
            <span className="absolute -left-2.25 flex h-4 w-4 items-center justify-center rounded-full bg-accent">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-accent"
                animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
              <Briefcase size={9} className="relative text-accent-foreground" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.duration}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div variants={item}>
          <span className="absolute -left-2.25 flex h-4 w-4 items-center justify-center rounded-full bg-surface-muted ring-1 ring-border">
            <GraduationCap size={9} className="text-accent" />
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">
              {education.degree} <span className="text-muted">· {education.school}</span>
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted">{education.detail}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
