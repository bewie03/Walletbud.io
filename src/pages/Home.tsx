import { Link } from 'react-router-dom';
import AnimatedElement from '../components/AnimatedElement';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Your Personal Cardano Wallet Assistant
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Get real time DM notifications for your Cardano wallet. Track ADA transactions, token transfers, and NFT movements directly through DM.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instant Notifications */}
            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Instant DM Alerts</h3>
                <p className="text-blue-100">
                  Get immediate DM notifications for all your wallet activity. Never miss an important transaction or movement in your Cardano wallet.
                </p>
              </div>
            </AnimatedElement>

            {/* Real-Time Updates */}
            <AnimatedElement animation="slideUp" delay={0.6}>
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Comprehensive Tracking</h3>
                <p className="text-blue-100">
                  Monitor everything from ADA transactions to token transfers and NFT movements. Get detailed insights about all your wallet activity in real-time.
                </p>
              </div>
            </AnimatedElement>

            {/* Security */}
            <AnimatedElement animation="slideUp" delay={0.8}>
              <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Security</h3>
                <p className="text-blue-100">
                  Built with security first design. Private DM only commands, no sensitive data storage, and smart rate limiting to protect against abuse.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedElement animation="fadeIn" delay={1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Get Started in 3 Simple Steps
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <AnimatedElement animation="slideRight" delay={1.2}>
              <div className="relative">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Get $BONE Tokens</h3>
                  <p className="text-blue-100 mb-4">
                    Hold required $BONE tokens in your Cardano wallet to access the service.
                  </p>
                  <Link
                    to="/bone"
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            {/* Step 2 */}
            <AnimatedElement animation="slideUp" delay={1.4}>
              <div className="relative">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Join Discord</h3>
                  <p className="text-blue-100 mb-4">
                    Join our Discord server and start a DM with the WalletBud bot.
                  </p>
                  <a
                    href="https://discord.gg/hnwJFkuU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    Join Discord →
                  </a>
                </div>
              </div>
            </AnimatedElement>

            {/* Step 3 */}
            <AnimatedElement animation="slideLeft" delay={1.6}>
              <div className="relative">
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Add Your Wallet</h3>
                  <p className="text-blue-100 mb-4">
                    Use the /add command in a DM to start tracking your wallet.
                  </p>
                  <Link
                    to="/commands"
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    View Commands →
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Quick Start Note */}
          <AnimatedElement animation="fadeIn" delay={1.8}>
            <div className="mt-12 text-center">
              <p className="text-lg text-blue-100">
                Need help? Check our <Link to="/faq" className="text-white hover:text-blue-200">FAQ</Link> or join the Discord community.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Home;
