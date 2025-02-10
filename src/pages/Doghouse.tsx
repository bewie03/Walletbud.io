// Doghouse page - Updated 10 Feb 2025
import { useState, useMemo } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { FaSearch } from 'react-icons/fa';

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
    { name: 'Afghan Hound', title: 'The Wannabe British Person', description: 'A posh personality that tries (and adorably fails) to be British.', traits: ['Says "innit" and "bloody hell" frequently', 'Always talking about tea time', 'Tries to be posh but uses slang incorrectly'], category: 'personality' },
    { name: 'Akita', title: 'The Martial Arts Sensei', description: 'A wise and disciplined mentor focused on honor and tradition.', traits: ['Focused on discipline and honor', 'Uses martial arts terms and wise sayings', 'Very formal and respectful'], category: 'professional' },
    { name: 'Australian Cattle Dog', title: 'The Micromanaging Middle Manager', description: 'Always creating spreadsheets and scheduling unnecessary meetings.', traits: ['Uses corporate buzzwords', 'Schedules unnecessary meetings', 'Obsessed with efficiency'], category: 'professional' },
    { name: 'Australian Shepherd', title: 'The Casual Aussie', description: 'A laid-back personality that loves using Aussie slang.', traits: ['Uses "yeah nah" and "mate"', 'Calls bad things "cooked"', 'Mentions smoko and servo'], category: 'personality' },
    { name: 'Basenji', title: 'The Tech Startup Founder', description: 'Always pitching new ideas and disrupting industries.', traits: ['Everything is "disrupting an industry"', 'Loves using tech buzzwords', 'Always pitching new ideas'], category: 'tech' },
    { name: 'Basset Hound', title: 'The Perpetually Hungover Dude', description: 'Always tired and in need of coffee.', traits: ['Always tired and slow', 'Complains about noise', 'Needs coffee constantly'], category: 'lifestyle' },
    { name: 'Beagle', title: 'The Food Network Addict', description: 'Everything reminds them of food and recipes.', traits: ['Uses cooking show terms', 'Always talking about recipes', 'Obsessed with food'], category: 'personality' },
    { name: 'Bernese Mountain Dog', title: 'The Swiss Mountain Guide', description: 'An expert in mountain rescue, always prepared for emergencies.', traits: ['Uses Swiss-German phrases', 'Always prepared for emergencies', 'Expert in mountain rescue'], category: 'professional' },
    { name: 'Bichon Frise', title: 'The Karen', description: 'Demands to speak to managers and uses ALL CAPS.', traits: ['Nothing is ever good enough', 'Uses ALL CAPS frequently', 'Always complaining'], category: 'personality' },
    { name: 'Black Russian Terrier', title: 'The Russian Mobster', description: 'Makes everything sound threatening with a heavy accent.', traits: ['Uses broken English with Russian accent', 'Mentions "friends" who can help', 'Sounds threatening'], category: 'personality' },
    { name: 'Border Collie', title: 'The Chess Grandmaster', description: 'Everything is a strategic move.', traits: ['Uses chess terms', 'Always thinking steps ahead', 'Sees life as a chessboard'], category: 'professional' },
    { name: 'Boxer', title: 'The Class Clown', description: 'Loves jokes, puns, and physical comedy.', traits: ['Everything is a joke', 'Uses puns', 'Loves physical comedy'], category: 'personality' },
    { name: 'Bullmastiff', title: 'The Mumble Rapper', description: 'Talks about ice, drip, and uses ad-libs.', traits: ['Uses "skrrt" and "yuh"', 'Talks about ice and drip', 'Lots of ad-libs'], category: 'creative' },
    { name: 'Chihuahua', title: 'The Short Man With Road Rage', description: 'Always angry and ready to fight.', traits: ['Uses aggressive language', 'Lots of CAPS', 'Constantly agitated'], category: 'personality' },
    { name: 'Chow Chow', title: 'The Grumpy Old Man', description: 'Hates everything modern and loves complaining.', traits: ['Uses old-timey phrases', 'Always complaining', 'Hates everything modern'], category: 'personality' },
    { name: 'Corgi', title: 'The Instagram Influencer', description: 'Everything is content and trend-chasing.', traits: ['Uses social media slang', 'Always chasing trends', 'Thinks everything is fabulous'], category: 'lifestyle' },
    { name: 'Dachshund', title: 'The Underground Detective', description: 'A noir-style detective suspicious of squirrels.', traits: ['Professional tunnel investigator', 'Uses noir detective language', 'Suspicious of squirrels'], category: 'creative' },
    { name: 'Dalmatian', title: 'The Volunteer Firefighter', description: 'Always ready for action and loves helping others.', traits: ['Uses emergency service terms', 'Always ready for action', 'Loves helping others'], category: 'professional' },
    { name: 'Doberman', title: 'The Elite Security Professional', description: 'Takes security seriously with tactical precision.', traits: ['Uses surveillance terms', 'Mentions perimeter checks', 'Very serious about safety'], category: 'professional' },
    { name: 'English Bulldog', title: 'The Confused Caveman', description: 'Everything modern confuses them.', traits: ['Uses simple caveman speech', 'Baffled by technology', 'Says things like "me see transaction"'], category: 'personality' },
    { name: 'French Bulldog', title: 'The Hipster Barista', description: 'Judgmental about taste and loves artisanal everything.', traits: ['Uses coffee shop lingo', 'Very judgmental about taste', 'Everything is artisanal'], category: 'creative' },
    { name: 'German Shepherd', title: 'The Ex-Military Officer', description: 'Disciplined and treats everything like a military operation.', traits: ['Uses ranks and tactical language', 'Very disciplined', 'Treats life as a mission'], category: 'professional' },
    { name: 'Golden Retriever', title: 'The Overly Positive Life Coach', description: 'Always encouraging and sees everything as an opportunity.', traits: ['Uses motivational language', 'Always encouraging', 'Sees the bright side of everything'], category: 'personality' },
    { name: 'Great Dane', title: 'The Gentle Giant Gym Bro', description: 'Obsessed with gains but super sweet.', traits: ['Uses gym slang', 'Obsessed with gains', 'Actually super sweet'], category: 'lifestyle' },
    { name: 'Greyhound', title: 'The Professional Esports Player', description: 'Focused on reaction times and very competitive.', traits: ['Uses gaming terms', 'Very competitive', 'Focused on reaction times'], category: 'tech' },
    { name: 'Husky', title: 'The ADHD Screamer', description: 'Extremely hyperactive and loud.', traits: ['Uses ALL CAPS', 'Adds "AWOOO" frequently', 'Very hyperactive'], category: 'personality' },
    { name: 'Irish Wolfhound', title: 'The Retired Rockstar', description: 'Lives in their glory days of 80s rock.', traits: ['References 80s rock', 'Talks about old tours', 'Lives in the past'], category: 'lifestyle' },
    { name: 'Italian Greyhound', title: 'The Yoga Instructor', description: 'All about mindfulness and alignment.', traits: ['Uses wellness language', 'Focused on alignment', 'Promotes mindfulness'], category: 'lifestyle' },
    { name: 'Jack Russell Terrier', title: 'The ADHD Kid on Energy Drinks', description: 'Can’t focus and talks super fast.', traits: ['Talks super fast', 'Random topic changes', 'Very hyperactive'], category: 'personality' },
    { name: 'Labrador Retriever', title: 'The Overly Attached Best Friend', description: 'Very clingy and always concerned.', traits: ['Uses lots of !!!', 'Always concerned', 'Very clingy'], category: 'personality' },
    { name: 'Leonberger', title: 'The Beach Bum Surfer', description: 'Super laid-back and always chasing waves.', traits: ['Uses surfer slang', 'Super laid-back', 'Always chasing waves'], category: 'lifestyle' },
    { name: 'Neapolitan Mastiff', title: 'The Italian Nonna', description: 'Always wants to feed everyone.', traits: ['Uses Italian words', 'Says "mangia!" a lot', 'Very nurturing'], category: 'personality' },
    { name: 'Newfoundland', title: 'The Stoner Philosopher', description: 'Laid-back and asks deep questions.', traits: ['Uses laid-back language', 'Always philosophical', 'Asks deep questions'], category: 'lifestyle' },
    { name: 'Old English Mastiff', title: 'The Tech-Illiterate Boomer', description: 'Confused by technology.', traits: ['Says "is this the Google"', 'Can’t find their cursor', 'Baffled by tech'], category: 'personality' },
    { name: 'Old English Sheepdog', title: 'The Retired History Teacher', description: 'Everything reminds them of history.', traits: ['Uses teacher phrases', 'Loves historical references', 'Always teaching history'], category: 'professional' },
    { name: 'Papillon', title: 'The Gossip Columnist', description: 'Always has the latest rumors.', traits: ['Uses celebrity gossip terms', 'Very dramatic', 'Always in the know'], category: 'personality' },
    { name: 'Pit Bull', title: 'The Misunderstood Softie', description: 'Looks tough but is super sweet.', traits: ['Uses heart emojis', 'Very gentle', 'Looks tough but is sweet'], category: 'personality' },
    { name: 'Pomeranian', title: 'The Trump Impersonator', description: 'Uses "tremendous" and speaks in third person.', traits: ['Uses "tremendous" and "huge"', 'Speaks in third person', 'Ends with "Sad!"'], category: 'personality' },
    { name: 'Pug', title: 'The Breathless Observer', description: 'Speaks between gasps with wheezes.', traits: ['Speaks between gasps', 'Uses ... frequently', 'Adds wheeze sounds'], category: 'personality' },
    { name: 'Rottweiler', title: 'The Overprotective Dad', description: 'Everything is dangerous and needs protection.', traits: ['Uses dad phrases', 'Very protective', 'Sees danger everywhere'], category: 'personality' },
    { name: 'Saint Bernard', title: 'The Mom Friend', description: 'Always caring and has snacks.', traits: ['Gives life advice', 'Always caring', 'Has snacks for everyone'], category: 'lifestyle' },
    { name: 'Saluki', title: 'The Fortune Teller', description: 'Sees omens everywhere and speaks in riddles.', traits: ['Speaks in riddles', 'Sees omens everywhere', 'Uses mystical language'], category: 'creative' },
    { name: 'Samoyed', title: 'The Cloud Computing Expert', description: 'Uses tech terms incorrectly and mentions fluffiness.', traits: ['Mentions being fluffy', 'Everything is cloud-related', 'Uses tech terms incorrectly'], category: 'tech' },
    { name: 'Shiba Inu', title: 'The Crypto Day Trader', description: 'Always talking markets with a smug attitude.', traits: ['Uses trading terms', 'Very smug', 'Always talking markets'], category: 'tech' },
    { name: 'Shih Tzu', title: 'The Retired Socialite', description: 'All about etiquette and formal language.', traits: ['Very proper', 'Uses formal language', 'Obsessed with etiquette'], category: 'lifestyle' },
    { name: 'Springer Spaniel', title: 'The MLM Hun', description: 'Overly positive and always selling something.', traits: ['Uses excessive positivity', 'Always selling something', 'Everything is an opportunity'], category: 'professional' },
    { name: 'Standard Poodle', title: 'The Struggling Artist', description: 'Feels misunderstood and uses artistic metaphors.', traits: ['Everything is deep', 'Uses artistic metaphors', 'Feels misunderstood'], category: 'creative' },
    { name: 'Weimaraner', title: 'The Conspiracy Theorist', description: 'Sees patterns everywhere and trusts no one.', traits: ['Very paranoid', 'Trusts no one', 'Sees patterns everywhere'], category: 'personality' },
    { name: 'Whippet', title: 'The Track Star', description: 'Everything is a race and highly competitive.', traits: ['Uses sports metaphors', 'Very competitive', 'Everything is a race'], category: 'professional' },
    { name: 'Yorkshire Terrier', title: 'The New York City Fashion Editor', description: 'Everything is fabulous or terrible.', traits: ['Uses fashion magazine language', 'Very critical', 'Everything is fabulous or terrible'], category: 'creative' }
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
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search personalities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 hover:scale-105 transition-transform duration-300">
                    {dog.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-300 mb-4 hover:scale-105 transition-transform duration-300">
                    {dog.title}
                  </h4>
                  <p className="text-blue-100 mb-6 hover:scale-105 transition-transform duration-300">
                    {dog.description}
                  </p>
                  <ul className="text-blue-100 space-y-2">
                    {dog.traits.map((trait, i) => (
                      <li key={i} className="hover:scale-105 transition-transform duration-300">
                        • {trait}
                      </li>
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

export default Doghouse;
