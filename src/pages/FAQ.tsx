import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import FloatingBones from '../components/FloatingBones';
import { FaPaw } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is WalletPup?",
      answer: "WalletPup is a Cardano wallet tracker that delivers transaction updates through Discord DMs with entertaining commentary from unique pup personalities."
    },
    {
      question: "How many wallets can I track?",
      answer: "Track up to 25 Cardano wallets with one verified wallet holding BONE tokens. You can either start with a smaller amount and let market growth increase your slots, or get all 25 slots immediately by holding enough BONE."
    },
    {
      question: "What are BONE tokens?",
      answer: "BONE is our utility token used to access WalletPup services. Entry cost is fixed at ~50 ADA worth of BONE (2.5 ADA per wallet). As market cap grows, the required token amount decreases while maintaining the same ADA value."
    },
    {
      question: "How is BONE distributed?",
      answer: "95% for public distribution (950M BONE) and 5% for development and partnerships (50M BONE)."
    },
    {
      question: "Can I customize my pup's personality?",
      answer: "Yes! Use the /train command to customize your pup's personality traits. If you haven't set a custom personality, your pup will use one of 50 unique personalities from our doghouse. Each default personality has its own charm and style of delivering updates."
    },
    {
      question: "What's the feeding bowl?",
      answer: "A community prize pool where verified wallets can win rewards. 75% to winner, 15% to treasury, and 10% used to buy and burn BONE tokens."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Yes! We only use public wallet addresses and private Discord DMs for notifications."
    },
    {
      question: "How do I start using WalletPup?",
      answer: "Get BONE tokens > Join the discord > Use /add to add your BONE wallet > /verify its yours"
    },
    {
      question: "Do BONE tokens maintain value?",
      answer: "Yes! Unlike subscriptions, BONE tokens remain in your wallet and can be sold at any time."
    },
    {
      question: "How do I get support?",
      answer: "Use /help in bot DMs or join our Discord community for assistance."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full bg-blue-900/80 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="slideDown" delay={0.2}>
              <div className="text-center pt-32 pb-16">
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                  FAQs
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                  Common questions from our pack
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="w-full bg-blue-800/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <AnimatedElement key={index} animation="fadeIn" delay={index * 0.1}>
                  <div className="bg-blue-900 rounded-xl border border-blue-700 overflow-hidden hover:border-blue-600 transition-colors duration-300">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-800/50 transition-colors duration-300"
                    >
                      <span className="text-lg font-semibold text-white">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FaPaw className="text-blue-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.3, ease: "easeOut" },
                              opacity: { duration: 0.2, delay: 0.1 }
                            }
                          }}
                          exit={{ 
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: "easeIn" },
                              opacity: { duration: 0.2 }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-blue-100">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            {/* Help Text */}
            <AnimatedElement delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-blue-200 text-lg">
                  Still have questions? Our friendly pack is always ready to help in{' '}
                  <a 
                    href="https://discord.com/invite/d99FBA64Qf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Discord
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

export default FAQ;
