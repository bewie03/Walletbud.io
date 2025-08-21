import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBookOpen, FaCoins, FaWrench, FaPiggyBank, FaChartLine, FaGlobe, FaFlag, FaDiscord, FaXTwitter, FaBone, FaUsers, FaBrain, FaStar, FaArrowUp, FaCheck, FaServer, FaHandshake, FaPaw, FaHeart, FaXmark, FaArrowDown, FaBan, FaTriangleExclamation, FaChartBar, FaArrowsRotate, FaShuffle, FaBolt } from 'react-icons/fa6';
import FloatingBones from '../components/FloatingBones';

const WhitepaperV2 = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'goals', 'cardano-gaps', 'tokenomics', 'ecosystem-overview', 'treasury', 'development-roadmap', 'platform-expansion', 'conclusion'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Immediately set active section
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sidebarSections = [
    { id: 'introduction', label: 'Introduction', icon: FaBookOpen },
    { id: 'goals', label: 'Goals & Mission', icon: FaStar },
    { id: 'cardano-gaps', label: 'Cardano Gaps', icon: FaBrain },
    { id: 'tokenomics', label: 'Tokenomics', icon: FaCoins },
    { id: 'ecosystem-overview', label: 'Ecosystem Overview', icon: FaWrench },
    { id: 'treasury', label: 'Treasury', icon: FaPiggyBank },
    { id: 'partnerships', label: 'Partnerships', icon: FaHandshake },
    { id: 'platform-expansion', label: 'Roadmap', icon: FaGlobe },
    { id: 'conclusion', label: 'Conclusion', icon: FaFlag }
  ];


  // Tokenomics Visualization
  const TokenomicsChart = () => {
    return (
      <div className="relative max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, duration: 0.8 }}
          className="w-80 h-80 mx-auto relative"
        >
          {/* Background circle with gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-inner"></div>
          
          {/* Main 95% section - animated donut */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 252 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="8"
                strokeDasharray="251.2 13.2"
                strokeLinecap="round"
                className="drop-shadow-sm"
              />
            </svg>
          </motion.div>
          
          {/* Small 5% section */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 18 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          >
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="8"
                strokeDasharray="13.2 251.2"
                strokeLinecap="round"
                className="drop-shadow-sm"
              />
            </svg>
          </motion.div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 12 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <FaBone className="text-6xl text-blue-600 mx-auto mb-4 drop-shadow-sm" />
              </motion.div>
              <div className="text-3xl font-bold text-blue-900">$BONE</div>
              <div className="text-sm text-blue-600 mt-2 font-medium">Token Distribution</div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 space-y-4"
        >
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-600 rounded-full mr-4"></div>
              <span className="font-semibold text-gray-800">Public Distribution</span>
            </div>
            <span className="font-bold text-blue-600">95%</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-400 rounded-full mr-4"></div>
              <span className="font-semibold text-gray-800">Development & Events</span>
            </div>
            <span className="font-bold text-blue-600">5%</span>
          </div>
        </motion.div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-blue-900 text-gray-800 relative overflow-hidden font-sans">
      <FloatingBones />
      
      {/* Whitepaper Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <div className="bg-white rounded-3xl shadow-2xl drop-shadow-2xl overflow-hidden border border-blue-100" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'}}>
          {/* Header */}
          <header className="bg-blue-900 py-16 text-center -mx-0 rounded-t-3xl border-b-4 border-white">
            <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">WalletPup</h1>
            <h2 className="text-4xl font-bold text-white">Technical Whitepaper</h2>
          </header>
          
          {/* Content */}
          <div className="p-8 lg:p-12">
            
            {/* Introduction Section */}
            <section id="introduction" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaBookOpen className="text-blue-600" />
                Introduction
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                  <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                    WalletPup is a comprehensive ecosystem of three interconnected platforms designed to revolutionize the Cardano blockchain experience: Wallie Discord Bot for community management, Rovex Twitter Bot for market analytics, and BoneBoard Marketplace for freelance services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaPaw className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solo Users</h4>
                      <p className="text-sm text-gray-600">Personal wallet tracking and portfolio insights</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaStar className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Projects</h4>
                      <p className="text-sm text-gray-600">Community management and token holder engagement</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaDiscord className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Servers</h4>
                      <p className="text-sm text-gray-600">Real-time analytics and community tools</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 text-center leading-relaxed mt-8">
                    Empowering the entire Cardano ecosystem through integrated community tools, market intelligence, and professional services - all unified under the $BONE token economy.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaStar className="text-blue-600" />
                Goals & Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                WalletPup's mission is to bridge the gaps in the Cardano ecosystem by connecting projects with their communities, providing market intelligence, and facilitating professional collaborations.
              </motion.p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <FaUsers className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Connection</h3>
                  <p className="text-gray-600 mb-4">Strengthen the bond between Cardano projects and their communities through real-time engagement tools and transparent communication channels.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Real-time wallet verification and tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Community leaderboards and engagement metrics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Transparent project updates and announcements</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <FaBrain className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Intelligent Ecosystem</h3>
                  <p className="text-gray-600 mb-4">Provide AI-powered insights and analytics to help projects make informed decisions and connect with the right talent and opportunities.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Market sentiment analysis and trend prediction</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Skill-based talent matching and verification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Automated project discovery and networking</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>

            {/* What Cardano is Missing Section */}
            <section id="what-cardano-is-missing" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaBrain className="text-blue-600" />
                What Cardano is Missing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Critical gaps limiting project success and community growth in the Cardano ecosystem.
              </motion.p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Community Connection */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaUsers className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Community Disconnect</h3>
                        <p className="text-blue-600 font-medium">Discord ↔ Wallet Linking</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaXmark className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">No Wallet Linking</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaArrowDown className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">No Holder Tracking</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCheck className="text-blue-600" />
                        <span className="font-semibold text-blue-800">Wallie Solution</span>
                      </div>
                      <p className="text-blue-700 text-sm">Discord-to-wallet linking, holder tracking, daily sentiment analysis (optional)</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaWrench className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Talent Discovery</h3>
                        <p className="text-blue-600 font-medium">Job Search Marketplace</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaBan className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">No Job Platform</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaTriangleExclamation className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">Freelance Scams</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCheck className="text-blue-600" />
                        <span className="font-semibold text-blue-800">BoneBoard Solution</span>
                      </div>
                      <p className="text-blue-700 text-sm">Freelance marketplace connecting jobs with workers, Fiverr-style platform</p>
                    </div>
                  </div>
                </motion.div>

                {/* Market Intelligence & Integration */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaChartLine className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Market Intelligence</h3>
                        <p className="text-blue-600 font-medium">Rovex Twitter Bot</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaChartBar className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">No AI Promotion</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaArrowsRotate className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">Manual Marketing</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCheck className="text-blue-600" />
                        <span className="font-semibold text-blue-800">Rovex Solution</span>
                      </div>
                      <p className="text-blue-700 text-sm">AI bot learning from transactions, promoting Cardano projects on Twitter</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaServer className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Fragmented Tools</h3>
                        <p className="text-blue-600 font-medium">Unified Ecosystem</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaShuffle className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">Scattered Platforms</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <FaBolt className="text-2xl text-blue-600 mb-1 mx-auto" />
                        <div className="text-sm text-gray-600">No Integration</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCheck className="text-blue-600" />
                        <span className="font-semibold text-blue-800">WalletPup Ecosystem</span>
                      </div>
                      <p className="text-blue-700 text-sm">All tools working together connecting/onboarding projects, users, and $BONE token</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Tokenomics Section */}
            <section id="tokenomics" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaCoins className="text-blue-600" />
                $BONE Tokenomics
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                A robust economic model designed for sustainable growth and community value creation.
              </motion.p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <TokenomicsChart />
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Token Supply & Distribution</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Total Supply</span>
                        <span className="font-bold text-blue-600">1B $BONE</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Public Distribution</span>
                        <span className="font-bold text-blue-600">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Development & Events</span>
                        <span className="font-bold text-blue-600">5%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Smart Economics</h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        Entry at ~50 ADA worth of $BONE for 5 slots
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        Market cap growth reduces $BONE needed, auto upgrading slots
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        Maximum of 25 wallet tracking slots per user
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        Tokens stay in your wallet, tradeable anytime
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </section>


            {/* Ecosystem Overview Section */}
            <section id="ecosystem-overview" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaBrain className="text-blue-600" />
                WalletPup Ecosystem
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                WalletPup consists of three interconnected platforms that work together to provide comprehensive Cardano blockchain analytics and community management tools.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDiscord className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wallie Discord Bot</h3>
                  <p className="text-gray-600 mb-4">Community-driven Discord bot for wallet tracking and real-time Cardano analytics</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Wallet verification and tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>AI-powered community insights</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Token holder leaderboards</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaChartLine className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rovex Twitter Bot</h3>
                  <p className="text-gray-600 mb-4">Advanced Twitter analytics powered by Chakra AI for Cardano market insights</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Real-time market sentiment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>DeFi protocol monitoring</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Governance tracking</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUsers className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">BoneBoard Marketplace</h3>
                  <p className="text-gray-600 mb-4">Cardano-native freelance marketplace connecting projects with skilled professionals</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Skill-based talent matching</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Secure escrow payments</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Reputation system</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>



            {/* Treasury Section */}
            <section id="treasury" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaPiggyBank className="text-blue-600" />
                Pup House Treasury
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                All revenue from Wallie Discord bot and BoneBoard marketplace flows into our treasury to fund sustainable development and operations.
              </motion.p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCoins className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Revenue Sources</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Discord verification fees</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>10% of feeding bowl winnings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>BoneBoard payment fees</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaServer className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Core Infrastructure</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Website hosting & database costs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>AI processing & API costs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Bot operations & maintenance</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaChartLine className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Growth & Innovation</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Marketing & outreach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Strategic partnerships</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Feature development</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>

            {/* Partnerships Section */}
            <section id="partnerships" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaHandshake className="text-blue-600" />
                Partnerships
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Building strategic partnerships to expand WalletPup's reach and provide value to the entire Cardano ecosystem.
              </motion.p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Free BONE Distribution */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaBone className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Free BONE Distribution</h3>
                        <p className="text-blue-600 font-medium">Launch Strategy</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">Selected projects receive free BONE tokens to onboard their users to the WalletPup ecosystem.</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Track Discord Users</span>
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Wallet Move Announcements</span>
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Trust Building Tools</span>
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Community Analytics</span>
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium">Early Access Benefits</span>
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Strategic Collaborations */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaGlobe className="text-3xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Strategic Growth</h3>
                        <p className="text-blue-600 font-medium">Ecosystem Expansion</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">Actively seeking partnerships to expand tool distribution and token utility across Cardano.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
                        <div className="text-sm text-gray-600">Target Projects</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">100K+</div>
                        <div className="text-sm text-gray-600">User Reach</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
                        <FaHandshake className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Cardano Projects & Protocols</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
                        <FaWrench className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Community Platforms</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
                        <FaChartLine className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Analytics Services</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 border border-blue-200 rounded-lg">
                        <FaUsers className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Developer Networks</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Roadmap Section */}
            <section id="platform-expansion" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaGlobe className="text-blue-600" />
                Roadmap
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8"
              >
                Our mission is helping projects find community, workers, tools, and people. Our development timeline is aligned with key technological milestones and strategic partnerships to ensure optimal platform launches.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-12 text-center"
              >
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Roadmap items may change or new project ideas could emerge, but our core focus remains on connecting the Cardano ecosystem.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDiscord className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Wallie</h3>
                  <p className="text-blue-600 font-medium mb-4">Live Now</p>
                  <p className="text-gray-600 mb-2">Main community hub and starting area for all users</p>
                  <div className="mt-3 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 text-sm font-medium">Live & Operational</p>
                    <p className="text-blue-600 text-xs">Ongoing improvements</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaXTwitter className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Rovex</h3>
                  <p className="text-blue-600 font-medium mb-4">Coming Soon</p>
                  <p className="text-gray-600 mb-2">Marketing voice and insights pup for the community</p>
                  <div className="mt-3 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 text-sm font-medium">Q2-Q4 2025</p>
                    <p className="text-blue-600 text-xs">Awaiting Chakra AI agents</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaBone className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">BoneBoard</h3>
                  <p className="text-blue-600 font-medium mb-4">In Development</p>
                  <p className="text-gray-600 mb-2">Cardano freelance marketplace - connecting talent with projects</p>
                  <div className="mt-3 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 text-sm font-medium">Target: End of 2025</p>
                    <p className="text-blue-600 text-xs">In active development</p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaFlag className="text-blue-600" />
                Conclusion
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                  <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                    WalletPup represents the next evolution of the Cardano ecosystem, unifying community engagement, market intelligence, and professional services under one comprehensive platform. Our long-term vision is for all these tools to work together seamlessly, helping projects and users build stronger relationships while providing the tools needed to thrive in the Cardano ecosystem.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaWrench className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Tools</h4>
                      <p className="text-sm text-gray-600">Complete suite of project management and community engagement features</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaArrowUp className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Scalable Growth</h4>
                      <p className="text-sm text-gray-600">Built to handle Cardano's expanding ecosystem with unlimited capacity</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaHeart className="text-2xl text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Community First</h4>
                      <p className="text-sm text-gray-600">Designed by the community, for the community, with transparent governance</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 text-center leading-relaxed">
                    Join us in building the future of the Cardano ecosystem. Whether you're managing a community through Wallie, analyzing markets with Rovex, or finding talent on BoneBoard, WalletPup provides the integrated tools and services that empower projects to succeed and communities to thrive.
                  </p>
                </div>
              </motion.div>
            </section>


          </div>

          {/* Footer */}
          <footer className="bg-blue-900 px-8 py-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaPaw className="text-4xl text-white transform rotate-12" />
              <FaPaw className="text-4xl text-white transform rotate-12" />
            </div>
            <p className="text-white text-lg mb-2">2025 WalletPup | Your Faithful Cardano Companion</p>
            <p className="text-blue-200 text-sm">Whitepaper V2.0 • Crafted with Passion for Cardano</p>
          </footer>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="bg-white/90 backdrop-blur-md rounded-r-2xl p-4 border-r border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
          <div className="space-y-2">
            {sidebarSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 text-left ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <section.icon className="text-xl" />
                <span className="text-sm font-medium">{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WhitepaperV2;