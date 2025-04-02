import { motion } from 'framer-motion';
import { FaUsers, FaWallet, FaCheckCircle, FaCoins, FaExchangeAlt, FaTrophy, FaChartLine, FaClock, FaUserFriends } from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';
import { MetaTags } from '../components/MetaTags';
import { useState } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
}

const StatCard = ({ icon, title, value, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-blue-900 rounded-2xl border border-blue-700 p-6 hover:scale-[1.02] transition-all duration-300"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-blue-800 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-blue-200 text-sm font-medium">{title}</h3>
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

const Stats = () => {
  const [stats, setStats] = useState<{
    walletPupStats: {
      users: string;
      wallets: string;
      verifiedWallets: string;
      trackedTokens: string;
      transactions: string;
      adaWon: string;
    };
    boneStats: {
      marketCap: string;
      price: string;
      age: string;
      holders: string;
    };
  } | null>(null);

  return (
    <>
      <MetaTags 
        title="WalletPup Stats"
        description="WalletPup and BONE Token Statistics"
      />
      <div className="min-h-screen bg-[#1e40af] relative overflow-y-auto overflow-x-hidden">
        <FloatingBones />
        
        {/* Header Section */}
        <div className="w-full bg-blue-900/60 backdrop-blur-sm pb-16 shadow-lg border-b border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center pt-24 pb-8"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl hover:scale-[1.02] transition-all duration-300">
                Platform Statistics
              </h1>
              <p className="mt-4 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:text-2xl md:max-w-3xl">
                Real time insights into WalletPup's ecosystem
              </p>
            </motion.div>
          </div>
        </div>

        {/* WalletPup Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard 
                icon={<FaUsers className="text-blue-200 text-2xl" />}
                title="Total Users"
                value={stats?.walletPupStats.users || '0'}
                delay={0.1}
              />
              <StatCard 
                icon={<FaWallet className="text-blue-200 text-2xl" />}
                title="Total Wallets"
                value={stats?.walletPupStats.wallets || '0'}
                delay={0.2}
              />
              <StatCard 
                icon={<FaCheckCircle className="text-blue-200 text-2xl" />}
                title="Verified Wallets"
                value={stats?.walletPupStats.verifiedWallets || '0'}
                delay={0.3}
              />
              <StatCard 
                icon={<FaCoins className="text-blue-200 text-2xl" />}
                title="Tracked Tokens"
                value={stats?.walletPupStats.trackedTokens || '0'}
                delay={0.4}
              />
              <StatCard 
                icon={<FaExchangeAlt className="text-blue-200 text-2xl" />}
                title="Transactions"
                value={stats?.walletPupStats.transactions || '0'}
                delay={0.5}
              />
              <StatCard 
                icon={<FaTrophy className="text-blue-200 text-2xl" />}
                title="ADA Won"
                value={`₳${stats?.walletPupStats.adaWon || '0'}`}
                delay={0.6}
              />
            </div>
          </motion.div>

          {/* BONE Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={<FaChartLine className="text-blue-200 text-2xl" />}
                title="Market Cap"
                value={stats?.boneStats.marketCap || '$0'}
                delay={0.7}
              />
              <StatCard 
                icon={<FaCoins className="text-blue-200 text-2xl" />}
                title="Price"
                value={stats?.boneStats.price || '$0'}
                delay={0.8}
              />
              <StatCard 
                icon={<FaClock className="text-blue-200 text-2xl" />}
                title="Age"
                value={stats?.boneStats.age || '0 days'}
                delay={0.9}
              />
              <StatCard 
                icon={<FaUserFriends className="text-blue-200 text-2xl" />}
                title="Holders"
                value={stats?.boneStats.holders || '0'}
                delay={1.0}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Stats;