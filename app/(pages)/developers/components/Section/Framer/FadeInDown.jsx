import { motion } from "framer-motion";
import React from "react";

const FadeInDown = ({ children }) => {
  const FadeInDown = {
    offscreen: {
      y: -50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        bounce: 0,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0.3,
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
