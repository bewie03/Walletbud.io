import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-blue-900">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/commands" element={<PageTransition><Commands /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/whitepaper" element={<PageTransition><Whitepaper /></PageTransition>} />
            <Route path="/bone" element={<PageTransition><BONE /></PageTransition>} />
            <Route path="/guide" element={<PageTransition><Guide /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
