import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaCogs, 
  FaBolt, 
  FaCoins, 
  FaChartBar, 
  FaRocket, 
  FaShieldAlt, 
  FaFeather, 
  FaUsers, 
  FaServer, 
  FaDatabase, 
  FaRoad, 
  FaSearchDollar, 
  FaBell, 
  FaCog,
  FaRobot,
  FaNetworkWired,
  FaSearch,
  FaChartPie,
  FaEye,
  FaProjectDiagram,
  FaPalette,
  FaLightbulb,
  FaBalanceScale
} from 'react-icons/fa';
import AnimatedElement from '../components/AnimatedElement';

const Whitepaper = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FaRocket className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaRocket className="text-white" />
            Welcome to WalletBud
          </h2>
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="space-y-6 text-blue-100">
              <p className="text-lg">
                Currently, Cardano users have no easy way to track specific wallet addresses and receive notifications about their activity. This makes it difficult to monitor investments, track project treasuries, or stay updated on important transactions.
              </p>
              
              <p className="text-lg">
                WalletBud solves this by providing a simple Discord bot that monitors any Cardano wallet address you're interested in. Get instant notifications when wallets send or receive ADA, tokens, or NFTs. Track multiple addresses at once and never miss an important transaction.
              </p>

              <p className="text-lg">
                Whether you're watching your own wallets, monitoring a project's treasury, or tracking whale movements, WalletBud keeps you informed with real-time Discord notifications about all wallet activity.
              </p>
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
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="space-y-6 text-blue-100">
              <p className="text-lg">
                We were inspired by an earlier project called WalletBud that attempted to create a wallet monitoring solution for Cardano. While innovative, it faced significant challenges: users had to repeatedly add their wallets after system restarts, and there was no sustainable way to fund the service's ongoing development and server costs.
              </p>
              
              <p className="text-lg">
                As a new team taking on this challenge, we've built our version of WalletBud from scratch with solutions to these core issues. Wallets are now permanently stored in our enterprise-grade database, ensuring they persist through any system updates or restarts. And with our $BONE token, we've created a sustainable economic model that funds ongoing development while rewarding our users.
              </p>

              <p className="text-lg">
                While we share the name and vision of the original project, we're a completely new team with a fresh implementation. Our goal is to deliver what the Cardano community has always needed  a reliable, user friendly monitoring solution with a sustainable future.
              </p>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'market',
      title: 'Market Analysis',
      icon: <FaChartLine className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaSearchDollar className="text-white" /> What Cardano Has
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      4.7M+ active wallet addresses
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      57K+ daily transactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Robust blockchain explorer
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-white" /> Current Limitations
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Manual wallet monitoring only
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      No automated notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Missed important transactions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-white" /> What Cardano Needs
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Reliable wallet monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Instant transaction alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Multi-wallet tracking solution
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaChartBar className="text-white" /> Our Solution
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Discord-based notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Persistent wallet tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Token & NFT monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'technical',
      title: 'Technical Architecture',
      icon: <FaCogs className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaServer className="text-white" /> Backend Infrastructure
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      FastAPI for high-performance endpoints
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      PostgreSQL for reliable data storage
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Blockfrost API for blockchain data
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaChartLine className="text-white" /> Performance Metrics
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      50+ transactions per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      500+ concurrent connections
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Ultra-fast query response (50-100ms)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaRobot className="text-white" /> Bot Architecture
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Discord.py for reliable bot operations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Async processing for notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Command rate limiting and cooldowns
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-white" /> Security Measures
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Rate limiting and DDoS protection
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Secure Discord authentication
                    </li>
                  </ul>
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
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBell className="text-white" /> Notification System
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Instant transaction alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Token balance changes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      NFT movement tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Custom alert thresholds
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaSearch className="text-white" /> Tracking Features
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Multi-wallet monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Real-time balance updates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Transaction history
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Portfolio analytics
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaRobot className="text-white" /> Bot Commands
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Wallet registration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Balance inquiries
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Alert customization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Transaction lookup
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-white" /> Privacy Features
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Private DM notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Secure data handling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Encrypted storage
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Access controls
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'tokenomics',
      title: 'Token Economics',
      icon: <FaCoins className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCoins className="text-white" /> Total Supply
                  </h5>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">1B</div>
                    <div className="text-blue-200">Total $BONE Supply</div>
                  </div>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaChartPie className="text-white" /> Distribution
                  </h5>
                  <div className="space-y-2 text-blue-100">
                    <div className="flex items-center justify-between">
                      <span>Public Distribution</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-blue-950 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Development & Events</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-blue-950 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-white" /> Public Distribution
                  </h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold text-white">900,000,000 $BONE</div>
                    <div className="text-blue-200">
                      Allocated for community, bot access, DEX trading, and providing liquidity. Fair launch with no presale.
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCog className="text-white" /> Development Fund
                  </h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold text-white">100,000,000 $BONE</div>
                    <div className="text-blue-200">
                      Reserved for development, marketing, and community events to ensure long-term sustainability.
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
      id: 'requirements',
      title: 'System ',
      icon: <FaChartBar className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaDatabase className="text-white" /> Enterprise Database
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      5,000+ operations per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Ultra-fast queries (50-100ms)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Supports 500+ concurrent connections
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-white" /> Processing Power
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      50+ transactions per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Auto-scaling infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Load balancing: 5,000+ ops/second
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaServer className="text-white" /> Storage Capacity
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      1.5M+ wallet records
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      2M+ user associations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      1M+ transaction records
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-white" /> System Scale
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Support for 100,000+ active users
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Track 100,000+ wallets simultaneously
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Process 4M+ daily transactions
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBell className="text-white" /> Notifications
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      345,600 notifications per day
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Notify 1,000 users in ~4.2 minutes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Real-time Discord delivery
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCog className="text-white" /> Monitoring
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Check 5 wallets per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      108,000 wallets per cycle
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      6-hour check intervals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaDatabase className="text-white" /> Auto-scaling
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Enterprise PostgreSQL
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      500+ concurrent users
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Dynamic scaling
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBalanceScale className="text-white" /> Load Balancing
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      5000+ ops/second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Smart request routing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      High availability
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-white" /> High Performance
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      50-100ms query speed
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Optimized caching
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Fast response time
                    </li>
                  </ul>
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
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaCogs className="text-white" /> Infrastructure
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Enhanced system reliability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Improved backup systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Advanced monitoring tools
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaUsers className="text-white" /> Community Growth
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    DEX integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    NFT marketplace support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Project partnerships
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-blue-200 text-sm italic">
              Note: These features represent possible future directions. Development priorities may adjust based on community needs.
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'advanced-use-cases',
      title: 'Advanced Use Cases',
      icon: <FaChartPie className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-800/30 rounded-lg p-8 backdrop-blur-sm border border-blue-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaEye className="text-white" /> Whale Watching
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Track large holders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Monitor big moves
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Market insights
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaProjectDiagram className="text-white" /> Project Analysis
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Treasury monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Team wallet tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Fund movements
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaChartLine className="text-white" /> Trading Insights
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Price action alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Volume tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Market signals
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaPalette className="text-white" /> NFT Opportunities
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Collection tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Mint notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Sales alerts
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaSearch className="text-white" /> Early Detection
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    New projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Token launches
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Market trends
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm border border-blue-700/30 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaNetworkWired className="text-white" /> Market Analysis
                </h5>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Network activity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Token flows
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Trend analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Main content with proper spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <AnimatedElement
              key={section.id}
              animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
              delay={0.2 + index * 0.1}
            >
              <div
                id={section.id}
                className="scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  {section.icon}
                  {section.title}
                </h2>
                {section.content}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
