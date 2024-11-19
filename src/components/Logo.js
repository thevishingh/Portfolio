import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Logo = () => {
    // framer motion 
    const MotionLink = motion(Link);

    return (
        <>
            <div className="flex items-center justify-center mt-2">
                <MotionLink
                    href="/"
                    className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border-2 border-solid border-transparent dark:border-light
                    sm:w-12 sm:h-12 sm:text-lg
                    "
                    whileHover={{
                        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                        transition:{
                            duration:1,
                            repeat:Infinity
                        }
                    }}
                >
                    V S
                </MotionLink>
            </div>
        </>
    );
};

export default Logo;
