import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  // Staggered text animation for the main title
  const titleText = "Aravind & Ramya";
  const dateText = "April 11, 2025";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 100,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
          className="text-white mb-4 font-script text-xl md:text-3xl"
          style={{ wordSpacing: '8px' }}
        >
          We are getting married
        </motion.div>
        
        <div className="overflow-hidden hidden md:block mb-4 p-4">
          <div className="flex justify-center flex-wrap">
            {titleText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-7xl font-script text-white mx-1 inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden block md:hidden mb-4 p-4">
          <div className="flex justify-center flex-wrap">
           
              <motion.span
            
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-7xl font-script text-white mx-1 inline-block"
              >
               Satya Sai Aravind  <br />
               & <br />
               Ramya

              </motion.span>
            
          </div>
        </div>
        
        <div className="overflow-hidden mb-8">
          <div className="flex justify-center">
            {dateText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-3xl text-white mx-0.5 inline-block font-serif"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative"
        >
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-75 blur-sm animate-pulse-slow"></div> */}
          <Link
            to="bride-to-be"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            className="relative inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            Explore Our Journey
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="bride-to-be" spy={true} smooth={true} offset={-70} duration={500}>
          <ArrowDown size={24} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;