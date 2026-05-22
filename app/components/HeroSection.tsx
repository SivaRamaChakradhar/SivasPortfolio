"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useScroll,
  useTransform,
} from "framer-motion";
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 45, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, 70]);
  const imageY = useTransform(scrollY, [0, 500], [0, -90]);
  const cardsY = useTransform(scrollY, [0, 500], [0, -35]);
  const cardsOpacity = useTransform(scrollY, [0, 450], [1, 0.35]);

  const glowOneY = useTransform(scrollY, [0, 600], [0, 120]);
  const glowTwoY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <section
      id="Home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
    >
      <Navbar />

      {/* Parallax glow effects */}
      <motion.div
        style={{ y: glowOneY }}
        className="pointer-events-none absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]"
      />
      <motion.div
        style={{ y: glowTwoY }}
        className="pointer-events-none absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]"
      />

      {/* Hero content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse items-center justify-start gap-6 px-6 pt-20 pb-6 sm:pt-24 md:pt-28 lg:flex-row lg:items-center lg:justify-center lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={{ y: textY }}
          className="w-full space-y-4 text-center lg:w-7/12 lg:space-y-6 lg:text-left"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Hey, I&apos;m
            <motion.span
              className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
              variants={fadeUp}
            >
              Siva Rama Chakradhar Ramisetti
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg font-semibold text-cyan-400 md:text-xl"
            variants={fadeUp}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="mx-auto max-w-xl text-base text-gray-400 md:text-lg lg:mx-0"
            variants={fadeUp}
          >
            I build intelligent, scalable and modern web applications with
            cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          className="flex w-full items-center justify-center lg:w-5/12"
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
            className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px]"
          >
            <Image
              src="/HomeImage.png"
              alt="Futuristic developer illustration"
              width={520}
              height={520}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Specialization cards */}
      <motion.div
        style={{ y: cardsY, opacity: cardsOpacity }}
        className="relative z-10 flex w-full flex-wrap justify-center gap-4 px-6 pb-16 md:gap-6 md:pb-28"
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
            className="cursor-pointer rounded-xl border border-gray-600 bg-white/[0.03] px-4 py-3 text-center text-xs text-gray-400 shadow-[0_0_15px_0_rgba(168,85,247,0.5)] backdrop-blur-sm transition hover:border-purple-400 hover:text-purple-400 sm:px-5 sm:py-4 sm:text-sm"
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-gray-400 md:flex"
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
              animate={{ y: [0, 7, 0], opacity: [1, 0.35, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.span>

        <span className="text-lg md:text-xl">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;