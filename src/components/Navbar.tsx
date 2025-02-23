import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WalletpupLogo from '../assets/Walletpuplogo.png';

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
    <nav className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0"></div>
              <img
                src={WalletpupLogo}
                alt="WalletPup Logo"
                className="h-12 w-12 relative z-10"
              />
            </motion.div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-200 hover:scale-[1.02] transition-all duration-300">WalletPup</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: '/bone', text: '$BONE' },
              { to: '/commands', text: 'Commands' },
              { to: '/guide', text: 'Guide' },
              { to: '/whitepaper', text: 'Whitepaper' },
              { to: '/faq', text: 'FAQ' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 mx-1 rounded-xl text-lg font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 hover:scale-105 transition-all duration-300"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-blue-100 hover:text-white focus:outline-none hover:bg-blue-800/50 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="md:hidden overflow-hidden bg-blue-900/95 backdrop-blur-md border-t border-blue-800/50"
      >
        <div className="px-4 py-2 space-y-1">
          {[
            { to: '/bone', text: '$BONE' },
            { to: '/commands', text: 'Commands' },
            { to: '/guide', text: 'Guide' },
            { to: '/whitepaper', text: 'Whitepaper' },
            { to: '/faq', text: 'FAQ' }
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-lg font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
