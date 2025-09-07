import React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  image: React.ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export const PROFILE = {
  // Personal Information
  name: "Nader Magdy",
  title: "Full Stack Developer",
  subtitle: "Passionate about creating exceptional digital experiences",
  description:
    "I build modern, scalable web applications with cutting-edge technologies. Passionate about creating exceptional user experiences and robust backend systems.",

  // Contact Information
  contact: {
    email: "nadermmt@gmail.com",
    phone: "+1 (313) 200-3853",
    location: "Fullerton, CA",
  } as ContactInfo,

  // Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Nadermmt",
      icon: "FaGithub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nader-magdy/",
      icon: "FaLinkedin",
    },
    {
      name: "Email",
      url: "mailto:nadermmt@gmail.com",
      icon: "FaEnvelope",
    },
  ] as SocialLink[],

  // Projects
  projects: [
    {
      id: 1,
      title: "Warshti Car Repair & Maintenance Platform",
      description:
        "A comprehensive car repair and maintenance service platform with three mobile apps (Customer, Workshop, Towing Driver). Built with React Native for both iOS and Android, featuring repair request management, workshop offers, progress tracking, and vehicle towing services.",
      technologies: [
        "React Native",
        "iOS",
        "Android",
        "Mobile Development",
        "Workshop Management",
        "Customer Service",
        "Towing Services",
      ],
      githubUrl: "",
      liveUrl: "https://www.warshti.com/en",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.rasan.warshti",
      iosUrl:
        "https://apps.apple.com/sa/app/%D9%88%D8%B1%D8%B4%D8%AA%D9%8A-warshti/id1472937832",
      image: (
        <div
          style={{
            backgroundColor: "#FFD700",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
          }}
        >
          <img
            src="/warshti-logo.jpg"
            alt="Warshti Logo"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Tameeni Medical Malpractice Insurance Platform",
      description:
        "A comprehensive insurance platform serving 600,000+ medical practitioners across Saudi Arabia. Built with NextJS, featuring multi-company integration, real-time quotes, and advanced medical practitioner management.",
      technologies: [
        "NextJS",
        "React",
        "TypeScript",
        "Insurance APIs",
        "Multi-language",
        "Enterprise",
      ],
      githubUrl: "",
      liveUrl: "https://www.tameeni.com/en/mmp/",
      image: (
        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
          }}
        >
          <img
            src="/tameeni-medical-practitioner.jpg"
            alt="Tameeni Medical Platform"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Tameeni Home Insurance Platform",
      description:
        "A comprehensive home insurance platform serving Saudi Arabia with multi-company integration, instant quotes, and fully digital processes. Features include fire damage, storm protection, burglary coverage, and instant policy issuance.",
      technologies: [
        "NextJS",
        "React",
        "TypeScript",
        "Insurance APIs",
        "Multi-language",
        "Enterprise",
        "Digital Insurance",
      ],
      githubUrl: "",
      liveUrl: "https://www.tameeni.com/en/home",
      image: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
          }}
        >
          <img
            src="/home-hero.webp"
            alt="Tameeni Home Insurance Platform"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Awal Mazad Platform",
      description:
        "A modern digital platform powered by Rasan, built with React. Features a sleek, professional interface with advanced functionality and responsive design for optimal user experience across all devices.",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Responsive Design",
        "Modern UI/UX",
        "Web Platform",
      ],
      githubUrl: "",
      liveUrl: "https://awalmazad.com/en/",
      image: (
        <div
          style={{
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            padding: "20px",
          }}
        >
          <img
            src="/awalmazad-logo.png"
            alt="Awal Mazad Platform"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ),
    },
  ] as Project[],

  // About Section
  about: {
    title: "About Me",
    description:
      "I'm a passionate Full Stack Developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.",
    skills: [
      "React Native",
      "NextJS",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
  },

  // Contact Section
  contactSection: {
    title: "Get In Touch",
    subtitle:
      "I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you'd like to connect!",
    description:
      "I'm currently available for freelance work and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  },

  // Footer
  footer: {
    description:
      "Full Stack Developer passionate about creating exceptional digital experiences.",
    copyright: "Made with ❤️ using React & TypeScript",
  },
};

// Navigation links
export const NAVIGATION = {
  links: [
    { name: "Projects", to: "projects" },
    { name: "Contact Me", to: "contact" },
  ],
};

// Technology icons mapping
export const TECHNOLOGY_ICONS = {
  "react-native": "FaReact",
  nextjs: "SiNextdotjs",
  react: "FaReact",
  "node.js": "FaNodeJs",
  nodejs: "FaNodeJs",
  typescript: "SiTypescript",
  mongodb: "SiMongodb",
  postgresql: "SiPostgresql",
  docker: "SiDocker",
  python: "FaPython",
  aws: "FaAws",
  git: "FaGitAlt",
};
