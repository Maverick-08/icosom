
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Committee', href: '/committee' },
    { name: 'Papers', href: '/paper' },
    { name: 'Awards', href: '/awards' },
    { name: 'Dates', href: '/dates' },
    { name: 'Sponsors', href: '/sponsors' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md py-2`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo className="z-50" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium hover:text-icosom-700 transition-colors text-icosom-500`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-icosom-500/20 hover:-translate-y-0.5"
            >
              Register Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-icosom-500 p-2 z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md pt-32 px-4 z-40 animate-fade-in">
            <div className="flex  flex-col space-y-6 bg-white p-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-icosom-dark  text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-icosom-600 to-icosom-500 text-white font-medium py-2 px-6 rounded-lg mt-4 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
