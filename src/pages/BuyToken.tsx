// BuyToken page - Updated 27 Jan 2025
import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { FaCoins, FaChartLine, FaInfoCircle, FaExchangeAlt, FaChartBar } from 'react-icons/fa';

const BONE = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                $BONE Token
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Power the First AI Powered Wallet Tracker on Cardano
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Live Stats Section */}
      <div className="w-full bg-blue-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement animation="fadeIn" delay={0.3}>
              <div className="bg-blue-900/50 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">Current Price</h3>
                <p className="text-2xl font-bold text-white">Loading...</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <div className="bg-blue-900/50 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">Market Cap</h3>
                <p className="text-2xl font-bold text-white">Loading...</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.5}>
              <div className="bg-blue-900/50 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">Required Amount</h3>
                <p className="text-2xl font-bold text-white">10,000 $BONE</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
                    { id: 'tokenomics', label: 'Tokenomics', icon: <FaCoins /> },
                    { id: 'requirements', label: 'Requirements', icon: <FaChartLine /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-blue-900 text-blue-200 hover:bg-blue-800'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Content */}
                {activeTab === 'overview' && (
                  <AnimatedElement animation="fadeIn">
                    <div className="space-y-6">
                      <div className="bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
                        <p className="text-blue-100 mb-6">
                          Our innovative token system ensures fair access while rewarding early adopters. 
                          The entry cost remains stable at approximately 10 ADA worth of $BONE tokens per wallet.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                Track up to 10 wallets
                              </li>
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                Real-time notifications
                              </li>
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                Monitor ADA & tokens
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                Discord integration
                              </li>
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                NFT tracking
                              </li>
                              <li className="flex items-center text-blue-100">
                                <FaChartBar className="mr-2" />
                                Token alerts
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                )}

                {activeTab === 'tokenomics' && (
                  <AnimatedElement animation="fadeIn">
                    <div className="space-y-6">
                      <div className="bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Token Details</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex flex-col items-center bg-blue-800/50 p-4 rounded-lg">
                            <span className="text-blue-200 text-sm">Total Supply</span>
                            <span className="text-white font-bold text-2xl mt-2">1,000,000,000</span>
                            <span className="text-blue-300 text-sm mt-1">$BONE</span>
                          </div>
                          <div className="flex flex-col items-center bg-blue-800/50 p-4 rounded-lg">
                            <span className="text-blue-200 text-sm">Entry Cost</span>
                            <span className="text-white font-bold text-2xl mt-2">≈ 10 ADA</span>
                            <span className="text-blue-300 text-sm mt-1">per wallet</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white">Token Distribution</h4>
                          <div className="space-y-3">
                            <div className="bg-blue-800/50 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-blue-100">Public Sale</span>
                                <span className="text-white font-bold">90%</span>
                              </div>
                              <div className="w-full bg-blue-900 rounded-full h-2 mt-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                              </div>
                            </div>
                            <div className="bg-blue-800/50 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-blue-100">Development</span>
                                <span className="text-white font-bold">5%</span>
                              </div>
                              <div className="w-full bg-blue-900 rounded-full h-2 mt-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                              </div>
                            </div>
                            <div className="bg-blue-800/50 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="text-blue-100">Marketing</span>
                                <span className="text-white font-bold">5%</span>
                              </div>
                              <div className="w-full bg-blue-900 rounded-full h-2 mt-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                )}

                {activeTab === 'requirements' && (
                  <AnimatedElement animation="fadeIn">
                    <div className="space-y-6">
                      <div className="bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Token Requirements</h3>
                        <p className="text-blue-100 mb-6">
                          The amount of $BONE tokens required decreases as our market cap grows, 
                          giving fair access for everyone.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Early Stage</h4>
                            <div className="space-y-3">
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$1M MCAP</span>
                                  <span className="text-white font-bold">10,000 $BONE</span>
                                </div>
                              </div>
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$5M MCAP</span>
                                  <span className="text-white font-bold">2,000 $BONE</span>
                                </div>
                              </div>
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$10M MCAP</span>
                                  <span className="text-white font-bold">1,000 $BONE</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Growth Stage</h4>
                            <div className="space-y-3">
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$20M MCAP</span>
                                  <span className="text-white font-bold">500 $BONE</span>
                                </div>
                              </div>
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$50M MCAP</span>
                                  <span className="text-white font-bold">200 $BONE</span>
                                </div>
                              </div>
                              <div className="bg-blue-800/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-200">$100M MCAP</span>
                                  <span className="text-white font-bold">100 $BONE</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-900 p-4 rounded-lg text-center">
                        <p className="text-blue-100 font-semibold">
                          Token requirement never increases - only decreases as market cap grows
                        </p>
                      </div>
                    </div>
                  </AnimatedElement>
                )}
              </div>
            </div>

            {/* Right Column - Buy Widget */}
            <div className="lg:col-span-1">
              <div className="bg-blue-900/50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <FaExchangeAlt className="mr-2" />
                  Buy $BONE
                </h3>
                <div className="bg-blue-900 rounded-lg p-4 mb-4">
                  <p className="text-blue-100 text-center mb-4">
                    Get $BONE tokens directly through our partner DEX
                  </p>
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    onClick={() => window.open('https://minswap.org', '_blank')}
                  >
                    <FaExchangeAlt className="mr-2" />
                    Trade on Minswap
                  </button>
                </div>
                <div className="bg-blue-900 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Quick Guide</h4>
                  <ol className="text-blue-100 space-y-2 list-decimal list-inside">
                    <li>Connect your Cardano wallet</li>
                    <li>Swap ADA for $BONE tokens</li>
                    <li>Hold required amount</li>
                    <li>Start using WalletPup!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BONE;
