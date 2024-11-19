import Animatetext from "@/components/Animatetext";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import itemsOne from "../../public/images/articles/pagination component in reactjs.jpg";
import { motion, useMotionValue } from "framer-motion";
import articles1 from "../../public/images/articles/pagination component in reactjs.jpg";
import TransitionEffect from "@/components/TransitionEffect";

// animate
const FramerImg = motion(Image);

// featured items components
const FeaturedItems = ({ img, time, title, description, link }) => {
  return (
    <>
      <li className="w-full col-span-1 p-5 border-2 border-solid border-dark bg-light rounded-2xl relative dark:bg-dark dark:border-light dark:text-light
      ">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImg
            src={img}
            alt={title}
            className="w-[100%] h-[100%] rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="
                (max-width:768px) 100vw, 
                (max-width:1200px) 50vw,
                33vw
                "
          />
        </Link>
        <Link href={link} target="_blank">
          <h2 className="capitalize text-2xl font-bold my-2 hover:underline hover:underline-offset-4 dark:hover:text-yellow-500 md:text-lg 
          lg:text-sm
           ">
            {title}
          </h2>
        </Link>
        <p className="text-lg font-[1rem] mb-2">{description}</p>

        <Link href={link} target="_blank" className="text-dark dark:text-yellow-500 font-medium dark:hover:text-light dark:hover:underline dark:hover:underline-offset-4">
          read more
        </Link>
      </li>
    </>
  );
};

// moving Animation images
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <>
      <Link
        href={link}
        target="_blank"
        className=""
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline hover:underline-offset-4 hover:text-yellow-500
        lg:text-base xs:text-sm
        ">
          {title}
        </h2>
        <FramerImg
          ref={imgRef}
          src={img}
          alt={title}
          className="z-10 w-96 h-auto hidden absolute rounded-lg xs:w-[12rem] sm:w-[16rem]"
          style={{
            x: x,
            y: y,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transtion: { duration: 0.2 } }}
          priority
          sizes="
                (max-width:768px) 100vw, 
                (max-width:1200px) 50vw,
                33vw
                "
        />
      </Link>
    </>
  );
};

//article components
const Articles = ({ img, title, date, link }) => {
  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duation: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="relative w-full p-4 rounded-xl pt-6 flex items-center justify-between bg-light text-dark first:mt-0 border border-dark border-solid my-4 dark:bg-dark dark:text-light dark:border-light
      border-r-4 border-b-4
      md:w-full
      md:flex-col
      md:items-start
      ">
        <MovingImg title={title} img={img} link={link} />
        <Link href={link} target="_blank" className="dark:text-yellow-500 font-semibold text-lg dark:hover:text-light dark:hover:underline dark:hover:underline-offset-4 xs:text-sm xs:font-semibold lg:text-base md:mt-4">
          Read
        </Link>
      </motion.li>
    </>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Codewithvish || Blog</title>
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
      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <Animatetext
            text="A blog is a canvas where words come alive and thoughts find their voice"
            className="mb-16 xl:!text-7xl md:!text-5xl sm:!text-3xl xs:!text-2xl sm:!text-center md:!mb-6 xs:mb-2 lg:mb-8 md:!text-center
            dark:!text-yellow-500 xs:!text-left"
          />
          {/* Featurd blogs */}
          <ul className="grid grid-cols-3 gap-16 place-items-center mt-12 md:grid-cols-2 md:mt-2 sm:grid-cols-1 sm:gap-y-14">
            <FeaturedItems
              img={itemsOne}
              // time="10 min read"
              title="pagination component"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              description="Pagination refers to the practice of dividing a large set of data or content into smaller, more manageable sections or pages. It is commonly used in websites, applications, and databases to present data in a structured and organized manner, improving user experience and performance."
            />
            <FeaturedItems
              img={itemsOne}
              // time="10 min read"
              title="pagination component"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              description="Pagination refers to the practice of dividing a large set of data or content into smaller, more manageable sections or pages. It is commonly used in websites, applications, and databases to present data in a structured and organized manner, improving user experience and performance."
            />
            <FeaturedItems
              img={itemsOne}
              // time="10 min read"
              title="pagination component"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              description="Pagination refers to the practice of dividing a large set of data or content into smaller, more manageable sections or pages. It is commonly used in websites, applications, and databases to present data in a structured and organized manner, improving user experience and performance."
            />
            <FeaturedItems
              img={itemsOne}
              // time="10 min read"
              title="pagination component"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              description="Pagination refers to the practice of dividing a large set of data or content into smaller, more manageable sections or pages. It is commonly used in websites, applications, and databases to present data in a structured and organized manner, improving user experience and performance."
            />
          </ul>
          {/* Articles Secion */}

          <h2 className="text-center my-24 text-dark text-5xl font-bold capitalize xl:!text-7xl md:!text-5xl sm:!text-3xl xs:!text-2xl sm:!text-center md:!mb-8 lg:mb-8 md:!text-center
            dark:!text-tellow-500 xs:!text-left">
            More articles
          </h2>
          <ul className="">
            <Articles
              title="Pagination refers to the practice of dividing a large set of data or content into smaller"
              img={articles1}
              date="23 june"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
            />
            <Articles
              title="Pagination refers to the practice of dividing a large set of data or content into smaller"
              img={articles1}
              date="23 june"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
            />
            <Articles
              title="Pagination refers to the practice of dividing a large set of data or content into smaller"
              img={articles1}
              date="23 june"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
            />
            <Articles
              title="Pagination refers to the practice of dividing a large set of data or content into smaller"
              img={articles1}
              date="23 june"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
            />
            <Articles
              title="Pagination refers to the practice of dividing a large set of data or content into smaller"
              img={articles1}
              date="23 june"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blog;
