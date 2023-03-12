import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <>
      <section className="services grid justify-center font-space pt-20 pb-20 ">
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-4xl font-black text-slate-700">
              <span>Swift payments anywhere, anytime.</span>
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-wrap"></div>
      </section>
    </>
  );
}
