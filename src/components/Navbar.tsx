import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WalletbudLogo from '../assets/Walletbudlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-[100] bg-blue-900 border-b border-blue-800 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src={WalletbudLogo}
              alt="WalletBud Logo"
              className="h-10 w-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <span className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">WalletBud</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/bone"
              className="text-lg font-medium text-blue-100 hover:text-white hover:scale-110 transition-all duration-300"
            >
              $BONE
            </Link>
            <Link
              to="/commands"
              className="text-lg font-medium text-blue-100 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Commands
            </Link>
            <Link
              to="/whitepaper"
              className="text-lg font-medium text-blue-100 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Whitepaper
            </Link>
            <Link
              to="/launch"
              className="text-lg font-medium text-blue-100 hover:text-white hover:scale-110 transition-all duration-300"
            >
              Launch
            </Link>
            <Link
              to="/faq"
              className="text-lg font-medium text-blue-100 hover:text-white hover:scale-110 transition-all duration-300"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-blue-100 hover:text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link
            to="/bone"
            className="block text-lg font-medium text-blue-100 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            $BONE
          </Link>
          <Link
            to="/commands"
            className="block text-lg font-medium text-blue-100 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Commands
          </Link>
          <Link
            to="/whitepaper"
            className="block text-lg font-medium text-blue-100 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Whitepaper
          </Link>
          <Link
            to="/launch"
            className="block text-lg font-medium text-blue-100 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Launch
          </Link>
          <Link
            to="/faq"
            className="block text-lg font-medium text-blue-100 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
