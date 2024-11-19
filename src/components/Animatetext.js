import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Animatetext = ({ text, className = "" }) => {

  return (
    <>
      <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden text-center dark:text-purple-400 sm:py-0">
        <motion.h1
          className={`inline-block font-bold capitalize w-full text-8xl 
           ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((letter, index) => (
            <motion.span
              key={letter + "-" + index}
              className="inline-block mt-2"
              variants={singleWord}
            // initial="initial"
            // animate="animate"
            >
              {letter}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
};

export default Animatetext;