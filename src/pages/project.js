import Animatetext from "@/components/Animatetext";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import feturedProjectsOne from "../../public/images/projects/ecommerce.jpg";
import feturedProjectsTwo from "../../public/images/projects/microsoft.PNG";
import projectOne from "../../public/images/projects/game.PNG";
import projectTwo from "../../public/images/projects/quotes.PNG";
import projectThird from "../../public/images/projects/profilecaed.PNG";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

//Image animation
const FramerImg = motion(Image);

const project = () => {

  // FetuaredProjects components
  const FetuaredProjects = ({
    type,
    title,
    img,
    link,
    demo,
    github,
    description,
    note,
  }) => {
    return (
      <>
        <article
          className="w-full flex items-center justify-between rounded-3xl border-2 border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light dark:text-light
          lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
          "
        // style={styles1}
        >
          <div className=" absolute top-0 -right-3 -z-10 rounded-[2.5rem] w-[101%] h-[103%] bg-black rounded-br-3xl dark:bg-light
          xs:right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
          " />
          <Link
            href={link}
            target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
          >
            <FramerImg
              src={img}
              alt={title}
              className="w-full h-auto rounded-2xl border-2 border-dark"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="
                                    (max-width:768px) 100vw, 
                                    (max-width:1200px) 50vw,
                                    50vw
                                "
            />
          </Link>
          <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0">
            <span className="text-dark font-medium text-lg dark:text-red-500 lg:mt-2 xs:text-base">
              {type}
            </span>
            <Link href={link} target="_blank">
              <h2 className="my-2 w-full text-left text-4xl font-medium hover:text-red-700 hover:underline-offset-4 hover:underline dark:hover:text-red-500 sm:text-sm">
                {title}
              </h2>
            </Link>
            <p className="w-[80%] font-medium text-dark text-left dark:text-light md:w-[100%] md:text-sm">
              {description}
            </p>
            <div className=" w-1/5 flex items-center justify-start gap-4 my-4 sm-w[50%]">
              <Link href={github} target="_blank" className="">
                <GithubIcon className="sm:w-[15px]" />
              </Link>

              <Link
                href={demo}
                target="_blank"
                className="text-black text-2xl font-semibold hover:underline hover:underline-offset-4 dark:text-light dark:hover:text-red-500 sm:text-sm "
              >
                Demo
              </Link>
            </div>
            <p className="md:text-sm">Note &rarr; {note}</p>
          </div>
        </article>
      </>
    );
  };

  // single projects
  const Project = ({
    title,
    type,
    img,
    link,
    demo,
    github,
    description,
    note,
  }) => {
    return (
      <>
        <article
          className="w-full flex items-center justify-between p-12 border-2 border-solid border-dark bg-light relative rounded-2xl dark:bg-dark dark:border-light dark:text-light 
          lg:flex-col lg:p-6 xs:p-4 lg:items-start xl:flex-col xl:p-6 xl:items-start
          "

        >
          <div className="absolute top-0 -right-3 -z-10 rounded-[2rem] w-[101%] h-[103%] bg-black dark:bg-lime-50 md:-right-2 xs:h-[102%] md:w-[101%] xs:rounded-[1.5rem]" />
          <Link
            className=" w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full lg:rounded-lg lg:mb-2 xl:w-full"
            href={link}
            target="_blank"
          >
            <FramerImg
              src={img}
              alt={title}
              className="w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="
                (max-width:768px) 100vw, 
                (max-width:1200px) 50vw,
                50vw
                "
            />
          </Link>
          <div className=" w-1/2 pl-16 lg:w-full lg:pl-0 xl:w-full xl:p-0">  {/* flex flex-col items-start justify-between  */}
            <span className="font-medium text-dark dark:text-red-500 text-lg md:text-base lg:text-lg">
              {type}
            </span>
            <Link href={link} target="_blank">
              <h2 className="my-2 w-full text-left hover:text-red-700 hover:underline-offset-4 hover:underline font-medium text-xl text-dark dark:text-light
              lg:text-sm dark:hover:text-red-500
              ">
                {title}
              </h2>
            </Link>
            <p className="font-medium text-dark text-left dark:text-light md:text-left md:text-[0.9rem]">
              {description}
            </p>
            <div className="w-[30%] my-2 gap-4 flex items-center justify-start sm:w-[50%]">  {/* flex text-center justify-between   */}
              <Link href={github} className="" target="_blank">
                <GithubIcon className="sm:w-[15px]" />
              </Link>
              <Link
                href={demo}
                className="text-black text-lg font-medium hover:text-red-700 hover:underline hover:underline-offset-4 dark:text-light dark:hover:text-red-500 md:text-base"
                target="_blank"
              >
                Demo
              </Link>
            </div>
            <p className="dark:text-light xs:text-xs md:text-sm">Note &rarr; {note}</p>
          </div>
        </article>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Codewithvish || Projects </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Hi there! I'm Vishal Singh a web developer with a focus on crafting clean and efficient code I love transforming design concepts into functional websites using the latest web technologies like React.js, Next.js, Tailwind.css, boottstrap material UI, Node.js, Express.js, MongoDb, Mongoose, Git etc. Explore my portfolio to witness the power of coding." />
        <meta name="keywords" content="    Web Development
    Front-End Development
    Back-End Development
    Responsive Design
    User Experience (UX)
    HTML
    CSS
    JavaScript
    Frameworks (e.g., React, Angular, Vue)
    UI/UX Design
    Cross-Browser Compatibility
    Mobile Optimization
    Performance Optimization
    SEO (Search Engine Optimization)
    WordPress Development
    E-commerce Solutions
    API Integration
    Git Version Control
    Agile Development
    Problem-Solving" />
        <meta name="author" content="Vishal Singh" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <Animatetext
            text="Merging creativity and functionality on the web"
            className="text-6xl mb-16 xl:!text-7xl md:!text-5xl sm:!text-3xl xs:!text-2xl sm:!text-center md:!mb-8 lg:mb-8 md:!text-center
            dark:!text-red-500 xs:!text-left
            "
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xs:gap-y-10">
            {/* featured project */}
            <div className="col-span-12 md:col-span-12">
              <FetuaredProjects
                title="E-commerce Website"
                img={feturedProjectsOne}
                description="The project is a dynamic and interactive website built using React.js and the React Slick library. It combines the power of React's component-based architecture with the versatility of React Slick's carousel functionality"
                link="https://vishshop.netlify.app"
                type="Featured Projects"
                github="https://github.com/thevishingh/React-E-commerce-Template"
                demo="https://vishshop.netlify.app"
                note="This is not Responsive"
              />
            </div>

            {/* project */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project-One"
                title="Tic-Tae-Toe"
                link="https://play-tic-tae-toe-games.netlify.app"
                img={projectOne}
                description="Project Description:This project is a Tic-Tae-Toe Game UI developed using HTML, CSS, and 
                                                JavaScript. It utilizes the versatility of HTML for structuring the content, CSS for styling and layout, 
                                                and JavaScript for interactivity and dynamic features. 
                                              "
                github="https://github.com/thevishingh/Tic-Tae-Toe"
                demo="https://play-tic-tae-toe-games.netlify.app"
                note="This is not Responsive"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project-Two"
                title="Quote Generator"
                link="https://vishquotes.netlify.app"
                img={projectTwo}
                description="Project Description:This project is a Quote Geneator developed using HTML, CSS, and 
                                                JavaScript. It utilizes the versatility of HTML for structuring the content, CSS for styling and layout, 
                                                and JavaScript for interactivity and dynamic features. 
                                              "
                github="https://github.com/thevishingh/Quote-Generator"
                demo="https://vishquotes.netlify.app"
                note="This is not Responsive"
              />
            </div>
            {/* featured project */}
            <div className="col-span-12">
              <FetuaredProjects
                title="E-commerce Website"
                img={feturedProjectsTwo}
                description="The project is a dynamic and interactive website built using React.js and the React Slick library. It combines the power of React's component-based architecture with the versatility of React Slick's carousel functionality"
                link="https://microsofttemplate.netlify.app"
                type="Featured Projects"
                github="https://github.com/thevishingh/Microsoft-Homepage"
                demo="https://microsofttemplate.netlify.app"
                note="This is Responsive"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project-Three"
                title="Profile Card"
                link="https://vishprofile.netlify.app"
                img={projectThird}
                description="This project is a Profile card developed using HTML, CSS, and 
                                                JavaScript. It utilizes the versatility of HTML for structuring the content, CSS for styling and layout,
                                              "
                github="https://github.com/thevishingh/Profile-card"
                demo="https://vishprofile.netlify.app"
                note="This is  Responsive"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
