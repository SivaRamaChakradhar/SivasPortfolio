'use client';

import { useState } from "react";

const items = [
    { id: "Home", label: "Home"},
    { id: "About", label: "About"},
    { id: "Skills", label: "Skills"},
    { id: "Projects", label: "Projects"},
    { id: "Experience", label: "Experience"},
    { id: "Coding", label: "Coding"},
    { id: "Contact", label: "Contact"}
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-20 w-full bg-transparent pt-10 px-4 py-4 md:px-6">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <a href="#Home" className="flex items-center gap-3">
                        <img src="HomeLogo.png" alt="Home Logo" className="h-10 w-auto" />
                    </a>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((state) => !state)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white transition hover:border-purple-400 hover:text-purple-400 md:hidden"
                    >
                        {isMenuOpen ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="hidden md:flex md:flex-1 md:justify-center">
                    <ul className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-wide">
                        {items.map((item) => (
                            <li key={item.id} className="nav-item">
                                <a href={`#${item.id}`} className="nav-link text-lg cursor-pointer transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <button type="button" className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm uppercase tracking-wide transition hover:border-purple-400 hover:text-purple-400">
                        View Resume
                    </button>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 rounded-3xl border border-white/10 bg-[#050816]/95 p-4 shadow-xl shadow-black/30`}>
                <ul className="flex flex-col gap-3 text-sm uppercase tracking-wide">
                    {items.map((item) => (
                        <li key={item.id} className="nav-item">
                            <a
                                href={`#${item.id}`}
                                className="block rounded-2xl px-4 py-3 text-lg cursor-pointer transition-colors hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            type="button"
                            className="mt-2 w-full rounded-2xl border border-white/25 bg-white/5 px-4 py-3 text-left text-sm uppercase tracking-wide transition hover:border-purple-400 hover:text-purple-400"
                        >
                            View Resume
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;