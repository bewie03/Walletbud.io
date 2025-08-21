// Home page - Updated 21 August 2025
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingBones from '../components/FloatingBones';
import { 
  FaUsers, 
  FaDiscord, 
  FaBone,
  FaRocket,
  FaHandshake
} from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { MetaTags } from '../components/MetaTags';

const Home = () => {
  return (
    <>
      <MetaTags 
        title="WalletPup - Cardano Ecosystem Tools"
        description="Comprehensive suite of AI-powered tools for Cardano communities, projects, and users"
      />
      <div className="min-h-screen bg-[#1e40af] relative overflow-y-auto overflow-x-hidden flex flex-col">
        <FloatingBones />
        
        {/* Hero Banner */}
        <div className="w-full bg-blue-900 backdrop-sm pb-8 border-b border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-32 pb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300"
              >
                WalletPup Ecosystem
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300"
              >
                Comprehensive AI-powered tools connecting Cardano communities, projects, and talent
              </motion.p>
            </div>
          </div>
        </div>

        {/* Ecosystem Overview Section */}
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Three Powerful Tools, One Ecosystem
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto">
                WalletPup provides a comprehensive suite of AI-powered tools designed to enhance every aspect of the Cardano experience - from community management to professional networking.
              </p>
            </motion.div>

            {/* Three Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Wallie Discord Bot */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaDiscord className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Wallie Discord Bot</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Community-driven Discord bot for wallet tracking, AI insights, and real-time Cardano analytics with 20+ commands.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-blue-200 text-sm">✓ Wallet verification & tracking</div>
                  <div className="text-blue-200 text-sm">✓ AI-powered community insights</div>
                  <div className="text-blue-200 text-sm">✓ Token holder leaderboards</div>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link
                    to="/guide"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Add Bot
                  </Link>
                  <Link
                    to="/commands"
                    className="inline-block bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white px-6 py-3 rounded-xl font-semibold border-2 border-blue-400 hover:border-blue-300 transition-all duration-300"
                  >
                    Commands
                  </Link>
                </div>
              </motion.div>

              {/* Rovex Twitter Bot */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaXTwitter className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Rovex Twitter Bot</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Loyal Community pup that promotes projects, learns through data and is connected with Wallie and BoneBoard.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-blue-200 text-sm">✓ Cardano project promotion</div>
                  <div className="text-blue-200 text-sm">✓ BoneBoard job integration</div>
                  <div className="text-blue-200 text-sm">✓ Community learning AI</div>
                </div>
                <Link
                  to="/rovex-whitepaper"
                  className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Coming Soon
                </Link>
              </motion.div>

              {/* BoneBoard Marketplace */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHandshake className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">BoneBoard Marketplace</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Cardano-native freelance marketplace connecting projects with skilled professionals across all disciplines.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-blue-200 text-sm">✓ Skill-based talent matching</div>
                  <div className="text-blue-200 text-sm">✓ Secure escrow payments</div>
                  <div className="text-blue-200 text-sm">✓ Reputation system</div>
                </div>
                <Link
                  to="/boneboard-whitepaper"
                  className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  In Development
                </Link>
              </motion.div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                <div className="text-5xl font-bold text-white mb-4">1B</div>
                <div className="text-blue-100 text-xl">$BONE Supply</div>
              </div>
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                <div className="text-5xl font-bold text-white mb-4">95%</div>
                <div className="text-blue-100 text-xl">Public Distribution</div>
              </div>
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                <div className="text-5xl font-bold text-white mb-4">AI</div>
                <div className="text-blue-100 text-xl">Chakra Powered</div>
                <div className="text-blue-200 text-xs mt-2 opacity-75">*GPT for testing - Chakra agents not yet released</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="w-full py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4 hover:scale-[1.02] transition-all duration-300">
                Get Started with WalletPup
              </h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Join the ecosystem and unlock the full potential of Cardano community tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <FaBone className="text-2xl" />,
                  title: "Get $BONE Tokens",
                  description: "Acquire $BONE tokens to unlock premium features across all three platforms.",
                  link: "https://dexhunter.io",
                  delay: 0.8
                },
                {
                  icon: <FaUsers className="text-2xl" />,
                  title: "Join Discord",
                  description: "Connect with the community and start using Wallie bot immediately.",
                  link: "https://discord.gg/d99FBA64Qf",
                  delay: 0.9
                },
                {
                  icon: <FaRocket className="text-2xl" />,
                  title: "Explore Tools",
                  description: "Discover all three platforms and find the perfect fit for your needs.",
                  link: "/whitepaper",
                  delay: 1.0
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="group"
                >
                  {feature.link.startsWith('http') ? (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                        <div className="text-blue-200 mb-4 flex justify-center">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-blue-100 text-base">
                          {feature.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={feature.link}
                      className="block"
                    >
                      <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                        <div className="text-blue-200 mb-4 flex justify-center">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-blue-100 text-base">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-center"
            >
              <div className="bg-blue-900/90 backdrop-sm rounded-3xl p-12 border border-blue-700 shadow-lg">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Join the Pack?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Start your journey with WalletPup today and experience the future of Cardano community tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/whitepaper"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://discord.gg/d99FBA64Qf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white font-semibold text-lg rounded-xl border-2 border-blue-400 hover:border-blue-300 transition-all duration-300"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;