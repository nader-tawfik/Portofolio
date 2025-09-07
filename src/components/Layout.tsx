"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header isVisible={isHeaderVisible} />
      {children || (
        <>
          <Landing />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
