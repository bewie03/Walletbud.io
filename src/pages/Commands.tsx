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
  FaShieldAlt,
  FaBell,
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
          details: "Use /add to begin tracking. This lets our loyal pups monitor your wallet's activity and provide updates. First wallet must be the one with the BONE tokens."
        };
      case '/verifywallet <address> <name>':
        return {
          title: 'Verify Ownership',
          desc: 'Prove you own the wallet and give it a name',
          details: "Send a small verification amount to prove ownership, then choose a unique name for your wallet. This grants you a verified badge and crown for your first wallet."
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
          desc: 'See all tracked wallets',
          details: "View your list of wallets being tracked. Click on any wallet to see detailed stats including total transactions, number of watchers, and ADA balance."
        };
      case '/stats':
        return {
          title: 'Global Stats',
          desc: 'View community statistics',
          details: "Check out the global WalletPup community stats including total users, wallets tracked, ADA won from bowls, and total transactions."
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
      case '/search <query>':
        return {
          title: 'Search',
          desc: 'Find wallets and users',
          details: "Find interesting wallets in the community to learn from their strategies or discover potential investment opportunities. Great for networking with other BONE holders and staying updated on market trends."
        };
      case '/uptime':
        return {
          title: 'Uptime',
          desc: 'Check if bot is running normally',
          details: "Verify that WalletPup is functioning properly. This command shows you our uptime status and any ongoing maintenance, ensuring you never miss important wallet updates."
        };
      case '/rank':
        return {
          title: 'Activity Rank',
          desc: 'Check transaction ranking',
          details: "See how active you are compared to other community members. Active members often have better insights into market movements and contribute more to community discussions."
        };
      case '/purge':
        return {
          title: 'Purge Messages',
          desc: 'Clean up old bot messages',
          details: "Keep your Discord channel tidy by removing old WalletPup messages. This helps maintain a clean chat environment while preserving important recent updates."
        };
      case '/bowl':
        return {
          title: 'Feeding Bowl',
          desc: 'Fill the feeding bowl',
          details: "Fill the feeding bowl with 5 ADA! The duration is set by project owners, with longer periods resulting in bigger prize pools. 80% of the pool goes to the winner, 10% is used to burn BONE tokens, and 10% goes to the treasury for community content."
        };
      case '/notifications':
        return {
          title: 'Toggle Notifications',
          desc: 'Manage wallet notifications',
          details: "Sometimes notifications can be overwhelming, especially for active traders. Toggle them on when you need to stay alert about important transactions, or turn them off when you want to reduce Discord noise. You're always in control of what you want to be notified about."
        };
      case '/admin':
        return {
          title: 'Admin Commands',
          desc: 'View admin command list',
          details: "Admin commands help maintain a healthy community. Blacklisting protects against spam and abuse, requirements ensure fair participation, and bowl controls let us adjust rewards based on community growth."
        };
      default:
        return {
          title: 'Unknown Command',
          desc: 'Command not found',
          details: "This command isn't recognized. Use /help to see all available commands and their proper usage. Our pups are here to assist you!"
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
      case '/search <query>':
        return <FaSearch className="text-blue-200 text-2xl" />;
      case '/uptime':
        return <FaClock className="text-blue-200 text-2xl" />;
      case '/rank':
        return <FaTrophy className="text-blue-200 text-2xl" />;
      case '/purge':
        return <FaTrash className="text-blue-200 text-2xl" />;
      case '/bowl':
        return <FaGift className="text-blue-200 text-2xl" />;
      case '/notifications':
        return <FaBell className="text-blue-200 text-2xl" />;
      case '/admin':
        return <FaShieldAlt className="text-blue-200 text-2xl" />;
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
      description: 'See all tracked wallets',
    },
    {
      name: 'Global Stats',
      command: '/stats',
      description: 'View community statistics',
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
      command: '/search <query>',
      description: 'Find wallets and users',
    },
    {
      name: 'Uptime',
      command: '/uptime',
      description: 'Check if bot is running normally',
    },
    {
      name: 'Activity Rank',
      command: '/rank',
      description: 'Check transaction ranking',
    },
    {
      name: 'Purge Messages',
      command: '/purge',
      description: 'Clean up old bot messages',
    },
    {
      name: 'Feeding Bowl',
      command: '/bowl',
      description: 'Fill the feeding bowl (5 ADA)',
    },
    {
      name: 'Toggle Notifications',
      command: '/notifications',
      description: 'Manage wallet notifications',
    },
    {
      name: 'Admin Commands',
      command: '/admin',
      description: 'View admin command list',
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
