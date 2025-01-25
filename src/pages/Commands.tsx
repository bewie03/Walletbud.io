// Commands page - Updated 21 Jan 2025
import AnimatedElement from '../components/AnimatedElement';

const Commands = () => {
  const commands = [
    {
      name: 'Add Wallet',
      command: '/add <address>',
      description: 'Add a Cardano wallet address to your tracking list',
      details: [
        'Add any Cardano wallet with reqruied BONE to your tracking list.',
        'Requires approximately 20 ADA worth of BONE tokens',
        'Track up to 5 wallets with sufficient token balance',
      ],
    },
    {
      name: 'Verify Wallet',
      command: '/verifywallet <address> <name>',
      description: 'Verify your wallet to get a custom name',
      details: [
        'Send exact ADA amount specified by bot',
        'Custom name (up to 32 characters)',
        'Special platform recognition',
      ],
    },
    {
      name: 'Remove Wallet',
      command: '/remove <address>',
      description: 'Remove a specific wallet from your tracking list.',
      details: [
        'Stop tracking a specific wallet address',
        'Notifications stop immediately',
        'Can add back anytime with required token balance',
      ],
    },
    {
      name: 'Remove All Wallets',
      command: '/removeall',
      description: 'Remove all your tracked wallets at once.',
      details: [
        'Remove all wallets from your tracking list.',
        'This will stop all notifications.',
        'This action cannot be undone.',
      ],
    },
    {
      name: 'List Wallets',
      command: '/list',
      description: 'View all wallets you\'re currently tracking.',
      details: [
        'Shows all your currently tracked wallets',
        'Displays wallet addresses',
        'Shows how many tracking slots you have used',
      ],
    },
    {
      name: 'Stats',
      command: '/stats',
      description: 'View global WalletPup statistics.',
      details: [
        'Total global users tracking wallets',
        'Total wallets being tracked',
        'Total transactions monitored',
      ],
    },
    {
      name: 'Balance',
      command: '/balance',
      description: 'Show ADA balance for all your tracked wallets.',
      details: [
        'Quick view of all wallet balances',
        'Updates in real time',
        'Shows total ADA across all wallets',
      ],
    },
    {
      name: 'Help',
      command: '/help',
      description: 'View all available commands and their usage.',
      details: [
        'Lists all available commands',
        'Shows command usage examples',
        'Explains command requirements',
      ],
    },
    {
      name: 'Top Watched Wallets',
      command: '/topwatched',
      description: 'View the most tracked wallets across all users.',
      details: [
        'See trending wallets',
        'Community tracking insights',
        'Discover popular addresses',
      ],
    },
    {
      name: 'Search',
      command: '/search <query>',
      description: 'Search for wallets and usernames across the platform.',
      details: [
        'Search for verified usernames',
        'Find wallet addresses',
        'Quick access to wallet info',
      ],
    },
    {
      name: 'Uptime',
      command: '/uptime',
      description: 'Shows how long the bot has been running since its last restart.',
      details: [
        'View bot uptime duration',
        'Check last restart time',
        'Monitor bot stability',
      ],
    },
    {
      name: 'Rank',
      command: '/rank <address>',
      description: 'Shows a wallet\'s ranking among tracked wallets based on transaction count.',
      details: [
        'Compare wallet activity rankings',
        'View transaction count metrics',
        'Track wallet performance',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-16">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                Commands
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl hover:scale-105 transition-transform duration-300">
                All available bot commands and their usage
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commands.map((command, index) => (
              <AnimatedElement key={index} animation="fadeIn" delay={index * 0.1}>
                <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 mb-4 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 hover:scale-105 transition-transform duration-300">{command.name}</h3>
                  <div className="bg-blue-800/50 rounded px-3 py-2 mb-3 inline-block hover:scale-105 transition-transform duration-300">
                    <code className="text-blue-200">{command.command}</code>
                  </div>
                  <p className="text-blue-100 mb-4 hover:scale-105 transition-transform duration-300">{command.description}</p>
                  <ul className="list-disc list-inside text-blue-200 space-y-2">
                    {command.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="hover:scale-105 transition-transform duration-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
