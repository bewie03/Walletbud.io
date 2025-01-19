import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';

const BONE = () => {
  const [iframeLoading, setIframeLoading] = useState(true);

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
                  Our innovative token system ensures fair access for all users. The entry cost remains stable at approximately 20 ADA per wallet, regardless of when you join. This system automatically adjusts the required token amount based on market conditions, maintaining accessibility while rewarding early adopters.
                </p>
              </div>

              {/* Example Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">How Token Distribution Works</h3>
                <div className="bg-blue-800/50 p-4 rounded-lg">
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2">Early Users:</p>
                    <p className="text-blue-100 ml-4">
                      • Purchase required BONE tokens (approximately 20 ADA worth)<br />
                      • Get early adopter benefits<br />
                      • Potential for token value appreciation
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2">As Market Grows:</p>
                    <p className="text-blue-100 ml-4">
                      • Required token amount adjusts with market value<br />
                      • Early users can sell excess tokens<br />
                      • New users still pay ~20 ADA equivalent<br />
                      • Market stays balanced and accessible
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Future Growth:</p>
                    <p className="text-blue-100 ml-4">
                      • Token requirement continues adjusting with market value<br />
                      • Service remains affordable for newcomers<br />
                      • Early supporters benefit from natural market growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-3">Benefits for All Users</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-800/50 p-4 rounded-lg">
                    <p className="text-blue-100 mb-3">
                      <span className="font-semibold">Early Adopters:</span><br />
                      • Potential profit from token value increase<br />
                      • First access to new features<br />
                      • Ability to sell excess tokens while maintaining service access
                    </p>
                    <p className="text-blue-100 mb-3">
                      <span className="font-semibold">New Users:</span><br />
                      • Consistent, fair entry price<br />
                      • Immediate access to all features<br />
                      • Equal opportunity for future growth
                    </p>
                    <p className="text-blue-100">
                      <span className="font-semibold">Community Benefits:</span><br />
                      • Natural token distribution<br />
                      • Stable, sustainable tokenomics<br />
                      • Growing ecosystem value
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* DEX Widget */}
              <AnimatedElement animation="slideRight" delay={0.2}>
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 h-[500px] mb-8 transform hover:shadow-xl transition-all duration-300 relative">
                  {iframeLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-900/80 rounded-lg">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                  <iframe 
                    src="https://dexhunter.io/swap?base=ADA&quote=BONE"
                    className="w-full h-full rounded-lg overflow-hidden"
                    title="DEXHunter Swap Widget"
                    onLoad={() => setIframeLoading(false)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  />
                  <style>
                    {`
                      iframe::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                  </style>
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
