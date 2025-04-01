import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const MarriageMuhurtham = () => {
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

  // Wavy text animation for the heading
  const headingText = "Marriage Muhurtham";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const rituals = [
    {
      name: "Vara Puja",
      time: "8:30 AM",
      description: "Welcome ceremony for the groom and his family"
    },
    {
      name: "Kanya Daan",
      time: "9:45 AM",
      description: "The bride's parents give her away to the groom"
    },
    {
      name: "Mangalya Dharanam",
      time: "10:20 AM",
      description: "The groom ties the sacred thread around the bride's neck"
    },
    {
      name: "Saptapadi",
      time: "10:45 AM",
      description: "The couple takes seven steps together, making seven vows"
    },
    {
      name: "Aashirwad",
      time: "11:30 AM",
      description: "Blessings from elders and family members"
    }
  ];
  

  return (
    <section className="py-20 px-4 md:px-8 bg-red-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center flex-wrap mb-4">
            {headingText.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-3xl md:text-4xl font-display font-bold text-red-800 mx-0.5 inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <div className="w-24 h-1 bg-red-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto ">
            The Marriage Muhurtham is the main wedding ceremony, conducted at an auspicious time determined by astrology. 
            This sacred ritual unites the bride and groom in the presence of fire, family, and friends.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div 
            className="flex items-center bg-red-100 px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Calendar className="text-red-600 mr-2" size={20} />
            <span className="text-red-800 font-medium">March 15, 2025</span>
          </motion.div>
          <motion.div 
            className="flex items-center bg-red-100 px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="text-red-600 mr-2" size={20} />
            <span className="text-red-800 font-medium">10:20 AM</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div 
            variants={itemVariants}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-script text-red-700 mb-6">The Sacred Ceremony</h3>
            <p className="text-gray-700 mb-6 leading-relaxed ">
            The <b>Marriage Muhurtham</b> is the most special moment where <b>Tharun</b> and <b>Sharmila</b> begin their journey as husband and wife. The ceremony takes place around the holy fire (Agni), which stands as a witness to their sacred vows.
            </p>
            <p className="text-gray-700 leading-relaxed ">
            A priest chants <b>Vedic mantras</b>, seeking blessings from the gods. Tharun ties the Mangalsutra around Sharmila’s neck, marking their bond for life. The couple then takes <b>seven sacred steps (Saptapadi)</b>, promising to walk together with love, trust, and happiness.
            </p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 bg-red-100 p-5 rounded-lg"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-red-800 mb-3">Special Note</h4>
              <p className="text-gray-700 ">
              The ceremony will start at<b> 9:00 AM</b>, a special and lucky time.
              Please be seated by 8:45 AM so the rituals can go smoothly without any delay.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-200 rounded-lg transform rotate-3"></div>
              <motion.img
                src="https://img-urls.vercel.app/static/media/s4.69bf38e37c6c1f6ddb20.jpg"
                alt="Marriage ceremony"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover transform -rotate-2 transition-transform duration-500"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <h3 className="text-2xl font-script text-red-700 text-center mb-8">Ceremony Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-300 transform md:translate-x-px"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {rituals.map((ritual, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <motion.div 
                      className="bg-white p-4 rounded-lg shadow-md max-w-xs"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     
                    >
                      <h4 className="font-semibold text-red-700">{ritual.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{ritual.time}</p>
                      <p className="text-gray-700 text-sm ">{ritual.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute left-0 md:left-1/2 top-4 w-4 h-4 rounded-full bg-red-500 border-2 border-white transform -translate-x-1.5 md:-translate-x-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  />
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
{/* 
        <motion.div 
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow-md text-center"
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -5
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-script text-red-800 mb-4">Dress Code</h3>
          <p className="text-gray-700 max-w-2xl mx-auto ">
            Traditional attire is recommended for the wedding ceremony. Ladies can wear sarees or lehengas in bright, 
            auspicious colors, while gentlemen can opt for traditional kurta pajamas, sherwanis, or formal suits.
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default MarriageMuhurtham;