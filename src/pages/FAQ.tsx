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
      answer: "WalletPup connects your Cardano wallets to Discord, providing entertaining commentary from our loyal pups on all your transactions. Our 50 unique pup personalities make tracking fun, while our interactive commands and regular community events keep you engaged. Track ADA, tokens, and NFTs while enjoying witty insights in your DMs!"
    },
    {
      question: "What makes WalletPup unique?",
      answer: "Our 50 pup personalities deliver entertaining commentary on every transaction. Each has their own style and humor, making wallet tracking fun and engaging!"
    },
    {
      question: "What can I track with WalletPup?",
      answer: "Track up to 20 Cardano wallets! Get entertaining commentary from our loyal pups on all ADA, token, and NFT transactions directly in your Discord DMs."
    },
    {
      question: "What community features do you offer?",
      answer: "Regular raffles, interactive commands, contests and community events. Our doggie bowl raffle and active Discord keep the community engaged!"
    },
    {
      question: "How do I start using WalletPup?",
      answer: "Join our Discord and check out our guide page at walletpup.com/guide to get started! We'll show you how to link your Cardano wallet and start enjoying entertaining commentary from our pups."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Yes! We only use private Discord DMs and only need public wallet addresses to track activity and provide commentary."
    },
    {
      question: "Can I track multiple wallets?",
      answer: "Yes! Verify your primary wallet with BONE tokens, then track up to 19 more wallets. Each gets the same fun commentary from our pups!"
    },
    {
      question: "What's the doggie bowl raffle?",
      answer: "A fun community event! Enter 5 ADA once per verified wallet. 80% goes to winner, 20% to community treasury."
    },
    {
      question: "How do I get support?",
      answer: "Join our Discord community or use /help in bot DMs. Our community and team are here to help!"
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
