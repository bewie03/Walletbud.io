// Whitepaper page - Updated 21 Jan 2025
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaCogs, 
  FaBolt, 
  FaCoins, 
  FaChartBar, 
  FaRoad, 
  FaShieldAlt, 
  FaFeather, 
  FaUsers, 
  FaServer, 
  FaDatabase, 
  FaSearchDollar, 
  FaCog,
  FaRobot,
  FaNetworkWired,
  FaSearch,
  FaChartPie,
  FaEye,
  FaProjectDiagram,
  FaPalette,
  FaLightbulb,
  FaBalanceScale,
  FaClock,
  FaWallet,
  FaDiscord
} from 'react-icons/fa';
import AnimatedElement from '../components/AnimatedElement';

const Whitepaper = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FaRoad className="w-6 h-6" />,
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
                <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                  Currently, Cardano users have no easy way to track specific wallet addresses and receive notifications about their activity. This makes it difficult to monitor investments, track project treasuries, or stay updated on important transactions.
                </p>
                
                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  WalletPup bridges this gap by connecting Discord with the Cardano blockchain. Our system securely links each user's Discord ID with their verified wallet addresses, creating a personalized monitoring experience. Through our Discord bot, users can easily track multiple wallets and get instant notifications about ADA, token, and NFT movements.
                </p>

                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  This powerful Discord and blockchain connection ensures notifications go directly to users on their favorite platform. Whether you watch your own wallets, monitor project treasuries, or track whale movements, WalletPup keeps you informed with real time Discord notifications about all wallet activity.
                </p>
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
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                  We were inspired by an earlier project called WalletPup that attempted to create a wallet monitoring solution for Cardano. While innovative, it had many problems and limitations: users needed to add their wallets again after system restarts, notifications were unreliable, and the bot would frequently go offline. The service lacked important features like multi wallet tracking, token monitoring, and NFT support.
                </p>
                
                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  As a new team taking on this challenge, we have built our version of WalletPup from scratch to solve these core issues. Our robust infrastructure ensures constant uptime, reliable notifications, and permanent wallet storage. We've added comprehensive token and NFT tracking, multi wallet support, and detailed transaction analytics.
                </p>

                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  While we share the name and vision of the original project, we are a completely new team delivering a much better implementation. Our goal is to give the Cardano community a reliable, complete monitoring solution they can depend on.
                </p>
              </div>
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
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaSearchDollar className="text-blue-400" /> What Cardano Has
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

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-blue-400" /> Current Limitations
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
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-blue-400" /> What Cardano Needs
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

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaChartBar className="text-blue-400" /> Our Solution
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
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wallet Management */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaRobot className="text-blue-400" /> Core Commands
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Add/Remove wallet tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Wallet verification system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    List tracked wallets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Balance inquiries
                  </li>
                </ul>
              </div>

              {/* Tracking Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaSearch className="text-blue-400" /> Advanced Features
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Multi-wallet monitoring (up to 5)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Real-time transaction alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Top watched wallets tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Platform-wide wallet search
                  </li>
                </ul>
              </div>

              {/* System Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaChartPie className="text-blue-400" /> System Features
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Global statistics tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Token balance monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Comprehensive help system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Private DM interactions
                  </li>
                </ul>
              </div>

              {/* Security Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-blue-400" /> Security & Privacy
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Secure wallet verification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Private Discord notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Token-based access control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Persistent wallet storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: <FaCoins className="w-6 h-6" />,
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
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCoins className="text-blue-400" /> Total Supply
                  </h5>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-white">1B</div>
                    <div className="text-blue-200">Total $BONE Supply</div>
                  </div>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaChartPie className="text-blue-400" /> Distribution
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
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-blue-400" /> Public Distribution
                  </h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold text-white">900,000,000 $BONE</div>
                    <div className="text-blue-200">
                      Allocated for community, bot access, DEX trading, and providing liquidity.
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCog className="text-blue-400" /> Development Fund
                  </h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold text-white">100,000,000 $BONE</div>
                    <div className="text-blue-200">
                      Reserved for development, and community events to ensure long-term sustainability.
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
      id: 'bone-token',
      title: '$BONE Token',
      icon: <FaCoins className="w-6 h-6" />,
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700">
            <div className="space-y-8">
              {/* Purpose and Utility */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaBolt className="text-blue-400" /> Purpose & Utility
                </h3>
                <div className="space-y-4 text-blue-100">
                  <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                    <p className="leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                      $BONE is the utility token that powers the WalletPup ecosystem. It serves as both an access key to our services 
                      and a mechanism for ensuring sustainable development. Unlike traditional subscription models, $BONE gives users 
                      perpetual access to services while maintaining their asset value.
                    </p>
                    <p className="leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                      To use WalletPup services, users need to hold approximately 20 ADA worth of $BONE tokens. This dynamic 
                      requirement ensures fair access regardless of token price fluctuations, while rewarding early adopters as the 
                      token value grows.
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaCog className="text-blue-400" /> How It Works
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span className="hover:scale-[1.02] transition-transform duration-300">Hold $BONE tokens in your wallet to access WalletPup services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span className="hover:scale-[1.02] transition-transform duration-300">Track up to 5 wallets with sufficient token balance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span className="hover:scale-[1.02] transition-transform duration-300">Token requirement adjusts with market value to maintain consistent ~20 ADA entry point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span className="hover:scale-[1.02] transition-transform duration-300">Tokens retain value and can be sold when no longer needed</span>
                  </li>
                </ul>
              </div>

              {/* Long-term Sustainability */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaBalanceScale className="text-blue-400" /> Long-term Sustainability
                </h3>
                <div className="space-y-4 text-blue-100">
                  <p className="hover:scale-[1.02] transition-transform duration-300">
                    Our token model ensures long-term sustainability through several mechanisms:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                      <span className="hover:scale-[1.02] transition-transform duration-300">Development fund ensures continuous improvement and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                      <span className="hover:scale-[1.02] transition-transform duration-300">Token-based access creates natural demand as user base grows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                      <span className="hover:scale-[1.02] transition-transform duration-300">Fair launch and public distribution promotes healthy token economics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                      <span className="hover:scale-[1.02] transition-transform duration-300">No presale or private allocations ensures community-first approach</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Getting Started */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <FaRoad className="text-blue-400 mr-3" /> Getting Started with $BONE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">1.</span>
                      Acquire Tokens
                    </div>
                    <p className="text-blue-100">
                      Purchase $BONE tokens through our supported DEX platforms
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">2.</span>
                      Hold Required Amount
                    </div>
                    <p className="text-blue-100">
                      Maintain ~20 ADA worth of $BONE in your wallet
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="text-blue-400 mr-2">3.</span>
                      Start Using WalletPup
                    </div>
                    <p className="text-blue-100">
                      Add wallets to track and receive notifications
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
      id: 'requirements',
      title: 'Technical Architecture',
      icon: <FaChartBar className="w-6 h-6" />,
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
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-blue-400" /> Processing Power
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      300 transactions per minute max
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      API response {'<'}1 second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      4 notifications per second
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaDatabase className="text-blue-400" /> Database Metrics
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      1GB total storage capacity
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      20 max connections (5 active)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      6 tables of 4,000 available
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaClock className="text-blue-400" /> Timing & Intervals
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Balance check every 6 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Full scan (100k wallets): 5.5 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      250ms notification delay
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaWallet className="text-blue-400" /> Wallet Capacity
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      108,000 max wallets per 6 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      5 wallets checked per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Recommended: 100,000 wallets
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaServer className="text-blue-400" /> API Limits
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Blockfrost: 10 requests/second max
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Burst limit: 500 requests
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      50 second burst cooldown
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaDiscord className="text-blue-400" /> Discord Integration
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      4 messages per second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      1 command per 3s per user
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Unlimited servers and users
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaDatabase className="text-blue-400" /> Auto scaling
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Enterprise PostgreSQL
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      20 max connections
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      1GB storage capacity
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBalanceScale className="text-blue-400" /> Load Balancing
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      10 requests/second
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      500 request burst limit
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      50s burst cooldown
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaBolt className="text-blue-400" /> Performance
                  </h5>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      Query speed: milliseconds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      4  messages/second
                    </li>
                    <li className="flex items-center gap-2">
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
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="grid grid-rows-3 gap-6">
                <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                  <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCogs className="text-blue-400" /> Enhanced Bot Commands
                  </h5>
                  <p className="text-blue-200">
                    We are expanding our command system to provide more detailed analytics, custom alerts, and advanced tracking features. Users will have greater control over how they monitor and analyze wallet activity.
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
          <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaEye className="text-blue-400" /> Whale Watching
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

              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaProjectDiagram className="text-blue-400" /> Project Analysis
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

              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaChartLine className="text-blue-400" /> Trading Insights
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

              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaPalette className="text-blue-400" /> NFT Opportunities
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

              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaSearch className="text-blue-400" /> Early Detection
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

              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 h-[180px]">
                <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FaNetworkWired className="text-blue-400" /> Market Analysis
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
    <div className="min-h-screen bg-[#1e3b94] py-16">
      <div className="max-w-7xl mx-auto px-4">
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
              Version 1.0 - January 2025
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
    </div>
  );
};

export default Whitepaper;
