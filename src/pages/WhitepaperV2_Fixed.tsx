import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaCoins,
  FaBone,
  FaBrain,
  FaTrophy,
  FaGlobe,
  FaCheck,
  FaPiggyBank,
  FaServer,
  FaChartLine,
  FaDiscord,
  FaPaw,
  FaRobot,
  FaGraduationCap,
  FaCog,
  FaSmile,
  FaChartBar,
  FaStar,
  FaTwitter,
  FaNetworkWired,
  FaUsers,
  FaArrowUp,
  FaLayerGroup,
  FaBalanceScale,
  FaFlag,
  FaBookOpen,
  FaTools,
  FaHeart
} from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';

const WhitepaperV2 = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'tokenomics', 'bone-tiers', 'ai-personalities', 'community-tools', 'treasury', 'network-capacity', 'platform-expansion', 'conclusion'];
      
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
    { id: 'bone-tiers', label: 'BONE Tiers', icon: FaLayerGroup },
    { id: 'ai-personalities', label: 'Pup Training', icon: FaBrain },
    { id: 'community-tools', label: 'Community Tools', icon: FaTools },
    { id: 'treasury', label: 'Treasury', icon: FaPiggyBank },
    { id: 'network-capacity', label: 'Network Capacity', icon: FaNetworkWired },
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
          <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
          <motion.div
            className="absolute inset-0 rounded-full border-8 border-blue-600"
            style={{ clipPath: 'polygon(0 0, 95% 0, 95% 100%, 0 100%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-8 border-blue-400"
            style={{ clipPath: 'polygon(95% 0, 100% 0, 100% 100%, 95% 100%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <FaBone className="text-6xl text-blue-600 mx-auto mb-4 transform rotate-12" />
              <div className="text-3xl font-bold text-blue-900">$BONE</div>
              <div className="text-sm text-blue-600 mt-2">Token Distribution</div>
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
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden font-sans">
      <FloatingBones />
      
      {/* Whitepaper Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Header */}
          <header className="bg-blue-900 px-8 py-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaPaw className="text-5xl text-white transform rotate-12" />
              <span className="text-5xl font-extrabold text-white tracking-tight">WalletPup</span>
              <FaPaw className="text-5xl text-white transform -rotate-12" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Technical Whitepaper</h1>
            <p className="text-blue-200 text-lg">Version 2.0 • March 2025</p>
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
                    WalletPup is a community driven Discord bot that brings the Cardano blockchain to life by seamlessly tying wallet addresses to Discord accounts, delivering real time insights with a playful twist.
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

            {/* BONE Tiers Section */}
            <section id="bone-tiers" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaLayerGroup className="text-blue-600" />
                BONE Tier System
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Entry cost maintained at ~50 ADA worth of $BONE. As market cap grows, fewer tokens needed - requirements adjusted by admins to keep fair pricing.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg mb-12"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBalanceScale className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Market Cap Based Requirements</h3>
                  <p className="text-gray-600">Fixed ~50 ADA entry value with decreasing $BONE requirements as we grow</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { mcap: '$100K', amount: '200,000', highlight: false },
                    { mcap: '$200K', amount: '100,000', highlight: true },
                    { mcap: '$500K', amount: '40,000', highlight: false },
                    { mcap: '$1M', amount: '20,000', highlight: false },
                    { mcap: '$2M', amount: '10,000', highlight: false },
                    { mcap: '$5M', amount: '4,000', highlight: false }
                  ].map((stage, index) => (
                    <div 
                      key={index}
                      className={`${stage.highlight ? 'bg-blue-600 text-white border-blue-700' : 'bg-blue-50 border-blue-200'} rounded-2xl p-4 border transition-all duration-300 hover:scale-105`}
                    >
                      <div className="text-center">
                        <div className={`text-xs ${stage.highlight ? 'text-blue-200' : 'text-gray-600'} mb-1`}>
                          MCAP {stage.mcap}
                        </div>
                        <div className={`text-lg font-bold ${stage.highlight ? 'text-white' : 'text-gray-800'} mb-1`}>
                          {stage.amount}
                        </div>
                        <div className={`text-xs ${stage.highlight ? 'text-blue-200' : 'text-gray-600'}`}>
                          $BONE required
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-600 rounded-2xl p-6 text-white text-center mt-6">
                  <h4 className="text-xl font-bold mb-2">Admin-Adjusted Requirements</h4>
                  <p className="text-blue-100">Requirements manually adjusted by admins to maintain ~50 ADA entry cost as market conditions change</p>
                </div>
              </motion.div>
            </section>

            {/* AI Personalities Section */}
            <section id="ai-personalities" className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaBrain className="text-blue-600" />
                Pup Training
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                The /train command lets you customize your pup's personality to deliver analytics and notifications with its unique style. The quality of your prompt shapes how effectively your pup communicates.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 border border-blue-200">
                      <FaGraduationCap className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Training Your Pup</h3>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Define how stats should be presented
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Set detail levels for your token or notifications
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Choose a tone that fits your community
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Provide examples for consistent delivery
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 border border-blue-200">
                      <FaCog className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Crafting the Perfect Prompt</h3>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Be specific about stats presentation
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Include sample outputs for clarity
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Address unique group scenarios
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-blue-600" />
                      Prioritize key metrics for your community
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-white rounded-3xl p-10 shadow-xl border border-blue-100"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRobot className="text-3xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Evolution & Cardano Integration</h3>
                  <p className="text-gray-600">Advancing AI capabilities for deeper blockchain insights</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <FaGraduationCap className="text-blue-600" />
                      Current Phase
                    </h4>
                    <p className="text-gray-600 text-sm">Basic GPT integration for testing and community feedback collection</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <FaCog className="text-blue-600" />
                      Next Evolution
                    </h4>
                    <p className="text-gray-600 text-sm">High-end Chakra agent AI with community integration and specialized Cardano training</p>
                  </div>
                </div>
                
                <div className="bg-blue-600 rounded-2xl p-6 text-white text-center mt-6">
                  <p className="text-blue-100">Continuous AI advancement ensures WalletPup stays at the forefront of blockchain analytics and community engagement</p>
                </div>
              </motion.div>
            </section>

            {/* Community Tools Section */}
            <section id="community-tools" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaBrain className="text-blue-600" />
                Community Tools
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Empower your Cardano project with advanced engagement and analytics features.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 rounded-xl p-3">
                      <FaChartLine className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Token Purchase Tracking</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Set up automated token tracking with the /track command. Your trained AI pup will post and comment on all token purchases above your specified threshold, keeping your community engaged with:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Personalized AI commentary on purchases
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Customizable threshold notifications
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Real time market activity updates
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 rounded-xl p-3">
                      <FaTrophy className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Community Leaderboard</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Showcase your top community members holding your token with the /leaderboard command.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Displays top 20 verified token holders
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      View what your members are holding
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Helps track community engagement
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 rounded-xl p-3">
                      <FaSmile className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Daily Sentiment Analysis</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get comprehensive daily reports on your server's activity with the /sentiment command. Your trained pup delivers personalized insights including:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Top 3 most active members
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Total messages and engagement metrics
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Top active communities and how you rank
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 rounded-xl p-3">
                      <FaChartBar className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Market Data Analysis</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Currently using basic GPT for testing, but will be upgraded to high-end Chakra agent AI tying in with our community ecosystem.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Current price and daily % change
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Total holder count and distribution
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600" />
                      Token age and circulating supply
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>

            {/* Feeding Bowl Section */}
            <section id="feeding-bowl" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaTrophy className="text-blue-600" />
                The Feeding Bowl
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Community prize pool with durations set by WalletPup admins. 5 ADA entry, longer periods = bigger prizes.
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
                      <FaCog className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">How It Works</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>5 ADA entry per verified wallet</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>One entry per wallet per bowl</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Verification required</span>
                    </li>
                  </ul>
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
                      <FaTrophy className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Prize Distribution</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-gray-700 font-medium">Winner</span>
                      <span className="font-bold text-blue-600 text-lg">80%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-gray-700 font-medium">Treasury</span>
                      <span className="font-bold text-blue-600 text-lg">10%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-gray-700 font-medium">$BONE Burn</span>
                      <span className="font-bold text-blue-600 text-lg">10%</span>
                    </div>
                  </div>
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
                      <FaStar className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Community Impact</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Fosters participation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Supports $BONE value</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheck className="text-blue-600 flex-shrink-0" />
                      <span>Funds development</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 italic mt-4 text-center">
                    Play responsibly with funds you can afford
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Treasury Section */}
            <section id="treasury" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
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

            {/* Network Capacity Section */}
            <section id="network-capacity" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
              >
                <FaNetworkWired className="text-blue-600" />
                Network Capacity Analysis
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
              >
                Comprehensive analysis of Cardano network growth and WalletPup's capacity to serve the expanding ecosystem.
              </motion.p>
              <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaChartLine className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Current Network Statistics</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Daily Active Addresses</h4>
                        <p className="text-lg font-bold text-gray-800">50,000+</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Daily Transactions</h4>
                        <p className="text-lg font-bold text-gray-800">80,000+</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">New Wallets Daily</h4>
                        <p className="text-lg font-bold text-gray-800">~5,500</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Total Addresses</h4>
                        <p className="text-lg font-bold text-gray-800">4.2M+</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col"
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaUsers className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">WalletPup Capacity & Infrastructure</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Transaction Handling</h4>
                        <p className="text-lg font-bold text-gray-800">80,000+ daily</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Max Slots per User</h4>
                        <p className="text-lg font-bold text-gray-800">25 wallets</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">System Uptime</h4>
                        <p className="text-lg font-bold text-gray-800">99.9% guaranteed</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                        <h4 className="text-blue-600 text-xs font-medium mb-1">Scaling</h4>
                        <p className="text-lg font-bold text-gray-800">Auto-scaling ready</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Roadmap Section */}
            <section id="platform-expansion" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Discord</h3>
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
                    <FaTwitter className="text-4xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Twitter/X</h3>
                  <p className="text-blue-600 font-medium mb-4">Coming Soon</p>
                  <p className="text-gray-600">Marketing voice and insights platform for the community</p>
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
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-12 border-2 border-blue-200 shadow-2xl relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                
                <div className="text-center mb-10 relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaBone className="text-4xl text-white drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
                  </motion.div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    BONE Integration with BoneBoard
                  </h3>
                  <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
                    $BONE and ADA tokens will be used as payment methods on the BoneBoard platform
                  </p>
                </div>
                
                <div className="bg-white rounded-3xl p-10 border-2 border-blue-100 shadow-xl relative z-10 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl px-8 py-4 border border-blue-200">
                      <FaCoins className="text-blue-600 text-2xl" />
                      <h4 className="font-bold text-gray-800 text-2xl">Payment System Overview</h4>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    <motion.div 
                      className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        Both ADA and $BONE tokens will be accepted as payment methods for freelance services, project listings, and platform fees on BoneBoard.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        All $BONE tokens used for payments will be <span className="font-bold text-blue-600">permanently burned</span>, creating a deflationary mechanism that reduces the total supply with each transaction.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0 shadow-md"></div>
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        There are no staking rewards, governance rights, or reputation systems - $BONE serves purely as a <span className="font-bold text-blue-600">payment token</span> alongside ADA.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="mb-20 bg-blue-50 rounded-3xl p-12 -mx-12">
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