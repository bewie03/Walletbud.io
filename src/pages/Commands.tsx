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
  FaBell,
  FaArrowLeft,
  FaDog,
  FaDice,
  FaNetworkWired,
  FaBullhorn,
  FaShieldAlt,
  FaBinoculars 
} from 'react-icons/fa';

const CommandCard = ({ command, onPreviewClick }: { command: any, onPreviewClick: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [] = useState(false);

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
          details: "Send a small verification amount to prove ownership, then choose a unique name for your wallet. This grants you a verified badge and bone 🦴 for your first wallet."
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
          details: "Fill the feeding bowl with 5 ADA! The duration is set by project owners, with longer periods resulting in bigger prize pools. 75% of the pool goes to the winner, 15% goes to the treasury, and 10% is buried in $burnsnek."
        };
      case '/notifications':
        return {
          title: 'Toggle Notifications',
          desc: 'Manage wallet notifications',
          details: "This command is designed so you can toggle your wallets transaction notifications without needing to remove them from your list. We have also included a global button if you need to mute or unmute all of them."
        };
      case '/train':
        return {
          title: 'Train Your Pup',
          desc: 'Customize your pup personality',
          details: "This is one of our most exciting features! Train and customize your own pup's personality to create a unique monitoring experience. Your pup will interact with you based on the personality traits you choose."
        };
      case '/loyalty':
        return {
          title: 'Loyalty Rankings',
          desc: 'View longest BONE holders',
          details: "Check out who our most loyal BONE holders are! This command shows holders ranked by how long they've held their tokens. Stay tuned for special benefits for our most loyal community members."
        };
      case '/guess':
        return {
          title: 'Guess Game',
          desc: 'Participate in guess game',
          details: "Try your luck at guessing the number generated by admins! Successfully guessing the number will earn you a special prize. Keep an eye out for when new rounds start."
        };
      case '/trace <address>':
        return {
          title: 'Trace Wallet',
          desc: 'Track wallet interactions',
          details: "Analyze a wallet's transaction history to discover connected addresses and interaction patterns. This powerful tracking tool helps identify linked wallets and understand transaction networks."
        };
      case '/announce <message>':
        return {
          title: 'Announce',
          desc: 'Send message to wallet watchers',
          details: "As a verified wallet owner, send an announcement to everyone watching your wallet. Perfect for project owners to communicate important updates, upcoming transactions, or general announcements to their community."
        };
      case '/track <policy id>':
        return {
          title: 'Track Token',
          desc: 'Monitor token transactions',
          details: "Project owners can use this command to track their token's transactions in their Discord server. Simply set up the channel and ADA amount threshold, and you'll receive notifications for all purchases meeting your criteria."
        };
      case 'admin':
        return {
          title: 'Admin Controls',
          desc: 'System maintenance tools',
          details: "Our comprehensive admin controls help maintain system health and ensure smooth operation. These tools allow our team to monitor performance, manage resources, and implement updates efficiently to provide the best possible service to our community."
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
      case '/train':
        return <FaDog className="text-blue-200 text-2xl" />;
      case '/loyalty':
        return <span className="text-blue-200 text-2xl">🦴</span>;
      case '/guess':
        return <FaDice className="text-blue-200 text-2xl" />;
      case '/trace <address>':
        return <FaNetworkWired className="text-blue-200 text-2xl" />;
      case '/announce <message>':
        return <FaBullhorn className="text-blue-200 text-2xl" />;
      case '/track <policy id>':
        return <FaBinoculars className="text-blue-200 text-2xl" />;
      case 'admin':
        return <FaShieldAlt className="text-blue-200 text-2xl" />;
      default:
        return <FaQuestionCircle className="text-blue-200 text-2xl" />;
    }
  };

  const usage = getUsageDetails(command.cmd);

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
              {getCommandIcon(command.cmd)}
            </div>
            
            <div className="ml-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white">{command.name}</h3>
                {/* Preview Button */}
                <button 
                  className="bg-blue-800/50 text-blue-200 px-4 py-1.5 rounded-xl text-sm border border-blue-700/50 hover:bg-blue-700/50 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreviewClick();
                  }}
                >
                  Preview
                </button>
              </div>
              <div className="bg-blue-800 rounded-xl px-4 py-2 mb-4 inline-block border border-blue-700">
                <code className="text-blue-200 font-mono">{command.cmd}</code>
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
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const commands = [
    {
      name: 'Add Wallet',
      cmd: '/add <address>',
      description: 'Start tracking a Cardano wallet address',
    },
    {
      name: 'Verify Wallet',
      cmd: '/verifywallet <address> <name>',
      description: 'Prove you own the wallet and give it a name',
    },
    {
      name: 'Remove Wallet',
      cmd: '/remove <address>',
      description: 'Stop tracking selected wallets',
    },
    {
      name: 'List Wallets',
      cmd: '/list',
      description: 'See all tracked wallets',
    },
    {
      name: 'Train Your Pup',
      cmd: '/train',
      description: 'Customize your pup personality',
    },
    {
      name: 'Global Stats',
      cmd: '/stats',
      description: 'View community statistics',
    },
    {
      name: 'Help',
      cmd: '/help',
      description: 'Learn about available commands',
    },
    {
      name: 'Top Watched',
      cmd: '/topwatched',
      description: 'See the most tracked wallets',
    },
    {
      name: 'Search Wallets',
      cmd: '/search <query>',
      description: 'Find wallets and users',
    },
    {
      name: 'Toggle Notifications',
      cmd: '/notifications',
      description: 'Manage wallet notifications',
    },
    {
      name: 'Uptime',
      cmd: '/uptime',
      description: 'Check if bot is running normally',
    },
    {
      name: 'Activity Rank',
      cmd: '/rank',
      description: 'Check transaction ranking',
    },
    {
      name: 'Loyalty Rankings',
      cmd: '/loyalty',
      description: 'View longest BONE holders',
    },
    {
      name: 'Purge Messages',
      cmd: '/purge',
      description: 'Clean up old bot messages',
    },
    {
      name: 'Feeding Bowl',
      cmd: '/bowl',
      description: 'Fill the feeding bowl',
    },
    {
      name: 'Guess Game',
      cmd: '/guess',
      description: 'Participate in guess game',
    },
    {
      name: 'Trace Wallet',
      cmd: '/trace <address>',
      description: 'Track wallet interactions',
    },
    {
      name: 'Announce',
      cmd: '/announce <message>',
      description: 'Send message to wallet watchers',
    },
    {
      name: 'Track Token',
      cmd: '/track <policy id>',
      description: 'Monitor token transactions',
    },
    {
      name: 'Admin Controls',
      cmd: 'admin',
      description: 'System maintenance tools',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      {/* Hero Section */}
      <div className="w-full bg-blue-900 backdrop-sm pb-8 border-b border-blue-700">
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
                <CommandCard 
                  command={command}
                  onPreviewClick={() => setSelectedPreview(command.cmd)}
                />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedPreview && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center" style={{ zIndex: 9999 }}>
          <div className="relative w-[800px] max-w-[90vw] max-h-[80vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedPreview(null)}
              className="fixed top-8 right-8 bg-blue-900 text-blue-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors z-50 text-xl"
            >
              ✕
            </button>
            <div className="inline-block rounded-3xl border-2 border-blue-500/50">
              <img
                src={`/images/commands/${selectedPreview.replace(/[<>]/g, '').split(' ')[0].substring(1)}${selectedPreview.includes('track') ? '.gif' : '.png'}`}
                alt={`Preview of ${selectedPreview}`}
                className="w-full h-auto rounded-3xl object-contain"
                style={{ maxHeight: '80vh' }}
                onError={(e) => {
                  e.currentTarget.src = '/images/commands/default.png';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commands;
