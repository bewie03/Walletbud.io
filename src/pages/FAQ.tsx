import { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is WalletPup?",
      answer: "WalletPup is the first Cardano wallet tracker with AI powered commentary! Our Discord bot not only monitors wallet addresses but provides entertaining insights about your transactions. Every time there is activity in your wallet, WalletPup delivers both the transaction details and witty personalized commentary about what just happened."
    },
    {
      question: "How do I set up my wallets?",
      answer: "Start by using /add with your first wallet address - this becomes your primary wallet and needs to hold BONE tokens. After adding it, verify ownership using the /verifywallet command. Once your primary wallet is verified, you can use /add to track up to 9 additional wallets - these don't need verification or BONE tokens."
    },
    {
      question: "What makes WalletPup unique?",
      answer: "WalletPup is the first Cardano wallet tracker with AI powered commentary! Our bot does not just notify you about transactions, it analyzes them and provides entertaining insights and comments about your wallet activity. Whether you are making trades, collecting NFTs, or receiving tokens, WalletPup adds a fun, personal touch to every notification."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Yes! We take security seriously. All commands work only in private messages, we never ask for or store sensitive info, and we only need your public wallet address. We also limit how often commands can be used to prevent abuse."
    },
    {
      question: "What happens if my primary wallet's BONE balance drops too low?",
      answer: "If your primary wallet's BONE balance drops below the required amount or if you remove the primary wallet, all your additional wallets will be automatically removed. To continue tracking additional wallets, you'll need to maintain the required BONE balance in your primary wallet."
    },
    {
      question: "Can I track multiple wallets?",
      answer: "Yes! After setting up and verifying your primary wallet (which requires BONE tokens), you can track up to 9 additional wallets. Just use the /add command for each wallet you want to track. These additional wallets don't need verification or BONE tokens."
    },
    {
      question: "What happens if I don't have enough tokens in my primary wallet?",
      answer: "Your primary wallet is checked for BONE tokens every 6 hours. If you don't have the required amount of tokens, your primary wallet will be automatically removed from tracking and you'll receive a DM notification. You'll need to add your primary wallet again with the required token amount to resume tracking."
    },
    {
      question: "Does the token requirement change?",
      answer: "Yes, while the entry cost remains fixed at around 20 ADA, the amount of $BONE tokens you receive adjusts with market cap. This ensures fair access for all users while rewarding early adopters who may receive more tokens for the same entry cost when market cap is lower."
    },
    {
      question: "How do I get support?",
      answer: "Join our Discord server for help. You can also use /help in a DM with the bot to see all available commands and how to use them."
    },
    {
      question: "What happens to the verification fees?",
      answer: "The ADA fees sent during wallet verification are used to fund our infrastructure, including API costs, database hosting, and website maintenance. This helps us maintain a reliable and high-performance service for all users."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                FAQ
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Frequently Asked Questions
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div
                  className="bg-blue-900 rounded-lg border border-blue-700 overflow-hidden hover:scale-[1.02] transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-4 cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <span className={`text-blue-400 text-2xl transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </div>
                  <div className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-4 pt-0">
                      <p className="text-blue-200">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
