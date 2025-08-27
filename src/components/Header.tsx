'use client';

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-800/95 backdrop-blur-md shadow-lg' 
        : 'bg-slate-800/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Portfolio</h1>
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleNavClick}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleNavClick}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleNavClick}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleNavClick}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleNavClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;