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
      description: 'View global WalletBud statistics.',
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
        'Find specific wallet addresses',
        'Quick access to wallet information',
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
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                Commands
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl">
                All commands are DM only for your privacy and security
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {/* Commands */}
            <div>
              <AnimatedElement animation="fadeIn" delay={0.4}>
                <h2 className="text-3xl font-bold text-white mb-8">Commands (DM Only)</h2>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commands.map((command, index) => (
                  <AnimatedElement key={command.name} animation="fadeIn" delay={index * 0.1}>
                    <div className="bg-blue-900 p-6 rounded-lg border border-blue-700 h-[200px] flex flex-col transform hover:scale-[1.02] transition-all duration-300">
                      <div className="font-mono text-blue-200 text-lg mb-3">{command.command}</div>
                      <p className="text-blue-100 mb-2">{command.description}</p>
                      {command.details && (
                        <div className="text-blue-300 text-sm mt-auto">
                          {Array.isArray(command.details) ? (
                            command.details.map((detail, i) => (
                              <div key={i} className="mt-1">
                                {detail.startsWith('•') ? detail : detail}
                              </div>
                            ))
                          ) : (
                            <p>{command.details}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div>
              <AnimatedElement animation="fadeIn" delay={2.2}>
                <h2 className="text-3xl font-bold text-white mb-8">Real-time Notifications</h2>
              </AnimatedElement>
              <AnimatedElement animation="slideUp" delay={2.4}>
                <div className="bg-blue-900 rounded-lg p-6 border border-blue-700 transform hover:scale-[1.02] transition-all duration-300">
                  <p className="text-blue-100">Get instant DM notifications for:</p>
                  <div className="mt-2 text-sm text-blue-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      • ADA transactions<br />
                      • Token transfers<br />
                      • NFT movements
                    </div>
                    <div>
                      • Secure DM-based updates<br />
                      • Rate-limited notifications<br />
                      • Error notifications
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
