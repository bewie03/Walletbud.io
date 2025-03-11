// Whitepaper - Updated 05 March 2025
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../components/AnimatedElement';
import FloatingBones from '../components/FloatingBones';
import { 
  FaArrowUp,
  FaArrowDown,
  FaBell,
  FaBone,
  FaBullhorn,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCog,
  FaCogs,
  FaCompass,
  FaCubes,
  FaDatabase,
  FaCoins,
  FaDog,
  FaDragon,
  FaEnvelope,
  FaEye,
  FaFeather,
  FaGift,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaHistory,
  FaHome,
  FaLightbulb,
  FaLock,
  FaNetworkWired,
  FaPaw,
  FaPiggyBank,
  FaProjectDiagram,
  FaRobot,
  FaRocket,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaBolt,
  FaUsers,
  FaBullseye,
  FaCheckCircle,
  FaDiscord,
  FaTools,
  FaSmile
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Whitepaper = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const sections = [
    {
      id: 'introduction',
      title: (
        <div className="flex items-center gap-2">
          <span>Introduction</span>
        </div>
      ),
      icon: <FaPaw className="w-6 h-6 text-blue-300" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-600/50">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-white">Welcome to WalletPup</h3>
                </div>
                <div className="space-y-8">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-blue-100">
                      WalletPup is Your Cardano Watchdog a community driven bot delivering real time notifications and analytics for projects, solo users, and servers. Starting on Discord, our pack hub, it bridges blockchain data to where Cardano thrives, barking out updates and digging up insights with customizable AI pups.
                    </p>
                    <p className="text-blue-100 mt-4">
                      Our mission is simple: empower everyone on Cardano with wallet tracking and community insights. Projects get token trends and server stats, solo users monitor their wallets, and communities rally around shared data all in real time, all with pup powered fun.
                    </p>
                    <p className="text-blue-100 mt-4">
                      The $BONE token fuels this ecosystem, unlocking premium features while staying tradeable. From Discord to Telegram and Twitter, WalletPup scales with Cardano’s communities, keeping you in the loop and in the know.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'inspiration',
      title: 'Inspiration',
      icon: <FaLightbulb className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Where It Started</h3>
                <div className="space-y-8">
                  {/* The Original */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaHistory className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Original</h4>
                    </div>
                    <p className="text-blue-100">
                      Walletbud pioneered wallet tracking on Cardano via Discord, introducing the concept of monitoring blockchain activity in a community setting. However, it struggled with sustainability and reliability, leaving room for improvement.
                    </p>
                  </div>
                  {/* The Successor */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBolt className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Successor</h4>
                    </div>
                    <p className="text-blue-100">
                      Then came RushLabs who have created an amaizing suite of tools. ZING and Frenbot, bringing lightning fast trading tools to the Cardano community. Their focus on speed and trading empowered users with real time data and professional grade tools.
                    </p>
                  </div>
                  {/* The Evolution */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRocket className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Evolution</h4>
                    </div>
                    <p className="text-blue-100">
                    WalletPup becomes Your Cardano Watchdog, blending real time notifications with AI driven community analytics. We offer wallet and token tracking, usefull commands and tools, server stats across Discord, Telegram, and Twitter, with the bonus of speed and fun.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'technology' section unchanged - already fits with notifications + analytics focus
    {
      id: 'technology',
      title: 'How It Works',
      icon: <FaCogs className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Technical Overview</h3>
                <div className="space-y-8">
                  {/* Blockchain Connection */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaNetworkWired className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">1. Blockchain Connection</h4>
                    </div>
                    <p className="text-blue-100">
                      Our webhook system connects directly to the Cardano blockchain, pulling real time transaction data for tracked wallets across projects and servers.
                    </p>
                  </div>
                  {/* Data Processing */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaDatabase className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">2. Data Processing</h4>
                    </div>
                    <p className="text-blue-100">
                      Raw blockchain data is transformed into group friendly analytics trade volumes, token flows, and server activity making it actionable for communities.
                    </p>
                  </div>
                  {/* Notification Delivery */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBell className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">3. Pup Powered Delivery</h4>
                    </div>
                    <p className="text-blue-100">
                      Your trained pup then processes the data, delivering personalized insights straight to your Discord channels and DMs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'features',
      title: 'Features and Functionality',
      icon: <FaFeather className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Features Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Core Commands */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaRobot className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Core Commands</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/track</code>
                        <p className="text-blue-100 mt-1">Monitor token activity for projects</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/stats</code>
                        <p className="text-blue-100 mt-1">Fetch  stats on the walletpup community</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/add</code>
                        <p className="text-blue-100 mt-1">Track wallets you have an interest in</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/train</code>
                        <p className="text-blue-100 mt-1">Customize your pup for tailored updates</p>
                      </div>
                    </div>
                  </div>
                  {/* Community Features */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaSearch className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Community Features</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/track</code>
                        <p className="text-blue-100 mt-1">Projects track their tokens</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/leaderboad</code>
                        <p className="text-blue-100 mt-1">See your top verified holders</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/sentiment</code>
                        <p className="text-blue-100 mt-1">Daily AI insights on your server</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/announce (dm)</code>
                        <p className="text-blue-100 mt-1">Notify your pack with updates</p>
                      </div>
                    </div>
                  </div>
                  {/* Key Features */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaChartPie className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Key Features</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaBell className="text-blue-300" />
                          <p className="text-blue-100">Real time notifications for all</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaChartLine className="text-blue-300" />
                          <p className="text-blue-100">Analytics for projects and users</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaUsers className="text-blue-300" />
                          <p className="text-blue-100">Community engagement tools</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaPaw className="text-blue-300" />
                          <p className="text-blue-100">Pup driven fun for everyone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Security & Privacy */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaShieldAlt className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Security & Privacy</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaLock className="text-blue-300" />
                          <p className="text-blue-100">Secure wallet tracking</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-blue-300" />
                          <p className="text-blue-100">Private or public alerts</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaBone className="text-blue-300" />
                          <p className="text-blue-100">$BONE unlocks premium tiers</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaEye className="text-blue-300" />
                          <p className="text-blue-100">Control visibility</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'tokenomics' section unchanged - already aligns with $BONE unlocking features for all
    {
      id: 'tokenomics',
      title: 'Tokenomics & $BONE',
      icon: <FaCoins className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Token Overview</h3>
                <div className="space-y-8">
                  {/* Total Supply */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCoins className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Total Supply</h4>
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">1B</div>
                    <div className="text-blue-200">Total $BONE Supply</div>
                  </div>
                  {/* Distribution */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaChartPie className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Distribution</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-100">Public Distribution</span>
                          <span className="text-white font-bold">95%</span>
                        </div>
                        <div className="w-full bg-blue-950 rounded-full h-3">
                          <div className="bg-blue-400 h-3 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '95%' }}></div>
                        </div>
                        <div className="mt-2 text-sm text-blue-200">950,000,000 $BONE - For community, bot access, DEX trading, and liquidity</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-100">Development & Community Events</span>
                          <span className="text-white font-bold">5%</span>
                        </div>
                        <div className="w-full bg-blue-950 rounded-full h-3">
                          <div className="bg-blue-400 h-3 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '5%' }}></div>
                        </div>
                        <div className="mt-2 text-sm text-blue-200">50,000,000 $BONE - For development and partnerships</div>
                      </div>
                    </div>
                  </div>
                  {/* Token Utility & Requirements */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCubes className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Token Utility & Requirements</h4>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-blue-100 mb-4">
                          $BONE tokens unlock premium group analytics while remaining tradeable, offering a sustainable alternative to traditional subscriptions. Hold $BONE to access advanced features for your server or project.
                        </p>
                      </div>
                      <div className="bg-blue-920/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaChartLine className="text-blue-300" />
                          Smart Token Economics
                        </h5>
                        <div className="text-blue-200">
                          <p>• Entry at ~50 ADA worth of $BONE for basic group analytics</p>
                          <p>• Market cap growth reduces $BONE needed, auto upgrading access</p>
                          <p>• Early adopters gain more slots</p>
                          <p>• Flexible scaling for projects and servers</p>
                        </div>
                      </div>
                      <div className="bg-blue-920/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaHandshake className="text-blue-300" />
                          User Benefits
                        </h5>
                        <div className="text-blue-200">
                          <p>• Tokens stay in your wallet, tradeable anytime</p>
                          <p>• Early adopters benefit from enhanced group analytics</p>
                          <p>• Rewards long term holders as WalletPup scales</p>
                          <p>• Flexible entry for communities of all sizes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'bone-tiers' section unchanged - fits with unlocking features for all
    {
      id: 'bone-tiers',
      title: 'BONE Tier System',
      icon: <FaBone className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-4">Track More Wallets Just By Holding!</h3>
                <p className="text-blue-100 mb-6">
                  As WalletPup grows, your $BONE holdings unlock more wallet tracking slots for group analytics without additional purchases. Start small and scale up to 25 wallets as our market cap increases.
                </p>
                <div className="space-y-6">
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <div className="flex items-center gap-2">
                        <FaBullseye className="text-blue-300" />
                        <span>How It Works - Simple Version</span>
                      </div>
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">1. Buy $BONE to unlock wallet tracking slots</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">2. As WalletPup grows, fewer $BONE are needed per slot</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">3. Your existing $BONE auto upgrades to more slots</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">4. Hold long term to maximize group tracking (up to 25 wallets)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <div className="flex items-center gap-2">
                        <FaLightbulb className="text-blue-300" />
                        <span>Real Example: The Power of Holding</span>
                      </div>
                    </h4>
                    <p className="text-blue-100 mb-4">
                      Buy 200K $BONE today and watch your tracking slots grow as WalletPup scales:
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300"><FaRocket /></div>
                          <div>
                            <div className="font-bold text-white">Day 1: Project Launch</div>
                            <div>5 slots (200K $BONE needed for 5 wallets)</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300"><FaChartLine /></div>
                          <div>
                            <div className="font-bold text-white">Later: Project Grows</div>
                            <div>100K $BONE for 5 slots</div>
                            <div className="text-blue-300">200K $BONE = 10 slots!</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300"><FaChartBar /></div>
                          <div>
                            <div className="font-bold text-white">Project Grows More</div>
                            <div>50K $BONE for 5 slots</div>
                            <div className="text-blue-300">200K $BONE = 20 slots!</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300"><FaStar /></div>
                          <div>
                            <div className="font-bold text-white">Project Thrives</div>
                            <div>25K $BONE for 5 slots</div>
                            <div className="text-blue-300">200K $BONE = max 25 slots!</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <div className="flex items-center gap-2">
                        <FaTrophy className="text-blue-300" />
                        <span>Why This is Great for You</span>
                      </div>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">Hold & Win</div>
                        <p className="text-blue-100">More slots auto unlock as we grow</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">No Extra Cost</div>
                        <p className="text-blue-100">Growth fuels your access, not your wallet</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">Early Bird Bonus</div>
                        <p className="text-blue-100">Early holders gain the most slots</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">Flexibility</div>
                        <p className="text-blue-100">Start small or go big for max tracking slots</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'ai-personalities' section updated
    {
      id: 'ai-personalities',
      title: 'Pup Personalities',
      icon: <FaDog className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Train your Pup</h3>
                <div className="space-y-8">
                  {/* Training */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaGraduationCap className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Training Your Pup</h4>
                    </div>
                    <div className="space-y-4">
                      <p className="text-blue-100">
                        The /train command lets you customize your pup’s personality to deliver group analytics and notifications in your server’s unique style. The quality of your prompt shapes how effectively your pup communicates:
                      </p>
                      <div className="bg-blue-800/20 p-4 rounded-lg space-y-2">
                        <p className="text-blue-100">• Define how group stats should be presented</p>
                        <p className="text-blue-100">• Set detail levels for your token or notifcations</p>
                        <p className="text-blue-100">• Choose a tone that fits your community</p>
                        <p className="text-blue-100">• Provide examples for consistent delivery</p>
                      </div>
                      <p className="text-blue-100">
                        A detailed prompt ensures your pup aligns with your group’s vibe. Alternatively we have the default pup personality avaibable for instant use.
                      </p>
                    </div>
                  </div>
                  {/* Training Tips */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCog className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Crafting the Perfect Prompt</h4>
                    </div>
                    <div className="space-y-4">
                      <p className="text-blue-100">Optimize your pup with these tips:</p>
                      <div className="bg-blue-800/20 p-4 rounded-lg space-y-2">
                        <p className="text-blue-100">• Be specific about stats presentation</p>
                        <p className="text-blue-100">• Include sample outputs for clarity</p>
                        <p className="text-blue-100">• Address unique group scenarios</p>
                        <p className="text-blue-100">• Prioritize key metrics for your community</p>
                      </div>
                      <p className="text-blue-100">
                        Refine your prompt if results don’t match your vision specificity is key to perfect group insights.
                      </p>
                    </div>
                  </div>
                  {/* Future Development */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBone className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">AI Evolution & Cardano Integration</h4>
                    </div>
                    <p className="text-blue-100">
                      We're committed to continuous AI advancement, regularly updating our pups with better models. Additionally, we're looking at developing a specialized AI trained on the Cardano ecosystem to provide deeper, more nuanced insights for our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'doggie-bowl' section unchanged - community engagement fits perfectly
    {
      id: 'doggie-bowl',
      title: 'The Feeding Bowl',
      icon: <FaGift className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">The Feeding Bowl</h3>
                <div className="space-y-8">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaTrophy className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Bowl</h4>
                    </div>
                    <p className="text-blue-100 text-base mb-6">
                      The Feeding Bowl is our community prize pool with durations set by Walletpup admins. Each entry costs 5 ADA, with longer periods resulting in bigger prize pools. Verified wallet holders can participate for a chance to win. Each bowl has a growing prize pool, with 80% going to the winner, 10% to the treasury, and 10% used to buy and burn $BONE tokens.
                    </p>
                    <p className="text-blue-100 text-base">
                      The Feeding Bowl boosts server engagement while supporting token value through burns and funding community initiatives.
                    </p>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCog className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">How it Works</h4>
                    </div>
                    <div className="text-blue-100">
                      <p className="mb-4">Entry Rules:</p>
                      <p>• 5 ADA entry fee per verified wallet</p>
                      <p>• One entry per wallet per bowl</p>
                      <p>• Must have a verified wallet to participate</p>
                      <p className="mt-4">Prize Distribution:</p>
                      <p>• 80% of pool to winner</p>
                      <p>• 10% to treasury</p>
                      <p>• 10% to buy and burn $BONE tokens</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaStar className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Benefits</h4>
                    </div>
                    <p className="text-blue-100">
                      The Feeding Bowl fosters group participation, supports $BONE value, and funds server contests, future development, and rewards.
                    </p>
                  </div>
                  <div className="text-sm text-blue-300/70 mt-4">
                    <p>Note: Please play responsibly and only participate with what you can comfortably afford</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'pup-house' section unchanged - treasury supports all users
    {
      id: 'pup-house',
      title: 'Pup House Treasury',
      icon: <FaHome className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">The Pup House: Sustaining Our Ecosystem</h3>
                <div className="space-y-8">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaPiggyBank className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Treasury Overview</h4>
                    </div>
                    <p className="text-blue-100">
                      The Pup House treasury fuels WalletPup’s operations and community growth, reinvesting fees to enhance our multi platform analytics ecosystem.
                    </p>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Infrastructure & Development</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaDatabase className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Robust servers for real time group analytics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaDiscord className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Premium Discord hosting for server insights</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGlobe className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Expansion to Telegram and Twitter bots</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaUsers className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Engagement</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaTrophy className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Server contests with analytics based prizes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGift className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Rewards for active community members</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaHandshake className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Partnerships with Cardano projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Platform Growth</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaCheckCircle className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Multi platform bot deployments</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaBullhorn className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Marketing to Cardano communities</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaShieldAlt className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Enhanced group analytics features</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'growth' section unchanged - already fits multi-platform community focus
    {
      id: 'growth',
      title: 'Built for Growth',
      icon: <FaProjectDiagram className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Built for Growth</h3>
                <div className="space-y-8">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaUsers className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Driven Growth</h4>
                    </div>
                    <p className="text-blue-100">
                      By empowering Cardano projects and servers with analytics, WalletPup fosters organic growth. Starting on Discord and expanding to Telegram and Twitter, we unite communities with shared insights, amplified by events and contests.
                    </p>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBone className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Sustainable Token Model</h4>
                    </div>
                    <p className="text-blue-100">
                      Our dynamic $BONE system ensures fair access to group analytics across market conditions, supporting scalability while rewarding holders through burns and community incentives.
                    </p>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Scalable Infrastructure</h4>
                    </div>
                    <p className="text-blue-100">
                      Built to handle growing demand, our system scales processing power and optimizes performance with caching and rate limiting, supporting thousands of servers across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'network-capacity' section unchanged - supports all users
    {
      id: 'network-capacity',
      title: 'Network Capacity Analysis',
      icon: <FaChartPie className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaChartLine className="text-blue-400" /> Current Network Statistics (Feb 2025)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Daily Active Addresses</h4>
                    <p className="text-2xl font-bold text-white mt-1">50,000+</p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Daily Transactions</h4>
                    <p className="text-2xl font-bold text-white mt-1">80,000+</p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">New Wallets Daily</h4>
                    <p className="text-2xl font-bold text-white mt-1">~5,500</p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Total Addresses</h4>
                    <p className="text-2xl font-bold text-white mt-1">4.2M+</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaServer className="text-blue-400" /> WalletPup Capacity Analysis
                </h3>
                <div className="space-y-4 text-blue-100">
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Network Capacity</h4>
                    <p className="text-blue-100">
                      Our infrastructure supports Cardano’s growing ecosystem:
                    </p>
                    <div className="text-blue-200">
                      <p>• Handles 80,000+ daily transactions</p>
                      <p>• Queues group notifications efficiently</p>
                      <p>• Ensures high availability across platforms</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">User Growth</h4>
                    <p className="text-blue-100">
                      WalletPup scales with community demand:
                    </p>
                    <div className="text-blue-200">
                      <p>• Up to 25 slots per verified user</p>
                      <p>• Can support 250,000+ tracked wallets</p>
                      <p>• Matches current daily active addresses</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                    <p className="text-blue-100">
                      We maintain speed and reliability with:
                    </p>
                    <div className="text-blue-200">
                      <p>• Efficient blockchain data caching</p>
                      <p>• Optimized API calls for group analytics</p>
                      <p>• Smart rate limiting across platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'future' section unchanged - multi-platform vision fits all users
    {
      id: 'future',
      title: 'Future Development',
      icon: <FaRocket className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Future Development</h3>
                <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-800 rounded-xl p-3">
                      <FaBullseye className="text-blue-300 text-2xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">Vision & Future Projects</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    WalletPup starts as a Discord analytics bot but is evolving into a multi platform suite for Cardano communities. Our vision is to deliver group focused insights across Discord, Telegram, and Twitter, with more platforms to follow.
                  </p>
                  <p className="text-blue-100 mt-4">
                    Two projects are in development: a Telegram bot for personal notifications and a Twitter bot for public stats with a twist. These will enhance community engagement with seamless, pup driven analytics.
                  </p>
                  <p className="text-blue-100">
                    Each expansion ties to $BONE, increasing utility and rewarding holders as we grow into Cardano’s analytics backbone.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaBullhorn className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Marketing & Community Growth</h4>
                    </div>
                    <p className="text-blue-100">
                      Multi platform tools amplify project visibility and drive WalletPup adoption, creating a cycle where community growth fuels further expansion.
                    </p>
                  </div>
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaProjectDiagram className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Project Collaborations</h4>
                    </div>
                    <p className="text-blue-100">
                      Partnerships with Cardano projects will integrate group analytics, enhancing community engagement and strengthening our ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'launch-platform' section updated
    {
      id: 'launch-platform',
      title: 'Launch Platform',
      icon: <FaDragon className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Launch Platform</h3>
                <div className="space-y-8">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCoins className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Launching on Snek.fun</h4>
                    </div>
                    <p className="text-blue-100 text-base mb-6">
                      WalletPup has chosen Snek.fun as our launch platform, renowned in the Cardano ecosystem for their commitment to fair token distributions and community driven approach.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-800/20 p-5 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaShieldAlt className="text-blue-300 w-5 h-5" />
                          <h5 className="text-white font-medium">Security First</h5>
                        </div>
                        <p className="text-blue-100">
                          Battle tested platform with a proven track record of secure and successful token launches
                        </p>
                      </div>
                      
                      <div className="bg-blue-800/20 p-5 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaLock className="text-blue-300 w-5 h-5" />
                          <h5 className="text-white font-medium">Fair Distribution</h5>
                        </div>
                        <p className="text-blue-100">
                          Transparent mechanics ensure equal opportunity for all community members
                        </p>
                      </div>
                    </div>

                    <p className="text-blue-100 text-base">
                      Through Snek.fun's established infrastructure, we're ensuring $BONE's launch aligns with our vision of building a sustainable, community driven analytics ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    // 'track-command' section updated
    {
      id: 'project-tools',
      title: 'Project Tools',
      icon: <FaTools className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Empowering Project Success</h3>
                
                <div className="space-y-6">
                  {/* Token Tracking */}
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaChartLine className="text-blue-300 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Token Purchase Tracking</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-blue-100">
                        Set up automated token tracking with the /track command. Your trained AI pup will post and comment on all token purchases above your specified threshold, keeping your community engaged with:
                      </p>
                      <ul className="list-disc list-inside text-blue-100 space-y-2 ml-4">
                        <li>Personalized AI commentary on purchases</li>
                        <li>Customizable threshold notifications</li>
                        <li>Real time market activity updates</li>
                        <li>Current holder count and market metrics</li>
                      </ul>
                    </div>
                  </div>

                  {/* Token Leaderboard */}
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaTrophy className="text-blue-300 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Community Leaderboard</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-blue-100">
                        Showcase your top community members holding your token with the /leaderboard command.
                      </p>
                      <ul className="list-disc list-inside text-blue-100 space-y-2 ml-4">
                        <li>Displays top 20 verified token holders</li>
                        <li>View what your members are holding</li>
                        <li>Helps track community engagement</li>
                      </ul>
                    </div>
                  </div>

                  {/* Daily Sentiment Analysis */}
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaSmile className="text-blue-300 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Daily Sentiment Analysis</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-blue-100">
                        Get comprehensive daily reports on your server's activity with the /sentiment command. Your trained pup delivers personalized insights including:
                      </p>
                      <ul className="list-disc list-inside text-blue-100 space-y-2 ml-4">
                        <li>Top 3 most active members</li>
                        <li>Total messages and engagement metrics</li>
                        <li>Top active communities and how you rank</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      icon: <FaCompass className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Looking Forward</h3>
                <div className="space-y-6">
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-blue-100">
                      WalletPup, Your Cardano Watchdog, brings real time notifications and analytics to Cardano’s ecosystem for projects, solo users, and communities alike. Starting on Discord, we’re expanding to Telegram and Twitter, uniting the pack with pup driven insights.
                    </p>
                    <p className="text-blue-100 mt-4">
                      We’re here to empower everyone project owners tracking token moves, users watching their wallets, and servers buzzing with shared stats. Built with feedback, WalletPup grows with Cardano, keeping it fun and functional.
                    </p>
                    <p className="text-blue-100 mt-4">
                      Thanks for joining the pack whether for updates, insights, or $BONE’s potential. This is just the beginning of our watchdog journey.
                    </p>
                  </div>
                  <div className="text-sm text-blue-300 mt-4 border-t border-blue-700/20 pt-4">
                    <p>Note: Features, timelines, and details may evolve based on community feedback and Cardano’s growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="bg-blue-900/40 backdrop-sm rounded-xl shadow-2xl border border-blue-700/30">
          <div className="bg-[#1e3a8a]/50 rounded-t-xl text-center py-16 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              WalletPup Whitepaper
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Your Cardano Watchdog
            </p>
            <p className="text-sm text-blue-200">
              Version 1.1 • March 2025
            </p>
          </div>
          <div className="px-8 py-16">
            <div className="max-w-4xl mx-auto space-y-16">
              {sections.map((section, index) => (
                <AnimatedElement
                  key={section.id}
                  animation="fadeIn"
                  delay={0.2 + index * 0.1}
                >
                  <div 
                    id={section.id}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-center space-x-3 mb-8 border-b border-blue-700 pb-4">
                      <span className="text-blue-400 text-2xl">
                        {section.icon}
                      </span>
                      <h2 className="text-3xl font-bold text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="prose prose-invert prose-blue max-w-none prose-p:text-blue-100 prose-headings:text-white prose-strong:text-white">
                      {section.content}
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
          <div className="border-t border-blue-700 py-8 text-center rounded-b-xl">
            <p className="text-blue-200 text-sm">
              &copy; 2025 WalletPup | All rights reserved
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showScrollButton && (
          <div className="fixed bottom-32 right-8 space-y-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="block bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp className="text-xl" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToBottom}
              className="block bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              whileHover={{ y: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowDown className="text-xl" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Whitepaper;