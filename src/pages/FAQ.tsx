// FAQ - Updated 07 March 2025
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
      answer: "WalletPup is Your Cardano Watchdog, a bot delivering real time wallet notifications and analytics for projects, users, and communities on Discord, with Telegram and Twitter coming soon."
    },
    {
      question: "What are $BONE tokens?",
      answer: "$BONE powers WalletPup, unlocking premium features. Hold ~50 ADA worth for basic access; as market cap grows, fewer tokens unlock more slots."
    },
    {
      question: "How many wallets can I track?",
      answer: "Track up to 25 wallets with $BONE. Start small, and slots increase as WalletPup grows."
    },
    {
      question: "How do I start using WalletPup?",
      answer: "Buy $BONE, join our Discord, use /add to track your wallet, and verify with /verifywallet."
    },
    {
      question: "How do I track token transactions?",
      answer: "Use /track to monitor token purchases in your server. Set policy ID and ADA threshold."
    },
    {
      question: "Can I customize my pup?",
      answer: "Yes, use /train to tailor your pup’s personality for notifications and analytics."
    },
    {
      question: "How is $BONE distributed?",
      answer: "95% (950M) for public use, 5% (50M) for development and partnerships."
    },
    {
      question: "Do $BONE tokens hold value?",
      answer: "Yes, $BONE stays tradeable in your wallet, unlike subscriptions."
    },
    {
      question: "What’s the Feeding Bowl?",
      answer: "A 5 ADA entry prize pool: 80% to the winner, 10% to treasury, 10% burned as $BONE."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Yes, we use public wallet data and secure Discord notifications."
    },
    {
      question: "How do I get support?",
      answer: "Use /help in bot DMs or join our Discord for help."
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
        <div className="w-full bg-blue-900/80 pb-8 border-b border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="slideDown" delay={0.2}>
              <div className="text-center pt-32 pb-16">
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                  FAQs
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                  Answers for Your Cardano Watchdog
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
                  Still curious? Our pack’s got your back in{' '}
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