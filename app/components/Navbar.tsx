"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "Home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Skills", label: "Skills" },
  { id: "Projects", label: "Projects" },
  { id: "Experience", label: "Experience" },
  { id: "Coding", label: "Coding" },
  { id: "Feedback", label: "Feedback" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleScroll("Home")}
          className="relative z-50 flex items-center"
          aria-label="Go to home section"
        >
          <Image
            src="/gate_logo.png"
            alt="Siva Rama Chakradhar logo"
            width={62}
            height={62}
            priority
            className="h-12 w-12 object-contain"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleScroll(link.id)}
              className="nav-link text-sm font-semibold uppercase tracking-[0.28em] text-white/80 hover:text-purple-400"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Resume */}
        <a
          href="https://drive.google.com/file/d/1pcLYX5hL47slr36h70oRonAMzpN1jCyF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-purple-400 hover:text-purple-300 lg:inline-flex"
        >
          View Resume
        </a>

        {/* Mobile/Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white backdrop-blur-md transition hover:border-purple-400 hover:text-purple-300 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile/Tablet Dropdown */}
      <div
        className={`lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition duration-300`}
      >
        <div className="mx-4 rounded-3xl border border-white/10 bg-[#050816]/85 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleScroll(link.id)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:border-purple-400 hover:text-purple-300"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://drive.google.com/file/d/1pcLYX5hL47slr36h70oRonAMzpN1jCyF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl border border-purple-400/40 bg-purple-500/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 transition hover:bg-purple-500/20"
              onClick={() => setIsOpen(false)}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;