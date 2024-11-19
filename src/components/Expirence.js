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

  const Details = ({ position, comapntLink, company, time, adress, work }) => {
    return (
      <>
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  items-center justify-between ">
          <div>
            <h3 className="capitalize font-bold text-2xl ">
              {position} &nbsp;{" "}
              <a
                href={comapntLink}
                target={"_blank"}
                className="text-red-500 underline underline-offset-4 hover:text-blue-500 capitalize"
              >
                @{company}
              </a>
            </h3>
            <span className="capitalize font-medium text-dark/75 ">
              {time} | {adress}
            </span>
            <p className="font-medium w-full">{work}</p>
          </div>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="mt-64">
        <h2 className=" font-bold text-8xl text-center tracking-wide mb-32 w-full dark:text-lime-50 ">
          Expirence
        </h2>
        <div
          className="w-[75%] mx-auto py-10 px-0 relative dark:bg-light"
          style={styles}
        >
          <ul className=" w-full flex flex-col items-start justify-between ml-4">
            {/* Company - 1 */}
            <Details
              className=""
              position="Software Engineer"
              comapntLink="https://www.google.com/"
              company="Google"
              time="2022-Present"
              adress="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            />
            {/* company - 2*/}
            <Details
              className=""
              position="Intern"
              company="Facebook"
              time="Summer 2021"
              adress=" Menlo Park, CA."
              work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                    share short-form video content, including designing and implementing a new user interface and developing 
                    the backend infrastructure to support the feature."
            />
            {/* company - 3 */}
            <Details
              className=""
              position="Software Developer"
              company="Amazon"
              time="2020-2021"
              adress=" Seattle, WA."
              work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                as product recommendations and user reviews, and optimizing the app's performance and reliability."
            />
            {/* comapany - 4 */}
            <Details
              className=""
              position="Software Developer Intern"
              company="Microsoft"
              time="Summer 2019 "
              adress="Redmond, WA."
              work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        a core system component."
            />
            {/* company-5 */}
            <Details
              className=""
              position="Teaching Assistant"
              company="MIT"
              time="Fall 2018"
              adress="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                        and graded exams and assignments."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Expirence;
