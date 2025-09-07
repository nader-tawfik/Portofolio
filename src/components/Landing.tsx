import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "../constants/profile";

const Landing: React.FC = () => {
  return (
    <section
      id="landing"
      className="min-h-screen bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='1' fill='white' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <img
              src="/profile-image.jpg"
              alt={PROFILE.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 shadow-2xl shadow-yellow-400/30 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow-lg animate-slide-up">
            Hi, I'm{" "}
            <span className="text-yellow-400 relative">
              {PROFILE.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 animate-[expandWidth_1s_ease-out_0.5s_forwards]"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            className="text-xl sm:text-2xl font-normal opacity-90 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {PROFILE.title}
          </h2>

          {/* Description */}
          <p
            className="text-lg sm:text-xl font-normal opacity-80 max-w-2xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {PROFILE.description}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 inline-flex items-center justify-center"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-4 mt-8 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href={
                PROFILE.socialLinks.find((l) => l.name === "GitHub")?.url || "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:-translate-y-1 hover:text-yellow-400 transition-all duration-300"
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
              aria-label="LinkedIn"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:-translate-y-1 hover:text-yellow-400 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${PROFILE.contact.email}`}
              aria-label="Email"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:-translate-y-1 hover:text-yellow-400 transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
