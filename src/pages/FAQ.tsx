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
    // General WalletPup Ecosystem
    {
      question: "What is WalletPup?",
      answer: "WalletPup is a comprehensive ecosystem of three interconnected platforms for the Cardano blockchain: Wallie Discord Bot for community management, BoneBoard Marketplace for freelance services, and Rovex Twitter Bot for market analytics. All powered by the $BONE token."
    },
    {
      question: "What are the three WalletPup tools?",
      answer: "1) Wallie - Discord bot for wallet tracking and community analytics, 2) BoneBoard - Freelance marketplace connecting projects with talent, 3) Rovex - AI-powered Twitter bot for project promotion (in development)."
    },
    {
      question: "What are $BONE tokens?",
      answer: "$BONE is the utility token that powers the entire WalletPup ecosystem. It provides access to premium features across all three platforms including wallet tracking, marketplace discounts, and AI-powered analytics."
    },
    {
      question: "What's the total supply of $BONE?",
      answer: "Total supply is 1 billion $BONE tokens with a fair distribution: 95% (950M tokens) for public distribution and 5% (50M tokens) for development & partnerships."
    },
    {
      question: "How many $BONE tokens do I need?",
      answer: "For Wallie Discord Bot: You need roughly 50 ADA worth of $BONE tokens. For BoneBoard Marketplace: You pay $BONE to post job listings, projects, and funding campaigns. All pricing adjusts as market cap grows to maintain accessibility."
    },
    {
      question: "Do $BONE tokens hold value?",
      answer: "Yes, $BONE stays tradeable in your wallet, unlike subscriptions. You maintain ownership and can trade them anytime while accessing WalletPup features across all platforms."
    },

    // Wallie Discord Bot
    {
      question: "What is Wallie Discord Bot?",
      answer: "Wallie Discord Bot is WalletPup's intelligent Discord bot that provides wallet tracking, real-time analytics, and community engagement tools with over 20 commands. It serves solo users, projects, and communities with AI-powered insights."
    },
    {
      question: "How do I start using Wallie Discord Bot?",
      answer: "For Wallie: Buy $BONE tokens, join our Discord, use /verify to link your wallet, then use /add to track additional wallets. You can track up to 25 wallets total."
    },
    {
      question: "How does Wallie's token purchase tracking work?",
      answer: "In Wallie Discord Bot: Use /track to monitor token purchases in your server. Set the policy ID and ADA threshold, and your trained AI pup will post personalized commentary on all purchases above your specified amount."
    },
    {
      question: "What is Wallie's daily sentiment analysis?",
      answer: "In Wallie Discord Bot: Use /sentiment to get comprehensive daily reports on your server's activity including top 3 most active members, total messages, engagement metrics, and how your community ranks among others."
    },
    {
      question: "What's the Feeding Bowl in Wallie?",
      answer: "The Feeding Bowl is a feature in Wallie Discord Bot: A 5 ADA entry prize pool game where 80% goes to the winner, 10% to treasury, 10% burned as $BONE. It's a fun community engagement feature."
    },

    // BoneBoard Marketplace
    {
      question: "What is BoneBoard Marketplace?",
      answer: "BoneBoard Marketplace is WalletPup's Cardano-native freelance marketplace connecting projects with skilled professionals. It features job listings, project funding campaigns, and integrated payment systems supporting both ADA and $BONE."
    },
    {
      question: "What types of jobs are available on BoneBoard Marketplace?",
      answer: "BoneBoard Marketplace covers all disciplines: Social Media management, Design (UI/UX, NFT art, branding), Development (smart contracts, dApps), Content writing, Analytics, and Marketing. Anyone can post jobs by connecting their wallet."
    },
    {
      question: "How does project funding work on BoneBoard Marketplace?",
      answer: "On BoneBoard Marketplace: Projects can create funding campaigns with goals and deadlines, accepting ADA and $BONE contributions. All campaigns remain permanently visible for transparency, with anti-fraud protection through wallet verification."
    },
    {
      question: "What are featured job listings on BoneBoard?",
      answer: "On BoneBoard Marketplace: Projects can pay to feature their job listings at the top of the page for maximum visibility. Duration discounts available: 2 months (5% off), 3 months (10% off), 6 months (15% off), 12 months (20% off)."
    },
    {
      question: "How does BoneBoard prevent fraud?",
      answer: "BoneBoard tracks wallet addresses connected to campaigns to prevent self-funding, uses community reporting systems, and maintains transparent contribution histories for all campaigns."
    },
    {
      question: "Do project creators get discounts on BoneBoard Marketplace?",
      answer: "Yes! On BoneBoard Marketplace: Projects that create detailed project profiles receive a 20% discount on all job listing fees, encouraging regular engagement with the platform."
    },

    // Rovex Twitter Bot
    {
      question: "What is Rovex Twitter Bot?",
      answer: "Rovex Twitter Bot is WalletPup's AI-powered Twitter bot that promotes Cardano projects, learns from Discord interactions and transaction data, and connects users with BoneBoard opportunities. Currently in development, launching when Chakra AI agents are available."
    },
    {
      question: "How does Rovex Twitter Bot promote projects?",
      answer: "Rovex Twitter Bot uses advanced Chakra AI to analyze BoneBoard content, understand projects and opportunities, then promotes them through WalletPup's Twitter account with intelligent, contextually relevant content."
    },
    {
      question: "What AI technology powers Rovex Twitter Bot?",
      answer: "Rovex Twitter Bot leverages Chakra AI agents with multi-agent architecture, specialized for blockchain analysis, content creation, and community management. It learns continuously from Discord conversations and transaction patterns."
    },
    {
      question: "What insights will Rovex Twitter Bot provide?",
      answer: "Rovex Twitter Bot will offer DeFi analytics (TVL tracking, yield farming), NFT market intelligence (floor prices, trending collections), governance tracking (Catalyst proposals, stake pools), and comprehensive network health metrics."
    },
    {
      question: "How does Rovex Twitter Bot integrate with other WalletPup tools?",
      answer: "Rovex Twitter Bot monitors and understands all projects, job listings, and funding campaigns on BoneBoard Marketplace, then promotes these opportunities through Twitter. It also learns from Wallie Discord Bot interactions to better understand community needs."
    },

    // Technical & Support
    {
      question: "Is the WalletPup ecosystem secure?",
      answer: "Yes, we use public wallet data, secure Discord notifications, wallet verification systems, and comprehensive anti-fraud measures across all platforms. Your tokens remain in your wallet at all times."
    },
    {
      question: "How do the three platforms work together?",
      answer: "All platforms are unified under the $BONE token economy. Wallie provides community insights, BoneBoard connects talent with projects, and Rovex promotes opportunities. Data flows between platforms to create a comprehensive Cardano ecosystem experience."
    },
    {
      question: "How do I get support?",
      answer: "Use /help in Wallie bot DMs, join our Discord community, or visit our website. Each platform has dedicated support channels and comprehensive documentation."
    },
    {
      question: "What's the development roadmap?",
      answer: "Wallie Discord Bot is live and fully operational. BoneBoard Marketplace is launching next with full functionality. Rovex Twitter Bot will be released when Chakra AI agents are fully available, as it's built on that technology."
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
                  Still curious? Our pack's got your back in{' '}
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