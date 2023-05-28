import { motion } from "framer-motion";
import React from "react";

const FadeInUp = ({ children }) => {
  const FadeInUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInUp}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
