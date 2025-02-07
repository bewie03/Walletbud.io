import AnimatedElement from '../components/AnimatedElement';
import { FaArrowRight } from 'react-icons/fa';

const Guide = () => {
  const steps = [
    {
      number: '01',
      title: 'Get BONE Tokens',
      description: 'Purchase $BONE tokens for roughly the cost of 20 ADA from a DEX for your primary wallet.',
      link: '/bone',
      linkText: 'Buy Tokens'
    },
    {
      number: '02',
      title: 'Join Discord',
      description: 'Join the WalletPup Discord server to access the bot.',
      link: 'https://discord.gg/walletpup',
      linkText: 'Join Server',
      isExternal: true
    },
    {
      number: '03',
      title: 'Add the Bot',
      description: 'Authorize WalletPup bot to send you private notifications.',
      link: 'https://discord.gg/walletpup',
      linkText: 'Authorize Bot',
      isExternal: true
    },
    {
      number: '04',
      title: 'Add Primary Wallet',
      description: 'Use /add command with the wallet containing your BONE tokens.',
      link: '/commands',
      linkText: 'View Commands'
    },
    {
      number: '05',
      title: 'Verify Wallet',
      description: 'Use /verifywallet to prove ownership of your primary wallet.',
      link: '/commands',
      linkText: 'View Commands'
    },
    {
      number: '06',
      title: 'Add Additional Wallets',
      description: 'Add up to 9 more wallets with /add - no BONE tokens needed.',
      link: '/commands',
      linkText: 'View Commands'
    },
    {
      number: '07',
      title: 'Automatic Tracking',
      description: 'Tracking begins immediately. Use /list to see your tracked wallets.',
      link: '/commands',
      linkText: 'View Commands'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Getting Started
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Follow these steps to set up WalletPup
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -left-4 top-0 w-8 h-8 flex items-center justify-center bg-blue-900 rounded-full">
                    <span className="text-sm font-bold text-blue-20">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-8">
                    <a
                      href={step.link}
                      target={step.isExternal ? '_blank' : '_self'}
                      rel={step.isExternal ? 'noopener noreferrer' : ''}
                      className="block bg-blue-900 rounded-lg p-4 border border-blue-700 hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-blue-200 mt-1">{step.description}</p>
                        </div>
                        <FaArrowRight className="w-4 h-4 text-blue-400 ml-4 flex-shrink-0" />
                      </div>
                    </a>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-0 top-8 bottom-0 w-px bg-blue-700 -mb-2" />
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Help Text */}
          <AnimatedElement delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-blue-200">
                Need help? Use <span className="text-white font-mono">/help</span> in Discord or ask in the{' '}
                <a 
                  href="https://discord.gg/walletpup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  server
                </a>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Guide;
