import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaPaw } from 'react-icons/fa';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 overflow-hidden"
        >
          {/* Background animated shapes */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.5, 1.5],
              rotate: [0, 180, 360],
              opacity: [1, 0.8, 0]
            }}
            transition={{ duration: 3, times: [0, 0.5, 1] }}
            className="absolute w-[800px] h-[800px] border-white border-[1px] rounded-full"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1.2],
              rotate: [0, -180, -360],
              opacity: [1, 0.8, 0]
            }}
            transition={{ duration: 3, delay: 0.2, times: [0, 0.5, 1] }}
            className="absolute w-[600px] h-[600px] border-white border-[1px] rounded-full"
          >
            {/* Decorative paw prints on the inner circle */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`inner-paw-${i}`}
                className="absolute text-white/30"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 60}deg) translateY(-300px) rotate(-${i * 60}deg)`,
                }}
              >
                <FaPaw className="text-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Central content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ 
                y: 0,
                opacity: 0,
                transition: { duration: 0.8 }
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <motion.h1 
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 1,
                  opacity: 0,
                  transition: { duration: 0.8 }
                }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-4xl sm:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-2 sm:gap-4"
              >
                <FaPaw className="text-3xl sm:text-5xl" />
                WalletPup
                <FaPaw className="text-3xl sm:text-5xl transform rotate-45" />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5 }
                }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-white text-lg sm:text-xl"
              >
                Your Faithful Finance Companion
              </motion.p>
            </motion.div>

            {/* Animated lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{
                scaleX: 0,
                transition: { duration: 0.5 }
              }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-[200px] sm:w-[300px] h-[2px] bg-white mx-auto mb-6"
            />

            {/* Paw print dots animation */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1],
                    opacity: [0, 1, 0]
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 1.8 + i * 0.2,
                    repeat: 1,
                    repeatType: "reverse"
                  }}
                  className="text-white"
                >
                  <FaPaw className="text-sm transform rotate-45" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
