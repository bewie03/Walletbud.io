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
          details: [
            'Paste your full Cardano address after /add',
            'Verify within 15 minutes for first wallet',
            'Track as many wallets as you like'
          ]
        };
      case '/verifywallet <address> <name>':
        return {
          title: 'Verify Ownership',
          desc: 'Prove you own the wallet and give it a name',
          details: [
            'Choose a wallet from the menu',
            'Send a small verification amount',
            'Get a ✓ badge and crown 👑 for first wallet'
          ]
        };
      case '/list':
        return {
          title: 'View Wallets',
          desc: 'See all your tracked wallets',
          details: [
            'Verified wallets show custom names',
            'Primary wallet marked with 👑',
            'Click any wallet for detailed stats'
          ]
        };
      case '/remove <address>':
        return {
          title: 'Remove Wallets',
          desc: 'Stop tracking selected wallets',
          details: [
            'Choose wallets from the menu',
            'Removing primary (👑) clears all',
            'Can add them back anytime'
          ]
        };
      case '/stats':
        return {
          title: 'View Stats',
          desc: 'Check wallet tracking statistics',
          details: [
            'See your tracking summary',
            'View global system stats',
            'Updates live as changes happen'
          ]
        };
      case '/help':
        return {
          title: 'Get Help',
          desc: 'Learn about available commands',
          details: [
            'Shows all commands you can use',
            'Explains what each one does',
            'Lists any special requirements'
          ]
        };
      case '/topwatched':
        return {
          title: 'Popular Wallets',
          desc: 'See the most tracked wallets',
          details: [
            'Top 10 most watched wallets',
            'Shows names if verified',
            'Live watcher count for each'
          ]
        };
      case '/search <discord_username>':
        return {
          title: 'Search Wallets',
          desc: 'Find wallets by their name',
          details: [
            'Type part of the name to search',
            'Shows up to 25 matches',
            'Only finds verified wallets'
          ]
        };
      case '/uptime':
        return {
          title: 'Bot Status',
          desc: 'Check if bot is running normally',
          details: [
            'Shows current uptime',
            'Last maintenance time',
            'System health status'
          ]
        };
      case '/rank <address>':
        return {
          title: 'Check Rank',
          desc: 'See how popular a wallet is',
          details: [
            'Shows total watchers',
            'Global ranking position',
            'Updates in real-time'
          ]
        };
      case '/purge':
        return {
          title: 'Clear Messages',
          desc: 'Clean up old bot messages',
          details: [
            'Removes recent bot messages',
            'Up to 100 at once',
            'Keeps your chat tidy'
          ]
        };
      case '/raffle <amount>':
        return {
          title: 'Join Raffle',
          desc: 'Enter to win the daily prize',
          details: [
            'Must have verified wallet',
            'Send 4.8-5 ADA to enter',
            'Winner picked at midnight UTC'
          ]
        };
      default:
        return {
          title: 'Command Help',
          desc: 'Get command information',
          details: [
            'Type /help for command list',
            'Click cards for details',
            'All commands are case-sensitive'
          ]
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
      className="relative w-full h-[240px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full flex flex-col">
            {/* Command Icon Background */}
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
              {getCommandIcon(command.command)}
            </div>
            
            <div className="ml-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">{command.name}</h3>
              <div className="bg-blue-800/50 rounded-xl px-4 py-2 mb-4 inline-block border border-blue-700/50">
                <code className="text-blue-200 font-mono">{command.command}</code>
              </div>
              <p className="text-blue-100 text-lg flex-1">{command.description}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
            {/* Back Icon */}
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12">
              <FaArrowLeft className="text-blue-200 text-2xl" />
            </div>
            
            <div className="ml-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{usage.title}</h3>
                <p className="text-blue-300 text-sm">{usage.desc}</p>
              </div>
              
              <div className="flex-1 space-y-3">
                {usage.details.map((detail, idx) => (
                  <div key={idx} className="text-gray-300 text-base flex items-baseline">
                    <span className="text-[#4f88e3] mr-2 text-lg">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
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
      <div className="w-full bg-blue-900/50 backdrop-blur-sm pb-8">
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
