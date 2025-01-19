import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';

const BONE = () => {
  const [] = useState(true);

  return (
    <div className="min-h-screen bg-blue-900 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade">
            $BONE
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-delay">
            The WalletBud Utility Token - Always ~20 ADA to Use
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left Column */}
            <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Dynamic Token Requirement Card */}
              <h2 className="text-2xl font-bold text-white mb-6">How Our Token System Works</h2>
              
              {/* Fair Entry Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">Fair Entry for Everyone</h3>
                <p className="text-blue-100">
                  Our innovative token system ensures fair access for all users. The entry cost remains stable at approximately 20 ADA per wallet, regardless of when you join. This system is manually adjusted based on market conditions, maintaining accessibility while rewarding early adopters.
                </p>
              </div>

              {/* Example Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">How Token Distribution Works</h3>
                <div className="bg-blue-800/50 p-4 rounded-lg">
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2">Early Users:</p>
                    <p className="text-blue-100 ml-4">
                      • Get in early with ~20 ADA worth of BONE tokens<br />
                      • Track up to 5 wallets with your tokens<br />
                      • As token value grows, keep what you need for tracking<br />
                      • Sell excess tokens for profit while maintaining service access
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2">As Market Grows:</p>
                    <p className="text-blue-100 ml-4">
                      • Token requirement adjusts as market cap increases<br />
                      • Early users can sell excess tokens to new users<br />
                      • New users join at lower token requirements<br />
                      • Natural token distribution across more holders
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Benefits For Everyone:</p>
                    <p className="text-blue-100 ml-4">
                      • Early adopters profit while keeping service access<br />
                      • New users get cheaper entry as system grows<br />
                      • Tokens naturally spread across more users<br />
                      • Sustainable growth with balanced tokenomics
                    </p>
                  </div>
                </div>
              </div>

              {/* Token Requirement System Section */}
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-3">Token Requirement System</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-800/50 p-4 rounded-lg mb-6">
                    <p className="text-blue-100 mb-4">
                      As our market cap grows, the required number of tokens to use the service decreases, while maintaining an approximate value of 20 ADA:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
                      <div>
                        <p className="mb-2">Early Stage:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>$1M MCAP: 20,000 BONE</li>
                          <li>$2M MCAP: 10,000 BONE</li>
                          <li>$5M MCAP: 4,000 BONE</li>
                          <li>$10M MCAP: 2,000 BONE</li>
                          <li>$15M MCAP: 1,300 BONE</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2">Growth Stage:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>$20M MCAP: 1,000 BONE</li>
                          <li>$30M MCAP: 650 BONE</li>
                          <li>$50M MCAP: 400 BONE</li>
                          <li>$75M MCAP: 265 BONE</li>
                          <li>$100M MCAP: 200 BONE</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <p className="text-blue-100 mb-4">
                      <span className="font-semibold">TOKEN REQUIREMENT NEVER GOES BACK UP</span><br />
                      For more information<br />
                      Read One-Way Token Requirements System<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* DEX Widget */}
              <AnimatedElement animation="slideRight" delay={0.2}>
                <div className="bg-blue-900 rounded-lg p-6 transform hover:shadow-xl transition-all duration-300 relative mb-8 border border-blue-700 ring-1 ring-blue-700/50">
                  <div className="mx-auto flex justify-center">
                    <Swap
                      orderTypes={["SWAP","LIMIT"]}
                      colors={{
                        background: "#1E3A8A",
                        containers: "#1E3A8A",
                        subText: "#D9E3F0",
                        mainText: "#D9E3F0",
                        buttonText: "#FFFFFF",
                        accent: "#6A86E2"
                      }}
                      theme="light"
                      width="500"
                      partnerCode="walletbud616464723171387a7275786c76747377366c326a647064643235656e336d393967676d74727678346b68723866346a396e353064356d3770357566716d7a3730797a706e66646336397a647067746a347032326b673364397639646a6b67706d71706735723637da39a3ee5e6b4b0d3255bfef95601890afd80709"
                      partnerName="Walletbud"
                      displayType="DEFAULT"
                    />
                  </div>
                </div>
              </AnimatedElement>

              {/* Token Details Card */}
              <AnimatedElement animation="slideLeft" delay={0.4}>
                <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">Token Details</h3>
                  <div className="space-y-3">
                    <AnimatedElement animation="fadeIn" delay={0.6}>
                      <p className="text-blue-100">
                        <span className="font-semibold">Total Supply:</span> 1,000,000,000
                      </p>
                    </AnimatedElement>
                    
                    <AnimatedElement animation="fadeIn" delay={0.8}>
                      <p className="text-blue-100">
                        <span className="font-semibold">Token Policy:</span> Coming soon
                      </p>
                    </AnimatedElement>

                    <AnimatedElement animation="fadeIn" delay={1}>
                      <div className="mt-4">
                        <h4 className="text-md font-semibold text-white mb-2">Token Distribution</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-blue-100 mb-1">
                              <span>Public Distribution</span>
                              <span>95%</span>
                            </div>
                            <div className="w-full bg-blue-800 rounded-full h-1.5">
                              <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                            <p className="text-xs text-blue-200 mt-0.5">950,000,000 $BONE</p>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-blue-100 mb-1">
                              <span>Team & Development</span>
                              <span>5%</span>
                            </div>
                            <div className="w-full bg-blue-800 rounded-full h-1.5">
                              <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                            <p className="text-xs text-blue-200 mt-0.5">50,000,000 $BONE</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement animation="fadeIn" delay={1}>
                      <p className="text-sm text-blue-100 mt-3">
                        Check the bot's profile status for current token requirement
                      </p>
                    </AnimatedElement>
                  </div>
                </div>
              </AnimatedElement>

              {/* One-Way Token Requirement System */}
              <AnimatedElement animation="slideLeft" delay={0.6}>
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:shadow-xl transition-all duration-300 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">One-Way Token Requirement System</h3>
                  <div className="space-y-4">
                    <p className="text-blue-100">
                      <span className="font-semibold">Always Decreasing:</span> Our token requirement only moves in one direction - down. As the market cap grows, we lower the required amount of BONE tokens needed for tracking.
                    </p>
                    <p className="text-blue-100">
                      <span className="font-semibold">Permanent Adjustments:</span> Once we decrease the token requirement, it stays at that lower amount - even if the market cap temporarily drops. We never increase the requirement back up.
                    </p>
                    <p className="text-blue-100">
                      <span className="font-semibold">User Protection:</span> This one way system ensures that the service becomes increasingly accessible over time while protecting all users from requirement increases, regardless of market conditions.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BONE;
