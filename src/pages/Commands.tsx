// Commands page • Updated 21 Jan 2025
import AnimatedElement from '../components/AnimatedElement';
import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingBones from '../components/FloatingBones';
import { 
  FaWallet, 
  FaCheck, 
  FaTimes, 
  FaList, 
  FaChartBar, 
  FaQuestionCircle,
  FaStar,
  FaSearch,
  FaClock,
  FaTrophy,
  FaTrash,
  FaGift,
  FaArrowLeft 
} from 'react-icons/fa';

const CommandCard = ({ command }: { command: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getUsageDetails = (cmd: string) => {
    switch (cmd) {
      case '/add <address>':
        return {
          title: 'Add Wallet',
          desc: 'Start tracking a Cardano wallet address',
          details: "Copy your Cardano wallet address and use /add to begin tracking. This lets our AI companions monitor your wallet's activity and provide updates. Perfect for keeping tabs on your investments."
        };
      case '/verifywallet <address> <name>':
        return {
          title: 'Verify Ownership',
          desc: 'Prove you own the wallet and give it a name',
          details: "Send a small verification amount to prove ownership, then choose a unique name for your wallet. This grants you a verified badge and crown for your first wallet, showing you're a trusted member."
        };
      case '/remove <address>':
        return {
          title: 'Remove Wallet',
          desc: 'Stop tracking selected wallets',
          details: "Use this command when you no longer want to track a wallet. Simply provide the wallet address, and we'll stop monitoring it. You can always add it back later if you change your mind."
        };
      case '/list':
        return {
          title: 'View Wallets',
          desc: 'See all your tracked wallets',
          details: "Get a quick overview of all your tracked wallets, their verification status, and custom names. This helps you manage multiple wallets and ensure they're all being monitored correctly."
        };
      case '/stats':
        return {
          title: 'Stats',
          desc: 'Check wallet tracking statistics',
          details: "View detailed statistics about your tracked wallets, including total value, transaction history, and activity trends. Perfect for understanding your portfolio's performance at a glance."
        };
      case '/help':
        return {
          title: 'Help',
          desc: 'Learn about available commands',
          details: "Access a comprehensive guide to all available commands and features. Whether you're new or need a refresher, this command explains everything you can do with WalletPup."
        };
      case '/topwatched':
        return {
          title: 'Top Watched',
          desc: 'See the most tracked wallets',
          details: "Discover which wallets are most popular in our community. This gives you insights into trending wallets and helps you identify potential opportunities in the Cardano ecosystem."
        };
      case '/search <discord_username>':
        return {
          title: 'Search Wallets',
          desc: 'Find wallets by their name',
          details: "Looking for a specific wallet? Search by Discord username to find verified wallets in our community. Great for connecting with other members and tracking interesting wallets."
        };
      case '/uptime':
        return {
          title: 'Uptime',
          desc: 'Check if bot is running normally',
          details: "Verify that WalletPup is functioning properly. This command shows you our uptime status and any ongoing maintenance, ensuring you never miss important wallet updates."
        };
      case '/rank <address>':
        return {
          title: 'Rank',
          desc: 'See how popular a wallet is',
          details: "Check how frequently a wallet is tracked by our community. Higher ranks indicate more community interest, helping you identify notable wallets in the Cardano ecosystem."
        };
      case '/purge':
        return {
          title: 'Purge Messages',
          desc: 'Clean up old bot messages',
          details: "Keep your Discord channel tidy by removing old WalletPup messages. This helps maintain a clean chat environment while preserving important recent updates."
        };
      case '/raffle <amount>':
        return {
          title: 'Raffle',
          desc: 'Enter to win the daily prize',
          details: "Join our daily community raffle for a chance to win prizes. Simply specify your entry amount - the more you enter, the better your chances of winning exciting rewards!"
        };
      default:
        return {
          title: 'Unknown Command',
          desc: 'Command not found',
          details: "This command isn't recognized. Use /help to see all available commands and their proper usage. Our AI companions are here to assist you!"
        };
    }
  };

  const getCommandIcon = (cmd: string) => {
    switch (cmd) {
      case '/add <address>':
        return <FaWallet className="text-blue-200 text-2xl" />;
      case '/verifywallet <address> <name>':
        return <FaCheck className="text-blue-200 text-2xl" />;
      case '/remove <address>':
        return <FaTimes className="text-blue-200 text-2xl" />;
      case '/list':
        return <FaList className="text-blue-200 text-2xl" />;
      case '/stats':
        return <FaChartBar className="text-blue-200 text-2xl" />;
      case '/help':
        return <FaQuestionCircle className="text-blue-200 text-2xl" />;
      case '/topwatched':
        return <FaStar className="text-blue-200 text-2xl" />;
      case '/search <discord_username>':
        return <FaSearch className="text-blue-200 text-2xl" />;
      case '/uptime':
        return <FaClock className="text-blue-200 text-2xl" />;
      case '/rank <address>':
        return <FaTrophy className="text-blue-200 text-2xl" />;
      case '/purge':
        return <FaTrash className="text-blue-200 text-2xl" />;
      case '/raffle <amount>':
        return <FaGift className="text-blue-200 text-2xl" />;
      default:
        return <FaQuestionCircle className="text-blue-200 text-2xl" />;
    }
  };

  const usage = getUsageDetails(command.command);

  return (
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
          <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
            {/* Command Icon Background */}
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
              {getCommandIcon(command.command)}
            </div>
            
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-white mb-3">{command.name}</h3>
              <div className="bg-blue-800 rounded-xl px-4 py-2 mb-4 inline-block border border-blue-700">
                <code className="text-blue-200 font-mono">{command.command}</code>
              </div>
              <p className="text-blue-100 text-lg">{command.description}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative bg-blue-900 rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
            {/* Back Icon */}
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
              <FaArrowLeft className="text-blue-200 text-2xl" />
            </div>
            
            <div className="ml-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{usage.title}</h3>
                <p className="text-blue-300 text-sm">{usage.desc}</p>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed">
                {usage.details}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Commands = () => {
  const commands = [
    {
      name: 'Add Wallet',
      command: '/add <address>',
      description: 'Start tracking a Cardano wallet address',
    },
    {
      name: 'Verify Wallet',
      command: '/verifywallet <address> <name>',
      description: 'Prove you own the wallet and give it a name',
    },
    {
      name: 'Remove Wallet',
      command: '/remove <address>',
      description: 'Stop tracking selected wallets',
    },
    {
      name: 'List Wallets',
      command: '/list',
      description: 'See all your tracked wallets',
    },
    {
      name: 'Stats',
      command: '/stats',
      description: 'Check wallet tracking statistics',
    },
    {
      name: 'Help',
      command: '/help',
      description: 'Learn about available commands',
    },
    {
      name: 'Top Watched',
      command: '/topwatched',
      description: 'See the most tracked wallets',
    },
    {
      name: 'Search Wallets',
      command: '/search <discord_username>',
      description: 'Find wallets by their name',
    },
    {
      name: 'Uptime',
      command: '/uptime',
      description: 'Check if bot is running normally',
    },
    {
      name: 'Rank',
      command: '/rank <address>',
      description: 'See how popular a wallet is',
    },
    {
      name: 'Purge Messages',
      command: '/purge',
      description: 'Clean up old bot messages',
    },
    {
      name: 'Raffle',
      command: '/raffle <amount>',
      description: 'Enter to win the daily prize',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      {/* Hero Section */}
      <div className="w-full bg-blue-900 backdrop-blur-sm pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Commands
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                All available bot commands and their usage
              </p>
              <p className="mt-2 text-blue-300 text-sm">
                Click on any command card to view detailed usage information
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commands.map((command, index) => (
              <AnimatedElement key={index} animation="fadeIn" delay={index * 0.1}>
                <CommandCard command={command} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
