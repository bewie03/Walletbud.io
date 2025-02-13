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
      answer: "WalletPup connects your Cardano wallets to Discord, providing entertaining AI commentary on all your transactions. Our 50 unique AI personalities make tracking fun, while our interactive commands and regular community events keep you engaged. Track ADA, tokens, and NFTs while enjoying witty insights in your DMs!"
    },
    {
      question: "What makes WalletPup unique?",
      answer: "Our 50 AI personalities deliver entertaining commentary on every transaction. Each has their own style and humor, making wallet tracking fun and engaging!"
    },
    {
      question: "What can I track with WalletPup?",
      answer: "Track up to 20 Cardano wallets! Get entertaining AI commentary on all ADA, token, and NFT transactions directly in your Discord DMs."
    },
    {
      question: "What community features do you offer?",
      answer: "Regular raffles, interactive commands, contests and community events. Our doggie bowl raffle and active Discord keep the community engaged!"
    },
    {
      question: "How do I start using WalletPup?",
      answer: "Join our Discord and check out our guide page at walletpup.com/guide to get started! We'll show you how to link your Cardano wallet and start enjoying entertaining AI commentary."
    },
    {
      question: "Is WalletPup secure?",
      answer: "Yes! We only use private Discord DMs and only need public wallet addresses to track activity and provide commentary."
    },
    {
      question: "Can I track multiple wallets?",
      answer: "Yes! Verify your primary wallet with BONE tokens, then track up to 19 more wallets. Each gets the same fun AI commentary!"
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
