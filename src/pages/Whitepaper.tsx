// Whitepaper page - Updated 21 Jan 2025
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
  FaBinoculars,
  FaImage
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
                              WalletPup is an advanced Discord bot that revolutionizes how users interact with their blockchain wallets. With over 20 commands, we create a seamless bridge between Discord accounts and wallet addresses in an engaging and user friendly way.
                            </p>
                            <p className="text-blue-100 mt-4">
                              Our mission is to build a global identity and wallet system that projects can leverage to better connect with their communities. Whether you're a project treasury looking to engage with users or a community member wanting to track wallets, WalletPup provides the tools you need. We transform complex blockchain data into clear, easy to understand insights delivered in real time through AI powered pup personalities that you can train yourself.
                            </p>
                            <p className="text-blue-100 mt-4">
                              While Discord integration is our first stepping stone, WalletPup is designed to expand beyond chat platforms. Our community driven approach focuses on creating valuable connections between projects and their users, enabling wallet owners to safely share their activities with followers through private DMs.
                            </p>
                            <p className="text-blue-100 mt-4">
                              The $BONE token is central to our ecosystem, rewarding long term holders while providing access to platform features. Instead of traditional subscriptions, users hold BONE to unlock tracking capabilities, ensuring they maintain ownership of their tokens while benefiting from the platform's growth.
                            </p>
                            <p className="text-blue-100 mt-4">
                              With near instant notifications, customizable tracking, fun AI insights, and a sustainable token model, WalletPup brings innovation to the blockchain ecosystem. Our goal is to make wallet tracking not just functional, but truly engaging while building a global standard for wallet identity and community interaction.
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
                <h3 className="text-xl font-semibold text-white mb-6">Where it started</h3>
                
                <div className="space-y-8">
                  {/* The Original */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaHistory className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Original</h4>
                    </div>
                    <p className="text-blue-100">
                      Walletbud was the pioneer of wallet tracking on Cardano, introducing the concept of Discord based wallet monitoring. While revolutionary at the time, it faced significant challenges with sustainability and reliability that ultimately affected its service quality and longevity.
                    </p>
                  </div>

                  {/* The Successor */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBolt className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Successor</h4>
                    </div>
                    <p className="text-blue-100">
                      Following Walletbud's challenges, RushLabs emerged with their groundbreaking project ZING, setting new standards in the Cardano ecosystem. Their incredibly talented team has built an impressive suite of tools focused on high speed trading capabilities, including instant trading to new pools all available for free to the community. While ZING excels in their focused approach to trading and speed critical operations, we recognized an opportunity to explore a different direction that would serve other needs in the ecosystem.
                    </p>
                  </div>

                  {/* The Evolution */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRocket className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Adaptation</h4>
                    </div>
                    <p className="text-blue-100">
                      While others focus on trading speed, WalletPup takes a different path centered on community insights and marketing opportunities. We're building a global identity system where wallet owners can safely share their activities with followers through private DMs, creating valuable connections between projects and their communities. Starting with Discord, users can train their own AI pup personalities to deliver notifications in their preferred style. Project owners can verify their wallets and let their community follow their on chain activity, opening new channels for engagement and insights. While Discord integration is just our first step, we have exciting plans to expand this community focused ecosystem far beyond chat platforms.
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
                      Our webhook system connects directly to the Cardano blockchain, receiving detailed information about transactions for all wallets in our database. This ensures real time monitoring of your tracked addresses.
                    </p>
                  </div>

                  {/* Data Processing */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaDatabase className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">2. Data Processing</h4>
                    </div>
                    <p className="text-blue-100">
                      When a transaction occurs, we collect all asset details and their metadata. This raw blockchain data is then transformed into human readable format, making it easy to understand what assets were transferred and their values.
                    </p>
                  </div>
                  {/* Notification Delivery */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBell className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">3. Creative Response</h4>
                    </div>
                    <p className="text-blue-100">
                      The readable transaction data is fed to our pup personalities, each trained with unique characteristics and communication styles. They analyze the data and generate creative, personality driven responses that make tracking your wallet both informative and entertaining.
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
                        <code className="text-blue-300 font-bold">/add</code>
                        <p className="text-blue-100 mt-1">Track new wallets (up to 25 total)</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/verify</code>
                        <p className="text-blue-100 mt-1">Verify ownership of wallet</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/list</code>
                        <p className="text-blue-100 mt-1">View your wallets with detailed stats</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/train</code>
                        <p className="text-blue-100 mt-1">Customize your pup personality</p>
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
                        <code className="text-blue-300 font-bold">/search</code>
                        <p className="text-blue-100 mt-1">Find wallets by username or address</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/rank</code>
                        <p className="text-blue-100 mt-1">Check your transaction based ranking</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/topwatched</code>
                        <p className="text-blue-100 mt-1">View most tracked wallets</p>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <code className="text-blue-300 font-bold">/announce</code>
                        <p className="text-blue-100 mt-1">Send a message to your watchers</p>
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
                          <FaPaw className="text-blue-300" />
                          <p className="text-blue-100">Track up to 25 wallets at once</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaBell className="text-blue-300" />
                          <p className="text-blue-100">Near instant notifications</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaChartLine className="text-blue-300" />
                          <p className="text-blue-100">Detailed wallet analytics</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaGift className="text-blue-300" />
                          <p className="text-blue-100">Regular community rewards</p>
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
                          <p className="text-blue-100">Secure verification system</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-blue-300" />
                          <p className="text-blue-100">Private Discord notifications</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaBone className="text-blue-300" />
                          <p className="text-blue-100">$BONE token access control</p>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-800/50 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <FaEye className="text-blue-300" />
                          <p className="text-blue-100">Optional public discovery</p>
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
                      {/* Public Distribution */}
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

                      {/* Development & Community Events */}
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
                      {/* Core Benefits */}
                      <div>
                        <p className="text-blue-100 mb-4">
                          $BONE tokens provide access to WalletPup services while remaining a tradeable asset. Unlike traditional subscriptions where you pay and lose value, your $BONE tokens maintain their worth and can be sold at any time.
                        </p>
                      </div>

                      {/* Smart Token Economics */}
                      <div className="bg-blue-920/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaChartLine className="text-blue-300" />
                          Smart Token Economics
                        </h5>
                        <div className="text-blue-200">
                          <p>• Entry cost at ~50 ADA worth of $BONE</p>
                          <p>• As market cap grows, required token amount decreases, maintaining the same ADA value</p>
                          <p>• Early adopters can sell excess tokens while maintaining service access</p>
                          <p>• Get all 25 slots immediately or grow your slots over time</p>
                        </div>
                      </div>

                      {/* User Benefits */}
                      <div className="bg-blue-920/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaHandshake className="text-blue-300" />
                          User Benefits
                        </h5>
                        <div className="text-blue-200">
                          <p>• Tokens remain in your wallet, sell them back at any time</p>
                          <p>• Early adopters benefit from token value appreciation</p>
                          <p>• Sustainable model that rewards long term holders</p>
                          <p>• Flexible entry: start small or go big for maximum slots</p>
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
                  The more successful WalletPup becomes, the more wallets you can track without buying more BONE! 
                  Start with a few slots and watch them multiply as our market cap grows. You can track up to 25 wallets maximum.
                </p>

                <div className="space-y-6">
                  {/* Simple Explanation */}
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <div className="flex items-center gap-2">
                        <FaBullseye className="text-blue-300" />
                        <span>How It Works - Simple Version</span>
                      </div>
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">
                          1. Buy BONE tokens to unlock wallet tracking slots
                        </p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">
                          2. As WalletPup grows, the amount of BONE needed for slots gets smaller
                        </p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">
                          3. When this happens, you automatically get more slots if you're holding enough BONE
                        </p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <p className="text-blue-100">
                          4. The longer you hold, the more slots you can get up to 25 maximum!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Real Example */}
                  <div className="bg-blue-800/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      <div className="flex items-center gap-2">
                        <FaLightbulb className="text-blue-300" />
                        <span>Real Example: The Power of Holding</span>
                      </div>
                    </h4>
                    <p className="text-blue-100 mb-4">
                      Let's say you buy 200K BONE today. Here's how your wallet slots grow automatically as we grow:
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300">
                            <FaRocket />
                          </div>
                          <div>
                            <div className="font-bold text-white">Day 1: Project Launch</div>
                            <div>You get 5 slots (200K BONE needed for 5 slots)</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300">
                            <FaChartLine />
                          </div>
                          <div>
                            <div className="font-bold text-white">Later: Project Grows</div>
                            <div>Now only 100K BONE needed for 5 slots</div>
                            <div className="text-blue-300">Your 200K BONE now gets you 10 slots!</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300">
                            <FaChartBar />
                          </div>
                          <div>
                            <div className="font-bold text-white">Project Grows More</div>
                            <div>Now only 50K BONE needed for 5 slots</div>
                            <div className="text-blue-300">Your 200K BONE now gets you 20 slots!</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-blue-300">
                            <FaStar />
                          </div>
                          <div>
                            <div className="font-bold text-white">Project Thrives</div>
                            <div>Now only 25K BONE needed for 5 slots</div>
                            <div className="text-blue-300">Your 200K BONE gets you max 25 slots!</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Key Benefits */}
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
                        <p className="text-blue-100">Just keep holding your BONE and get more slots automatically as we grow</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">No Extra Cost</div>
                        <p className="text-blue-100">Get more slots without buying more BONE - project growth does the work</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">Early Bird Bonus</div>
                        <p className="text-blue-100">Buy early, hold, and watch your access level multiply over time</p>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="font-bold text-white mb-2">Flexibility</div>
                        <p className="text-blue-100">Start small and grow your access, or go big right away for maximum slots</p>
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
                <h3 className="text-xl font-semibold text-white mb-6">Meet Our Loyal Pups</h3>
                
                <div className="space-y-8">
                  {/* Training */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaGraduationCap className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Training Your Pup</h4>
                    </div>
                    <div className="space-y-4">
                      <p className="text-blue-100">
                        The /train command lets you customize your pup's personality through a clear, detailed prompt. The quality and specificity of your prompt directly determines how well your pup will communicate and process information:
                      </p>
                      <div className="bg-blue-800/20 p-4 rounded-lg space-y-2">
                        <p className="text-blue-100">• Specify exactly how you want transactions to be described</p>
                        <p className="text-blue-100">• Define the level of detail for different transaction types</p>
                        <p className="text-blue-100">• Set the tone and style of communication</p>
                        <p className="text-blue-100">• Include examples of ideal responses for clarity</p>
                      </div>
                      <p className="text-blue-100">
                        Your pup's effectiveness depends entirely on the quality of your training prompt. Take time to craft a clear, detailed prompt that covers all aspects of how you want your pup to communicate. For those who prefer a ready to use solution, we offer 50 preset personalities to choose from.
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
                      <p className="text-blue-100">Master these strategies to create an effective training prompt:</p>
                      <div className="bg-blue-800/20 p-4 rounded-lg space-y-2">
                        <p className="text-blue-100">• Be explicit - detail exactly how you want information presented</p>
                        <p className="text-blue-100">• Include examples - show your pup the ideal format for different scenarios</p>
                        <p className="text-blue-100">• Cover edge cases - specify how to handle unusual transactions</p>
                        <p className="text-blue-100">• Define priorities - what information should be emphasized vs summarized</p>
                      </div>
                      <p className="text-blue-100">
                        Remember: The effectiveness of your pup comes down to the quality of your prompt. A well crafted prompt will consistently deliver the exact notification style you want. If you're not satisfied with the results, refine your prompt with more specific instructions and examples.
                      </p>
                    </div>
                  </div>

                  {/* Future Development */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBone className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Growing the Pack</h4>
                    </div>
                    <p className="text-blue-100">
                      We're constantly expanding our pack with new pup personalities and enhancing existing ones. The most creative and engaging personalities from our community will be considered for integration into WalletPup, with rewards for contributors. Regular updates will bring fresh personalities, new features, and improvements based on community feedback to keep your wallet monitoring experience exciting and engaging.
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
                  {/* What is it */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaTrophy className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Bowl</h4>
                    </div>
                    <p className="text-blue-100 text-base mb-6">
                      The Feeding Bowl is our community prize pool with durations set by project owners. Each entry costs 5 ADA, with longer periods resulting in bigger prize pools. Verified wallet holders can participate for a chance to win. Each bowl has a growing prize pool, with 75% going to the winner, 15% to the treasury, and 10% used to buy and burn BONE tokens.
                    </p>
                    <p className="text-blue-100 text-base">
                      The Feeding Bowl creates an engaging way for our community to interact while supporting token value through regular BONE burns and growing our treasury for future development.
                    </p>
                  </div>

                  {/* How it Works */}
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
                      <p>• 75% of pool to winner</p>
                      <p>• 15% to treasury</p>
                      <p>• 10% to buy and burn BONE tokens</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaStar className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Benefits</h4>
                    </div>
                    <p className="text-blue-100">
                      The Feeding Bowl creates an engaging way for our community to interact while supporting both token value through burns and funding exciting skill based contests for those who prefer to showcase their talents.
                    </p>
                  </div>

                  {/* Disclaimer */}
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
                  {/* Overview */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaPiggyBank className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Treasury Overview</h4>
                    </div>
                    <p className="text-blue-100">
                      The Pup House treasury is the backbone of WalletPup's ecosystem, ensuring sustainable operations and continuous community engagement. Project fees are strategically reinvested to maintain and enhance every aspect of our service.
                    </p>
                  </div>

                  {/* Infrastructure & Development */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Infrastructure & Development</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaDatabase className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Maintaining robust database infrastructure for reliable wallet tracking</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaDiscord className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Premium Discord server hosting for optimal performance</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGlobe className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Website hosting and continuous development</p>
                      </div>
                    </div>
                  </div>

                  {/* Community Engagement */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaUsers className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Engagement</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaTrophy className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Regular contests and community events with attractive prizes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGift className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Community giveaways to reward active members</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaHandshake className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Strategic collaborations with other Cardano projects</p>
                      </div>
                    </div>
                  </div>

                  {/* Platform Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Platform Growth</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaCheckCircle className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Platform verifications and official listings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaBullhorn className="text-blue-300 mt-1" />
                        <p className="text-blue-100">Marketing initiatives to expand our community</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaShieldAlt className="text-blue-300 mt-1" />
                        <p className="text-blue-100">General system improvements</p>
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
                  {/* Community Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaUsers className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community Driven Growth</h4>
                    </div>
                    <p className="text-blue-100">
                      By supporting other Cardano projects, we naturally grow our own community. WalletPup aims to unite Discord and Cardano communities through shared wallet tracking and engagement features, creating a network effect that benefits everyone. Regular events, contests, and feeding bowls keep our community engaged and growing.
                    </p>
                  </div>

                  {/* Token Economics */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBone className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Sustainable Token Model</h4>
                    </div>
                    <p className="text-blue-100">
                      Our dynamic requirement adjustment system ensures all users pay the same entry price regardless of market conditions. This sustainable approach allows us to accommodate a large user base while maintaining fair access to features. Through the Feeding Bowl's prize pool allocation, we maintain a continuous cycle of engagement, token burns, and community rewards.
                    </p>
                  </div>

                  {/* Scalable Infrastructure */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Scalable Infrastructure</h4>
                    </div>
                    <p className="text-blue-100">
                      Our infrastructure is built to grow with demand. If the bot experiences high load from user growth, our system can automatically scale up processing power and speed to maintain optimal performance. Through efficient caching and smart rate limiting, we maintain high performance even as we scale to thousands of users tracking multiple wallets.
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
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Daily Transactions</h4>
                    <p className="text-2xl font-bold text-white mt-1">80,000+</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">New Wallets Daily</h4>
                    <p className="text-2xl font-bold text-white mt-1">~ 5,500</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Total Addresses</h4>
                    <p className="text-2xl font-bold text-white mt-1">4.2M+</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                </div>
              </div>

              {/* WalletPup Capacity Analysis */}
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaServer className="text-blue-400" /> WalletPup Capacity Analysis
                </h3>
                <div className="space-y-4 text-blue-100">
                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Network Capacity</h4>
                    <p className="text-blue-100">
                      Our infrastructure is designed to handle the growing Cardano ecosystem:
                    </p>
                    <div className="text-blue-200">
                      <p>• Currently supporting 80,000+ daily transactions</p>
                      <p>• Smart queuing system for Discord notifications</p>
                      <p>• Load balanced for high availability</p>
                    </div>
                  </div>

                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">User Growth</h4>
                    <p className="text-blue-100">
                      We've built WalletPup to scale with the community:
                    </p>
                    <div className="text-blue-200">
                      <p>• Each user can track up to 25 wallets</p>
                      <p>• System can handle 250,000+ primary wallets</p>
                      <p>• Supports current daily active addresses</p>
                    </div>
                  </div>

                  <div className="bg-blue-800/30 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                    <p className="text-blue-100">
                      We maintain high performance through:
                    </p>
                    <div className="text-blue-200">
                      <p>• Efficient blockchain data caching</p>
                      <p>• Optimized API calls</p>
                      <p>• Smart rate limiting</p>
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
                
                {/* Vision & Future Projects */}
                <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-800 rounded-xl p-3">
                      <FaBullseye className="text-blue-300 text-2xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">Vision & Future Projects</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    While our Discord bot is where we're starting, it's just one piece of a larger vision. We're developing WalletPup to be a suite of interconnected tools that help Cardano users track wallets, organize addresses, and evaluate projects in ways that haven't been done before.
                  </p>
                  <p className="text-blue-100 mt-4">
                    We're excited to share that two additional projects are already under active development and will be launching in the coming months. These tools will introduce new ways to interact with Cardano data, making it more accessible and actionable for everyone. While we can't reveal all the details yet, we can say that they'll focus on helping users organize their Cardano journey and make more informed decisions about projects.
                  </p>
                  <p className="text-blue-100">
                    Each project will tie back to $BONE, creating additional utility and value for our token holders. The development is progressing well, and we're ensuring each tool integrates seamlessly with our ecosystem while maintaining the high standards our community expects.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Marketing & Community Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaBullhorn className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Marketing & Community Growth</h4>
                    </div>
                    <p className="text-blue-100">
                      Our upcoming tools create unique marketing opportunities that benefit both WalletPup and the wider Cardano ecosystem. Projects using our services will gain visibility through our platform, while their engagement helps showcase the practical utility of our tools. This creates a natural growth cycle where increased project participation drives user adoption, and vice versa.
                    </p>
                  </div>

                  {/* Project Collaborations */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-800 rounded-xl p-3">
                        <FaProjectDiagram className="text-blue-300 text-2xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">Project Collaborations</h4>
                    </div>
                    <p className="text-blue-100">
                      We're exploring partnerships with Cardano projects to create mutually beneficial integrations. Projects will be able to leverage our tools to enhance their community engagement, while their participation strengthens our ecosystem. These collaborations will focus on creating practical utility that serves both the projects and their communities.
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
                  {/* Overview */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRocket className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Launching on Snek.fun</h4>
                    </div>
                    <p className="text-blue-100 text-base mb-6">
                      We chose to launch WalletPup on Snek.fun, a trusted Cardano launchpad that has earned its reputation through successful, fair, and transparent token launches. This platform's commitment to preventing manipulation and ensuring fair distribution aligns perfectly with our community first approach.
                    </p>
                    <div className="space-y-4 text-blue-200 mb-6">
                      <div className="flex items-center gap-2">
                        <FaShieldAlt className="text-blue-300" />
                        <h4 className="text-lg font-semibold text-white">Why Snek.fun?</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <FaCheckCircle className="text-blue-300" />
                          <p>Proven track record of successful launches</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaHandshake className="text-blue-300" />
                          <p>Fair distribution mechanisms</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaEye className="text-blue-300" />
                          <p>Transparent launch process</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaUsers className="text-blue-300" />
                          <p>Established community presence</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 text-base">
                      By launching through Snek.fun, we ensure that our token distribution starts on the right foundation fair, transparent, and accessible to genuine community members. This aligns with our longterm vision of building a sustainable and engaged community around WalletPup.
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
      id: 'track-command',
      title: 'Project Tracking',
      icon: <FaBinoculars className="w-6 h-6" />,
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
                <h3 className="text-xl font-semibold text-white mb-6">Free Project Tracking</h3>
                
                <div className="space-y-8">
                  {/* Overview */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBinoculars className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Track Your Project</h4>
                    </div>
                    <p className="text-blue-100">
                      Project owners can monitor their token's activity directly in their Discord server - completely free, no BONE tokens required! Simply invite WalletPup to your server, set up admin-only permissions, and start receiving real time purchase notifications in your chosen channel.
                    </p>
                  </div>

                  {/* Setup Process */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <FaCog className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-xl font-semibold text-white">Setup Process</h4>
                    </div>
                    <div className="grid gap-6">
                      {/* Server & Channel Setup */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-800/50 p-4 rounded-lg border border-blue-700/50 hover:border-blue-00 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <FaShieldAlt className="text-blue-300" />
                            <p className="font-semibold text-white">1. Server Setup</p>
                          </div>
                          <p className="text-blue-100">Invite WalletPup and ensure only administrators have access to tracking commands for security.</p>
                        </div>
                        <div className="bg-blue-800/50 p-4 rounded-lg border border-blue-700/50 hover:border-blue-00 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <FaBullhorn className="text-blue-300" />
                            <p className="font-semibold text-white">2. Channel Selection</p>
                          </div>
                          <p className="text-blue-100">Use /track in your chosen notification channel to begin setup.</p>
                        </div>
                      </div>

                      {/* Token Configuration */}
                      <div className="bg-blue-800/50 p-5 rounded-lg border border-blue-700/50 hover:border-blue-00 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <FaCoins className="text-blue-300" />
                          <p className="font-semibold text-white">3. Token Details</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-blue-900/30 p-3 rounded-lg">
                            <p className="text-white font-medium mb-1">Policy ID</p>
                            <p className="text-blue-200 text-sm">Enter your token's unique policy ID</p>
                          </div>
                          <div className="bg-blue-900/30 p-3 rounded-lg">
                            <p className="text-white font-medium mb-1">Token Name</p>
                            <p className="text-blue-200 text-sm">Provide your token's name</p>
                          </div>
                          <div className="bg-blue-900/30 p-3 rounded-lg">
                            <p className="text-white font-medium mb-1">Purchase Threshold</p>
                            <p className="text-blue-200 text-sm">Minimum: 100 ADA</p>
                          </div>
                        </div>
                      </div>

                      {/* Image URL Guide */}
                      <div className="bg-blue-800/50 p-5 rounded-lg border border-blue-700/50 hover:border-blue-00 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <FaImage className="text-blue-300" />
                          <p className="font-semibold text-white">4. Image URL Setup (Optional)</p>
                        </div>
                        <div className="space-y-3">
                          <p className="text-blue-100">Add custom images or GIFs to your notifications:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-900/30 p-3 rounded-lg">
                              <p className="text-white font-medium mb-2">✓ Compatible Sources</p>
                              <ul className="text-blue-200 text-sm space-y-1">
                                <li>• Discord CDN links</li>
                                <li>• NFT preview URLs</li>
                                <li>• Direct image/GIF links</li>
                              </ul>
                            </div>
                            <div className="bg-blue-900/30 p-3 rounded-lg">
                              <p className="text-white font-medium mb-2"> Before Using</p>
                              <ul className="text-blue-200 text-sm space-y-1">
                                <li>• Test URL in Discord first</li>
                                <li>• Ensure it embeds properly</li>
                                <li>• Link should not be visible</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Notification Preview */}
                      <div className="bg-blue-800/50 p-5 rounded-lg border border-blue-700/50 hover:border-blue-000 transition-all duration-00">
                        <div className="flex items-center gap-2 mb-3">
                          <FaBell className="text-blue-300" />
                          <p className="font-semibold text-white">5. Notifications</p>
                        </div>
                        <div className="bg-blue-900/30 p-4 rounded-lg">
                          <p className="text-blue-100">You'll receive real time purchase notifications including:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="text-blue-300" />
                              <p className="text-blue-200">Verified wallet names</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="text-blue-300" />
                              <p className="text-blue-200">Purchase amounts</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="text-blue-300" />
                              <p className="text-blue-200">Transaction details</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="text-blue-300" />
                              <p className="text-blue-200">Custom images/GIFs</p>
                            </div>
                          </div>
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
                    WalletPup was created to fill a gap in the Cardano ecosystem offering a clearer, more intuitive way to track wallets while keeping things engaging and accessible. We’ve built a system that not only provides real time insights but also adapts and grows with its users.                    </p>
                    <p className="text-blue-100 mt-4">
                    As the project evolves, our focus remains the same: delivering a reliable and rewarding tracking experience while listening to the community and improving based on real world feedback. Blockchain technology is always changing, and WalletPup is designed to change with it.
                   </p>
                   We appreciate everyone who joins us on this journey. Whether you’re here for better tracking, the community, or the long term potential of $BONE, WalletPup is built to support you.

                  This is just the beginning, and we’re excited for what’s ahead.
                  </div>

                  <div className="text-sm text-blue-300 mt-4 border-t border-blue-700/20 pt-4">
                    <p>Note: The information presented in this whitepaper is subject to change based on market conditions, technical requirements, and community feedback. This document serves as a roadmap and vision for WalletPup, but specific features, timelines, and implementations may be modified as the project evolves.
                    </p>
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
        <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl shadow-2xl border border-blue-700/30">
          {/* Cover */}
          <div className="bg-[#1e3a8a]/50 rounded-t-xl text-center py-16 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              WalletPup Whitepaper
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              A Comprehensive Guide to the WalletPup Ecosystem
            </p>
            <p className="text-sm text-blue-200">
              Version 1.0 • January 2025
            </p>
          </div>

          {/* Content */}
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

          {/* Footer */}
          <div className="border-t border-blue-700 py-8 text-center rounded-b-xl">
            <p className="text-blue-200 text-sm">
              &copy; 2025 WalletPup | All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Buttons */}
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
