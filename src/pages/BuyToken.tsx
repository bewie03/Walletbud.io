// BuyToken page - Updated 27 Jan 2025
import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { FaCoins, FaChartLine, FaInfoCircle } from 'react-icons/fa';

const BONE = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
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

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Info Cards */}
            <div className="bg-blue-900/50 rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
              {/* Navigation Tabs */}
              <div className="flex space-x-2 mb-6">
                {[
                  { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
                  { id: 'tokenomics', label: 'Tokenomics', icon: <FaCoins /> },
                  { id: 'requirements', label: 'Requirements', icon: <FaChartLine /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-900 text-blue-200 hover:bg-blue-800'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              {activeTab === 'requirements' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 hover:scale-105 transition-transform duration-300">Token Requirements</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                      <p className="text-blue-100 mb-4 hover:scale-[1.02] transition-transform duration-300">
                        The amount of $BONE tokens required decreases as our market cap grows, giving fair access for everyone.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 hover:scale-105 transition-transform duration-300">Early Stage</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$1M MCAP</span>
                              <span className="text-white font-bold">10,000 $BONE</span>
                            </div>
                          </div>
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$5M MCAP</span>
                              <span className="text-white font-bold">2,000 $BONE</span>
                            </div>
                          </div>
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$10M MCAP</span>
                              <span className="text-white font-bold">1,000 $BONE</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 hover:scale-105 transition-transform duration-300">Growth Stage</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$20M MCAP</span>
                              <span className="text-white font-bold">500 $BONE</span>
                            </div>
                          </div>
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$50M MCAP</span>
                              <span className="text-white font-bold">200 $BONE</span>
                            </div>
                          </div>
                          <div className="bg-blue-900 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                            <div className="flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                              <span className="text-blue-200">$100M MCAP</span>
                              <span className="text-white font-bold">100 $BONE</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900 p-4 rounded-lg text-center hover:scale-[1.02] transition-all duration-300">
                      <p className="text-blue-100 font-semibold hover:scale-[1.02] transition-transform duration-300">
                        Token requirement never increases - only decreases as market cap grows
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 hover:scale-105 transition-transform duration-300">Fair Entry System</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 hover:scale-105 transition-transform duration-300">How It Works</h4>
                      <p className="text-blue-100 mb-4 hover:scale-[1.02] transition-transform duration-300">
                        Our innovative token system ensures fair access while rewarding early adopters. The entry cost remains stable at approximately 10 ADA worth of $BONE tokens per wallet.
                      </p>
                      <ul className="list-disc text-blue-100 space-y-2 ml-4">
                        <li className="hover:scale-[1.02] transition-transform duration-300">Track up to 10 wallets simultaneously</li>
                        <li className="hover:scale-[1.02] transition-transform duration-300">Receive almost instant notifications</li>
                        <li className="hover:scale-[1.02] transition-transform duration-300">Monitor ADA, tokens, and NFTs</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white mb-3 hover:scale-105 transition-transform duration-300">Benefits</h4>
                        <ul className="text-blue-100 space-y-2">
                          <li className="hover:scale-[1.02] transition-transform duration-300">• Real time tracking</li>
                          <li className="hover:scale-[1.02] transition-transform duration-300">• Multi wallet support</li>
                          <li className="hover:scale-[1.02] transition-transform duration-300">• Secure monitoring</li>
                        </ul>
                      </div>
                      <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white mb-3 hover:scale-105 transition-transform duration-300">Features</h4>
                        <ul className="text-blue-100 space-y-2">
                          <li className="hover:scale-[1.02] transition-transform duration-300">• Discord integration</li>
                          <li className="hover:scale-[1.02] transition-transform duration-300">• NFT tracking</li>
                          <li className="hover:scale-[1.02] transition-transform duration-300">• Token alerts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tokenomics Tab */}
              {activeTab === 'tokenomics' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 hover:scale-105 transition-transform duration-300">Token Details</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center bg-blue-800/50 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                          <span className="text-blue-200 text-sm">Total Supply</span>
                          <span className="text-white font-bold text-xl">1,000,000,000</span>
                          <span className="text-blue-300 text-sm">$BONE</span>
                        </div>
                        <div className="flex flex-col items-center bg-blue-800/50 p-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                          <span className="text-blue-200 text-sm">Entry Cost</span>
                          <span className="text-white font-bold text-xl">Dynamic</span>
                          <span className="text-blue-300 text-sm">based on mcap</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 hover:scale-105 transition-transform duration-300">Token Distribution</h4>
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
                          <div className="mt-2 text-sm text-blue-200">950,000,000 $BONE</div>
                        </div>

                        {/* Development & Community */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-blue-100">Development & Community Events</span>
                            <span className="text-white font-bold">5%</span>
                          </div>
                          <div className="w-full bg-blue-950 rounded-full h-3">
                            <div className="bg-blue-400 h-3 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '5%' }}></div>
                          </div>
                          <div className="mt-2 text-sm text-blue-200">50,000,000 $BONE</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900 p-4 rounded-lg hover:scale-[1.02] transition-all duration-300">
                      <h4 className="text-lg font-semibold text-white mb-3 hover:scale-105 transition-transform duration-300">Policy ID</h4>
                      <p className="text-white font-mono text-sm break-all bg-blue-800/50 p-2 rounded hover:scale-[1.02] transition-all duration-300">Updated Soon</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - DEX Widget */}
            <div className="bg-blue-900/50 rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 text-center hover:scale-105 transition-transform duration-300">Buy $BONE</h3>
              <div className="flex justify-center">
                <Swap
                  orderTypes={["SWAP","LIMIT"]}
                  defaultToken="ADA"
                  colors={{
                    background: "#1E3A8A",
                    containers: "#1E3A8A",
                    subText: "#D9E3F0",
                    mainText: "#FFFFFF",
                    buttonText: "#FFFFFF",
                    accent: "#60A5FA"
                  }}
                  theme="dark"
                  width="500"
                  partnerCode="walletpup6164647231717835727434726c76396e7061366e383539366575616773677a66757a6337713835726b39796b6c646b7070666334726e74356865777832676c7178683039386b396175366366777a6d666e3630636a6d34346170617a6d63386e71797934377065da39a3ee5e6b4b0d3255bfef95601890afd80709"
                  partnerName="Walletpup"
                  displayType="DEFAULT"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BONE;
