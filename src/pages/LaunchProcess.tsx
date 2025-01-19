import AnimatedElement from '../components/AnimatedElement';
import { FaRocket, FaCog, FaCheckCircle, FaExclamationTriangle, FaDiscord, FaTwitter, FaGlobe } from 'react-icons/fa';

const LaunchProcess = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Launch Process
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl">
                Launching on Snek.fun - The Premier Cardano Token Platform
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {/* Why Snek.fun Section */}
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">Why We Chose Snek.fun</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Established reputation for secure and successful token launches</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Built in anti bot measures to ensure fair distribution</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Professional token policy ID generation</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Transparent and verifiable launch process</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Immediate liquidity provision</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Fair and efficient token distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Launch Process Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600" />
              
              {/* Timeline Steps */}
              <div className="space-y-24 relative">
                {/* Website and Socials Launch */}
                <AnimatedElement animation="fadeIn" delay={0.2}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="mr-[calc(50%+2rem)] pr-6 pl-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaGlobe className="text-3xl text-blue-400" />
                          <h3 className="text-xl font-semibold text-white">Public Launch Prep</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Website goes live with full documentation</li>
                          <li>Discord server opens to public</li>
                          <li>Twitter announcements begin</li>
                          <li>Community moderators in place</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">2 Hours Before Launch</div>
                        <div className="mt-4 flex space-x-4">
                          <div className="flex items-center text-blue-300">
                            <FaDiscord className="mr-2" />
                            <span>Discord</span>
                          </div>
                          <div className="flex items-center text-blue-300">
                            <FaTwitter className="mr-2" />
                            <span>Twitter</span>
                          </div>
                          <div className="flex items-center text-blue-300">
                            <FaGlobe className="mr-2" />
                            <span>Website</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Pre-Launch */}
                <AnimatedElement animation="fadeIn" delay={0.4}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="ml-[calc(50%+2rem)] pl-6 pr-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaRocket className="text-3xl text-blue-400" />
                          <h3 className="text-xl font-semibold text-white">Pre-Launch Phase</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Final system checks and preparations</li>
                          <li>Bot continues operating normally</li>
                          <li>Community announcements and reminders</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">1 Hour Before Launch</div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Launch Moment */}
                <AnimatedElement animation="fadeIn" delay={0.6}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="mr-[calc(50%+2rem)] pr-6 pl-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaCheckCircle className="text-3xl text-green-400" />
                          <h3 className="text-xl font-semibold text-white">Launch Moment</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Token goes live on Snek.fun</li>
                          <li>Initial liquidity pool established</li>
                          <li>Trading begins</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">Launch Time</div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Maintenance Period */}
                <AnimatedElement animation="fadeIn" delay={0.8}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="ml-[calc(50%+2rem)] pl-6 pr-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaCog className="text-3xl text-blue-400 animate-spin-slow" />
                          <h3 className="text-xl font-semibold text-white">Bot Maintenance</h3>
                        </div>
                        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded p-4 mb-4">
                          <div className="flex items-center space-x-2 text-yellow-300 mb-2">
                            <FaExclamationTriangle />
                            <span className="font-semibold">Important Notice:</span>
                          </div>
                          <p className="text-yellow-100">Bot will be unavailable for approximately one hour after launch</p>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Integrating official token policy ID</li>
                          <li>Configuring live token environment</li>
                          <li>Implementing final security checks</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">1 Hour Duration</div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Post Maintenance */}
                <AnimatedElement animation="fadeIn" delay={1.0}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="mr-[calc(50%+2rem)] pr-6 pl-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaCheckCircle className="text-3xl text-green-400" />
                          <h3 className="text-xl font-semibold text-white">Full Service Launch</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Bot becomes fully operational</li>
                          <li>All features available for users</li>
                          <li>Begin tracking your wallets</li>
                          <li>Token requirement system activated</li>
                          <li>24/7 community support active</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">Service Fully Live</div>
                        <div className="mt-4 p-4 bg-green-900/30 border border-green-700/50 rounded">
                          <p className="text-green-300 font-semibold">All Systems Operational</p>
                          <p className="text-green-100 text-sm mt-1">Full monitoring and support systems active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Community Growth */}
                <AnimatedElement animation="fadeIn" delay={1.2}>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-900 z-10" />
                    <div className="ml-[calc(50%+2rem)] pl-6 pr-4">
                      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                          <FaDiscord className="text-3xl text-blue-400" />
                          <h3 className="text-xl font-semibold text-white">Community Building</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-blue-100">
                          <li>Regular community events begin</li>
                          <li>Feature suggestion channel opens</li>
                          <li>Bug bounty program starts</li>
                          <li>Community feedback implementation</li>
                        </ul>
                        <div className="mt-4 text-sm text-blue-300">Ongoing</div>
                        <div className="mt-4 flex space-x-4">
                          <div className="flex items-center text-blue-300">
                            <FaDiscord className="mr-2" />
                            <span>Join Community</span>
                          </div>
                          <div className="flex items-center text-blue-300">
                            <FaTwitter className="mr-2" />
                            <span>Follow Updates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            {/* Important Notes */}
            <AnimatedElement animation="fadeIn" delay={1.4}>
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">Important Notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-100">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Join our Discord for real-time updates during the launch process</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>The one-hour maintenance window ensures proper system configuration</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Bot will be ready for first users after maintenance completes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p>Start using WalletBud with your newly acquired $BONE tokens</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `
      }} />
    </div>
  );
};

export default LaunchProcess;
