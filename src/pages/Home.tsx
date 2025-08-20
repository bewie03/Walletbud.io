// Home page - Updated 05 March 2025
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingBones from '../components/FloatingBones';
import { FaPaw, FaUsers, FaMagnifyingGlass } from 'react-icons/fa6';
import { MetaTags } from '../components/MetaTags';

const Home = () => {
  return (
    <>
      <MetaTags 
        title="WalletPup"
        description="Your Cardano Watchdog"
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
                Your Cardano Watchdog
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300"
              >
                Discord bot linking wallet addresses to Discord accounts with AI insights and community tools
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Value Proposition */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-left"
              >
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  The Ultimate Discord Bot for Cardano Communities
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Link wallet addresses to Discord accounts, get AI-powered transaction insights, host community events, 
                  and train your own personalized AI dog companion. Perfect for project owners and users alike.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/guide"
                    className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border border-blue-600"
                  >
                    Add to Discord
                  </Link>
                  <Link
                    to="/commands"
                    className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-blue-800/50 text-blue-100 hover:text-white font-semibold text-lg rounded-xl border-2 border-blue-400 hover:border-blue-300 transition-all duration-300"
                  >
                    View Commands
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Key Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 gap-6"
              >
                <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                  <div className="text-5xl font-bold text-white mb-4">24/7</div>
                  <div className="text-blue-100 text-xl">Real-Time Monitoring</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-6 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                    <div className="text-3xl font-bold text-white mb-3">20+</div>
                    <div className="text-blue-100 text-base">Discord Commands</div>
                  </div>
                  <div className="bg-blue-900/90 backdrop-sm rounded-2xl p-6 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg text-center">
                    <div className="text-3xl font-bold text-white mb-3">AI</div>
                    <div className="text-blue-100 text-base">Powered Insights</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-2 hover:scale-[1.02] transition-all duration-300">
                Unleash Your Watchdog in 3 Steps
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaPaw className="text-2xl" />,
                  title: "Fetch $BONE Tokens",
                  description: "Grab $BONE to unlock premium analytics and join the pack.",
                  link: "https://dexhunter.io",
                  delay: 0.3
                },
                {
                  icon: <FaUsers className="text-2xl" />,
                  title: "Join the Pack",
                  description: "Hop into Discord to connect and start tracking with us.",
                  link: "https://discord.gg/d99FBA64Qf",
                  delay: 0.4
                  
                },
                {
                  icon: <FaMagnifyingGlass className="text-2xl" />,
                  title: "Unleash Analytics",
                  description: "Use /add to verify your $BONE wallet and get started. ",
                  link: "/commands",
                  delay: 0.5
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;