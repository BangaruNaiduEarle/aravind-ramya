import React from "react";
import { motion } from "framer-motion";

const ImageGrid = () => {
  const images = [
    "https://img-urls.vercel.app/static/media/s3.94c57e43fad5bc8d2ce0.jpg",
 "https://img-urls.vercel.app/static/media/s5.91047f5fc341d0b07d43.jpg",
 "https://img-urls.vercel.app/static/media/s6.57a451e990f3bd269a78.jpg",
 "https://img-urls.vercel.app/static/media/s6.57a451e990f3bd269a78.jpg",
 "https://img-urls.vercel.app/static/media/s4.69bf38e37c6c1f6ddb20.jpg",
 "https://img-urls.vercel.app/static/media/s7.8973b13193da6e8251bc.jpg",


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-rose-800 mb-12">
          Our Journey Together
        </h2>

        <motion.div
          className="columns-2 gap-4 px-8 sm:columns-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((imgSrc, index) => (
            <motion.div key={index} variants={imageVariants} className="mb-4">
              <img
                src={imgSrc}
                alt={`Wedding journey moment ${index + 1}`}
                className="size-full rounded-lg object-cover shadow-lg transform transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGrid;
