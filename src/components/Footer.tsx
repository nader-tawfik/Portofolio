import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "../constants/profile";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{PROFILE.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {PROFILE.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={
                  PROFILE.socialLinks.find((l) => l.name === "GitHub")?.url ||
                  "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={
                  PROFILE.socialLinks.find((l) => l.name === "LinkedIn")?.url ||
                  "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#landing"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {PROFILE.name}. {PROFILE.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
