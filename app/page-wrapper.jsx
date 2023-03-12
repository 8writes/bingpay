"use client";
import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
