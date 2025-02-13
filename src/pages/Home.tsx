// Home page - Updated 21 Jan 2025
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingBones from '../components/FloatingBones';
import { FaBone, FaDiscord, FaTerminal } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="h-screen bg-[#1e40af] relative overflow-hidden flex flex-col">
      <FloatingBones />
      
      {/* Hero Section */}
      <div className="w-full bg-blue-900/95 backdrop-blur-sm pb-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-24 pb-8"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
              Your Loyal Wallet Companions
            </h1>
            <p className="mt-4 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:text-2xl md:max-w-3xl">
              Let our pack of AI personalities fetch your wallet updates with entertaining insights
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-1 flex items-center">
        <div className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-2">
                Get Started in 3 Simple Steps
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBone className="text-2xl" />,
                  title: "Fetch $BONE Tokens",
                  description: "Get your paws on some $BONE tokens to join our pack and access all our services.",
                  link: "/bone",
                  linkText: "Learn More →",
                  delay: 0.3
                },
                {
                  icon: <FaDiscord className="text-2xl" />,
                  title: "Join the Pack",
                  description: "Come play with us on Discord! Meet our AI pups and get ready for some tail wagging fun.",
                  link: "https://discord.gg/d99FBA64Qf",
                  linkText: "Join Discord →",
                  delay: 0.4
                },
                {
                  icon: <FaTerminal className="text-2xl" />,
                  title: "Mark Your Territory",
                  description: "Use /add command to register your wallets. Track up to 20 wallets with our faithful AI companions.",
                  link: "/commands",
                  linkText: "View Commands →",
                  delay: 0.5
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="group"
                >
                  <div className="relative bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500 transition-all duration-200 h-[240px] flex flex-col hover:scale-105 hover:shadow-lg">
                    {/* Icon Background */}
                    <div className="absolute -top-4 -left-4 bg-blue-700 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <div className="text-blue-200">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-blue-100 mb-4 text-sm">
                        {feature.description}
                      </p>
                      {feature.link.startsWith('http') ? (
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white hover:text-blue-200 text-base font-medium hover:translate-x-1 transition-all duration-200"
                        >
                          {feature.linkText}
                        </a>
                      ) : (
                        <Link
                          to={feature.link}
                          className="inline-flex items-center text-white hover:text-blue-200 text-base font-medium hover:translate-x-1 transition-all duration-200"
                        >
                          {feature.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Help Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-blue-900/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-blue-700/50 hover:border-blue-500 hover:shadow-lg transition-all duration-200">
                <p className="text-blue-100">
                  Need a helping paw? Check our{' '}
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                    <Link 
                      to="/faq" 
                      className="text-white hover:text-blue-200 font-medium hover:underline"
                    >
                      FAQ
                    </Link>
                  </motion.span>
                  {' '}or join our friendly pack on{' '}
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                    <a 
                      href="https://discord.gg/d99FBA64Qf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 font-medium hover:underline"
                    >
                      Discord
                    </a>
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
