import AnimatedElement from '../components/AnimatedElement';
import { FaExclamationTriangle, FaDiscord, FaTwitter, FaGlobe, FaArrowDown } from 'react-icons/fa';

const LaunchProcess = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Launch Process
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Clear steps for our launch on Snek.fun
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-6">
            {/* Step 1 */}
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-700 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
                    Website and Social Launch
                  </h3>
                </div>
                <div className="ml-14">
                  <ul className="list-disc text-blue-100 space-y-2">
                    <li>Website goes live with complete documentation</li>
                    <li>Discord server opens for community</li>
                    <li>Official announcements begin on Twitter</li>
                  </ul>
                  <div className="mt-4 flex space-x-4">
                    <div className="flex items-center text-blue-300">
                      <FaDiscord className="mr-2" /> Discord
                    </div>
                    <div className="flex items-center text-blue-300">
                      <FaTwitter className="mr-2" /> Twitter
                    </div>
                    <div className="flex items-center text-blue-300">
                      <FaGlobe className="mr-2" /> Website
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <div className="flex justify-center">
              <FaArrowDown className="text-blue-400 text-2xl animate-bounce" />
            </div>

            {/* Step 2 */}
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-700 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
                    Token Launch on Snek.fun
                  </h3>
                </div>
                <div className="ml-14">
                  <ul className="list-disc text-blue-100 space-y-2">
                    <li>Token goes live on Snek.fun platform</li>
                    <li>Initial liquidity pool established</li>
                    <li>Trading begins immediately</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>

            <div className="flex justify-center">
              <FaArrowDown className="text-blue-400 text-2xl animate-bounce" />
            </div>

            {/* Step 3 */}
            <AnimatedElement animation="fadeIn" delay={0.6}>
              <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-700 rounded-full p-2 w-10 h-10 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
                    Bot Integration
                  </h3>
                </div>
                <div className="ml-14">
                  <div className="bg-yellow-900/30 border border-yellow-700/50 rounded p-4 mb-4">
                    <div className="flex items-center space-x-2 text-yellow-300 mb-2">
                      <FaExclamationTriangle />
                      <span className="font-semibold">Note:</span>
                    </div>
                    <p className="text-yellow-100">Bot will be offline for approximately 1 hour after launch for final setup</p>
                  </div>
                  <ul className="list-disc text-blue-100 space-y-2">
                    <li>Integration of official $BONE token policy ID</li>
                    <li>Configuration of live token tracking</li>
                    <li>Bot resumes normal operation</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>

            {/* Why Snek.fun Section */}
            <AnimatedElement animation="fadeIn" delay={0.8}>
              <div className="mt-12 bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
                  Why We Chose Snek.fun
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Secure and proven launch platform</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Built-in anti-bot protection</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Professional token management</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Transparent process</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Immediate liquidity</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-blue-400">•</div>
                      <p className="hover:scale-105 transition-transform duration-300">Fair distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchProcess;
