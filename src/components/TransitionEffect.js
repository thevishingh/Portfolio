import React from 'react';
import { motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
      {/* <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-yellow-500"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-lime-500"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-blue-300"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      /> */}

      <motion.div className="fixed bottom-full left-0 w-screen h-screen z-30 bg-gray-200"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className="fixed bottom-full left-0 w-screen h-screen z-20 bg-cyan-300"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        // exit={{ x: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className="fixed bottom-full left-0 w-screen h-screen z-10 bg-green-300"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        // exit={{ x: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />

    </>

  );
};

export default TransitionEffect;
