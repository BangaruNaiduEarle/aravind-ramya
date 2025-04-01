import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use react-router-dom Link
// import { navLinks } from '../data/navLinks'; // Import shared navLinks

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Bride-to-be', to: '/bride-to-be' },
    { name: 'Haldi', to: '/haldi' },
    { name: 'Gallery', to: '/imagegrid' },
    { name: 'Sangeet', to: '/kalagolu' },
    { name: 'Reception', to: '/reception' },
    { name: 'Marriage', to: '/marriage' },
    { name: 'Venue', to: '/venue' },
  ];

  return (
    <footer className="bg-rose-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-6 w-6 text-rose-300 mr-2" fill="#FDA4AF" />
            <span className="text-2xl font-semibold">Aravind & Ramya</span>
          </motion.div>

          <motion.p
            className="text-rose-200 text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thank you for being a part of our special day. We look forward to celebrating with you!
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" className="text-rose-200 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-rose-200 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="mailto:contact@sharmilaandtharun.com" className="text-rose-200 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-rose-200 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="text-center text-rose-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} <b> Aravind & Ramya</b> Wedding. All rights reserved.</p>
          <p className="mt-1">
            Made with <Heart className="inline-block h-3 w-3" fill="#FDA4AF" /> for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;