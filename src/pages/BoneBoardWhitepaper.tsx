import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaCoins,
  FaBone,
  FaCheck,
  FaHandshake,
  FaShieldAlt,
  FaRocket,
  FaBookOpen,
  FaUsers,
  FaFlag,
  FaCog,
  FaPaw,
  FaBullhorn,
  FaServer,
  FaBriefcase,
  FaTwitter,
  FaPalette,
  FaCode,
  FaPenNib,
  FaChartLine,
  FaFilter,
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaBuilding,
  FaEye,
  FaWallet,
  FaLock
} from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';

const BoneBoardWhitepaper = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'job-listings', 'freelancer-profiles', 'project-listings', 'wallet-integration', 'marketplace', 'payments', 'tokenomics', 'technical', 'conclusion'];
      
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
    { id: 'job-listings', label: 'Job Listings', icon: FaBriefcase },
    { id: 'freelancer-profiles', label: 'Freelancer Profiles', icon: FaUser },
    { id: 'project-listings', label: 'Project Showcase', icon: FaBuilding },
    { id: 'wallet-integration', label: 'Wallet Integration', icon: FaWallet },
    { id: 'payments', label: 'Payment System', icon: FaCoins },
    { id: 'tokenomics', label: 'Tokenomics', icon: FaBone },
    { id: 'technical', label: 'Technical Architecture', icon: FaServer },
    { id: 'conclusion', label: 'Conclusion', icon: FaFlag }
  ];

  return (
    <div className="min-h-screen bg-blue-900 text-gray-800 relative overflow-hidden font-sans">
      <FloatingBones />
      
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

      {/* Main Content */}
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="bg-white rounded-3xl shadow-2xl drop-shadow-2xl overflow-hidden border border-blue-100">
            
            {/* Header */}
            <header className="bg-blue-900 py-16 text-center -mx-0 rounded-t-3xl border-b-4 border-white">
              <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">BoneBoard</h1>
              <h2 className="text-4xl font-bold text-white">Freelance Marketplace Whitepaper</h2>
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
                      BoneBoard is WalletPup's revolutionary freelance marketplace - a Cardano-native platform that bridges exceptional talent with innovative projects, creating a thriving ecosystem of collaboration and growth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Freelancers</h4>
                        <p className="text-sm text-gray-600">Showcase skills and connect with Cardano projects</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaRocket className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Projects</h4>
                        <p className="text-sm text-gray-600">Find qualified talent for blockchain development</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaHandshake className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Ecosystem</h4>
                        <p className="text-sm text-gray-600">Strengthen the entire Cardano community</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed mt-8">
                      Empowering the Cardano ecosystem with secure, efficient talent matching and dual-currency payment systems.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Job Listings Section */}
              <section id="job-listings" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBriefcase className="text-blue-600" />
                  Job Marketplace
                </motion.h2>
                
                {/* Job Categories Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTwitter className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Social Media</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Twitter management, Discord moderation, community engagement</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPalette className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Design</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Branding, UI/UX design, NFT artwork, logo creation</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaCode className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Development</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Smart contracts, web development, dApp creation</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPenNib className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Content</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Writing, marketing copy, documentation, blog posts</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaChartLine className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Analytics</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Data analysis, community metrics, growth tracking</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaBullhorn className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Marketing</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Campaign management, PR, influencer outreach</p>
                  </div>
                </motion.div>
                
                {/* Features Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-blue-900">Open Job Marketplace</h3>
                      <p className="text-gray-600">Anyone can post jobs - no restrictions, just connect your wallet and start hiring</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <FaFilter className="text-xl text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Smart Filters</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <FaRocket className="text-xl text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Featured Jobs</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <FaBookOpen className="text-xl text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Save Jobs</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <FaCoins className="text-xl text-blue-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Dynamic Pricing</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Freelancer Profiles Section */}
              <section id="freelancer-profiles" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-12 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaUser className="text-blue-600" />
                  Freelancer Profiles
                </motion.h2>
                
                {/* Profile Creation Flow */}
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                    
                    {/* Step 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-8 mb-12"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl z-10">
                        1
                      </div>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <FaWallet className="text-2xl text-blue-600" />
                          <h3 className="text-xl font-semibold text-blue-900">Connect Wallet</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Authenticate securely using your Cardano wallet - no passwords required</p>
                        <div className="flex gap-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Eternal</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vesper</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Lace</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Step 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative flex items-start gap-8 mb-12"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl z-10">
                        2
                      </div>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <FaIdCard className="text-2xl text-blue-600" />
                          <h3 className="text-xl font-semibold text-blue-900">Build Profile</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Showcase your skills, experience, and portfolio work</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-600" />
                            <span className="text-sm text-gray-600">Portfolio examples</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-600" />
                            <span className="text-sm text-gray-600">Skills & experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-600" />
                            <span className="text-sm text-gray-600">Social links</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-blue-600" />
                            <span className="text-sm text-gray-600">Rate & availability</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Step 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="relative flex items-start gap-8"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl z-10">
                        3
                      </div>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <FaEnvelope className="text-2xl text-blue-600" />
                          <h3 className="text-xl font-semibold text-blue-900">Start Connecting</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Apply to jobs and receive direct messages from potential clients looking for work</p>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                            <FaEnvelope className="text-blue-600" />
                            <span className="text-sm text-blue-800">Direct messaging</span>
                          </div>
                          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                            <FaEye className="text-blue-600" />
                            <span className="text-sm text-blue-800">Application tracking</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Project Listings Section */}
              <section id="project-listings" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-12 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBuilding className="text-blue-600" />
                  Project Showcase
                </motion.h2>
                
                {/* Project Cards Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* Featured Project Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-blue-900">Featured Projects</h3>
                        <p className="text-gray-600">Discover top Cardano projects actively hiring</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaRocket className="text-xl text-blue-600" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="font-semibold mb-2 text-blue-900">Project Profiles</h4>
                        <p className="text-sm text-gray-600">Showcase your project for regular job posting with detailed info</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="font-semibold mb-2 text-blue-900">20% Discount</h4>
                        <p className="text-sm text-gray-600">Project creators get 20% off all job listing fees</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Discovery Tools */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaEye className="text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Discovery</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <FaFilter className="text-blue-600" />
                        <span className="text-sm text-gray-700">Category filters</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <FaCog className="text-blue-600" />
                        <span className="text-sm text-gray-700">Reputation system</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <FaUsers className="text-blue-600" />
                        <span className="text-sm text-gray-700">Follow projects</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Project Types */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                >
                  <h3 className="text-2xl font-semibold text-blue-900 text-center mb-8">Project Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <FaCoins className="text-xl text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">DeFi</h4>
                      <p className="text-xs text-gray-600">Decentralized finance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <FaPalette className="text-xl text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">NFTs</h4>
                      <p className="text-xs text-gray-600">Digital collectibles</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <FaServer className="text-xl text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">Infrastructure</h4>
                      <p className="text-xs text-gray-600">Blockchain tools</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <FaUsers className="text-xl text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">Community</h4>
                      <p className="text-xs text-gray-600">Social platforms</p>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Wallet Integration Section */}
              <section id="wallet-integration" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaWallet className="text-blue-600" />
                  Wallet Integration & Authentication
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8">
                    <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                      BoneBoard uses wallet-based authentication for seamless user experience. Simply connect your Cardano wallet to login and all your activities are tied to your wallet address.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaWallet className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Supported Wallets</h4>
                        <p className="text-sm text-gray-600">Eternal, Vesper, and Lace wallet integration</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaLock className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Secure Login</h4>
                        <p className="text-sm text-gray-600">No passwords needed - just connect your wallet</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaServer className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Data Storage</h4>
                        <p className="text-sm text-gray-600">All profiles and activities tied to wallet address</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Marketplace Section */}
              <section id="marketplace" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaHandshake className="text-blue-600" />
                  Marketplace Categories
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCog className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Development</h3>
                    <p className="text-gray-600 text-sm">Smart contracts, dApps, web development</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPaw className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Design</h3>
                    <p className="text-gray-600 text-sm">UI/UX design, branding, NFT art</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBullhorn className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Marketing</h3>
                    <p className="text-gray-600 text-sm">Community management, content creation</p>
                  </div>
                </div>
              </section>

              {/* Payment System Section */}
              <section id="payments" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaCoins className="text-blue-600" />
                  Dual Currency Payment System
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto mb-8"
                >
                  <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                    BoneBoard supports both ADA and BONE payments through secure smart contracts. All payments are processed automatically with built-in deflationary mechanics for BONE tokens.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                        <FaCoins className="text-blue-600" />
                        ADA Payments
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Native Cardano currency support</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">50% of ADA fees used to buy and burn BONE</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Dynamic pricing based on ADA market value</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                        <FaBone className="text-blue-600" />
                        BONE Payments
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">WalletPup ecosystem token support</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">100% of BONE payments are burned</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Deflationary mechanism reduces supply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 max-w-5xl mx-auto"
                >
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaShieldAlt className="text-3xl text-blue-600" />
                    </div>
                    <h4 className="text-3xl font-bold text-blue-900 mb-4">Smart Contract Security</h4>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Secure, automated payment processing with built-in protection for all parties</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaLock className="text-2xl" />
                      </div>
                      <h5 className="text-xl font-semibold text-blue-900 mb-4">Secure Escrow</h5>
                      <p className="text-gray-700 leading-relaxed">Payments are safely held in smart contracts until work is completed and approved by both parties</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaWallet className="text-2xl" />
                      </div>
                      <h5 className="text-xl font-semibold text-blue-900 mb-4">Wallet Integration</h5>
                      <p className="text-gray-700 leading-relaxed">Sign contracts directly with your Cardano wallet - Eternal, Vesper, or Lace supported</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCog className="text-2xl" />
                      </div>
                      <h5 className="text-xl font-semibold text-blue-900 mb-4">Automated Processing</h5>
                      <p className="text-gray-700 leading-relaxed">Automatic payment release upon completion and instant BONE token burning mechanism</p>
                    </div>
                  </div>
                </motion.div>
              </section>


              {/* Tokenomics Section */}
              <section id="tokenomics" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-12 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaBone className="text-blue-600" />
                  BONE Tokenomics
                </motion.h2>
                
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8"
                  >
                    <p className="text-lg text-gray-600 text-center leading-relaxed mb-10">
                      BoneBoard implements a deflationary mechanism where BONE tokens are permanently removed from circulation, creating scarcity and value for the WalletPup ecosystem.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaBone className="text-3xl text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-900 mb-4">BONE Burning</h4>
                        <p className="text-gray-600 leading-relaxed">100% of BONE payments are permanently burned, reducing total supply with every transaction</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaCoins className="text-3xl text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-900 mb-4">ADA Integration</h4>
                        <p className="text-gray-600 leading-relaxed">50% of ADA fees are used to buy and burn additional BONE tokens from the market</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaShieldAlt className="text-3xl text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-900 mb-4">Pure Utility</h4>
                        <p className="text-gray-600 leading-relaxed">No staking rewards or governance rights - serves purely as a payment token alongside ADA</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
                      <h4 className="text-2xl font-semibold mb-4 text-blue-900">Deflationary Impact</h4>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Every job posting, freelancer profile creation, and project listing permanently removes BONE tokens from circulation.
                      </p>
                      <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-md border border-blue-100">
                        <FaRocket className="text-blue-600 text-xl" />
                        <span className="font-semibold text-gray-800">More Usage = Less Supply = Increased Scarcity</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Technical Section */}
              <section id="technical" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-12 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaServer className="text-blue-600" />
                  Technical Architecture
                </motion.h2>
                
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 mb-8"
                  >
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaWallet className="text-3xl text-blue-600" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-blue-900">Simple Authentication</h3>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">Connect your wallet and you're ready to go - no passwords, no complex setup</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FaWallet className="text-xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold mb-2 text-blue-900">Connect Wallet</h4>
                        <p className="text-sm text-gray-600">Use your Cardano wallet address</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FaUser className="text-xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold mb-2 text-blue-900">Auto Profile</h4>
                        <p className="text-sm text-gray-600">Profile saved to our database</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FaRocket className="text-xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold mb-2 text-blue-900">Start Working</h4>
                        <p className="text-sm text-gray-600">Begin posting or applying immediately</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                    >
                      <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                        <FaServer className="text-blue-600" />
                        Blockchain Integration
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Cardano smart contracts for secure payments</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Native ADA and BONE token support</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Wallet-based identity verification</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                    >
                      <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                        <FaCog className="text-blue-600" />
                        Platform Features
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Real-time messaging between users</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Advanced job and freelancer search</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">Automated payment processing</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
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
                      BoneBoard represents the future of decentralized freelance marketplaces, combining Cardano's security with innovative dual-currency payments. Our platform will strengthen the entire ecosystem by connecting exceptional talent with groundbreaking projects.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaShieldAlt className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Secure Platform</h4>
                        <p className="text-sm text-gray-600">Built on Cardano with advanced security features</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaBone className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Dual Currency</h4>
                        <p className="text-sm text-gray-600">ADA and $BONE payments with deflationary mechanics</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaHandshake className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Community Growth</h4>
                        <p className="text-sm text-gray-600">Fostering collaboration across the Cardano ecosystem</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 text-center leading-relaxed">
                      Join us in building the premier destination for Cardano talent and projects. Together, we're creating opportunities that drive innovation and success.
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

export default BoneBoardWhitepaper;
