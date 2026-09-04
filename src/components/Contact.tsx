"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/motion/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
          <p className="mb-2 font-mono text-sm text-accent">05. Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-shadow hover:shadow-lg hover:shadow-accent/25"
            >
              <Mail size={16} />
              Say Hello
            </motion.a>
            <motion.a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-muted"
            >
              <Phone size={16} />
              {profile.phone}
            </motion.a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}
