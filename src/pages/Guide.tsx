import AnimatedElement from '../components/AnimatedElement';
import { FaBone, FaDiscord, FaWallet, FaCheck, FaPlus, FaArrowLeft, FaDog,FaStar, FaBinoculars  } from 'react-icons/fa';
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
            <div className={`relative bg-blue-900/90 rounded-2xl p-8 border ${step.optional ? 'border-blue-500' : 'border-blue-700'} hover:scale-[1.02] transition-all duration-300 shadow-lg h-full`}>
              {/* Icon Background */}
              <div className={`absolute -top-4 -left-4 ${step.optional ? 'bg-blue-500' : 'bg-blue-700'} rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12`}>
                <step.icon className="text-blue-200 text-2xl" />
              </div>
              
              <div className="ml-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 font-mono text-sm">Step {step.number}</span>
                  {step.optional && (
                    <span className="text-blue-300 text-sm px-2 py-1 bg-blue-800 rounded-full">Optional</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 text-lg mb-4">{step.description}</p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className={`relative bg-blue-900/90 rounded-2xl p-8 border ${step.optional ? 'border-blue-500' : 'border-blue-700'} hover:scale-[1.02] transition-all duration-300 shadow-lg h-full`}>
              {/* Back Icon */}
              <div className={`absolute -top-4 -left-4 ${step.optional ? 'bg-blue-500' : 'bg-blue-700'} rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12`}>
                <FaArrowLeft className="text-blue-200 text-2xl" />
              </div>
              
              <div className="ml-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  {step.optional && (
                    <span className="text-blue-300 text-sm px-2 py-1 bg-blue-800 rounded-full">Optional</span>
                  )}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {step.details}
                </p>
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
      description: 'Purchase $BONE tokens for your primary wallet.',
      details: "Visit a supported DEX to purchase $BONE tokens. The number of wallets you can track (up to 25) depends on your BONE holdings. Required amount decreases with market cap growth.",
      icon: FaBone
    },
    {
      number: '02',
      title: 'Join Discord',
      description: 'Join our Discord and add WalletPup as an app.',
      details: "Join our Discord server, complete verification, and add WalletPup as an app to enable direct messaging. This setup ensures you receive instant transaction alerts and updates about your wallets.",
      icon: FaDiscord
    },
    {
      number: '03',
      title: 'Add Primary Wallet',
      description: 'Use /add to register your wallet with BONE tokens.',
      details: "Register your wallet containing $BONE tokens using the /add command. Once verified, this becomes your primary wallet and you'll receive a bone badge, unlocking all WalletPup features.",
      icon: FaWallet
    },
    {
      number: '04',
      title: 'Verify Ownership',
      description: 'Complete verification to unlock all features.',
      details: "Send a small verification transaction to prove wallet ownership. This quick process enables all premium features and grants you a verified status, showing you're a trusted member of our community.",
      icon: FaCheck
    },
    {
      number: '05',
      title: 'Train Your Pup',
      description: 'Customize your pup personality.',
      details: "Use /train to write a clear prompt describing how you want your pup to interact and communicate. Don't feel like training? Your pup comes with a friendly default personality. Remember its about the trainer not the pup.",
      icon: FaDog,
      optional: true
    },
    {
      number: '06',
      title: 'Add More Wallets',
      description: 'Track up to 25 wallets based on your BONE.',
      details: "Track up to 25 wallets total based on your BONE holdings. The more BONE you hold, the more wallets you can track. You can either start small and let market growth increase your slots, or get all 25 slots right away by holding enough BONE.",
      icon: FaPlus
    },
    {
      number: '07',
      title: 'Setup Complete',
      description: 'You\'re all set to start using WalletPup!',
      details: "Congratulations! You've completed the setup process. Use /help anytime to see all available commands. Join the fun with community features like the /bowl prize pool, check /loyalty rankings, or try your luck with /guess.",
      icon: FaStar,
      optional: false
    },
    {
      number: '08',
      title: 'Track Token',
      description: 'Monitor token transactions in your Discord server',
      details: "Once setup is complete, use /track in your server channel where you want purchase notifications. Just set your token's Policy ID and ADA threshold, then submit to start monitoring.",
      icon: FaBinoculars,
      optional: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full bg-blue-900/80 pb-8 border-b border-blue-700">
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
        <div className="w-full bg-blue-800/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
    </div>
  );
};

export default Guide;
