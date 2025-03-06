// FAQ - Updated 05 March 2025
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
      answer: "WalletPup is Your Cardano Watchdog a bot delivering real-time notifications and analytics for Cardano wallets. It’s built for projects, solo users, and communities, barking out updates and digging up insights via Discord, with Telegram and Twitter on the way. Customize your pup for fun, actionable data!"
    },
    {
      question: "How many wallets can I track?",
      answer: "Track up to 25 Cardano wallets with one verified wallet holding $BONE tokens. Start with a small amount and let market growth boost your slots, or grab all 25 slots right away with enough $BONE perfect for solo tracking or community insights."
    },
    {
      question: "What are $BONE tokens?",
      answer: "$BONE is our utility token that powers WalletPup. Hold ~50 ADA worth to unlock basic features (2.5 ADA per wallet slot). As our market cap grows, you’ll need fewer $BONE for the same access, scaling up your tracking for projects or personal use."
    },
    {
      question: "How is $BONE distributed?",
      answer: "95% for public distribution (950M $BONE) and 5% for development and partnerships (50M $BONE)."
    },
    {
      question: "Can I customize my pup's personality?",
      answer: "Yes! Use the /train command to shape your pup’s personality for tailored notifications and analytics. No custom setup? Your pup picks from 50+ unique personalities in our doghouse, each with a fun twist on delivering updates."
    },
    {
      question: "What's the Feeding Bowl?",
      answer: "A community prize pool where verified wallets can win big! Entry is 5 ADA, with 75% to the winner, 15% to the treasury, and 10% burned as $BONE. It’s a fun way to boost server vibes and token value."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Absolutely! We stick to public wallet data and private Discord DMs or server channels for notifications your info stays safe with the pack."
    },
    {
      question: "How do I start using WalletPup?",
      answer: "Grab $BONE tokens > Join our Discord > Use /add to track your $BONE wallet > Verify it’s yours with /verifywallet. Start sniffing out updates and insights in no time!"
    },
    {
      question: "Do $BONE tokens maintain value?",
      answer: "Yes! Unlike subscriptions, $BONE stays in your wallet and can be traded anytime your key to analytics that grows with you."
    },
    {
      question: "How do I track token transactions in my Discord server?",
      answer: "Project owners can use /track to monitor token transactions in their server no $BONE needed! Set your policy ID and ADA threshold, and WalletPup will bark out purchase alerts in your chosen channel for free."
    },
    {
      question: "How do I get support?",
      answer: "Drop a /help in bot DMs or join our Discord pack for quick assistance from the community."
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