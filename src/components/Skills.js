import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import html from "../../public/images/skills/html.png";
import css from "../../public/images/skills/css.png";
import js from "../../public/images/skills/javascript.png";
import react from "../../public/images/skills/react.png";
import bootstrap from "../../public/images/skills/bootstrap.png";
import tailwind from "../../public/images/skills/tailwind.png";
import material from "../../public/images/skills/material.png";
import firebase from "../../public/images/skills/firebase.png";
import next from "../../public/images/skills/nextjs.png";
import git from "../../public/images/skills/git.png";
import framer from "../../public/images/skills/framer-motion.png";
import node from "../../public/images/skills/node.png";
import express from "../../public/images/skills/express.png";
import mongodb from "../../public/images/skills/mongodb.png";
import canva from "../../public/images/skills/canva.png";

const Skills = () => {
  // custome css
  const customeEle = {
    styles: {
      borderRadius: "42px",
      background: "linear-gradient(45deg, #489cab, #56b9cb)",
      boxShadow: "17px -17px 34px #316a74, -17px 17px 34px #6ff0ff",
    },
    style2: {
      background: "rgba(255, 255, 255, 0.25)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
  };
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center tracking-wide mb-10  dark:!text-lime-500 md:text-5xl md:mt-20">
        Skills
      </h2>
      <div className="w-full h-auto grid place-items-center mt-24 grid-cols-6 gap-x-0 gap-y-10  dark:text-lime-50
      lg:grid-cols-4 md:grid-cols-3 md:gap-y-4 xs:grid-cols-2 sm:mt-12
      ">
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={html} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Html
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}

        >
          <Image src={css} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Css
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={js} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Javascript
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={bootstrap} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Bootstrap
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={tailwind} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs md:text-[10px]">
            Tail css
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={react} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            React
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={next} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Next.js
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={git} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs tracking-wider">
            git
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={framer} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            F Motion
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={material} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Material UI
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={firebase} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Firebase
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={node} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Node.js
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={express} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Express.js
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={mongodb} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            MongoDB
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center flex-col justify-center w-1/2 border-2 border-solid border-dark cursor-pointer "
          style={customeEle.style2}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={canva} alt="" className="w-1/3 mt-4 " />
          <h2 className="mb-4 mt-2 text-sm xs:text-xs">
            Canva
          </h2>
        </motion.div>
      </div>

    </>
  );
};

export default Skills;
