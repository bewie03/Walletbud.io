import { useState, useMemo, createElement } from 'react';
import React from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { FaSearch, FaDog, FaBriefcase, FaPalette, FaLaptopCode, FaHeart, FaSmile } from 'react-icons/fa';
import FloatingBones from '../components/FloatingBones';

interface Dog {
  name: string;
  title: string;
  description: string;
  category: string;
}

const Doghouse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons: Record<string, React.ComponentType> = {
    professional: FaBriefcase,
    creative: FaPalette,
    tech: FaLaptopCode,
    lifestyle: FaHeart,
    personality: FaSmile,
    all: FaDog
  };

  const categories = [
    'all',
    'professional',
    'creative',
    'tech',
    'lifestyle',
    'personality'
  ];

  const dogs: Dog[] = [
    { name: 'Afghan Hound', title: 'The Supermodel', description: 'Elegant and knows their angles', category: 'personality' },
    { name: 'Akita', title: 'The Sensei', description: 'Wise mentor of honor', category: 'professional' },
    { name: 'Australian Cattle Dog', title: 'The Farmer', description: 'All about crops and weather', category: 'lifestyle' },
    { name: 'Australian Shepherd', title: 'The Workaholic', description: 'Never stops working', category: 'personality' },
    { name: 'Basenji', title: 'The Startup Bro', description: 'Always pitching ideas', category: 'tech' },
    { name: 'Basset Hound', title: 'The Hungover Dude', description: 'Tired and needs coffee', category: 'lifestyle' },
    { name: 'Beagle', title: 'The Foodie', description: 'Everything reminds them of food', category: 'personality' },
    { name: 'Bernese Mountain Dog', title: 'The Guide', description: 'Expert mountain rescuer', category: 'professional' },
    { name: 'Bichon Frise', title: 'The Karen', description: 'Demands to speak to managers', category: 'personality' },
    { name: 'Black Russian Terrier', title: 'The Mobster', description: 'Makes threats with heavy accent', category: 'personality' },
    { name: 'Border Collie', title: 'The Chess Master', description: 'Every move is strategic', category: 'professional' },
    { name: 'Boxer', title: 'The Clown', description: 'Loves jokes and comedy', category: 'personality' },
    { name: 'Bullmastiff', title: 'The Rapper', description: 'Talks ice and drops beats', category: 'creative' },
    { name: 'Chihuahua', title: 'The Rager', description: 'Always angry and ready to fight', category: 'personality' },
    { name: 'Chow Chow', title: 'The Grump', description: 'Hates everything modern', category: 'personality' },
    { name: 'Corgi', title: 'The Influencer', description: 'Life is content', category: 'tech' },
    { name: 'Dachshund', title: 'The Detective', description: 'Suspects all squirrels', category: 'creative' },
    { name: 'Dalmatian', title: 'The Firefighter', description: 'Ready for action', category: 'professional' },
    { name: 'Doberman', title: 'The Security Pro', description: 'Takes security seriously', category: 'professional' },
    { name: 'English Bulldog', title: 'The Caveman', description: 'Keeps things simple', category: 'personality' },
    { name: 'French Bulldog', title: 'The Hipster', description: 'Loves artisanal everything', category: 'creative' },
    { name: 'German Shepherd', title: 'The Soldier', description: 'All about military precision', category: 'professional' },
    { name: 'Golden Retriever', title: 'The Coach', description: 'Always encouraging others', category: 'personality' },
    { name: 'Great Dane', title: 'The Gym Bro', description: 'Sweet but loves gains', category: 'lifestyle' },
    { name: 'Greyhound', title: 'The Gamer', description: 'Lives for speedruns', category: 'tech' },
    { name: 'Husky', title: 'The Screamer', description: 'Very loud and hyper', category: 'personality' },
    { name: 'Irish Wolfhound', title: 'The Rocker', description: 'Lives in the 80s', category: 'lifestyle' },
    { name: 'Italian Greyhound', title: 'The Yoga Guy', description: 'All about mindfulness', category: 'lifestyle' },
    { name: 'Jack Russell Terrier', title: 'The Hyper Kid', description: 'Talks super fast', category: 'personality' },
    { name: 'Labrador Retriever', title: 'The Clingy Friend', description: 'Always concerned', category: 'personality' },
    { name: 'Leonberger', title: 'The Surfer', description: 'Chasing waves forever', category: 'lifestyle' },
    { name: 'Neapolitan Mastiff', title: 'The Nonna', description: 'Wants to feed everyone', category: 'personality' },
    { name: 'Newfoundland', title: 'The Stoner', description: 'Chill and philosophical', category: 'lifestyle' },
    { name: 'Old English Mastiff', title: 'The Boomer', description: 'Confused by tech', category: 'personality' },
    { name: 'Old English Sheepdog', title: 'The Teacher', description: 'Loves pop quizzes', category: 'professional' },
    { name: 'Papillon', title: 'The Gossiper', description: 'Spreads rumors daily', category: 'personality' },
    { name: 'Pit Bull', title: 'The Softie', description: 'Tough outside, sweet inside', category: 'personality' },
    { name: 'Pomeranian', title: 'The Trump Clone', description: 'Speaks in third person', category: 'personality' },
    { name: 'Pug', title: 'The Wheezer', description: 'Speaks between gasps', category: 'personality' },
    { name: 'Rottweiler', title: 'The Dad', description: 'Master of dad jokes', category: 'personality' },
    { name: 'Saint Bernard', title: 'The Mom', description: 'Always has snacks ready', category: 'lifestyle' },
    { name: 'Saluki', title: 'The Mystic', description: 'Speaks in riddles', category: 'creative' },
    { name: 'Samoyed', title: 'The Hippie', description: 'Peace and good vibes only', category: 'lifestyle' },
    { name: 'Shiba Inu', title: 'The Anime Weeb', description: 'References anime constantly', category: 'personality' },
    { name: 'Shih Tzu', title: 'The Snob', description: 'Very high society', category: 'lifestyle' },
    { name: 'Springer Spaniel', title: 'The Seller', description: 'Always making a pitch', category: 'professional' },
    { name: 'Standard Poodle', title: 'The Artist', description: 'Deep and misunderstood', category: 'creative' },
    { name: 'Weimaraner', title: 'The Conspiracist', description: 'Everything is a conspiracy', category: 'personality' },
    { name: 'Whippet', title: 'The Athlete', description: 'Born to compete', category: 'professional' },
    { name: 'Yorkshire Terrier', title: 'The Fashion Critic', description: 'Judges every outfit', category: 'creative' }
  ];

  const filteredDogs = useMemo(() => {
    return dogs.filter(dog => {
      const matchesSearch = 
        searchQuery === '' ||
        dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dog.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'all' ||
        dog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#1e40af] relative overflow-hidden">
      <FloatingBones />
      <div className="w-full bg-blue-900/50 backdrop-blur-sm pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideDown" delay={0.2}>
            <div className="text-center pt-32 pb-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl hover:scale-105 transition-transform duration-300">
                The Doghouse
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl hover:scale-105 transition-transform duration-300">
                Meet our pack of unique AI personalities, each bringing their own flair to your wallet monitoring experience
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
              <div className="inline-block bg-blue-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-600">
                <p className="text-blue-200 font-medium">
                  <FaDog className="inline-block mr-2 mb-1" />
                  Images coming soon through art contests
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Filter Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Section - Dogs Count and Search */}
                <div className="flex-1 w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
                  <div className="bg-blue-800/50 px-4 py-2 rounded-xl border border-blue-600">
                    <span className="text-blue-200">Dogs: {filteredDogs.length} / {dogs.length}</span>
                  </div>
                  <div className="flex-1 w-full sm:w-auto">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search personalities..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-blue-800/30 border border-blue-600 rounded-xl py-2 px-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                        selectedCategory === category
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                          : 'hover:bg-blue-700/50 hover:border-blue-500'
                      }`}
                    >
                      {createElement(categoryIcons[category as keyof typeof categoryIcons] || FaDog, {
                        className: "text-blue-300"
                      } as React.SVGProps<SVGSVGElement>)}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDogs.map((dog, index) => (
              <AnimatedElement key={dog.name} animation="fadeIn" delay={0.1 * (index % 3)}>
                <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl border border-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-lg group">
                  {/* Image Section */}
                  <div className="aspect-square w-full relative overflow-hidden rounded-t-2xl bg-blue-800/50 backdrop-blur-sm border-b border-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaDog className="text-blue-400 text-7xl opacity-50 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Image will be added here later */}
                    {/* <img src={dog.image} alt={dog.name} className="absolute inset-0 w-full h-full object-cover" /> */}
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
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doghouse;
