import React from "react";
import ReactScroll from "react-scroll";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE, NAVIGATION } from "../constants/profile";

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-transform duration-300 py-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* External Social Links */}
        <div className="flex gap-4 items-center">
          <a
            href={`mailto:${PROFILE.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href={
              PROFILE.socialLinks.find((l) => l.name === "GitHub")?.url || "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={
              PROFILE.socialLinks.find((l) => l.name === "LinkedIn")?.url || "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Internal Navigation Links */}
        <nav className="flex gap-8 items-center">
          {NAVIGATION.links.map((link) => (
            <ReactScroll.Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 font-medium hover:text-primary-600 transition-colors duration-200 cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </ReactScroll.Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
