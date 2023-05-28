import { motion } from "framer-motion";
import React from "react";

const FadeInDown = ({ children }) => {
  const FadeInDown = {
    offscreen: {
      y: -10,
      opacity: 0,
    },

    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInDown}
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDown;
