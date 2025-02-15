// Whitepaper page - Updated 21 Jan 2025
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../components/AnimatedElement';
import FloatingBones from '../components/FloatingBones';
import { 
  FaBolt,
  FaDatabase,
  FaRoad,
  FaCogs,
  FaShieldAlt,
  FaServer,
  FaRobot,
  FaChartPie,
  FaEye,
  FaCoins,
  FaNetworkWired,
  FaPalette,
  FaLightbulb,
  FaHistory,
  FaRocket,
  FaChartBar,
  FaDog,
  FaPaw,
  FaBone,
  FaGift,
  FaCubes,
  FaArrowUp,
  FaBell,
  FaEnvelope,
  FaTrophy,
  FaProjectDiagram,
  FaChartLine,
  FaHandshake,
  FaFeather,
  FaCog,
  FaAddressBook,
  FaUsers,
  FaLock,
  FaSearch,
  FaStar
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

  const sections = [
    {
      id: 'introduction',
      title: (
        <div className="flex items-center gap-2">
          <span>Welcome to WalletPup</span>
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
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <div className="flex items-center gap-3 mb-4">
                  <FaPaw className="w-8 h-8 text-blue-300" />
                  <h3 className="text-xl font-semibold text-white">Welcome to WalletPup</h3>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                    We're bringing a friendly, fun approach to Cardano wallet monitoring. WalletPup connects your Discord account to your wallets, delivering transaction updates with personality. Our pups transform blockchain data into entertaining notifications, making it enjoyable to stay updated on your wallet activity.
                  </p>
                  
                  <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                    Track up to 20 wallets and receive Discord notifications about your ADA, tokens, and NFTs. Each transaction comes with playful commentary from our pups, adding a touch of fun to your blockchain experience. Plus, you can easily find friends' wallets through their Discord usernames, making wallet discovery simple and social.
                  </p>

                  <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                    Using $BONE tokens, we've created a fair access system that benefits everyone. Instead of traditional subscriptions, you simply hold tokens in your wallet and you're free to trade them whenever you want. This approach helps maintain both service quality and token value, while keeping things simple for our users.
                  </p>
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
            {/* Command Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Commands */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-600 transform hover:scale-[1.01] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-700 rounded-xl p-3 shadow-lg">
                    <FaRobot className="text-blue-200 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Core Commands</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/add</code>
                    <p className="text-blue-100 mt-1">Track new wallets (up to 20 total)</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/verifywallet</code>
                    <p className="text-blue-100 mt-1">Verify ownership & customize wallet names</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/list</code>
                    <p className="text-blue-100 mt-1">View your wallets with detailed stats</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/remove</code>
                    <p className="text-blue-100 mt-1">Stop tracking specific wallets</p>
                  </div>
                </div>
              </div>

              {/* Community Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-600 transform hover:scale-[1.01] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-700 rounded-xl p-3 shadow-lg">
                    <FaSearch className="text-blue-200 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Community Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/search</code>
                    <p className="text-blue-100 mt-1">Find wallets by username or address</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/rank</code>
                    <p className="text-blue-100 mt-1">Check your transaction based ranking</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/stats</code>
                    <p className="text-blue-100 mt-1">View global community statistics</p>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <code className="text-blue-300 font-bold">/bowl</code>
                    <p className="text-blue-100 mt-1">Fill the feeding bowl</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-600 transform hover:scale-[1.01] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-700 rounded-xl p-3 shadow-lg">
                    <FaChartPie className="text-blue-200 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaPaw className="text-blue-300" />
                      <p className="text-blue-100">Track up to 20 wallets at once</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaBell className="text-blue-300" />
                      <p className="text-blue-100">Instant transaction notifications</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaChartLine className="text-blue-300" />
                      <p className="text-blue-100">Detailed wallet analytics</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaGift className="text-blue-300" />
                      <p className="text-blue-100">Regular community rewards</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Privacy */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-600 transform hover:scale-[1.01] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-700 rounded-xl p-3 shadow-lg">
                    <FaShieldAlt className="text-blue-200 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Security & Privacy</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaLock className="text-blue-300" />
                      <p className="text-blue-100">Secure verification system</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-blue-300" />
                      <p className="text-blue-100">Private Discord notifications</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaBone className="text-blue-300" />
                      <p className="text-blue-100">$BONE token access control</p>
                    </div>
                  </div>
                  <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600/50 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <FaEye className="text-blue-300" />
                      <p className="text-blue-100">Optional public discovery</p>
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

                  {/* Pup Commentary */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRobot className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">3. Personality Engine</h4>
                    </div>
                    <p className="text-blue-100">
                      Our unique personality engine assigns different pup personalities to your wallets. Each pup has its own traits and communication style, making your wallet updates more engaging and fun to read.
                    </p>
                  </div>

                  {/* Notification Delivery */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBell className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">4. Discord Integration</h4>
                    </div>
                    <p className="text-blue-100">
                      Processed data is sent to our Discord bot, which delivers your wallet updates with personality. You can customize notification settings and manage multiple wallets through simple Discord commands.
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
                      <div className="bg-blue-800/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaChartBar className="text-blue-300" />
                          Smart Token Economics
                        </h5>
                        <div className="text-blue-200">
                          <p>Entry cost fixed at ~50 ADA worth of $BONE (2.5 ADA per wallet)</p>
                          <p>As market cap grows, required token amount decreases, maintaining the same ADA value</p>
                          <p>Early adopters can sell excess tokens while maintaining service access</p>
                        </div>
                      </div>

                      {/* User Benefits */}
                      <div className="bg-blue-800/50 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaHandshake className="text-blue-300" />
                          User Benefits
                        </h5>
                        <div className="text-blue-200">
                          <p>Tokens remain in your wallet, sell them back at any time</p>
                          <p>Early adopters benefit from token value appreciation</p>
                          <p>Sustainable model that rewards long term holders</p>
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
                    <p className="text-blue-100">
                      The Feeding Bowl is our community prize pool with durations set by project owners. Longer periods result in bigger prize pools, where verified wallet holders can participate for a chance to win. Each bowl has a growing prize pool, with 80% going to the winner, 10% for buying and burning BONE tokens, and 10% funding skill based community contests.
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
                      <p>• 80% of pool to winner</p>
                      <p>• 10% to buy and burn BONE tokens</p>
                      <p>• 10% to fund skill based community contests</p>
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
      id: 'ai-personalities',
      title: 'The Doghouse',
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
                  {/* Core Concept */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaPaw className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Diverse Pup Cast</h4>
                    </div>
                    <p className="text-blue-100">
                      The Doghouse features 50 unique pup personalities, each with their own distinct character, communication style and backstory. From professional personalities for serious analysis to creative characters for entertaining insights, our diverse cast makes blockchain monitoring both informative and entertaining.
                    </p>
                  </div>

                  {/* Evolution & Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Continuous Evolution</h4>
                    </div>
                    <p className="text-blue-100">
                      Our pup personalities are not static. They grow, evolve and adapt based on community feedback and platform needs. We regularly refine existing personalities and introduce new ones to keep the experience fresh and engaging.
                    </p>
                  </div>

                  {/* Community Art Contests */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaPalette className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Art Contests & Community Engagement</h4>
                    </div>
                    <p className="text-blue-100">
                      We believe in bringing our pup personalities to life through community creativity. Regular art contests allow talented artists to visualize each unique personality, with prizes for winning submissions.
                    </p>
                  </div>

                  {/* Future Development */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBone className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Future Development</h4>
                    </div>
                    <p className="text-blue-100">
                      The Doghouse is a living, growing ecosystem. We're committed to expanding and enhancing our pup personalities to create the most engaging wallet monitoring experience in the Cardano ecosystem.
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
      title: 'Our Journey',
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
                <h3 className="text-xl font-semibold text-white mb-6">Our Journey</h3>
                
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
                      Following Walletbud's challenges, ZING emerged as the replacement, focusing primarily on high speed tracking. While ZING successfully addressed the speed aspect of wallet monitoring, we saw an opportunity to create something more engaging.
                    </p>
                  </div>

                  {/* The Evolution */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRocket className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Evolution</h4>
                    </div>
                    <p className="text-blue-100">
                      WalletPup builds upon these foundations while addressing their limitations. We combine ZING's rapid tracking capabilities with features that transform wallet monitoring into an engaging social experience.
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
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Daily Active Addresses</h4>
                    <p className="text-2xl font-bold text-white mt-1">50,000+</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">Daily Transactions</h4>
                    <p className="text-2xl font-bold text-white mt-1">80,000+</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 text-sm font-medium">New Wallets Daily</h4>
                    <p className="text-2xl font-bold text-white mt-1">~ 5,500</p>
                    <p className="text-xs text-blue-300 mt-1"></p>
                  </div>
                  <div className="bg-blue-800/50 p-4 rounded-lg">
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
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Network Capacity</h4>
                    <p className="text-blue-100 mb-4">
                      Our infrastructure is designed to handle the growing Cardano ecosystem:
                    </p>
                    <div className="text-blue-200">
                      <p>• Currently supporting 80,000+ daily transactions</p>
                      <p>• Smart queuing system for Discord notifications</p>
                      <p>• Load balanced for high availability</p>
                    </div>
                  </div>

                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">User Growth</h4>
                    <p className="text-blue-100 mb-4">
                      We've built WalletPup to scale with the community:
                    </p>
                    <div className="text-blue-200">
                      <p>• Each user can track up to 20 wallets</p>
                      <p>• System can handle 250,000+ primary wallets</p>
                      <p>• Supports current daily active addresses</p>
                    </div>
                  </div>

                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Optimization</h4>
                    <p className="text-blue-100 mb-4">
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
      icon: <FaRoad className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCogs className="text-blue-400" /> Enhanced Bot Commands
                  </h5>
                  <p className="text-blue-200">
                    We are expanding our command system with dynamic BONE requirements, enhanced wallet management, and advanced tracking features. Users will have greater control over how they monitor and analyze wallet activity.
                  </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-blue-400" /> Bug Bounty Program
                  </h5>
                  <p className="text-blue-200">
                    Join our community bug hunting contest where users can earn rewards for finding and reporting issues. Help us make WalletPup more secure and reliable while earning rewards for your contributions.
                  </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaPalette className="text-blue-400" /> Community Engagement
                  </h5>
                  <p className="text-blue-200">
                    Regular art and meme competitions will bring creativity and fun to our community. Winners will receive special rewards and recognition within the WalletPup ecosystem.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaRobot className="text-blue-400" /> Discord Server Features
                  </h5>
                  <p className="text-blue-200">
                    New server features will enhance community interaction and provide more value to our users. This includes specialized channels, automated roles, and interactive community events.
                  </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaProjectDiagram className="text-blue-400" /> Project Collaborations
                  </h5>
                  <p className="text-blue-200">
                    We are actively seeking partnerships with Cardano projects to create unique monitoring solutions. Projects will have access to custom bot features and specialized tracking tools for their communities.
                  </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaServer className="text-blue-400" /> System Improvements
                  </h5>
                  <p className="text-blue-200">
                    Continuous updates to our core systems will improve speed, reliability, and functionality. We are developing token specific tracking features to provide detailed insights for different assets.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-200 mt-6 text-center">
              Note: These development plans are subject to change based on community feedback and market conditions. We will prioritize features that bring the most value to our users.
            </p>
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
                  {/* Scalable Infrastructure */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Scalable Infrastructure</h4>
                    </div>
                    <p className="text-blue-100">
                      Our system is built to handle massive growth, with an infrastructure designed for thousands of users tracking multiple wallets. Through efficient caching and smart rate limiting, we maintain high performance even as we scale.
                    </p>
                  </div>

                  {/* Token Economics */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCoins className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Sustainable Token Model</h4>
                    </div>
                    <p className="text-blue-100">
                      Our dynamic BONE requirement system ensures sustainable growth. With 95% of tokens allocated to the public and regular token burns through the Feeding Bowl, we've created an ecosystem that rewards early adopters while remaining accessible to new users.
                    </p>
                  </div>

                  {/* Community Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaUsers className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Growing Community</h4>
                    </div>
                    <p className="text-blue-100">
                      Regular events, contests, and feeding bowls keep our community engaged and growing. Through the Feeding Bowl's prize pool allocation, we maintain a continuous cycle of engagement, token burns, and skill based competitions.
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
      id: 'beyond-discord',
      title: 'Beyond Discord',
      icon: <FaAddressBook className="w-6 h-6" />,
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
                <h3 className="text-xl font-semibold text-white mb-6">Beyond Discord</h3>
                
                <div className="space-y-8">
                  {/* Expansion Plans */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaAddressBook className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Expanding Horizons</h4>
                    </div>
                    <p className="text-blue-100">
                      While Discord is our current home, we're developing exciting new ways to interact with your wallets. Our expansion plans focus on bringing more utility to BONE tokens while staying true to our core mission of wallet tracking. These developments will enhance how you access and manage your tracking experience, making it even more valuable for our community.
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

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Whitepaper;
