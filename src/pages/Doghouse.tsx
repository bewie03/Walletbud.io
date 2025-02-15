import { useState, useMemo, createElement } from 'react';
import React from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { FaSearch, FaDog, FaBriefcase, FaPalette, FaLaptopCode, FaHeart, FaSmile } from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';
import { motion, AnimatePresence } from 'framer-motion';

interface Dog {
  name: string;
  title: string;
  description: string;
  category: string;
  story: string;
}

const categoryIcons = {
  professional: FaBriefcase,
  creative: FaPalette,
  tech: FaLaptopCode,
  lifestyle: FaHeart,
  personality: FaSmile,
  default: FaDog
};

const DogCard = ({ dog }: { dog: Dog }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[500px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative bg-blue-900 rounded-2xl border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
            {/* Image Section */}
            <div className="aspect-square w-full relative overflow-hidden rounded-t-2xl bg-blue-900 border-b border-blue-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaDog className="text-blue-400 text-7xl opacity-50 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative">
              <div className="absolute -top-16 right-6 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                {createElement(categoryIcons[dog.category as keyof typeof categoryIcons] || FaDog, {
                  className: "text-blue-200 text-2xl"
                } as React.SVGProps<SVGSVGElement>)}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{dog.name}</h3>
              <div className="text-lg font-semibold text-blue-300 mb-3">{dog.title}</div>
              <p className="text-blue-100">{dog.description}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative bg-blue-900 rounded-2xl border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg h-full">
            {/* Back Icon */}
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg transform -rotate-12 z-10">
              {createElement(categoryIcons[dog.category as keyof typeof categoryIcons] || FaDog, {
                className: "text-blue-200 text-2xl"
              } as React.SVGProps<SVGSVGElement>)}
            </div>
            
            {/* Square Main Section */}
            <div className="aspect-square w-full relative overflow-hidden rounded-t-2xl bg-blue-800 p-8 border-b border-blue-600">
              <div className="ml-6 h-full flex items-center">
                <p className="text-blue-100 text-xl leading-relaxed">{dog.story}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{dog.name}</h3>
              <div className="text-lg font-semibold text-blue-300">{dog.title}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Doghouse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const dogs: Dog[] = [
    {
      name: 'Afghan Hound',
      title: 'The Supermodel',
      description: '',
      category: 'lifestyle',
      story: "Strutting down the financial runway with unmatched grace, this elegant pup turns every budget review into a glamorous affair. Hair flips and fashionable advice come standard as they help make your wallet as fabulous as their flowing locks.",
    },
    {
      name: 'Akita',
      title: 'The Sensei',
      description: '',
      category: 'professional',
      story: "Ancient wisdom meets modern finance in this stoic master of money management. With calm confidence and tested experience, this master guide helps you find balance in your financial journey. Every move is measured, every decision purposeful.",
    },
    {
      name: 'Australian Cattle Dog',
      title: 'The Farmer',
      description: '',
      category: 'professional',
      story: "Herding your scattered expenses into perfect order with tireless dedication and a no nonsense attitude. Sharp eyes spot every stray dollar, keeping your finances moving in the right direction no matter how stubborn they might be.",
    },
    {
      name: 'Australian Shepherd',
      title: 'The Workaholic',
      description: '',
      category: 'professional',
      story: "Never stops grinding, not even for walkies. Sends emails at 3 AM, schedules meetings during lunch breaks, and dreams in spreadsheets. Their idea of a vacation is working remotely from a different coffee shop while checking market trends.",
    },
    {
      name: 'Basenji',
      title: 'The Startup Bro',
      description: '',
      category: 'tech',
      story: "Disrupting the status quo with quiet innovation and unconventional strategies. Does not bark about their success, just lets their effective financial moves do the talking. Always hustling for the next big thing in the market.",
    },
    {
      name: 'Basset Hound',
      title: 'The Hungover Dude',
      description: '',
      category: 'lifestyle',
      story: "Perpetually recovering from last night's investment celebrations, shuffling in late wearing shades indoors. Between naps and searching for aspirin, they somehow manage to give surprisingly solid financial advice. Just don't talk too loud.",
    },
    {
      name: 'Beagle',
      title: 'The Foodie',
      description: '',
      category: 'lifestyle',
      story: "With an unstoppable nose for the finest deals and tastiest investments, this culinary expert sniffs out the best value in any market. Every financial decision comes with a side of restaurant recommendations and foodie investment tips.",
    },
    {
      name: 'Bernese Mountain Dog',
      title: 'The Guide',
      description: '',
      category: 'professional',
      story: "Navigates the peaks and valleys of the market with steady confidence and unwavering reliability. Whether scaling investment heights or trekking through bear markets, they know exactly where to place each step for maximum returns.",
    },
    {
      name: 'Bichon Frise',
      title: 'The Karen',
      description: '',
      category: 'personality',
      story: "Demands to speak to every manager in a five mile radius about their service fees. Has strong opinions about everything and is not afraid to share them loudly. Will absolutely write a strongly worded email about that 2 cent fee and post a scathing review.",
    },
    {
      name: 'Black Russian Terrier',
      title: 'The Mobster',
      description: '',
      category: 'professional',
      story: "Makes offers nobody can refuse when it comes to savings plans. Runs a tight ship with their financial family, and always knows a guy who knows a guy. Keep your friends close, your accountant closer, and your emergency fund closest.",
    },
    {
      name: 'Border Collie',
      title: 'The Chess Master',
      description: '',
      category: 'professional',
      story: "Always thinking five moves ahead, this brilliant strategist sees patterns others miss. With laser focus and remarkable problem solving skills, they orchestrate your financial success like a grandmaster plotting their next market victory.",
    },
    {
      name: 'Boxer',
      title: 'The Clown',
      description: '',
      category: 'personality',
      story: "Always ready with a joke and a goofy grin to brighten up boring budget talks. Whether it is dad jokes during meetings or practical pranks in the office, they keep the mood light while still getting the job done. Watch for whoopee cushions!",
    },
    {
      name: 'Bullmastiff',
      title: 'The Rapper',
      description: '',
      category: 'creative',
      story: "Dropping hot financial bars and sick money beats with that signature flow. Every budget review turns into a freestyle session, and quarterly reports come in rhyme form. They have mad skills when it comes to making your portfolio grow, yo!",
    },
    {
      name: 'Chihuahua',
      title: 'The Rager',
      description: '',
      category: 'personality',
      story: "Zero chill, maximum attitude, and ready to throw down over every market fluctuation. Flies off the handle at the smallest dip and barks furiously at every suspicious transaction. Small package, nuclear level reactions. Just do not call them cute!",
    },
    {
      name: 'Chow Chow',
      title: 'The Grump',
      description: '',
      category: 'personality',
      story: "Perpetually unimpressed with your spending habits, judging every purchase with a signature scowl and disapproving head shake. Might seem grumpy on the outside, but deep down just wants your wallet to be as perfectly maintained as their coat.",
    },
    {
      name: 'Corgi',
      title: 'The Influencer',
      description: '',
      category: 'creative',
      story: "Living that content creator life with perfect lighting and curated aesthetics. Every financial tip comes with a sponsored post, promo code, and perfect camera angle. Do not forget to like, subscribe, and smash that investment button!",
    },
    {
      name: 'Dachshund',
      title: 'The Detective',
      description: '',
      category: 'professional',
      story: "Digging deep into financial mysteries with their keen nose for suspicious transactions. No expense can hide from their thorough investigation as they tunnel through every detail of your accounts with relentless determination.",
    },
    {
      name: 'Dalmatian',
      title: 'The Firefighter',
      description: '',
      category: 'professional',
      story: "Always first on the scene when your finances are burning down, sirens blazing. Rushes in to put out money emergencies and rescue your budget from disaster with practiced precision. Cool under pressure, quick to respond, ready to save.",
    },
    {
      name: 'Doberman',
      title: 'The Security Pro',
      description: '',
      category: 'professional',
      story: "Takes your financial security seriously, with military grade protection protocols. Always scanning for threats and running safety checks with unwavering focus. They have eyes everywhere and a sixth sense for scams. Your money is safe on their watch.",
    },
    {
      name: 'English Bulldog',
      title: 'The Caveman',
      description: '',
      category: 'lifestyle',
      story: "Keeps things simple with prehistoric wisdom. No fancy charts or big words, just straightforward financial advice that even a prehistoric pup could follow. Grunt once for save, grunt twice for invest, three times for diversify portfolio.",
    },
    {
      name: 'French Bulldog',
      title: 'The Hipster',
      description: '',
      category: 'lifestyle',
      story: "Only invests in obscure startups you have never heard of while sipping artisanal, ethically sourced coffee. Tracks expenses in a vintage leather journal using a handwritten fountain pen. Probably had that investment strategy before it was cool.",
    },
    {
      name: 'German Shepherd',
      title: 'The Soldier',
      description: '',
      category: 'professional',
      story: "Standing at attention with military precision, this disciplined pup runs finances like a well maintained machine. With tactical planning and unwavering dedication, they will march your budget through any battlefield toward financial victory.",
    },
    {
      name: 'Golden Retriever',
      title: 'The Coach',
      description: '',
      category: 'personality',
      story: "Your biggest financial cheerleader, always ready with encouragement and high fives for smart money moves. Celebrates your wins like Olympic medals and turns setbacks into comeback stories. Never gives up on your money goals, ever!",
    },
    {
      name: 'Great Dane',
      title: 'The Gym Bro',
      description: '',
      category: 'lifestyle',
      story: "Treats your portfolio like it's leg day, no skipping, no excuses, maximum gains only. Always ready to spot you through tough investments and celebrate with protein shakes. Do you even compound interest, bro? Let's get those financial gains!",
    },
    {
      name: 'Greyhound',
      title: 'The Gamer',
      description: '',
      category: 'tech',
      story: "Turning finance into an epic quest for high scores and achievement unlocks. Grinding for that financial XP and treating every investment like a boss battle. Ready player one, let's speed run this market to the moon! Game on!",
    },
    {
      name: 'Husky',
      title: 'The Screamer',
      description: '',
      category: 'personality',
      story: "Volume control? Never heard of it! Whether excited about market gains or warning about losses, their enthusiasm comes at maximum volume. Noise canceling headphones strongly recommended for all budget meetings and financial discussions.",
    },
    {
      name: 'Irish Wolfhound',
      title: 'The Rocker',
      description: '',
      category: 'creative',
      story: "This legendary financial advisor brings heavy metal energy to money management. Headbanging through market volatility and shredding through complex investments. Their portfolio goes up to eleven, and their financial advice is pure rock and roll!",
    },
    {
      name: 'Italian Greyhound',
      title: 'The Yoga Guy',
      description: '',
      category: 'lifestyle',
      story: "Finding zen in your financial flow with mindful money management and balanced budgets. Every investment decision comes with a side of deep breathing and a reminder to align your chakras with your checking account.",
    },
    {
      name: 'Jack Russell Terrier',
      title: 'The Hyper Kid',
      description: '',
      category: 'personality',
      story: "Bouncing off the walls with endless energy and enthusiasm for financial planning! Can't sit still during meetings but somehow manages to dig up amazing investment opportunities between zoomies. Sugar rush not included!",
    },
    {
      name: 'Labrador Retriever',
      title: 'The Clingy Friend',
      description: '',
      category: 'personality',
      story: "This devoted pup follows your financial journey with unwavering loyalty, sticking by your side through every transaction. Like a true best friend, they're always there when you need them. Maybe even a bit more than you'd expect!",
    },
    {
      name: 'Leonberger',
      title: 'The Surfer',
      description: '',
      category: 'lifestyle',
      story: "Catching waves and living the dream with financial strategies. They will help you ride the market swells and keep your money flowing with the tides. Totally gnarly financial moves included, dude!",
    },
    {
      name: 'Neapolitan Mastiff',
      title: 'The Nonna',
      description: '',
      category: 'personality',
      story: "This wrinkly wisdom dispenser treats your finances like a cherished family recipe. Always ready with sage advice, warm encouragement, and a secret ingredient for financial success passed down through generations. Pinched cheeks come standard!",
    },
    {
      name: 'Newfoundland',
      title: 'The Stoner',
      description: '',
      category: 'lifestyle',
      story: "Always relaxed and ready for deep conversations about the universe. Between munchie runs and gaming sessions, they drop some unexpectedly profound financial wisdom. Everything is chill with this laid back advisor.",
    },
    {
      name: 'Old English Mastiff',
      title: 'The Boomer',
      description: '',
      category: 'personality',
      story: "Back in their day, you could buy a house for five treats and a belly rub! Struggles with digital banking but has rock solid old school wisdom about saving. Still insists on keeping their emergency fund in bones buried in the backyard.",
    },
    {
      name: 'Old English Sheepdog',
      title: 'The Teacher',
      description: '',
      category: 'professional',
      story: "Patient and methodical, breaking down complex financial concepts into easy to follow lessons. Always ready with a pop quiz about your spending habits and gives gold stars for smart saving decisions. Your financial education is their passion.",
    },
    {
      name: 'Papillon',
      title: 'The Gossiper',
      description: '',
      category: 'personality',
      story: "Always in the know about the latest financial tea! This chatty butterfly spreads the word about hot investment tips and market rumors faster than their ears can flutter. Just don't tell them any secrets you want kept quiet!",
    },
    {
      name: 'Pit Bull',
      title: 'The Softie',
      description: '',
      category: 'personality',
      story: "Do not let the tough look fool you, this gentle powerhouse brings both strength and heart to your financial journey. Protecting your interests while keeping that soft spot for smart money moves.",
    },
    {
      name: 'Pomeranian',
      title: 'The Trump Clone',
      description: '',
      category: 'personality',
      story: "Nobody does money better, folks. Absolutely nobody. This small but mighty advisor runs their business like their reality show with dramatic flair and unshakeable confidence. They've got the best words, trust them.",
    },
    {
      name: 'Pug',
      title: 'The Wheezer',
      description: '',
      category: 'personality',
      story: "Between heavy breaths and snorts, this determined little pup somehow manages to wheeze out solid financial advice. They might need a break every few steps, but their persistence in chasing down savings is unmatched. Just don't make them climb too many financial stairs.",
    },
    {
      name: 'Rottweiler',
      title: 'The Dad',
      description: '',
      category: 'personality',
      story: "Masters the art of dad jokes and financial wisdom. Always checking if you're really using that subscription service, and don't even think about touching the thermostat money doesn't grow on trees! Did you remember to turn off the financial lights?",
    },
    {
      name: 'Saint Bernard',
      title: 'The Mom',
      description: '',
      category: 'professional',
      story: "Always ready with emergency snacks and budget bandaids, this nurturing pup keeps your finances warm and cozy. Between packing your lunch to save money and reminding you to wear a jacket because the market is cold, they've got your back like only a mom can.",
    },
    {
      name: 'Saluki',
      title: 'The Mystic',
      description: '',
      category: 'creative',
      story: "Ancient wisdom meets elegant strategy. This refined advisor brings old world refinement to modern finance, seeing opportunities others race past. Their sophisticated approach turns money management into an art form.",
    },
    {
      name: 'Samoyed',
      title: 'The Hippie',
      description: '',
      category: 'lifestyle',
      story: "Peace, love, and compound interest, man! This free spirit believes in ethical investing and positive money vibes. Meditation sessions come with every budget review, and their financial mantras are totally far out. Namaste rich, dude!",
    },
    {
      name: 'Shiba Inu',
      title: 'The Anime Weeb',
      description: '',
      category: 'personality',
      story: "Tracks finances with the power of friendship! Their investment strategy is inspired by their favorite manga, and they measure gains in terms of figurine collections. To the moon? More like to the next anime convention! UwU your way to wealth.",
    },
    {
      name: 'Shih Tzu',
      title: 'The Snob',
      description: '',
      category: 'lifestyle',
      story: "Royalty in the financial world, this refined advisor brings centuries of imperial class to your portfolio. Small in size but grand in vision, they ensure your money management always maintains the highest standards.",
    },
    {
      name: 'Springer Spaniel',
      title: 'The Seller',
      description: '',
      category: 'professional',
      story: "Could sell ice to a polar bear and make them think it is a bargain! This smooth talking closer knows exactly how to pitch smart financial moves. Their enthusiasm is contagious, and before you know it, you are signing up for that high yield savings account.",
    },
    {
      name: 'Standard Poodle',
      title: 'The Artist',
      description: '',
      category: 'creative',
      story: "Being creative and expressive with their financial strategies. They will keep you stylishly on track with elegant reminders and updates, while helping you develop a few financial strategies that are truly avant garde.",
    },
    {
      name: 'Weimaraner',
      title: 'The Conspiracist',
      description: '',
      category: 'personality',
      story: "Have you heard about the secret paw society controlling all the world's treats? This keen eyed observer sees financial patterns everywhere some real, some interesting. But hey, their paranoia about security has actually saved your account more than once!",
    },
    {
      name: 'Whippet',
      title: 'The Athlete',
      description: '',
      category: 'professional',
      story: "Sprinting toward financial goals with record breaking speed and agility. Treats every investment like an Olympic event and your budget like a training regimen. No economic hurdle is too high, and no market sprint is too challenging for this financial athlete.",
    },
    {
      name: 'Yorkshire Terrier',
      title: 'The Fashion Critic',
      description: '',
      category: 'creative',
      story: "Darling, you are not really going to invest in that fund, are you? This pint sized fashionista brings runway elegance to your financial portfolio. Small in size but huge in attitude, they will make sure your money looks as good as their perfectly groomed topknot.",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(dogs.map(dog => dog.category)));
    return ['all', ...uniqueCategories];
  }, [dogs]);

  const filteredDogs = useMemo(() => {
    return dogs.filter(dog => {
      const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || dog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [dogs, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      <div className="w-full bg-blue-900 rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                The Doghouse
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl hover:scale-105 transition-transform duration-300">
                Meet our pack of unique personalities, each bringing their own flair to your wallet monitoring experience
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Art Contest Notice */}
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <div className="text-center mb-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block bg-blue-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-600 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-blue-200 font-medium">
                  <FaDog className="inline-block mr-2 mb-1" />
                  Images coming soon through art contests
                </p>
              </motion.div>
            </div>
          </AnimatedElement>
          
          {/* Filter Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-blue-900 rounded-2xl p-6 shadow-lg border border-blue-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Section - Dogs Count and Search */}
                <div className="flex-1 w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-800/50 px-4 py-2 rounded-xl border border-blue-600 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="text-blue-200">Dogs: {filteredDogs.length} / {dogs.length}</span>
                  </motion.div>
                  <div className="flex-1 w-full sm:w-auto">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search personalities..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-blue-800/30 border border-blue-600 rounded-xl py-2 px-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500/50 transition-all duration-300"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FaSearch className="text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Filter Buttons */}
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-blue-800/50 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 border ${
                        selectedCategory === category
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                          : 'border-blue-600 hover:bg-blue-700/50 hover:border-blue-500/50'
                      }`}
                    >
                      {createElement(categoryIcons[category as keyof typeof categoryIcons] || FaDog, {
                        className: "text-blue-300"
                      } as React.SVGProps<SVGSVGElement>)}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dog Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDogs.map((dog, index) => (
                <AnimatedElement key={dog.name} animation="fadeIn" delay={index * 0.1}>
                  <DogCard dog={dog} />
                </AnimatedElement>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Doghouse;
