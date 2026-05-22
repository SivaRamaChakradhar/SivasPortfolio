import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Siva Rama Chakradhar</h2>
          <p className="mt-2 text-sm text-gray-400">
            Built with passion, code, and continuous learning.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sivaramisetti700@gmail.com"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="https://github.com/SivaRamaChakradhar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sivaramachakradhar-ramisetti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="#Home"
            className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-purple-200"
          >
            Back to Top <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-center text-xs text-gray-500">
        © {year} Siva Rama Chakradhar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;