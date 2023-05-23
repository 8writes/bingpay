import { motion } from "framer-motion";
import React from "react";

const FadeInRight = ({ children }) => {
  const FadeInRight = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",

        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInRight}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRight;
