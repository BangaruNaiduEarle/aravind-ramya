import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const Haldi = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imagess = [
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/11/haldi-decoration-in-open-lawn_500_500.jpg",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Low-Cost-Simple-Haldi-Decoration-at-Home-with-Baskets_0_1200.jpg",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Low-Cost-Simple-Haldi-decoration-with-Earthen-Pots_500_500.jpg"
  ];

  const images=[
    "https://img-urls.vercel.app/static/media/s-h-1.391ead74674cdd04e049.jpg",
   "https://img-urls.vercel.app/static/media/s-h-2.2dfd1bb6eb87c7049a85.jpg",
   "https://img-urls.vercel.app/static/media/s-h-3.311ecbedee781ebb0a65.jpg",
  ]
  const vid = "https://img-urls.vercel.app/static/media/sharmi-haldi-v.a5705da37e54f77cfd92.mp4"

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
    <section className="py-20 px-4 md:px-8 bg-yellow-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">Haldi Ceremony</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
             <b>Tharun</b> and <b>Sharmila’s</b> Haldi ceremony, turmeric, oil, and water are applied to bless them with happiness and prosperity. This beautiful tradition fills their journey with love, laughter, and protection as they step into their new life together. 😊💛
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-yellow-100 px-6 py-3 rounded-lg">
            <Calendar className="text-yellow-600 mr-2" size={20} />
            <span className="text-yellow-800 font-medium">March 12, 2025</span>
          </div>
          <div className="flex items-center bg-yellow-100 px-6 py-3 rounded-lg">
            <Clock className="text-yellow-600 mr-2" size={20} />
            <span className="text-yellow-800 font-medium">Start's at 3:00 pm</span>
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`Haldi ceremony ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>

          {/* Video Section */}
          <motion.div 
          variants={itemVariants}
          className="mt-12 flex justify-center"
        >
          <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
            <source src={vid} type="video/mp4" />
            Haldhi Video
          </video>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center bg-yellow-100 p-6 rounded-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-yellow-800 mb-3">What to Expect</h3>
          <p className="text-gray-700">
          "Join us for <b>Tharun</b> and <b>Sharmila’s</b> Haldi ceremony, a joyful celebration of love and tradition. Bless the couple as we apply turmeric for happiness and prosperity. Wear comfortable clothes and enjoy a delightful traditional lunch with us!" 😊💛
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Haldi;