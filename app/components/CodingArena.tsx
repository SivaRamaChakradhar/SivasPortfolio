"use client"

import { motion } from "framer-motion"
import { Code2, ExternalLink, Star, Trophy } from "lucide-react"

import { FaGithub } from 'react-icons/fa'

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Siva_Ram_Chakradhar",
    stats: "Rating 1426",
    problems_solved: "415",
    url: "https://leetcode.com/u/Siva_Ram_Chakradhar/",
  },
  {
    platform: "GeeksforGeeks",
    username: "sivaramisetti",
    stats: "432 coding score",
    problems_solved: "191",
    url: "https://www.geeksforgeeks.org/profile/sivaramisetti",
  },
  {
    platform: "HackerRank",
    username: "sivaramisetti700",
    stats: "5★",
    highlight: "Problem Solving",
    url: "https://www.hackerrank.com/profile/sivaramisetti700",
  },
]

const githubStats = [
  { label: "Repositories", value: "80+" },
  { label: "Contributions", value: "1800+" },
  { label: "Pull Requests", value: "5+" },
  { label: "Open Source", value: "10+" },
]

const heatmap = Array.from({ length: 84 }, (_, i) => i % 7)

const CodingArena = () => {
  return (
    <section
      id="Coding"
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-purple-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute left-[-120px] bottom-20 h-80 w-80 rounded-full bg-pink-600/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Coding Profiles
          </p>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Consistency is <br />
            <span className="text-purple-400">my superpower.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
            I love solving problems and improving every day.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:border-purple-400/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-purple-500/15 p-3 text-purple-300">
                    <Code2 size={22} />
                  </div>
                  <h3 className="font-semibold">{profile.platform}</h3>
                </div>
                <ExternalLink
                  size={18}
                  className="text-white/40 transition group-hover:text-purple-300"
                />
              </div>

              <p className="text-sm text-white/45">@{profile.username}</p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/40">Stats</p>
                  <p className="mt-1 text-2xl font-bold">{profile.stats}</p>
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    {profile.problems_solved ? "Solved" : "Badge"}
                  </p>
                  <p className="mt-1 text-2xl font-bold">
                    {profile.problems_solved || profile.highlight}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >
            <div className="mb-6 flex items-center gap-3">
                <FaGithub className="text-purple-300" />
                <div>
                <h3 className="text-xl font-semibold">GitHub Contribution</h3>
                <p className="text-sm text-white/50">Real-time contribution graph</p>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
                <img
                src="https://ghchart.rshah.org/00ff99/SivaRamaChakradhar"
                alt="GitHub contribution heatmap"
                className="w-full min-w-[700px]"
                />
            </div>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {githubStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                {index % 2 === 0 ? <Trophy size={20} /> : <Star size={20} />}
              </div>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-1 text-sm text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingArena