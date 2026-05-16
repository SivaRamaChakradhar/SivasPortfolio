"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Navbar from "./Navbar";

type SpecializedItem = {
  id: string;
  label: string;
};

const specialized: SpecializedItem[] = [
  { id: "FSD", label: "Full Stack Development" },
  { id: "AI/ML", label: "AI/ML Exploration" },
  { id: "DSA", label: "Data Structures & Algorithms" },
  { id: "OpenSource", label: "Open Source Contributions" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen w-full overflow-hidden bg-[#030014] text-white"
    >
      <Navbar />

      {/* Background particles */}
      <motion.div
        className="absolute inset-0 opacity-25 bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none"
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-[15%] right-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[40%] h-[450px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]"
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[30%] -left-20 h-[350px] w-[350px] rounded-full bg-blue-700/10 blur-[120px]"
        animate={{
          x: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tiny glowing stars */}
      <motion.div
        className="absolute left-[49%] top-[9%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_15px_4px_rgba(168,85,247,0.7)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[34%] top-[28%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.8)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.4, 1] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-[5%] top-[33%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_3px_rgba(34,211,238,0.6)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute left-[51%] bottom-[48%] h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_12px_3px_rgba(192,132,252,0.8)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.6, 1] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent pointer-events-none" />

      {/* Hero content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 px-6 py-20 lg:flex-row lg:items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full lg:w-7/12 space-y-4 lg:space-y-6"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Hey, I&apos;m
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
              variants={fadeUp}
            >
              Siva Rama Chakradhar Ramisetti
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-cyan-400 font-semibold"
            variants={fadeUp}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-xl"
            variants={fadeUp}
          >
            I build intelligent, scalable and modern web applications with
            cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full lg:w-5/12 flex justify-center items-center"
          variants={fadeLeft}
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[520px]"
          >
            <Image
              src="/HomeImage.png"
              alt="Futuristic developer illustration"
              width={520}
              height={520}
              priority
              className="h-auto w-full object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Specialization cards */}
      <motion.div
        className="relative z-10 flex flex-wrap gap-6 justify-center mt-10 w-full pb-28 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {specialized.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.04,
              boxShadow: "0 0 28px rgba(168,85,247,0.65)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-4 rounded-xl border border-gray-600 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_15px_0_rgba(168,85,247,0.5)] text-sm text-gray-400 hover:border-purple-400 hover:text-purple-400 transition cursor-pointer"
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform flex items-center gap-3 text-gray-400"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
      >
        <motion.span
          className="flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="h-6 w-4 text-gray-400"
            viewBox="0 0 16 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="1.5"
              y="1"
              width="13"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <motion.circle
              cx="8"
              cy="7"
              r="1"
              className="fill-current text-gray-400"
              animate={{ cy: [7, 14, 7], opacity: [1, 0.35, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.span>

        <span className="text-xl md:text-lg">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;