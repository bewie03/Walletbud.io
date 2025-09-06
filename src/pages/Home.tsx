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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-all duration-500 cursor-default"
              >
                WalletPup Ecosystem
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-all duration-300 cursor-default"
              >
                Comprehensive suite of tools designed to enhance every aspect of the Cardano experience
              </motion.p>
            </div>
          </div>
        </div>

        {/* Ecosystem Overview Section */}
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight hover:scale-105 transition-all duration-300 cursor-default">
                Three Powerful Tools, One Ecosystem
              </h2>
            </motion.div>

            {/* Three Tools Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Wallie Discord Bot - Live */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-blue-500 hover:scale-[1.05] hover:shadow-2xl hover:border-blue-400 transition-all duration-500 shadow-lg text-center group relative"
              >
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  LIVE
                </div>
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-500">
                  <FaDiscord className="text-4xl text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">Wallie Discord Bot</h3>
                <p className="text-blue-100 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                  Community driven Discord bot for wallet tracking, insights, and real time Cardano analytics with 20+ commands.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Wallet verification & tracking</div>
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Community insights & analytics</div>
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Token holder leaderboards</div>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link
                    to="/guide"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Add Bot
                  </Link>
                  <Link
                    to="/commands"
                    className="inline-block bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white px-6 py-3 rounded-xl font-semibold border-2 border-blue-400 hover:border-blue-300 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Commands
                  </Link>
                </div>
              </motion.div>

              {/* BoneBoard Marketplace - Live */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-blue-500 hover:scale-[1.05] hover:shadow-2xl hover:border-blue-400 transition-all duration-500 shadow-lg text-center group relative"
              >
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  LIVE
                </div>
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-500">
                  <FaHandshake className="text-4xl text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">BoneBoard Marketplace</h3>
                <p className="text-blue-100 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                  Cardano native freelance marketplace connecting projects with skilled professionals across all disciplines.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Skill based talent matching</div>
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Secure escrow payments</div>
                  <div className="text-blue-200 text-sm group-hover:text-white transition-all duration-300">✓ Reputation system</div>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link
                    to="/boneboard-whitepaper"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <a
                    href="#"
                    className="inline-block bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white px-6 py-3 rounded-xl font-semibold border-2 border-blue-400 hover:border-blue-300 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Visit Platform
                  </a>
                </div>
              </motion.div>

              {/* Rovex Twitter Bot - Under Development */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="bg-blue-900/90 backdrop-sm rounded-3xl p-8 border border-gray-500 hover:scale-[1.05] hover:shadow-2xl hover:border-gray-400 transition-all duration-500 shadow-lg text-center group relative"
              >
                <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  IN DEVELOPMENT
                </div>
                <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gray-500 transition-all duration-500">
                  <FaXTwitter className="text-4xl text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">Rovex Twitter Bot</h3>
                <p className="text-blue-100 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                  Loyal Community pup that promotes projects, learns through data and is connected with Wallie and BoneBoard.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-gray-300 text-sm group-hover:text-white transition-all duration-300">• Cardano project promotion</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-all duration-300">• BoneBoard job integration</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-all duration-300">• Smart community learning</div>
                </div>
                <Link
                  to="/rovex-whitepaper"
                  className="inline-block bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.05] hover:shadow-2xl hover:border-blue-500 transition-all duration-500 shadow-lg text-center group">
                <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">20+</div>
                <div className="text-blue-100 text-xl group-hover:text-white transition-all duration-300">Discord Commands</div>
              </div>
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.05] hover:shadow-2xl hover:border-blue-500 transition-all duration-500 shadow-lg text-center group">
                <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">Native</div>
                <div className="text-blue-100 text-xl group-hover:text-white transition-all duration-300">Cardano Marketplace</div>
              </div>
              <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.05] hover:shadow-2xl hover:border-blue-500 transition-all duration-500 shadow-lg text-center group">
                <div className="text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-300">AI</div>
                <div className="text-blue-100 text-xl group-hover:text-white transition-all duration-300">Community Learning</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="w-full py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4 hover:scale-105 transition-all duration-300 cursor-default">
                Get Started with WalletPup
              </h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
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
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: feature.delay, ease: "easeOut" }}
                  className="group"
                >
                  {feature.link.startsWith('http') ? (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.05] hover:shadow-xl hover:border-blue-500 transition-all duration-300 shadow-lg text-center group">
                        <div className="text-blue-200 mb-4 flex justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-all duration-300">{feature.title}</h3>
                        <p className="text-blue-100 text-base group-hover:text-white transition-all duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={feature.link}
                      className="block"
                    >
                      <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.05] hover:shadow-xl hover:border-blue-500 transition-all duration-300 shadow-lg text-center group">
                        <div className="text-blue-200 mb-4 flex justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-all duration-300">{feature.title}</h3>
                        <p className="text-blue-100 text-base group-hover:text-white transition-all duration-300">
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
              className="text-center"
            >
              <div className="bg-blue-900/90 backdrop-sm rounded-3xl p-12 border border-blue-700 shadow-lg hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-6 hover:scale-105 transition-all duration-300 cursor-default">Ready to Join the Pack?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
                  Start your journey with WalletPup today and experience the future of Cardano community tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/whitepaper"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://discord.gg/d99FBA64Qf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white font-semibold text-lg rounded-xl border-2 border-blue-400 hover:border-blue-300 hover:scale-105 hover:shadow-2xl transition-all duration-300"
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