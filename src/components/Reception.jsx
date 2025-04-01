import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Music, Utensils, Camera } from 'lucide-react';

const Reception = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-blue-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Reception</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            Join us for an elegant evening of celebration as we begin our journey as a married couple. 
            The reception will feature fine dining, music, dancing, and cherished moments with our loved ones.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-blue-100 px-6 py-3 rounded-lg">
            <Calendar className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">March 15, 2025</span>
          </div>
          <div className="flex items-center bg-blue-100 px-6 py-3 rounded-lg">
            <Clock className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">7:00 PM - 10:00 PM</span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative mb-12 overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
            alt="Reception venue"
            className="w-full h-80 md:h-96 object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Grand Ballroom</h3>
              <p>An elegant setting for our special celebration</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Entertainment</h3>
            <p className="text-gray-700">
              Live music performance by renowned artists, followed by DJ and dancing
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Fine Dining</h3>
            <p className="text-gray-700">
              Exquisite multi-course dinner featuring  traditional cuisine
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Photo Booth</h3>
            <p className="text-gray-700">
              Capture memories with friends and family at our custom photo booth with props
            </p>
          </motion.div>
        </div>

        {/* <motion.div 
          variants={itemVariants}
          className="bg-blue-100 p-6 rounded-lg text-center"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Dress Code</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Formal attire is requested. Gentlemen are encouraged to wear suits or formal traditional wear, 
            while ladies may wear evening gowns or elegant sarees/lehengas. We look forward to celebrating with you in style!
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Reception;