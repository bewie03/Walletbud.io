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
  FaBullhorn,
  FaServer,
  FaBriefcase,
  FaTwitter,
  FaPalette,
  FaCode,
  FaPenNib,
  FaChartLine,
  FaFilter,
  FaIdCard,
  FaEnvelope,
  FaBuilding,
  FaEye,
  FaBrain
} from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';

const BoneBoardWhitepaper = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'job-listings', 'project-funding', 'project-listings', 'rovex-integration', 'security-moderation', 'verification', 'privacy-communication', 'smart-contracts', 'ecosystem-funding', 'technical', 'conclusion'];
      
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
    { id: 'project-funding', label: 'Project Funding', icon: FaCoins },
    { id: 'project-listings', label: 'Project Showcase', icon: FaBuilding },
    { id: 'rovex-integration', label: 'Rovex Integration', icon: FaBullhorn },
    { id: 'security-moderation', label: 'Security & Moderation', icon: FaShieldAlt },
    { id: 'verification', label: 'Authentication & Verification', icon: FaIdCard },
    { id: 'privacy-communication', label: 'Privacy & Communication', icon: FaEnvelope },
    { id: 'smart-contracts', label: 'Smart Contract Audits', icon: FaServer },
    { id: 'ecosystem-funding', label: 'Ecosystem Funding', icon: FaCoins },
    { id: 'technical', label: 'Technical Architecture', icon: FaCog },
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
              <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">BoneBoard</h1>
              <h2 className="text-4xl font-bold text-white">Job & Funding Marketplace Whitepaper</h2>
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
                      BoneBoard is WalletPup's revolutionary job and funding marketplace - a Cardano native platform that connects talent with projects while enabling community-driven project funding campaigns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Professionals</h4>
                        <p className="text-sm text-gray-600">Find jobs and connect with Cardano projects</p>
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
                      Empowering the Cardano ecosystem with secure, efficient talent matching and dual currency payment systems.
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
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTwitter className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Social Media</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Twitter management, Discord moderation, community engagement</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPalette className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Design</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Branding, UI/UX design, NFT artwork, logo creation</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaCode className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Development</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Smart contracts, web development, dApp creation</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPenNib className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Content</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Writing, marketing copy, documentation, blog posts</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaChartLine className="text-xl text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">Analytics</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Data analysis, community metrics, growth tracking</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}>
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

              {/* Project Funding Section */}
              <section id="project-funding" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-12 text-blue-900 flex items-center justify-center gap-3"
                >
                  <FaCoins className="text-blue-600" />
                  Project Funding Campaigns
                </motion.h2>
                
                {/* Funding Campaign Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="max-w-4xl mx-auto mb-12"
                >
                  <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
                      Projects can create funding campaigns to receive community contributions for development, marketing, or other project needs. All campaigns remain permanently visible for transparency.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-3">
                          <FaCoins className="text-blue-600" />
                          Campaign Features
                        </h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Set funding goals and deadlines</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Accept ADA and $BONE contributions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Detailed project descriptions and roadmaps</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Regular progress updates to contributors</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-3">
                          <FaShieldAlt className="text-blue-600" />
                          Anti-Fraud Protection
                        </h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Wallet verification prevents self-funding</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>IP tracking and device fingerprinting</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Community reporting and moderation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Transparent contribution history</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Featured Job Listings */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="max-w-4xl mx-auto mb-12"
                >
                  <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100" style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaBriefcase className="text-blue-600" />
                      Featured Job Listings
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Projects can pay to feature their job listings at the top of the listings page for maximum visibility.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-blue-900 mb-4">Duration Discounts</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center gap-3">
                            <FaCoins className="text-blue-600" />
                            <span>2 months: 5% discount</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <FaCoins className="text-blue-600" />
                            <span>3 months: 10% discount</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <FaCoins className="text-blue-600" />
                            <span>6 months: 15% discount</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <FaCoins className="text-blue-600" />
                            <span>12 months: 20% discount</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-blue-900 mb-4">Admin Panel</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Seamless pricing adjustments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Real-time discount management</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Featured listing controls</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Revenue analytics dashboard</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaEye className="text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">Discovery Tools</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Advanced search and filtering</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Project showcase gallery</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Community recommendations</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Rovex Integration Section */}
              <section id="rovex-integration" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaBullhorn className="text-blue-600" />
                  Rovex Integration
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
                      Our Twitter bot Rovex monitors and understands all projects, job listings, and funding campaigns on BoneBoard, promoting opportunities and projects through our Twitter account.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaBrain className="text-xl text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">AI Powered Understanding</h4>
                          <p className="text-sm text-gray-600">Rovex analyzes BoneBoard content to understand projects and opportunities for promotion</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaTwitter className="text-xl text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Twitter Promotion</h4>
                          <p className="text-sm text-gray-600">Promotes BoneBoard projects and opportunities through WalletPup's Twitter account</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Security & Moderation Section */}
              <section id="security-moderation" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaShieldAlt className="text-blue-600" />
                  Security & Moderation
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
                      BoneBoard maintains the highest security standards with comprehensive moderation to protect our community from scams and fraudulent activities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaShieldAlt className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Scam Prevention</h4>
                        <p className="text-sm text-gray-600">All scam posts and fraudulent job listings are automatically removed</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaFilter className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Content Filtering</h4>
                        <p className="text-sm text-gray-600">Jobs unrelated to Cardano ecosystem are filtered out</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaEye className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Active Monitoring</h4>
                        <p className="text-sm text-gray-600">Continuous monitoring ensures platform integrity</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Authentication & Verification Section */}
              <section id="verification" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaIdCard className="text-blue-600" />
                  Authentication & Verification
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
                      Projects must authenticate by connecting their X accounts to prevent fake job listings. Users can connect multiple social accounts for verification.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaTwitter className="text-blue-600" />
                          Project Authentication
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">X account connection required</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Prevents fake job listings</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Verified project badges</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaUsers className="text-blue-600" />
                          User Verification
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Twitter account linking</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Discord integration</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">LinkedIn profile connection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Privacy & Communication Section */}
              <section id="privacy-communication" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaEnvelope className="text-blue-600" />
                  Privacy & Communication
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
                      We prioritize user privacy while facilitating secure communication between employers and professionals, as well as project creators and contributors.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaShieldAlt className="text-blue-600" />
                          Privacy Protection
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">No resume storage</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">No personal information handling</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Direct employer - employee communication</span>
                           </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaEnvelope className="text-blue-600" />
                          Communication Methods
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Email contact links</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Discord integration</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Verified social profiles visible</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Smart Contract Audits Section */}
              <section id="smart-contracts" className="mb-20 bg-blue-50 rounded-3xl p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaServer className="text-blue-600" />
                  Smart Contract Audits
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
                      All BoneBoard smart contracts undergo rigorous auditing processes to ensure maximum security and reliability for our users.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaShieldAlt className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Security First</h4>
                        <p className="text-sm text-gray-600">Comprehensive security audits by leading firms</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaCheck className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Verified Code</h4>
                        <p className="text-sm text-gray-600">All smart contracts verified and transparent</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUsers className="text-2xl text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Community Trust</h4>
                        <p className="text-sm text-gray-600">Building confidence through transparency</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Ecosystem Funding Section */}
              <section id="ecosystem-funding" className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3"
                >
                  <FaCoins className="text-blue-600" />
                  Ecosystem Funding
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
                      All funds generated through BoneBoard operations are reinvested back into the Cardano ecosystem to drive growth and innovation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaRocket className="text-blue-600" />
                          Ecosystem Growth
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Developer incentives</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Project funding support</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Community initiatives</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <FaHandshake className="text-blue-600" />
                          Sustainable Model
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Transparent fund allocation</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Community driven decisions</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Long term ecosystem health</span>
                          </div>
                        </div>
                      </div>
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
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                    >
                      <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                        <FaServer className="text-blue-600" />
                        Blockchain Integration
                      </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Native Cardano integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Secure wallet connections</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Smart contract automation</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.05)'}}
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center gap-3">
                      <FaCog className="text-blue-600" />
                      Platform Features
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Real time messaging between users</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Advanced job and project search</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Automated payment processing</span>
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
                      BoneBoard represents the future of decentralized job and funding marketplaces, combining Cardano's security with innovative dual currency payments. Our platform strengthens the entire ecosystem by connecting exceptional talent with groundbreaking projects while enabling community-driven funding.
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
