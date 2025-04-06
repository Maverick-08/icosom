
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo className="z-50" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-icosom-dark font-medium hover:text-icosom-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#register" 
              className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-icosom-500/20 hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-icosom-dark p-2 z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md pt-20 px-4 z-40 animate-fade-in">
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-icosom-dark text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#register" 
                className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-2 px-6 rounded-lg mt-4 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
