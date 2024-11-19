import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  WhatsappIcon,
  SunIcon,
  MoonIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  //custom style element for desktop
  const CustomeLink = ({ href, className = "", title }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-dark absolute  dark:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
            } `}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  // custom style element for mobile
  const CustomeMobileLink = ({ href, className = "", title, toggle }) => {
    const router = useRouter();
    const handleClick = () => {
      toggle();
      router.push(href);
    };
    return (
      <button
        href={href}
        className={`${className} relative group text-light dark:text-dark dark:hover:text-light my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
            } `}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  // theme changer
  const [mode, setMode] = useThemeSwitcher();

  // hamburger menu
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">

        {/* Hamburger menu */}
        <button
          className="items-center justify-center flex-col hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[2.5px] w-8 -translate-y-0.5 rounded-sm ${menu ? "rotate-45 translate-y-1" : "-translate-0.5"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[2.5px] w-6 my-[2px] rounded-sm ${menu ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[2.5px] w-8 translate-y-0.5 rounded-sm ${menu ? "-rotate-45 -translate-y-1" : "translate-0.5"
              }}`}
          ></span>
        </button>

        {/* navbar for desktop */}
        <div className="w-full flex items-center justify-between lg:hidden">
          {/* navigation bar */}
          <nav className="">
            <CustomeLink
              href="/"
              title="Home"
              className="mr-4 text-xl  focus:text-purple-700"
            />
            <CustomeLink
              href="/about"
              title="About"
              className="mx-4 text-xl  focus:text-lime-500"
            />
            <CustomeLink
              href="/project"
              title="Project"
              className="mx-4 text-xl  focus:text-red-700"
            />
            <CustomeLink
              href="/blog"
              title="Blog"
              className="ml-4 text-xl focus:text-yellow-500"
            />
          </nav>

          {/* social media icons */}
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://github.com/thevishingh"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/thevishingh/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/__webinsect__/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/thevishingh"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=+91 91755 06236&text=hello!"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3"
            >
              <WhatsappIcon />
            </motion.a>

            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>

        {/* mobilemenu */}
        {menu ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
        bg-dark/90 rounded-[1rem] backdrop-blur-md py-32 dark:bg-gradient-to-tr from-red-400 to-yellow-300  sm:w-[80%] xs:w-[90%] sm:py-24
        "
          >
            {/* navigation bar */}
            <nav className="flex items-start justify-center flex-col">
              <CustomeMobileLink
                href="/"
                title="Home"
                className="text-xl"
                toggle={handleClick}
              />
              <CustomeMobileLink
                href="/about"
                title="About"
                className="  text-xl"
                toggle={handleClick}
              />
              <CustomeMobileLink
                href="/project"
                title="Project"
                className=" text-xl"
                toggle={handleClick}
              />
              <CustomeMobileLink
                href="/blog"
                title="Blog"
                className=" text-xl focus:text-red-700"
                toggle={handleClick}
              />
            </nav>

            {/* social media icons */}
            <nav className="flex items-center justify-center flex-wrap mt-2  ">
              <motion.a
                href="https://github.com/thevishingh"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thevishingh/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/__webinsect__/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-3"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                href="https://twitter.com/thevishingh"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 mx-3"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://api.whatsapp.com/send?phone=+91 91755 06236&text=hello!"
                target={"_blank"}
                whileHover={{ y: -2 }}
                className="w-6 ml-3 bg-black rounded-full sm:mx-1"
              >
                <WhatsappIcon />
              </motion.a>

              <button
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                  }`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}

        {/* logo */}
        <div className="absolute left-[50%] top-2 -translate-x-[50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
