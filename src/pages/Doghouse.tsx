import { useState, useMemo } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { FaSearch, FaDog } from 'react-icons/fa';

const Doghouse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'professional',
    'creative',
    'tech',
    'lifestyle',
    'personality'
  ];

  const dogs = [
    { name: 'Afghan Hound', title: 'The Supermodel', description: 'Elegant, poised, and knows their angles.', category: 'personality' },
    { name: 'Akita', title: 'The Sensei', description: 'A wise and disciplined mentor focused on honor and tradition.', category: 'professional' },
    { name: 'Australian Cattle Dog', title: 'The Farmer', description: 'Always talking about crops, weather and their trusty old tractor.', category: 'lifestyle' },
    { name: 'Australian Shepherd', title: 'The Workaholic', description: 'Never stops working and obsessed with productivity.', category: 'personality' },
    { name: 'Basenji', title: 'The Startup Bro', description: 'Always pitching new ideas and disrupting industries.', category: 'tech' },
    { name: 'Basset Hound', title: 'The Hungover Dude', description: 'Always tired and in need of coffee.', category: 'lifestyle' },
    { name: 'Beagle', title: 'The Foodie', description: 'Everything reminds them of food and recipes.', category: 'personality' },
    { name: 'Bernese Mountain Dog', title: 'The Guide', description: 'An expert in mountain rescue, always prepared for emergencies.', category: 'professional' },
    { name: 'Bichon Frise', title: 'The Karen', description: 'Demands to speak to managers and uses ALL CAPS.', category: 'personality' },
    { name: 'Black Russian Terrier', title: 'The Mobster', description: 'Makes everything sound threatening with a heavy accent.', category: 'personality' },
    { name: 'Border Collie', title: 'The Chess Master', description: 'Everything is a strategic move.', category: 'professional' },
    { name: 'Boxer', title: 'The Clown', description: 'Loves jokes, puns and physical comedy.', category: 'personality' },
    { name: 'Bullmastiff', title: 'The Rapper', description: 'Talks about ice, drip and uses ad libs.', category: 'creative' },
    { name: 'Chihuahua', title: 'The Rager', description: 'Always angry and ready to fight.', category: 'personality' },
    { name: 'Chow Chow', title: 'The Grump', description: 'Hates everything modern and loves complaining.', category: 'personality' },
    { name: 'Corgi', title: 'The Influencer', description: 'Everything is content and trend-chasing.', category: 'lifestyle' },
    { name: 'Dachshund', title: 'The Detective', description: 'A noir-style detective suspicious of squirrels.', category: 'creative' },
    { name: 'Dalmatian', title: 'The Firefighter', description: 'Always ready for action and loves helping others.', category: 'professional' },
    { name: 'Doberman', title: 'The Security Pro', description: 'Takes security seriously with tactical precision.', category: 'professional' },
    { name: 'English Bulldog', title: 'The Caveman', description: 'Everything modern confuses them.', category: 'personality' },
    { name: 'French Bulldog', title: 'The Hipster', description: 'Judgmental about taste and loves artisanal everything.', category: 'creative' },
    { name: 'German Shepherd', title: 'The Soldier', description: 'Disciplined and treats everything like a military operation.', category: 'professional' },
    { name: 'Golden Retriever', title: 'The Coach', description: 'Always encouraging and sees everything as an opportunity.', category: 'personality' },
    { name: 'Great Dane', title: 'The Gym Bro', description: 'Obsessed with gains but super sweet.', category: 'lifestyle' },
    { name: 'Greyhound', title: 'The Gamer', description: 'Lives for gaming streams, speedruns and says "poggers" unironically.', category: 'tech' },
    { name: 'Husky', title: 'The Screamer', description: 'Extremely hyperactive and loud.', category: 'personality' },
    { name: 'Irish Wolfhound', title: 'The Rocker', description: 'Lives in their glory days of 80s rock.', category: 'lifestyle' },
    { name: 'Italian Greyhound', title: 'The Yoga Guy', description: 'All about mindfulness and alignment.', category: 'lifestyle' },
    { name: 'Jack Russell Terrier', title: 'The Hyper Kid', description: 'Can’t focus and talks super fast.', category: 'personality' },
    { name: 'Labrador Retriever', title: 'The Clingy Friend', description: 'Very clingy and always concerned.', category: 'personality' },
    { name: 'Leonberger', title: 'The Surfer', description: 'Super laid-back and always chasing waves.', category: 'lifestyle' },
    { name: 'Neapolitan Mastiff', title: 'The Nonna', description: 'Always wants to feed everyone.', category: 'personality' },
    { name: 'Newfoundland', title: 'The Stoner', description: 'Laid-back and asks deep questions.', category: 'lifestyle' },
    { name: 'Old English Mastiff', title: 'The Boomer', description: 'Confused by technology.', category: 'personality' },
    { name: 'Old English Sheepdog', title: 'The Teacher', description: 'Always giving pop quizzes and saying "What did we learn from this?"', category: 'professional' },
    { name: 'Papillon', title: 'The Gossiper', description: 'Loves rumors.', category: 'personality' },
    { name: 'Pit Bull', title: 'The Softie', description: 'Looks tough but is super sweet.', category: 'personality' },
    { name: 'Pomeranian', title: 'The Trump Clone', description: 'Uses "tremendous" and speaks in third person.', category: 'personality' },
    { name: 'Pug', title: 'The Wheezer', description: 'Speaks between gasps with wheezes.', category: 'personality' },
    { name: 'Rottweiler', title: 'The Dad', description: 'Always a dad joke.', category: 'personality' },
    { name: 'Saint Bernard', title: 'The Mom', description: 'Always caring and has snacks.', category: 'lifestyle' },
    { name: 'Saluki', title: 'The Mystic', description: 'Sees omens everywhere and speaks in riddles.', category: 'creative' },
    { name: 'Samoyed', title: 'The Hippie', description: 'All about peace, love and positive vibes, dude.', category: 'lifestyle' },
    { name: 'Shiba Inu', title: 'The Anime Weeb', description: 'Speaks in Japanese phrases and references anime constantly.', category: 'personality' },
    { name: 'Shih Tzu', title: 'The Snob', description: 'High society.', category: 'lifestyle' },
    { name: 'Springer Spaniel', title: 'The Seller', description: 'Overly positive and always selling something.', category: 'professional' },
    { name: 'Standard Poodle', title: 'The Artist', description: 'Deep and misunderstood.', category: 'creative' },
    { name: 'Weimaraner', title: 'The Conspiracist', description: 'Everything is a conspiracy and the squirrels are government drones.', category: 'personality' },
    { name: 'Whippet', title: 'The Athlete', description: 'Everything is a race and highly competitive.', category: 'professional' },
    { name: 'Yorkshire Terrier', title: 'The Fashion Critic', description: 'Everything is fabulous or terrible.', category: 'creative' }
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
    <div className="min-h-screen bg-[#1e40af]">
      <div className="w-full bg-blue-900 pb-8">
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
          <div className="text-center mb-8">
            <p className="text-sm text-blue-300 italic">
              Images coming soon through art contests
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-4">
                <div className="px-4 py-3 bg-blue-800 border border-blue-700 rounded-lg">
                  <p className="text-blue-300 font-medium">Total Dogs: {dogs.length}</p>
                </div>
                <input
                  type="text"
                  placeholder="Search personalities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-96 px-4 py-3 bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300" />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDogs.map((dog, index) => (
              <AnimatedElement key={dog.name} animation="slideRight" delay={0.1 * (index % 3)}>
                <div className="relative bg-blue-900 rounded-lg border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square overflow-hidden">
                  {/* Image container - will be replaced with actual image later */}
                  <div className="absolute inset-0 w-full h-full bg-blue-800 flex items-center justify-center">
                    <FaDog className="w-1/2 h-1/2 text-blue-300" />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/40 to-blue-900/90"></div>
                  
                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1 hover:scale-105 transition-transform duration-300 drop-shadow-md">
                      {dog.name}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-200 mb-1 hover:scale-105 transition-transform duration-300 drop-shadow-md">
                      {dog.title}
                    </h4>
                    <p className="text-blue-100 hover:scale-105 transition-transform duration-300 drop-shadow-md">
                      {dog.description}
                    </p>
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
