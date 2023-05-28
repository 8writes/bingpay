import { motion } from "framer-motion";
import React from "react";

const FadeInLeft = ({ children }) => {
  const FadeInLeft = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        bounce: 0,
        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0.3,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInLeft}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
