'use client'

import { useState } from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'


import { motion } from 'framer-motion'

const tabItems = [
  { tabId: 'ALL', label: 'All' },
  { tabId: 'WEB', label: 'Web Apps' },
  { tabId: 'FULL STACK', label: 'Full Stack' },
  { tabId: 'BACKEND', label: 'Backend' },
  { tabId: 'MINI PROJECTS', label: 'Mini Projects' },
]

const projects = [
  {
    id: 1,
    title: 'NxtTrendz',
    description: 'A responsive e-commerce application with authentication, product listing, filters, and cart features.',
    imageUrl: '/NxtTrendzBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/NxtTrendz/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/NxtTrendz',
    category: 'WEB',
    techStack: ['React', 'CSS', 'REST API', 'JWT', 'Routing', 'Context API'],
  },
  {
    id: 2,
    title: 'NxtWatch',
    description: 'A video streaming web app with protected routes, theme switching, saved videos, and API integration.',
    imageUrl: '/NxtWatchBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/NxtWatch/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/NxtWatch',
    category: 'WEB',
    techStack: ['React', 'CSS', 'REST API', 'JWT', 'Routing', 'Context API']
  },
  {
    id: 3,
    title: 'Jobby App',
    description: 'A job search platform with login authentication, job filters, detailed job pages, and protected routes.',
    imageUrl: '/JobbyAppBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/JobbyApp/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/JobbyApp',
    category: 'WEB',
    techStack: ['React', 'CSS', 'REST API', 'JWT', 'Routing', 'Context API']
  },
  {
    id: 4,
    title: 'Multi-Tenant SaaS',
    description: 'A full-stack SaaS concept built to understand tenant-based architecture and scalable app structure.',
    imageUrl: '/MultiTenantSaaS.png',
    projectUrl: 'https://github.com/SivaRamaChakradhar/multi-tenant-SaaS',
    githubUrl: 'https://github.com/SivaRamaChakradhar/multi-tenant-SaaS',
    category: 'FULL STACK',
    techStack: ['React', 'Node.js', 'PostgreSQL',],
  },
  {
    id: 5,
    title: 'Library API Management',
    description: 'A backend-focused library management API project for handling books, users, and library operations.',
    imageUrl: '/libraryApiBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/library-api-management/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/library-api-management',
    category: 'BACKEND',
    techStack: ['Node.js', 'Express', 'MySQL'],
  },
  {
    id: 6,
    title: 'Food Munch',
    description: 'A modern food ordering landing page created to practice responsive layouts and clean UI sections.',
    imageUrl: '/FoodMunchBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/FoodMunch/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/FoodMunch',
    category: 'WEB',
    techStack: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 7,
    title: 'Todo App',
    description: 'A simple productivity app for adding, deleting, and managing daily tasks with a clean interface.',
    imageUrl: '/todoBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/todosApplication/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/todosApplication',
    category: 'MINI PROJECTS',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 8,
    title: 'Wikipedia Search App',
    description: 'A search application that fetches Wikipedia results using API calls and displays useful links instantly.',
    imageUrl: '/WikipediaBanner.png',
    projectUrl: 'https://sivaramachakradhar.github.io/WikipediaSearchApplication/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/WikipediaSearchApplication',
    category: 'MINI PROJECTS',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 9,
    title: 'Rock Paper Scissors',
    description: 'A fun game project built to practice state management, conditional rendering, and user interaction.',
    imageUrl: '/RPSBanner.jpeg',
    projectUrl: 'https://sivaramachakradhar.github.io/RockPaperScissors/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/RockPaperScissors',
    category: 'MINI PROJECTS',
    techStack: ['React', 'CSS'],
  },
  {
    id: 10,
    title: 'Coin Toss',
    description: 'A mini game project created to practice React state updates, random logic, and simple UI design.',
    imageUrl: '/CoinTossBanner.jpg',
    projectUrl: 'https://sivaramachakradhar.github.io/CoinToss-ReactJs/',
    githubUrl: 'https://github.com/SivaRamaChakradhar/CoinToss-ReactJs',
    category: 'MINI PROJECTS',
    techStack: ['React', 'CSS'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 45, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState('ALL')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    project => activeTab === 'ALL' || project.category === activeTab
  )

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <motion.section
      id="Projects"
      className="relative isolate min-h-screen w-full overflow-hidden px-6 py-20 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400"
        >
          My Projects
        </motion.p>

        <div className="relative z-30 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-bold leading-tight md:text-6xl"
          >
            Things I&apos;ve built <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              so far
            </span>
          </motion.h2>

          <motion.ul
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-40 flex flex-wrap gap-3 pointer-events-auto"
          >
            {tabItems.map(tab => (
              <li key={tab.tabId} className="relative z-40">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.tabId)
                    setShowAll(false)
                  }}
                  className={`relative z-50 rounded-xl border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.tabId
                      ? 'border-purple-400 bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]'
                      : 'border-white/10 bg-white/5 text-gray-300 hover:border-purple-400/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          key={`${activeTab}-${showAll}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-20 mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
        >
          {visibleProjects.map(project => (
            <motion.article
              key={project.id}
              variants={cardVariant}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub className="h-5 w-5 text-gray-300 transition hover:text-white" />
                  </a>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="h-5 w-5 text-gray-300 transition hover:text-white" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredProjects.length > 4 && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-30 mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="relative z-40 flex items-center gap-3 rounded-xl border border-purple-400/60 bg-purple-600/10 px-8 py-4 font-medium text-white transition hover:bg-purple-600/30"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
              <ArrowRight className={`h-5 w-5 transition ${showAll ? '-rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default ProjectSection