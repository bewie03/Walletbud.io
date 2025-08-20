import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPaw } from 'react-icons/fa';

type NavItem = {
  to: string;
  text: string;
  highlight?: boolean;
};

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

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .mask-fade-bottom {
        -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
        mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-[100] bg-blue-900 transition-all duration-300 ${scrolled ? 'border-b border-blue-700 shadow-lg' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2"
            >
              <FaPaw className="text-white text-xl group-hover:text-blue-200 transition-colors duration-300" />
              <span className="text-2xl font-bold text-white group-hover:text-blue-200 hover:scale-[1.02] transition-all duration-300">WalletPup</span>
              <FaPaw className="text-white text-xl group-hover:text-blue-200 transition-colors duration-300 transform rotate-45" />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {([
              { to: '/commands', text: 'Commands' },
              { to: '/guide', text: 'Guide' },
              { to: '/faq', text: 'FAQ' }
            ] as NavItem[]).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 mx-1 rounded-xl text-lg font-medium ${link.highlight ? 'text-white font-semibold' : 'text-blue-100 hover:text-white'} hover:bg-blue-800/50 hover:scale-105 transition-all duration-300`}
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
          {([
            { to: '/bone', text: '$BONE' },
            { to: '/commands', text: 'Commands' },
            { to: '/guide', text: 'Guide' },
            { to: '/whitepaper', text: 'Whitepaper' },
            { to: '/faq', text: 'FAQ' }
          ] as NavItem[]).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2 text-lg font-medium ${link.highlight ? 'text-yellow-300 hover:text-yellow-200' : 'text-blue-100 hover:text-white'} hover:bg-blue-800/50 rounded-xl transition-all duration-300`}
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
