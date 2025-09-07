import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";
import { PROFILE, Project } from "../constants/profile";

const projects: Project[] = PROFILE.projects;

const getTechnologyIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react":
      return <FaReact size={16} />;
    case "nextjs":
      return <SiNextdotjs size={16} />;
    case "node.js":
    case "nodejs":
      return <FaNodeJs size={16} />;
    case "typescript":
      return <SiTypescript size={16} />;
    case "mongodb":
      return <SiMongodb size={16} />;
    case "postgresql":
      return <SiPostgresql size={16} />;
    case "docker":
      return <SiDocker size={16} />;
    default:
      return <FaDatabase size={16} />;
  }
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and showcases different aspects of my development
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                {project.image}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label={`View ${project.title} live`}
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                    {project.androidUrl && (
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label={`Download ${project.title} on Google Play`}
                      >
                        <FaAndroid size={20} />
                      </a>
                    )}
                    {project.iosUrl && (
                      <a
                        href={project.iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        aria-label={`Download ${project.title} on App Store`}
                      >
                        <FaApple size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {getTechnologyIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
