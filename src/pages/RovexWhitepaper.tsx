import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaCoins,
  FaBrain,
  FaTrophy,
  FaGlobe,
  FaCheck,
  FaServer,
  FaChartLine,
  FaRobot,
  FaCog,
  FaChartBar,
  FaNetworkWired,
  FaUsers,
  FaBalanceScale,
  FaFlag,
  FaBookOpen,
  FaRocket,
  FaDatabase,
  FaBullhorn,
  FaEye
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import FloatingBones from '../components/FloatingBones';

const RovexWhitepaper = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'chakra-ai', 'cardano-insights', 'features', 'marketing-tools', 'analytics', 'community-engagement', 'technical', 'roadmap', 'conclusion'];
      
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
    { id: 'chakra-ai', label: 'Chakra AI Engine', icon: FaBrain },
    { id: 'cardano-insights', label: 'Cardano Insights', icon: FaChartLine },
    { id: 'features', label: 'Core Features', icon: FaRobot },
    { id: 'marketing-tools', label: 'Marketing Tools', icon: FaBullhorn },
    { id: 'analytics', label: 'Analytics', icon: FaChartBar },
    { id: 'community-engagement', label: 'Community', icon: FaUsers },
    { id: 'technical', label: 'Technical', icon: FaServer },
    { id: 'roadmap', label: 'Roadmap', icon: FaGlobe },
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
              <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">Rovex</h1>
              <h2 className="text-4xl font-bold text-white">Twitter Bot Whitepaper</h2>
            </header>
            
            {/* Content */}
            <div className="p-8 lg:p-12">
              
              {/* Under Construction Notice */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCog className="text-3xl text-blue-600 animate-spin" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Under Construction</h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Rovex is currently under development and will be completed when Chakra releases their AI agents.
                    </p>
                  </div>
                </div>
              </motion.div>

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
                      Rovex is WalletPup's loyal community advocate - an intelligent Twitter bot that promotes Cardano projects, learns continuously from Discord interactions and transaction data, and connects users with opportunities through BoneBoard integration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaBrain className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">AI-Powered</h4>
                        <p className="text-sm text-gray-600">Advanced Chakra AI agents for deep analysis</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaChartLine className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Project Promotion</h4>
                        <p className="text-sm text-gray-600">Advocates for Cardano ecosystem projects</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Community Learning</h4>
                        <p className="text-sm text-gray-600">Learns from Discord and transaction data</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed mt-8">
                      Transforming how the Cardano community discovers, analyzes, and engages with blockchain data on Twitter.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Chakra AI Engine Section */}
              <section id="chakra-ai" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBrain className="text-blue-600" />
                  Chakra AI Engine
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
                >
                  Rovex leverages advanced Chakra AI agents to learn from Discord interactions and transaction data, promoting Cardano projects while connecting community members with BoneBoard opportunities.
                </motion.p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaBrain className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">Advanced AI Agents</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Multi-Agent Architecture</h4>
                        <p className="text-gray-700 text-sm">Specialized AI agents for different aspects of blockchain analysis, content creation, and community management</p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Discord & Transaction Learning</h4>
                        <p className="text-gray-700 text-sm">Continuously learns from Discord conversations and transaction patterns to understand community needs and project trends</p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Context-Aware Processing</h4>
                        <p className="text-gray-700 text-sm">Deep understanding of Cardano terminology, project relationships, and community dynamics</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaCog className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">Intelligent Automation</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Smart Content Generation</h4>
                        <p className="text-gray-700 text-sm">AI creates contextually relevant tweets, threads, and responses based on real-time blockchain data</p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Predictive Analytics</h4>
                        <p className="text-gray-700 text-sm">Advanced algorithms predict market trends, optimal posting times, and community engagement patterns</p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Adaptive Strategies</h4>
                        <p className="text-gray-700 text-sm">AI automatically adjusts marketing strategies based on performance metrics and market conditions</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-blue-50 rounded-3xl p-10 border-2 border-blue-200"
                >
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaRobot className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">Chakra AI Capabilities</h3>
                    <p className="text-blue-700 text-lg">Next-generation AI technology specifically trained for Cardano ecosystem analysis</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <FaChartLine className="text-3xl text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-blue-900 mb-2">Market Analysis</h4>
                      <p className="text-gray-600 text-sm">Deep market trend analysis and prediction</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <FaUsers className="text-3xl text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-blue-900 mb-2">Sentiment Analysis</h4>
                      <p className="text-gray-600 text-sm">Real-time community sentiment tracking</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <FaBullhorn className="text-3xl text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-blue-900 mb-2">Content Optimization</h4>
                      <p className="text-gray-600 text-sm">AI-optimized content for maximum engagement</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <FaNetworkWired className="text-3xl text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-blue-900 mb-2">Network Intelligence</h4>
                      <p className="text-gray-600 text-sm">Comprehensive blockchain network analysis</p>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Cardano Insights Section */}
              <section id="cardano-insights" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaChartLine className="text-blue-600" />
                  Deep Cardano Insights
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12"
                >
                  Rovex provides unparalleled insights into the Cardano ecosystem, analyzing everything from DeFi protocols to NFT markets, governance proposals, and network health metrics.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCoins className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">DeFi Analytics</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Total Value Locked (TVL) tracking across all Cardano DeFi protocols</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Liquidity pool analysis and yield farming opportunities</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">DEX volume and trading pair performance metrics</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Cross-protocol arbitrage opportunities identification</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaTrophy className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">NFT Market Intelligence</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Real-time NFT collection floor price monitoring</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Trending collections and emerging artists identification</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Marketplace volume analysis across all major platforms</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Rarity analysis and valuation predictions</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaBalanceScale className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">Governance Tracking</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Catalyst proposal analysis and voting trends</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Stake pool performance and delegation patterns</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Network parameter changes and their impact</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Community sentiment on governance decisions</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100"
                >
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaNetworkWired className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">Network Health & Performance</h3>
                    <p className="text-blue-700 text-lg">Comprehensive monitoring of Cardano's network vitals and ecosystem growth</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-2xl p-4 mb-3">
                        <h4 className="text-2xl font-bold text-blue-600">99.9%</h4>
                        <p className="text-blue-800 text-sm font-medium">Network Uptime</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-2xl p-4 mb-3">
                        <h4 className="text-2xl font-bold text-blue-600">3000+</h4>
                        <p className="text-blue-800 text-sm font-medium">Active Stake Pools</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-2xl p-4 mb-3">
                        <h4 className="text-2xl font-bold text-blue-600">80K+</h4>
                        <p className="text-blue-800 text-sm font-medium">Daily Transactions</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-2xl p-4 mb-3">
                        <h4 className="text-2xl font-bold text-blue-600">4.2M+</h4>
                        <p className="text-blue-800 text-sm font-medium">Total Addresses</p>
                      </div>
                    </div>
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
                  Planned Features
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaXTwitter className="text-blue-600" />
                      Twitter Integration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Automated tweet scheduling</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Real-time market updates</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Community engagement tracking</span>
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
                      <FaBrain className="text-blue-600" />
                      AI-Powered Insights
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Sentiment analysis</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Trend identification</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Optimal posting times</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Marketing Tools Section */}
              <section id="marketing-tools" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBullhorn className="text-blue-600" />
                  Marketing Tools
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Project Promotion</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">Cardano Project Advocacy</h4>
                        <p className="text-gray-600 text-sm mt-1">Promotes quality Cardano ecosystem projects</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">BoneBoard Integration</h4>
                        <p className="text-gray-600 text-sm mt-1">Connects users with freelance opportunities</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">Thread Creation</h4>
                        <p className="text-gray-600 text-sm mt-1">Multi-tweet educational content</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Engagement Tools</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">Community Polls</h4>
                        <p className="text-gray-600 text-sm mt-1">Interactive community feedback</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">Reply Management</h4>
                        <p className="text-gray-600 text-sm mt-1">Automated responses to mentions</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="text-blue-700 font-bold">Hashtag Optimization</h4>
                        <p className="text-gray-600 text-sm mt-1">Strategic hashtag recommendations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics Section */}
              <section id="analytics" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaChartLine className="text-blue-600" />
                  Analytics & Reporting
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEye className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Reach Analytics</h3>
                    <p className="text-gray-600">Track impressions, engagement rates, and audience growth</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaChartBar className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Performance Metrics</h3>
                    <p className="text-gray-600">Detailed analytics on tweet performance and timing</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUsers className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Audience Insights</h3>
                    <p className="text-gray-600">Understanding your community demographics and interests</p>
                  </motion.div>
                </div>
              </section>

              {/* Community Engagement Section */}
              <section id="community-engagement" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaUsers className="text-blue-600" />
                  Community Engagement
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto"
                >
                  <p className="text-lg text-gray-600 text-center mb-8">
                    Rovex will bridge the gap between Discord communities and Twitter audiences, creating seamless cross-platform engagement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Cross-Platform Sync</h4>
                      <p className="text-gray-600 text-sm">Share Discord community highlights on Twitter automatically</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Community Highlights</h4>
                      <p className="text-gray-600 text-sm">Showcase community achievements and milestones</p>
                    </div>
                  </div>
                </motion.div>
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
                  Technical Architecture
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
                      Platform Integration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Twitter API v2 integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Cardano blockchain monitoring</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Discord bot synchronization</span>
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
                      Data & Security
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Secure API key management</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Rate limiting compliance</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Privacy-focused analytics</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Roadmap Section */}
              <section id="roadmap" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaGlobe className="text-blue-600" />
                  Development Roadmap
                </motion.h2>
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        Q2
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Phase 1: Foundation</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-16">
                      <li>• Twitter API integration and authentication</li>
                      <li>• Basic tweet scheduling functionality</li>
                      <li>• Connection with Wallie Discord bot</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        Q3
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Phase 2: Intelligence</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-16">
                      <li>• AI-powered content generation</li>
                      <li>• Sentiment analysis implementation</li>
                      <li>• Advanced analytics dashboard</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        Q4
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Phase 3: Expansion</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600 ml-16">
                      <li>• Full community management suite</li>
                      <li>• Cross-platform synchronization</li>
                      <li>• Public beta launch</li>
                    </ul>
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
                      Rovex represents the future of social media engagement for the Cardano ecosystem, combining advanced AI technology with deep blockchain analytics to create meaningful connections and drive community growth on Twitter.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaBrain className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Intelligent Analysis</h4>
                        <p className="text-sm text-gray-600">Chakra AI agents provide sophisticated market insights</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaXTwitter className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social Reach</h4>
                        <p className="text-sm text-gray-600">Expanding WalletPup's influence across Twitter</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaRocket className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Community Growth</h4>
                        <p className="text-sm text-gray-600">Amplifying project voices in the Cardano space</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed">
                      Join us as we revolutionize how Cardano projects connect, engage, and grow their communities through intelligent social media automation.
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

export default RovexWhitepaper;
