"use client"

import { motion } from "framer-motion"

const journeyItems = [
  {
    year: "2023",
    title: "Started My Coding Journey",
    description: "Learned C, programming basics, and problem solving.",
  },
  {
    year: "2023",
    title: "Web Development",
    description:
      "Built my foundation with HTML, CSS, JavaScript, and responsive layouts.",
  },
  {
    year: "2024",
    title: "Backend Development",
    description:
      "Learned Node.js, Express, SQL, MongoDB, and API development.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Started building React projects like NxtTrendz, NxtWatch, and Jobby App.",
  },
  {
    year: "2025",
    title: "Full Stack Projects",
    description:
      "Started building projects like Library API and Multi-Tenant SaaS.",
  },
  {
    year: "2026",
    title: "Portfolio & Career Preparation",
    description:
      "Building my portfolio, improving DSA, and preparing for developer roles.",
  },
]

const JourneySection = () => {
  return (
    <section
      id="Experience"
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-purple-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute left-[-120px] bottom-20 h-80 w-80 rounded-full bg-pink-600/10 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Journey
          </span>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Learning. <br />
            Building. <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Growing.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-400">
            My journey as a developer is all about continuous learning,
            building real projects, and improving step by step.
          </p>

          <img
            src="/experienceImage.png"
            alt="Developer journey illustration"
            className="mt-10 w-full rounded-3xl object-cover shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative flex md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-300 bg-[#080b16] shadow-[0_0_18px_rgba(168,85,247,0.9)] md:left-1/2" />

                <div
                  className={`ml-10 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] md:ml-0 md:w-[46%] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <span className="text-sm font-semibold text-purple-300">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection