import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const KalagoluSambralu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    "https://svsolutionsusa.com/wp-content/uploads/2024/08/LED-Backdrop-for-Sangeet-in-McFarland-1024x585.jpg",
    "https://svsolutionsusa.com/wp-content/uploads/2024/08/LED-Stage-for-Sangeet-in-Tulare-1024x585.jpg",
    "https://svsolutionsusa.com/wp-content/uploads/2024/08/LED-Screen-for-Sangeet-Ceremony-in-Lindsay-1024x585.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
    <section className="py-20 px-4 md:px-8 bg-purple-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Sangeet</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          <b>Tharun</b> and <b>Sharmila’s</b> Sangeet is a fun-filled night with music, dance, and laughter. Family and friends come together to celebrate, enjoy performances, and make beautiful memories before the wedding day. 🎶💃✨
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-purple-100 px-6 py-3 rounded-lg">
            <Calendar className="text-purple-600 mr-2" size={20} />
            <span className="text-purple-800 font-medium">March 12, 2025</span>
          </div>
          <div className="flex items-center bg-purple-100 px-6 py-3 rounded-lg">
            <Clock className="text-purple-600 mr-2" size={20} />
            <span className="text-purple-800 font-medium">6:00 PM - 9:00 PM</span>
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div 
          variants={itemVariants}
          className="relative mb-12 overflow-hidden rounded-lg shadow-xl"
        >
          <div className="relative h-80 md:h-96">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={false}
                animate={{ 
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={image}
                  alt={`Kalagolu Sambralu ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-purple-800"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-purple-800"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImage === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            variants={itemVariants}
            className="bg-purple-100 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Traditional Activities</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                <span>Folk dance performances by family members</span>
              </li>
              <li className="flex items-start">
  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
  <span>Energetic DJ night with non-stop music and dance</span>
</li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                <span>Musical performances with traditional instruments</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                <span>Storytelling by elders about family history</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-purple-100 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Come, Let’s Celebrate!</h3>
            <p className="text-gray-700 mb-4">
            Join us for a night full of joy, music, and dance as we celebrate <b>Tharun</b> and <b>Sharmila’s</b> special journey. Get ready for endless fun, laughter, and unforgettable memories. Let’s make this celebration one to remember! 🎶💃✨
            </p>
            {/* <p className="text-gray-700">
              Don't forget to wear comfortable footwear as there will be dancing and games throughout the evening!
            </p> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default KalagoluSambralu;