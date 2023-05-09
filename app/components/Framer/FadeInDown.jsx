import { motion } from "framer-motion";
import React from "react";

const FadeInDown = ({ children }) => {
  const FadeInDown = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInDown}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDown;
