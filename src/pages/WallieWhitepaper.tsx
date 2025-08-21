import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaBrain,
  FaTrophy,
  FaCheck,
  FaServer,
  FaChartLine,
  FaDiscord,
  FaGraduationCap,
  FaSmile,
  FaChartBar,
  FaLayerGroup,
  FaBalanceScale,
  FaDatabase,
  FaBookOpen,
  FaUsers,
  FaRocket,
  FaRobot,
  FaCog,
  FaNetworkWired,
  FaFlag,
  FaStar,
  FaBell
} from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';

const WallieWhitepaper = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'features', 'commands', 'bone-tiers', 'ai-training', 'community-tools', 'feeding-bowl', 'network-capacity', 'technical', 'conclusion'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sidebarSections = [
    { id: 'introduction', label: 'Introduction', icon: FaBookOpen },
    { id: 'features', label: 'Core Features', icon: FaRobot },
    { id: 'commands', label: 'Commands', icon: FaCog },
    { id: 'bone-tiers', label: 'BONE Tiers', icon: FaLayerGroup },
    { id: 'ai-training', label: 'AI Training', icon: FaBrain },
    { id: 'community-tools', label: 'Community Tools', icon: FaUsers },
    { id: 'feeding-bowl', label: 'Feeding Bowl', icon: FaTrophy },
    { id: 'network-capacity', label: 'Network Capacity', icon: FaNetworkWired },
    { id: 'technical', label: 'Technical', icon: FaServer },
    { id: 'conclusion', label: 'Conclusion', icon: FaFlag }
  ];

  return (
    <div className="min-h-screen bg-blue-900 text-gray-800 relative overflow-hidden font-sans">
      <FloatingBones />
      
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="bg-white/90 backdrop-blur-md rounded-r-2xl p-4 shadow-2xl border-r border-blue-100" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'}}>
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

      {/* Main Content */}
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="bg-white rounded-3xl shadow-2xl drop-shadow-2xl overflow-hidden border border-blue-100" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'}}>
            
            {/* Header */}
            <header className="bg-blue-900 py-16 text-center -mx-0 rounded-t-3xl border-b-4 border-white">
              <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">Wallie</h1>
              <h2 className="text-4xl font-bold text-white">Discord Bot Whitepaper</h2>
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
                      Wallie is WalletPup's intelligent Discord bot that transforms Cardano blockchain interaction through seamless wallet tracking, real-time analytics, and community engagement tools powered by advanced AI.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaDiscord className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Solo Users</h4>
                        <p className="text-sm text-gray-600">Personal wallet tracking and portfolio insights</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaRocket className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Projects</h4>
                        <p className="text-sm text-gray-600">Community management and token holder engagement</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Communities</h4>
                        <p className="text-sm text-gray-600">Real-time analytics and server management tools</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed mt-8">
                      Empowering the Cardano ecosystem with over 20 intuitive commands and powerful analytical capabilities.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Core Features Section */}
              <section id="features" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaRobot className="text-blue-600" />
                  Core Features
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaBell className="text-blue-600" />
                      Real-time Tracking
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Instant wallet transaction notifications</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Token purchase and sale alerts</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Portfolio balance updates</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaChartLine className="text-blue-600" />
                      Analytics & Insights
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Community leaderboards</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Token holder statistics</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Market sentiment analysis</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Commands Section */}
              <section id="commands" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaCog className="text-blue-600" />
                  Available Commands
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">User Commands</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/verify</code>
                        <p className="text-gray-600 text-sm mt-1">Link your Discord to your wallet address for tracking</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/add</code>
                        <p className="text-gray-600 text-sm mt-1">Track up to 25 wallets you're interested in monitoring</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/train</code>
                        <p className="text-gray-600 text-sm mt-1">Customize your pup's personality and analytics delivery style</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/stats</code>
                        <p className="text-gray-600 text-sm mt-1">View detailed community and personal wallet statistics</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/fetch</code>
                        <p className="text-gray-600 text-sm mt-1">Retrieve specific wallet or token information on demand</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Project Commands</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/track</code>
                        <p className="text-gray-600 text-sm mt-1">Set up automated token purchase tracking with custom thresholds</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/leaderboard</code>
                        <p className="text-gray-600 text-sm mt-1">Display top 20 verified token holders in your community</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/sentiment</code>
                        <p className="text-gray-600 text-sm mt-1">Daily AI-powered server activity and sentiment analysis</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/announce</code>
                        <p className="text-gray-600 text-sm mt-1">Send notifications to all wallet watchers with updates</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <code className="text-blue-700 font-bold">/gif-setup &lt;collection_url&gt;</code>
                        <p className="text-gray-600 text-sm mt-1">Configure animated GIF rewards for NFT collection holders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BONE Tiers Section */}
              <section id="bone-tiers" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
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
                  className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg mb-12" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
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

              {/* AI Training Section */}
              <section id="ai-training" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBrain className="text-blue-600" />
                  AI Pup Training
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
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 border border-blue-200">
                        <FaGraduationCap className="text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800">Training Your Pup</h3>
                    </div>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Define how stats should be presented</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Set detail levels for your token or notifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Choose a tone that fits your community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Provide examples for consistent delivery</span>
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
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 border border-blue-200">
                        <FaCog className="text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800">Crafting the Perfect Prompt</h3>
                    </div>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Be specific about stats presentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Include sample outputs for clarity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Address unique group scenarios</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>Prioritize key metrics for your community</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </section>

              {/* Community Tools Section */}
              <section id="community-tools" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaUsers className="text-blue-600" />
                  Community Tools
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
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
                        <span>Personalized AI commentary on purchases</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Customizable threshold notifications</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Real time market activity updates</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
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
                        <span>Displays top 20 verified token holders</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>View what your members are holding</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Helps track community engagement</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
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
                        <span>Top 3 most active members</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Total messages and engagement metrics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Top active communities and how you rank</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
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
                        <span>Current price and daily % change</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Total holder count and distribution</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaCheck className="text-blue-600" />
                        <span>Token age and circulating supply</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </section>

              {/* Feeding Bowl Section */}
              <section id="feeding-bowl" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
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
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
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
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
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
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}
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

              {/* Network Capacity Section */}
              <section id="network-capacity" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
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

              {/* Technical Section */}
              <section id="technical" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaServer className="text-blue-600" />
                  Technical Overview
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaNetworkWired className="text-blue-600" />
                      Blockchain Integration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Direct Cardano blockchain connection</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Real-time transaction monitoring</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Secure wallet verification</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaDatabase className="text-blue-600" />
                      Data Processing
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Advanced analytics engine</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">AI-powered insights</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Privacy-focused design</span>
                      </div>
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
                      Wallie represents the next evolution in Discord-based blockchain tools, transforming how communities interact with the Cardano ecosystem through intelligent automation, real-time analytics, and AI-powered insights.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaRobot className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">AI-Powered</h4>
                        <p className="text-sm text-gray-600">Advanced machine learning for personalized insights</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Community First</h4>
                        <p className="text-sm text-gray-600">Built for Discord communities and project teams</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaChartLine className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Real-Time Data</h4>
                        <p className="text-sm text-gray-600">Live blockchain analytics and portfolio tracking</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed">
                      Join thousands of users who trust Wallie to keep them connected to the Cardano ecosystem with intelligent notifications, comprehensive analytics, and seamless community integration.
                    </p>
                  </div>
                </motion.div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallieWhitepaper;
