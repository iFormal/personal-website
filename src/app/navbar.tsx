import React, { useEffect, useState, useRef } from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("about-me");
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Existing scroll handler code
    const handleScroll = () => {
      const sticky = window.scrollY > 20;
      setIsSticky(sticky);
      
      // Track active section
      const sections = ["about-me", "skills", "projects", "experiences", "contact"];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const buffer = 100;
          
          if (rect.top <= buffer && rect.bottom > buffer) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // New function to handle smooth scrolling without changing URL
  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: "about-me", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experiences", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-6 flex justify-center items-center ${
        isSticky 
          ? 'bg-black/50 backdrop-blur-md shadow-lg border-b border-gray-700/50' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <ul className="flex space-x-16 list-none">
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(link.id, e)}
              className={`font-medium transition-colors ${
                activeSection === link.id 
                  ? 'text-white border-b-2 border-blue-500 pb-1' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}