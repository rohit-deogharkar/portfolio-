"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Cursor, useTypewriter } from "@/components/motion/Typewriter";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  const { text: nameText, done: nameDone } = useTypewriter(
    [`Hi, I'm ${profile.name.split(" ")[0]}`],
    { loop: false, startDelay: 300, typingSpeed: 65 }
  );
  const { text: roleText } = useTypewriter(profile.roles, {
    loop: true,
    startDelay: 1500,
  });

  return (
    <section id="top" className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Open to opportunities
        </motion.p>

        <motion.h1 variants={item} className="text-4xl font-bold tracking-tight sm:text-6xl">
          {nameText}
          {!nameDone && <Cursor className="h-8 sm:h-11" />}
          {nameDone && <span className="text-accent">.</span>}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 min-h-7 max-w-2xl text-lg text-muted sm:min-h-8 sm:text-xl"
        >
          {roleText}
          <Cursor className="h-5 sm:h-6" />
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-shadow hover:shadow-lg hover:shadow-accent/25"
          >
            View my work
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-muted"
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-5">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "var(--accent)" }}
            className="text-muted"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "var(--accent)" }}
            className="text-muted"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -3, color: "var(--accent)" }}
            className="text-muted"
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
