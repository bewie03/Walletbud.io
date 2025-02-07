// BuyToken page - Updated 7 Feb 2025
import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { FaCoins, FaChartLine, FaInfoCircle, FaExchangeAlt } from 'react-icons/fa';

const BONE = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#1e40af]">
      {/* Header Section */}
      <div className="w-full bg-blue-900 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                $BONE Token
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl hover:scale-105 transition-transform duration-300">
                Power the First AI Powered Wallet Tracker on Cardano
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Navigation Tabs */}
          <AnimatedElement animation="fadeIn" delay={0.4}>
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {[
                { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
                { id: 'tokenomics', label: 'Tokenomics', icon: <FaCoins /> },
                { id: 'requirements', label: 'Requirements', icon: <FaChartLine /> },
                { id: 'buy', label: 'Buy $BONE', icon: <FaExchangeAlt /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-900 text-blue-200 hover:bg-blue-800'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </AnimatedElement>

          {/* Content Sections */}
          <AnimatedElement animation="fadeIn" delay={0.6}>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Track</h3>
                  <p className="text-blue-100 text-lg">
                    Monitor up to 10 wallets simultaneously with real-time updates and AI-powered insights
                  </p>
                </div>
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Secure</h3>
                  <p className="text-blue-100 text-lg">
                    Private notifications and secure wallet monitoring system with Discord integration
                  </p>
                </div>
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Grow</h3>
                  <p className="text-blue-100 text-lg">
                    Token value appreciates as our platform expands, rewarding early supporters
                  </p>
                </div>
              </div>
            )}

            {/* Tokenomics Tab */}
            {activeTab === 'tokenomics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg text-blue-100">Public Distribution</span>
                        <span className="text-xl font-bold text-white">95%</span>
                      </div>
                      <div className="w-full bg-blue-950 rounded-full h-4">
                        <div className="bg-blue-400 h-4 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '95%' }}></div>
                      </div>
                      <p className="mt-2 text-blue-200">950,000,000 $BONE</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg text-blue-100">Development & Community</span>
                        <span className="text-xl font-bold text-white">5%</span>
                      </div>
                      <div className="w-full bg-blue-950 rounded-full h-4">
                        <div className="bg-blue-400 h-4 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '5%' }}></div>
                      </div>
                      <p className="mt-2 text-blue-200">50,000,000 $BONE</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Total Supply</h3>
                  <div className="text-6xl font-bold text-white mb-4">1B</div>
                  <p className="text-xl text-blue-200 mb-8">$BONE Tokens</p>
                  <div className="bg-blue-800 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-white mb-3">Policy ID</h4>
                    <p className="font-mono text-sm text-blue-100 break-all">Updated Soon</p>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements Tab */}
            {activeTab === 'requirements' && (
              <div className="space-y-8">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Token Requirements</h3>
                  <p className="text-lg text-blue-100 mb-8">
                    The amount of $BONE tokens required adjusts with market cap while maintaining a consistent 20 ADA entry cost, ensuring fair access for everyone. Once a token requirement is reduced, it never increases back to a higher amount.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Early Stage</h4>
                      <div className="space-y-4">
                        {[
                          { mcap: '$100K MCAP', amount: '200,000 $BONE', note: 'Initial requirement' },
                          { mcap: '$200K MCAP', amount: '100,000 $BONE', note: 'Permanent reduction' },
                          { mcap: '$500K MCAP', amount: '40,000 $BONE', note: 'Further reduction' }
                        ].map((stage, index) => (
                          <div key={index} className="bg-blue-800 rounded-lg p-4 border border-blue-700 hover:scale-105 transition-all duration-300">
                            <div className="flex justify-between items-center">
                              <span className="text-lg text-blue-200">{stage.mcap}</span>
                              <span className="text-lg font-bold text-white">{stage.amount}</span>
                            </div>
                            <p className="text-sm text-blue-300 mt-2">{stage.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Growth Stage</h4>
                      <div className="space-y-4">
                        {[
                          { mcap: '$1M MCAP', amount: '20,000 $BONE', note: 'Continued reduction' },
                          { mcap: '$2M MCAP', amount: '10,000 $BONE', note: 'Further reduction' },
                          { mcap: '$5M MCAP', amount: '4,000 $BONE', note: 'Final reduction' }
                        ].map((stage, index) => (
                          <div key={index} className="bg-blue-800 rounded-lg p-4 border border-blue-700 hover:scale-105 transition-all duration-300">
                            <div className="flex justify-between items-center">
                              <span className="text-lg text-blue-200">{stage.mcap}</span>
                              <span className="text-lg font-bold text-white">{stage.amount}</span>
                            </div>
                            <p className="text-sm text-blue-300 mt-2">{stage.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 bg-blue-800 rounded-lg p-6 border border-blue-700">
                    <p className="text-lg text-blue-100 text-center font-semibold">
                      Token requirements only decrease as market cap grows. Once reduced, they never increase back to previous levels.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Buy Tab */}
            {activeTab === 'buy' && (
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Buy $BONE Tokens</h3>
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
            )}
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default BONE;
