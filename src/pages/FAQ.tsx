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
      question: "What is WalletBud?",
      answer: "WalletBud is a Discord bot that monitors Cardano wallet addresses and sends you instant notifications about their activity. We were inspired by an earlier project of the same name, but we're a new team that has built everything from scratch with improved reliability and sustainability."
    },
    {
      question: "What are the token requirements?",
      answer: "You need $BONE tokens to use WalletBud. The required amount adjusts with market value but will always cost approximately 20 ADA worth of tokens to use the service. This ensures fair access for everyone while rewarding early adopters as the token value grows."
    },
    {
      question: "How do I add my wallet?",
      answer: "Send the bot a DM with /add followed by your wallet address and a name you choose. For example: /add addr1... MyWallet. We only accept commands through DMs to keep your information private."
    },
    {
      question: "What types of notifications can I receive?",
      answer: "You get DM notifications when: ADA moves in or out of your wallet, tokens transfer, NFTs change hands, or if your $BONE balance gets too low. Everything is sent through DMs for security."
    },
    {
      question: "Is WalletBud secure?",
      answer: "Yes! We take security seriously. All commands work only in private messages, we never ask for or store sensitive info, and we only need your public wallet address. We also limit how often commands can be used to prevent abuse."
    },
    {
      question: "Can I track multiple wallets?",
      answer: "Yes! You can track up to 5 wallets at once if you have enough $BONE tokens (approximately 20 ADA worth per wallet). Use /add for each wallet and give them different names. Use /list to see all your wallets, and /removeall to stop tracking all of them."
    },
    {
      question: "What happens if I don't have enough tokens?",
      answer: "Your wallet is checked for $BONE tokens every 6 hours. If you don't have approximately 20 ADA worth of tokens, your wallet will be automatically removed from tracking and you'll receive a DM notification. You'll need to add your wallet again with the required token amount to resume tracking."
    },
    {
      question: "Will the token requirement change?",
      answer: "Yes, the required token amount adjusts with market value to maintain a consistent entry cost of approximately 20 ADA worth of $BONE tokens. This means early adopters can benefit from token value growth while new users can always join at a fair price."
    },
    {
      question: "How reliable is the notification system?",
      answer: "Our system sends updates quickly and stays online consistently. We manage the number of notifications to prevent spam and make sure important updates get through first."
    },
    {
      question: "What other features are available?",
      answer: "Beyond basic tracking, you can use /topwatched to see which wallets are most popular among users, /stats to check your tracking stats, and /balance to quickly see ADA amounts in all your tracked wallets."
    },
    {
      question: "How do I get support?",
      answer: "Join our Discord server for help. You can also use /help in a DM with the bot to see all available commands and how to use them."
    },
    {
      question: "Is there a limit on how often I can use commands?",
      answer: "Yes, all commands have cooldowns to prevent abuse and ensure fair usage for everyone. You'll be notified if you hit a cooldown limit."
    },
    {
      question: "What if I encounter issues or bugs?",
      answer: "Join our Discord server where we post regular service updates. We also have a dedicated bug report channel where you can report any issues you encounter."
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
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Frequently Asked Questions
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                Everything you need to know about WalletBud
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="w-full bg-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedElement key={index} animation="fadeIn" delay={index * 0.1}>
                <div
                  className="bg-blue-900 rounded-lg border border-blue-700 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
                      <span 
                        className="text-blue-400 transform transition-transform duration-300"
                        style={{
                          transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      >
                        ▼
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-blue-100">{faq.answer}</p>
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
