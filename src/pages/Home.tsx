// Home page - Updated 21 Jan 2025
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/AnimatedElement';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1e40af]">
      {/* Header Section with darker blue */}
      <div className="w-full bg-blue-900 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-8">
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
              <div className="relative bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Get $BONE Tokens</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Hold required $BONE tokens in your Cardano wallet to access the service.
                </p>
                <Link
                  to="/bone"
                  className="text-white hover:text-blue-200 text-lg font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </AnimatedElement>

            {/* Step 2 */}
            <AnimatedElement animation="slideUp" delay={1.4}>
              <div className="relative bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Join Discord</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Join our Discord server and start a DM with the WalletBud bot.
                </p>
                <a
                  href="https://discord.gg/hnwJFkuU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 text-lg font-medium"
                >
                  Join Discord →
                </a>
              </div>
            </AnimatedElement>

            {/* Step 3 */}
            <AnimatedElement animation="slideLeft" delay={1.6}>
              <div className="relative bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Add Your Wallet</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Use the /add command in a DM to start tracking your wallet.
                </p>
                <Link
                  to="/commands"
                  className="text-white hover:text-blue-200 text-lg font-medium"
                >
                  View Commands →
                </Link>
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
