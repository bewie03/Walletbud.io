import AnimatedElement from '../components/AnimatedElement';
import { FaBone, FaDiscord, FaWallet, FaCheck, FaPlus, FaChartLine, FaArrowLeft } from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GuideCard = ({ step, index }: { step: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AnimatedElement animation="fadeIn" delay={index * 0.1}>
      <div 
        className="relative w-full h-[300px] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative transform-style-3d transition-transform duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
              {/* Icon Background */}
              <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                <step.icon className="text-blue-200 text-2xl" />
              </div>
              
              <div className="ml-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 font-mono text-sm">Step {step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 text-lg mb-4">{step.description}</p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
              {/* Back Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
                <FaArrowLeft className="text-blue-200 text-2xl" />
              </div>
              
              <div className="ml-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <div className="flex-1 space-y-3">
                  {step.details.map((detail: string, idx: number) => (
                    <div key={idx} className="text-gray-300 text-base flex items-baseline">
                      <span className="text-[#4f88e3] mr-2 text-lg">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedElement>
  );
};

const Guide = () => {
  const steps = [
    {
      number: '01',
      title: 'Get BONE Tokens',
      description: 'Purchase $BONE tokens from a DEX for your primary wallet.',
      details: [
        'Visit a supported DEX platform',
        'Purchase required amount of $BONE',
        'Keep tokens in your primary wallet',
        'Requirements decrease with market cap',
        'Never increases once lowered'
      ],
      icon: FaBone
    },
    {
      number: '02',
      title: 'Join Discord',
      description: 'Join our Discord and add WalletPup as an app.',
      details: [
        'Join the Discord server',
        'Verify yourself to access channels',
        'Add WalletPup as an app',
        'This allows the bot to DM you',
        'Required for transaction alerts'
      ],
      icon: FaDiscord
    },
    {
      number: '03',
      title: 'Add Primary Wallet',
      description: 'Use /add to register your wallet with BONE tokens.',
      details: [
        'Use /add <wallet_address>',
        'Must contain required $BONE tokens',
        'This becomes your primary wallet',
        'Get crown 👑 after verification',
        'Complete verification within 15 mins'
      ],
      icon: FaWallet
    },
    {
      number: '04',
      title: 'Verify Ownership',
      description: 'Prove ownership of your primary wallet with /verify.',
      details: [
        'Use /verify command',
        'Follow verification steps',
        'Send small verification amount',
        'Confirms wallet ownership',
        'Unlocks additional features'
      ],
      icon: FaCheck
    },
    {
      number: '05',
      title: 'Add More Wallets',
      description: 'Add up to 19 additional wallets - no BONE needed.',
      details: [
        'Use /add for each wallet',
        'No $BONE tokens required',
        'Track up to 20 wallets total',
        'Same tracking features',
        'Optional verification'
      ],
      icon: FaPlus
    },
    {
      number: '06',
      title: 'Start Tracking',
      description: 'Tracking starts automatically for all added wallets.',
      details: [
        'Instant transaction alerts',
        'AI personality commentary',
        'NFT tracking included',
        'Access to raffles & events',
        'Use /list to view your wallets'
      ],
      icon: FaChartLine
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      {/* Hero Section */}
      <div className="w-full bg-blue-900 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Getting Started
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Your guide to joining the pack
              </p>
              <p className="mt-2 text-sm text-blue-300 ">
              Click on any guide card to view detailed information

</p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <GuideCard key={index} step={step} index={index} />
            ))}
          </div>

          {/* Help Text */}
          <AnimatedElement delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-blue-200 text-lg">
                Need a helping paw? Use <span className="text-white font-mono">/help</span> in Discord or join our{' '}
                <a 
                  href="https://discord.com/invite/d99FBA64Qf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  friendly pack
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
