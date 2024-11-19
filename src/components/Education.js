import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Expirence = () => {
    //custome css
    const styles = {
        // background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    };

    // useScroll Hooks
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    const Details = ({ type, time, place, info }) => {
        return (
            <>
                <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  items-start justify-start md:w-[90%] md:my-5  xs:w-[90%]">
                    <div>
                        <h3 className="capitalize font-bold text-2xl xs:text-[1.1rem] md:font-semibold ">{type} &nbsp;</h3>
                        <span className="capitalize font-medium text-dark/75 dark:text-lime-400">
                            {time} | {place}
                        </span>
                        <p className="font-medium xs:text-sm">{info}</p>
                    </div>
                </li>
            </>
        );
    };

    return (
        <>
            <div className="mt-64 md:mt-20">
                <h2 className=" font-bold text-8xl text-center tracking-wide mb-24 w-full dark:!text-lime-500 md:text-5xl md:mb-8 sm:text-3xl sm:mb-12">
                    EDUCATION
                </h2>
                <div className="w-[75%] mx-auto py-10 px-0 relative first-letter dark:bg-transparent
                md:w-[90%] xs:w-[90%]
                " style={styles}>
                    <ul className=" w-full flex flex-col items-start justify-between ml-4 dark:text-light">
                        {/* company - 2*/}
                        <Details
                            className=""
                            type="Bachelor Of Science In Information Technology"
                            time="2017-2020"
                            place="Mumbai Univercity (MU)"
                            info="Relevant Things included Data Structures and Algorithms, Computer Systems Web Development, Liux and 
                                Intelligence."
                        />
                        <Details
                            className=""
                            type="Android Developer"
                            time="2023"
                            place="Ducat Gurugram sector"
                            info="Relevant things included React Nactive, Chakra-Ui Material-UI Node.js, Express.js, MongoDb etc."
                        />
                        <Details
                            className=""
                            type="Mern stack Development"
                            time="2023"
                            place="Ducat Gurugram sector"
                            info="Languages Like  Html5, Css3, Javascript, Typescript, React, Node.js, Express.js, MongoDb, Mongoose etc."
                        />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Expirence;
