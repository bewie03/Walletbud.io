import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Commands from './pages/Commands'
import FAQ from './pages/FAQ'
import Whitepaper from './pages/Whitepaper'
import BONE from './pages/BuyToken'
import NotFound from './pages/NotFound'
import PageTransition from './components/PageTransition'
import Guide from './pages/Guide'
import LoadingScreen from './components/LoadingScreen'
import Doghouse from './pages/Doghouse'

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Extended time for smoother transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col min-h-screen bg-blue-900"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
          
          <motion.main 
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Outlet /></PageTransition>}>
                  <Route path="/" element={<Home />} />
                  <Route path="/commands" element={<Commands />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/whitepaper" element={<Whitepaper />} />
                  <Route path="/bone" element={<BONE />} />
                  <Route path="/guide" element={<Guide />} />
                  <Route path="/doghouse" element={<Doghouse />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </AnimatePresence>
          </motion.main>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App
