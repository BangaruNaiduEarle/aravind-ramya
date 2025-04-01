import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom Link
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navLinks to match your Route paths from App.jsx
  const navLinks = [
  
    { name: 'Bride-to-be', to: '/bride-to-be' },
    { name: 'Haldi', to: '/haldi' },
    { name: 'Gallery', to: '/imagegrid' },
    { name: 'Sangeet', to: '/kalagolu' },
    { name: 'Reception', to: '/reception' },
    { name: 'Marriage', to: '/marriage' },
    { name: 'Venue', to: '/venue' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/" // Link to the home route
          className="flex items-center cursor-pointer group"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={`h-6 w-6 ${scrolled ? 'text-rose-500' : 'text-white'} mr-2 transition-all duration-300 group-hover:animate-wave`}
              fill={scrolled ? '#f43f5e' : '#fff'}
            />
          </motion.div>
          <span
            className={`text-2xl font-script ${scrolled ? 'text-rose-700' : 'text-white'} transition-colors duration-300`}
            style={{ wordSpacing: '8px' }}
          >
            Aravind  &  Ramya
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.div key={link.to} variants={linkVariants}>
              <Link
                to={link.to}
                className={`${scrolled ? 'text-rose-800 hover:text-rose-500' : 'text-white hover:text-rose-300'} transition-colors cursor-pointer text-sm font-medium tracking-wide`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-rose-800' : 'text-white'} focus:outline-none`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute w-full"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={linkVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={link.to}
                    className="text-rose-800 hover:text-rose-500 py-2 transition-colors cursor-pointer block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;