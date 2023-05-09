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
      bounce: 0.4,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

  return (
    <motion.div
      initial="offscreen"
      variants={FadeInUp}
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
