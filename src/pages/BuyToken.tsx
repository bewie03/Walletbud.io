// BuyToken page - Updated 13 Feb 2025
import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { FaBone, FaPaw, FaChartLine, FaCoins, FaExchangeAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FloatingBones from '../components/FloatingBones';
import { MetaTags } from '../components/MetaTags';

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
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaPaw },
    { id: 'tokenomics', label: 'Tokenomics', icon: FaChartLine },
    { id: 'requirements', label: 'Requirements', icon: FaCoins },
    { id: 'buy', label: 'Buy $BONE', icon: FaExchangeAlt }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            key="overview"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Join the Pack",
                icon: FaPaw,
                description: "Link your Discord account with your Cardano wallets for seamless monitoring",
                features: [
                  "Primary wallet verification",
                  "Track up to 19 additional wallets",
                  "Platform wide wallet search"
                ]
              },
              {
                title: "Fetch Updates",
                icon: FaBone,
                description: "Receive real time Discord notifications with AI powered insights",
                features: [
                  "Transaction alerts with AI commentary",
                  "50 unique AI personalities",
                  "NFT activity updates"
                ]
              },
              {
                title: "Grow Together",
                icon: FaChartLine,
                description: "Early access to a growing ecosystem with decreasing token requirements",
                features: [
                  "Market driven token system",
                  "Active development roadmap",
                  "Community focused growth"
                ]
              }
            ].map((card, index) => (
              <AnimatedElement key={index} animation="fadeIn" delay={index * 0.1}>
                <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
                  {/* Icon Background */}
                  <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                    <card.icon className="text-blue-200 text-2xl" />
                  </div>
                  
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-blue-100 text-lg mb-6">{card.description}</p>
                    <ul className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-blue-200">
                          <FaPaw className="text-blue-400 text-xs mr-2 transform -rotate-45" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </motion.div>
        );
      case 'tokenomics':
        return (
          <motion.div
            key="tokenomics"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-[300px] flex flex-col">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                  <FaCoins className="text-blue-200 text-2xl" />
                </div>
                
                <div className="ml-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Token Distribution</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base text-blue-100">Public Distribution</span>
                        <span className="text-lg font-bold text-white">95%</span>
                      </div>
                      <div className="w-full bg-blue-950 rounded-full h-3">
                        <div className="bg-blue-400 h-3 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '95%' }}></div>
                      </div>
                      <p className="mt-1 text-sm text-blue-200">950,000,000 $BONE</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base text-blue-100">Development & Community</span>
                        <span className="text-lg font-bold text-white">5%</span>
                      </div>
                      <div className="w-full bg-blue-950 rounded-full h-3">
                        <div className="bg-blue-400 h-3 rounded-full transition-all duration-300 hover:bg-blue-300" style={{ width: '5%' }}></div>
                      </div>
                      <p className="mt-1 text-sm text-blue-200">50,000,000 $BONE</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn" delay={0.2}>
              <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-[300px] flex flex-col">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                  <FaBone className="text-blue-200 text-2xl" />
                </div>
                
                <div className="ml-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Total Supply</h3>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-6xl font-bold text-white mb-2">1B</div>
                    <p className="text-xl text-blue-200 mb-8">$BONE Tokens</p>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Policy ID</h4>
                    <p className="font-mono text-sm text-blue-100 break-all">Updated Soon</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </motion.div>
        );
      case 'requirements':
        return (
          <motion.div
            key="requirements"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <AnimatedElement animation="fadeIn">
              <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                  <FaCoins className="text-blue-200 text-2xl" />
                </div>
                
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Token Requirements</h3>
                  <p className="text-blue-100 text-base mb-6">
                    As market cap grows, token requirements decrease to maintain a stable price of 50 ADA per requirement
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { mcap: '$100K', amount: '200,000' },
                      { mcap: '$200K', amount: '100,000' },
                      { mcap: '$500K', amount: '40,000' },
                      { mcap: '$1M', amount: '20,000' },
                      { mcap: '$2M', amount: '10,000' },
                      { mcap: '$5M', amount: '4,000' }
                    ].map((stage, index) => (
                      <div 
                        key={index} 
                        className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-4 border border-blue-600 hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1">
                            <span className="text-blue-300 text-sm">MCAP</span>
                            <span className="text-white font-bold">{stage.mcap}</span>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white">{stage.amount}</span>
                          <span className="text-blue-300 text-sm">$BONE</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-blue-800/50 backdrop-blur-sm rounded-xl p-4 border border-blue-600">
                    <p className="text-blue-100 text-sm text-center">
                      Requirement never increases back up
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </motion.div>
        );
      case 'buy':
        return (
          <motion.div
            key="buy"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <AnimatedElement animation="fadeIn">
              <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 shadow-lg">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                  <FaExchangeAlt className="text-blue-200 text-2xl" />
                </div>
                
                <div className="ml-6">
                  <div className="flex justify-center">
                    <Swap
                      orderTypes={["SWAP","LIMIT"]}
                      colors={{
                        "background":"#1E3A8A",
                        "containers":"#1E3A8A",
                        "subText":"#D9E3F0",
                        "mainText":"#FFFFFF",
                        "buttonText":"#FFFFFF",
                        "accent":"#60A5FA"
                      }}
                      theme="dark"
                      width="450"
                      partnerCode="walletpup6164647231717835727434726c76396e7061366e383539366575616773677a66757a6337713835726b39796b6c646b7070666334726e74356865777832676c7178683039386b396175366366777a6d666e3630636a6d34346170617a6d63386e71797934377065da39a3ee5e6b4b0d3255bfef95601890afd80709"
                      partnerName="Walletpup"
                      displayType="DEFAULT"
                    />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </motion.div>
        );
    }
  };

  return (
    <>
      <MetaTags 
        title="WalletPup"
        description="Your Loyal Wallet Companion on Cardano"
      />
      <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
        <FloatingBones />
        {/* Hero Section */}
        <div className="w-full bg-blue-900 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="slideDown" delay={0.2}>
              <div className="text-center pt-32 pb-16">
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                  $BONE Token
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                  Your ticket to joining the pack
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-700 text-white shadow-lg scale-105'
                      : 'bg-blue-900 text-blue-200 hover:bg-blue-700/50'
                  }`}
                >
                  <tab.icon className={`${activeTab === tab.id ? 'text-blue-300' : 'text-blue-400'}`} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default BONE;
