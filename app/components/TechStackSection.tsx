"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiMysql,
  SiSqlite,
  SiC,
  SiPython,
  SiPostman,
} from "react-icons/si";

import { FaDatabase, FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skills = {
  "Programming Languages": [
    { name: "C", icon: SiC },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
  ],
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST API", icon: SiNodedotjs },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "Oracle SQL", icon: FaDatabase },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
  ],
  "Tools & Others": [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "VS Code", icon: VscCode },
    { name: "Postman", icon: SiPostman },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TechStackSection = () => {
  return (
    <section
      id="Skills"
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Skills
          </span>

          <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
            Technologies <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              I work with
            </span>
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
                ease: "easeOut",
              }}
            >
              <h3 className="mb-5 text-xl font-semibold text-purple-300">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {items.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.04,
                    }}
                    className="group flex cursor-default items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-lg shadow-black/20 backdrop-blur-md transition-colors duration-300 hover:border-purple-400/60 hover:bg-purple-500/10"
                  >
                    <Icon className="text-2xl text-purple-300 transition-colors duration-300 group-hover:text-purple-400" />
                    <span className="text-sm font-medium text-white/90">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-14 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-slate-950 via-purple-950/60 to-purple-700/80 px-6 py-6 text-center shadow-lg shadow-purple-900/30"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg font-semibold tracking-wide text-white/90 md:text-2xl">
            Always learning something new ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;