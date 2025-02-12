// BuyToken page - Updated 7 Feb 2025
import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { FaCoins, FaChartLine, FaInfoCircle, FaExchangeAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BONE = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const buttonVariants = {
    tap: { scale: 0.95 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            key="overview"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
              <p className="text-blue-100 text-lg mb-4">
                Link your Discord account with your Cardano wallets for seamless monitoring
              </p>
              <ul className="text-blue-200 space-y-2">
                <li>• Primary wallet verification</li>
                <li>• Track up to 9 additional wallets</li>
                <li>• Platform-wide wallet search</li>
              </ul>
            </div>
            <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Monitor</h3>
              <p className="text-blue-100 text-lg mb-4">
                Receive real time Discord notifications with AI powered insights
              </p>
              <ul className="text-blue-200 space-y-2">
                <li>• Transaction alerts with AI commentary</li>
                <li>• 50 unique AI personalities</li>
                <li>• NFT activity updates</li>
              </ul>
            </div>
            <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Value</h3>
              <p className="text-blue-100 text-lg mb-4">
                Early access to a growing ecosystem with decreasing token requirements
              </p>
              <ul className="text-blue-200 space-y-2">
                <li>• Market driven token requirement system</li>
                <li>• Active development and feature expansion</li>
                <li>• Community-focused growth model</li>
              </ul>
            </div>
          </motion.div>
        );
      case 'tokenomics':
        return (
          <motion.div
            key="tokenomics"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
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
          </motion.div>
        );
      case 'requirements':
        return (
          <motion.div
            key="requirements"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Token Requirements</h3>
              <h4 className="text-lg font-semibold text-white mb-2">Entry Cost</h4>
              <p className="text-blue-100 mb-4">
                Fixed at roughly 50 ADA worth of $BONE tokens. This covers monitoring for up to 10 wallets (5 ADA per wallet), making it an excellent value for users tracking multiple addresses.
              </p>
              <p className="text-blue-100 text-sm mb-6">
                Token requirements decrease with market cap growth while maintaining a 50 ADA entry cost.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Early Stage</h4>
                  <div className="space-y-2">
                    {[
                      { mcap: '$100K MCAP', amount: '200,000 $BONE'},
                      { mcap: '$200K MCAP', amount: '100,000 $BONE'},
                      { mcap: '$500K MCAP', amount: '40,000 $BONE'}
                    ].map((stage, index) => (
                      <div key={index} className="bg-blue-800 rounded p-3 border border-blue-700 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg text-blue-100">{stage.mcap}</span>
                          <span className="text-xl font-bold text-white">{stage.amount}</span>
                        </div>
                        <p className="text-xs text-blue-300 mt-1"></p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Growth Stage</h4>
                  <div className="space-y-2">
                    {[
                      { mcap: '$1M MCAP', amount: '20,000 $BONE'},
                      { mcap: '$2M MCAP', amount: '10,000 $BONE' },
                      { mcap: '$5M MCAP', amount: '4,000 $BONE'}
                    ].map((stage, index) => (
                      <div key={index} className="bg-blue-800 rounded p-3 border border-blue-700 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg text-blue-100">{stage.mcap}</span>
                          <span className="text-xl font-bold text-white">{stage.amount}</span>
                        </div>
                        <p className="text-xs text-blue-300 mt-1"></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-800 rounded p-3 border border-blue-700">
                <p className="text-sm text-blue-100 text-center">
                  Requirements only decrease with market cap growth - never increase back
                </p>
              </div>
            </div>
          </motion.div>
        );
      case 'buy':
        return (
          <motion.div
            key="buy"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl mx-auto bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center"></h3>
            <div className="flex justify-center">
              <Swap
      orderTypes={["SWAP","LIMIT"]}
      colors={{"background":"#1E3A8A","containers":"#1E3A8A","subText":"#D9E3F0","mainText":"#FFFFFF","buttonText":"#FFFFFF","accent":"#60A5FA"}}
      theme="dark"
      width="450"
      partnerCode="walletpup6164647231717835727434726c76396e7061366e383539366575616773677a66757a6337713835726b39796b6c646b7070666334726e74356865777832676c7178683039386b396175366366777a6d666e3630636a6d34346170617a6d63386e71797934377065da39a3ee5e6b4b0d3255bfef95601890afd80709"
      partnerName="Walletpup"
      displayType="DEFAULT"
    />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

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
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variants={buttonVariants}
                  whileTap="tap"
                  whileHover="hover"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-900 text-blue-200 hover:bg-blue-800'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </AnimatedElement>

          {/* Content Sections */}
          <AnimatedElement animation="fadeIn" delay={0.6}>
            {renderContent()}
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default BONE;
