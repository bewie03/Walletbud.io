import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaCoins,
  FaBone,
  FaGlobe,
  FaCheck,
  FaPiggyBank,
  FaDiscord,
  FaUsers,
  FaArrowUp,
  FaFlag,
  FaBookOpen,
  FaTools,
  FaHeart,
  FaBrain,
  FaPaw,
  FaStar,
  FaChartLine,
  FaServer
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import FloatingBones from '../components/FloatingBones';

const WhitepaperV2 = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'tokenomics', 'community-tools', 'treasury', 'platform-expansion', 'conclusion'];
      
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
    { id: 'tokenomics', label: 'Tokenomics', icon: FaCoins },
    { id: 'community-tools', label: 'Community Tools', icon: FaTools },
    { id: 'treasury', label: 'Treasury', icon: FaPiggyBank },
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
        <div className="bg-white rounded-3xl shadow-2xl drop-shadow-2xl overflow-hidden border border-blue-100">
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
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8">
                  <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                    WalletPup is a comprehensive ecosystem of AI-powered tools designed to enhance the Cardano blockchain experience through Discord bots, Twitter analytics, and freelance marketplace integration.
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
                    Empowering everyone in the Cardano ecosystem with over 20 intuitive commands and powerful analytical tools.
                  </p>
                </div>
              </motion.div>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
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
                Strategic treasury management ensures sustainable development and premium community services.
              </motion.p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPiggyBank className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Treasury Management</h3>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Transparent allocation of resources to ensure long-term sustainability and continuous innovation.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
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
                      <span>Website hosting & database</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>AI development resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Backend maintenance</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
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
                Our mission is helping projects find community, workers, tools, and people. These are our main focus areas, though plans may evolve as new opportunities arise.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-12 text-center"
              >
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Roadmap items may change or new project ideas could emerge, but our core focus remains on connecting the Cardano ecosystem.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaDiscord className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Wallie</h3>
                  <p className="text-green-600 font-medium mb-4">Live Now</p>
                  <p className="text-gray-600">Main community hub and starting area for all users</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaXTwitter className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Rovex</h3>
                  <p className="text-blue-600 font-medium mb-4">Coming Soon</p>
                  <p className="text-gray-600">Marketing voice and insights pup for the community</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaBone className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">BoneBoard</h3>
                  <p className="text-blue-600 font-medium mb-4">In Development</p>
                  <p className="text-gray-600">Cardano freelance marketplace - connecting talent with projects</p>
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
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8">
                  <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                    WalletPup represents the next evolution of Cardano community engagement, combining advanced AI technology with comprehensive project management tools. Our innovative BONE tier system, powered by Chakra agent AI, creates a sustainable ecosystem that grows with the Cardano network.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaTools className="text-2xl text-blue-600" />
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
                    Join us in building the future of Cardano project management and community engagement. Together, we're creating tools that empower projects to succeed and communities to thrive.
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
        <div className="bg-white/90 backdrop-blur-md rounded-r-2xl p-4 shadow-2xl border-r border-blue-100">
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