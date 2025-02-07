// Whitepaper page - Updated 21 Jan 2025
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaBolt, 
  FaCoins, 
  FaRoad, 
  FaShieldAlt, 
  FaFeather, 
  FaServer, 
  FaRobot,
  FaSearch,
  FaChartPie,
  FaEye,
  FaProjectDiagram,
  FaPalette,
  FaLightbulb,
  FaDiscord,
  FaHistory,
  FaStar,
  FaRocket} from 'react-icons/fa';
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
                <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                  Advanced Cardano Wallet Monitoring and Discord Integration
                </p>
                <p className="text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-300">
                  Introducing WalletPup, a powerful Cardano wallet monitoring platform that lets you connect your Discord account to your wallet. Our simple system allows users to link their Discord username with their wallet, making it easy for anyone to search and find your wallets.
                </p>
                
                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  WalletPup brings Discord and the Cardano blockchain together seamlessly. After connecting your Discord account, our advanced AI analyzes your wallet activity in real time, sending you precise updates about ADA transactions, token movements, and NFT activities through personalized Discord notifications.
                </p>

                <p className="text-lg leading-relaxed mt-6 hover:scale-[1.02] transition-transform duration-300">
                  Say goodbye to disconnected wallet monitoring. Whether you're trading, collecting NFTs, or managing tokens, WalletPup keeps you informed through Discord and makes it simple for others to find your connected wallets by searching your Discord username.
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wallet Management */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaRobot className="text-blue-400" /> Core Commands
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Primary wallet setup with verification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Additional wallet tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    List tracked wallets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Message history management
                  </li>
                </ul>
              </div>

              {/* Tracking Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaSearch className="text-blue-400" /> Advanced Features
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Primary wallet with up to 9 additional wallets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Transaction notifications with AI insights
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Top watched wallets tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Platform wide wallet search
                  </li>
                </ul>
              </div>

              {/* System Features */}
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
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
                    Dynamic BONE requirement system
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
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
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
                    Token based access control
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
                <h3 className="text-xl font-semibold text-white mb-6">The Magic Behind WalletPup</h3>
                
                <div className="space-y-8">
                  {/* AI Commentary System */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRobot className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">AI Commentary Engine</h4>
                    </div>
                    <p className="text-blue-100 mb-4">
                      Our advanced AI system analyzes transactions, understanding context and patterns to provide entertaining and insightful comments. It's like having a knowledgeable friend watching your wallet activity!
                    </p>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>Contextual transaction analysis</li>
                      <li>Pattern recognition for better insights</li>
                      <li>Personalized commentary style</li>
                    </ul>
                  </div>

                  {/* Monitoring System */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaEye className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Smart Monitoring</h4>
                    </div>
                    <p className="text-blue-100 mb-4">
                      Our system monitors the Cardano blockchain and processes transactions to the users DM's. Your primary wallet requires BONE tokens and verification, but after that's set up, you can track any additional wallets you want. The entry cost is fixed at 20 ADA worth of $BONE tokens, with the token amount adjusting based on market cap to ensure fair access for all users. Our focus is on providing fast and entertaining AI commentary with a more engaging experience.
                    </p>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>Monitor ADA, tokens, and NFTs</li>
                      <li>Reliable notification delivery through Discord DMs</li>
                      <li>Personalized AI insights for each transaction</li>
                    </ul>
                  </div>

                  {/* Discord Integration */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaDiscord className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Seamless Discord Integration</h4>
                    </div>
                    <p className="text-blue-100 mb-4">
                      WalletPup lives in Discord, making it incredibly easy to interact with. Add wallets, manage your tracked addresses, and receive notifications right where you spend your time.
                    </p>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>Simple command interface</li>
                      <li>Private DM notifications</li>
                      <li>Secure wallet management</li>
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaShieldAlt className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Built for Security</h4>
                    </div>
                    <p className="text-blue-100 mb-4">
                      Security is our top priority. We only work with public blockchain data and Discord's secure messaging system to protect your privacy.
                    </p>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>No sensitive data storage</li>
                      <li>Private Discord DM notifications</li>
                      <li>Public address monitoring only</li>
                    </ul>
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
                        <div className="mt-2 text-sm text-blue-200">50,000,000 $BONE - For development and community events</div>
                      </div>
                    </div>
                  </div>

                  {/* Token Utility & Requirements */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBolt className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Token Utility & Requirements</h4>
                    </div>
                    <p className="text-blue-100 mb-4">
                      $BONE is the utility token that powers the WalletPup ecosystem. The entry cost is fixed at roughly 20 ADA worth of $BONE tokens, with the token amount adjusting based on market cap to ensure fair access for all users. Unlike traditional subscription models, our token gives users perpetual access to services while maintaining their asset value. The amount required decreases as our market cap grows, creating a fair system that rewards early adopters.
                    </p>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>Primary wallet holds BONE tokens, additional wallets have no token requirement</li>
                      <li>Track 1 primary wallet plus 9 additional wallets of your choice</li>
                      <li>Dynamic requirements based on market cap growth</li>
                      <li>Early adopters benefit from token value appreciation</li>
                      <li>Tokens retain value and can be traded when no longer needed</li>
                      <li>No presale or private allocations</li>
                    </ul>
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
            <div className="space-y-6 text-blue-100">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-semibold text-white mb-6">Evolution of Wallet Tracking</h3>
                
                <div className="space-y-8">
                  {/* History */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaHistory className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">The Beginning</h4>
                    </div>
                    <p className="text-blue-100">
                      The story begins with Walletbud, the first wallet tracking service on Cardano. While groundbreaking, it faced significant sustainability and reliability challenges that ultimately affected its service. Following this, ZING emerged as a replacement, focusing on high-speed tracking and basic wallet monitoring capabilities.
                    </p>
                  </div>

                  {/* Our Vision */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaEye className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Our Vision</h4>
                    </div>
                    <p className="text-blue-100">
                      We're building on the foundations laid by these pioneers while addressing their limitations. Our vision combines ZING's fast tracking speeds with innovative features that transform wallet monitoring into an engaging experience. By integrating AI commentary, extensive functionality, and Discord-wallet connectivity, we're creating a platform that's both powerful and user-friendly. Most importantly, our infrastructure is built to scale, capable of handling 100,000+ wallets and thousands of users while providing an investment opportunity through our token system.
                    </p>
                  </div>

                  {/* What Sets Us Apart */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaStar className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">What Sets Us Apart</h4>
                    </div>
                    <ul className="list-disc ml-6 text-blue-200 space-y-2">
                      <li>High-Speed Tracking: Maintaining the rapid detection capabilities users expect</li>
                      <li>AI Commentary: Personalized insights for every transaction</li>
                      <li>Discord Integration: Seamlessly link Discord usernames to wallets</li>
                      <li>Scalable Infrastructure: Built to handle 100,000+ wallets</li>
                      <li>Investment Opportunity: Token system that grows with our community</li>
                      <li>Enhanced Features: Comprehensive wallet monitoring and management</li>
                    </ul>
                  </div>

                  {/* Future Vision */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaRocket className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Looking Forward</h4>
                    </div>
                    <p className="text-blue-100">
                      We are building more than just a wallet tracker. We are creating a social platform where blockchain activity becomes a shared experience. With our AI powered insights and community features, we are making crypto tracking more engaging, informative, and fun for everyone.
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
                <h3 className="text-xl font-semibold text-white mb-6">Sustainable Growth & Long-term Vision</h3>
                
                <div className="space-y-8">
                  {/* Scalable Architecture */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaServer className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Built to Scale</h4>
                    </div>
                    <p className="text-blue-100">
                      Our infrastructure is designed to handle massive growth. We're not just building another wallet tracker - 
                      we're creating the foundation for the largest Discord-to-wallet linking system in the Cardano ecosystem. 
                      Our architecture can support thousands of users tracking multiple wallets each, with room for exponential growth.
                    </p>
                  </div>

                  {/* Tokenomics for Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaCoins className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Sustainable Tokenomics</h4>
                    </div>
                    <p className="text-blue-100">
                      Our dynamic BONE requirement system is designed to maintain service quality as we grow. With a fixed entry cost of 20 ADA, users receive varying amounts of $BONE tokens based on the current market cap. With 95% of tokens allocated to the public and only 5% reserved for team and community events, we've created a fair ecosystem where both new and existing users benefit from the project's success.
                    </p>
                  </div>

                  {/* Secret Development */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaBolt className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Beyond Discord - Coming Soon</h4>
                    </div>
                    <p className="text-blue-100">
                      We're working on a new extension to the project that will add significant utility to the BONE token. 
                      While we can't reveal all the details yet, we'll be releasing teasers in the coming months. 
                      This development will further cement WalletPup's position as the leading wallet tracking solution 
                      and provide even more value to our token holders.
                    </p>
                  </div>

                  {/* Community Growth */}
                  <div className="bg-blue-800/30 p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <FaDiscord className="w-6 h-6 mr-3 text-blue-300" />
                      <h4 className="text-lg font-semibold text-white">Community-Driven Evolution</h4>
                    </div>
                    <p className="text-blue-100">
                      Our goal is to become the top wallet tracking bot in the Cardano ecosystem. We're constantly gathering 
                      feedback from our community to improve and expand our features. From enhanced wallet tracking to new 
                      AI insights, every update is designed to provide more value to our users while maintaining the 
                      highest standards of reliability and security.
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
    </div>
  );
};

export default Whitepaper;
