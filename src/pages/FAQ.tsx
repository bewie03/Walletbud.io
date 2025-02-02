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
      question: "How do I add my wallet?",
      answer: "Send the bot a DM with /add followed by your wallet address and a name you choose. For example: /add addr1... MyWallet. We only accept commands through DMs to keep your information private."
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
      question: "Can I track multiple wallets?",
      answer: "Yes! You can track up to 10 wallets at once if you have enough $BONE tokens (approximately 10 ADA worth per wallet). Use /add for each wallet and give them different names. Use /list to see all your wallets, and /removeall to stop tracking all of them."
    },
    {
      question: "What happens if I don't have enough tokens?",
      answer: "Your wallet is checked for $BONE tokens every 6 hours. If you don't have approximately 10 ADA worth of tokens, your wallet will be automatically removed from tracking and you'll receive a DM notification. You'll need to add your wallet again with the required token amount to resume tracking."
    },
    {
      question: "Does the token requirement change?",
      answer: "Yes, the required token amount adjusts with market value to maintain a consistent entry cost of approximately 10 ADA worth of $BONE tokens. This means early adopters can benefit from token value growth while new users can always join at a fair price."
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
                Everything you need to know about WalletPup
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
