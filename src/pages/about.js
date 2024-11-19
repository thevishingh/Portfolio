import Animatetext from "@/components/Animatetext";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile3.jpg";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Expirence from "@/components/Expirence";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  //custome css
  const styles = {
    textWithGap: {
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      textDecorationSkipInk: "none",
      color: "#CD1818",
      fontSize: "14x",
      fontWeight: "500",
      cursor: "pointer",
    },
  };

  //Animation Number
  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    //useEffect
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    //useEffect
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };

  return (
    <>
      <Head>
        <title>Codewithvish || About</title>
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
      <TransitionEffect />
      <main className="w-full flex items-center justify-center flex-col">
        <Layout className="">
          <Animatetext
            text="Creating magic in the digital space"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 dark:!text-lime-500"
          />
          <div className="grid w-full grid-cols-8 gap-16 dark:text-lime-50 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 tracking-wider dark:text-light/75 md:mt-2">
                Biography
              </h2>
              <p className="font-medium text-lg mt-4 ">
                Welcome to my frontend web developer portfolio! Vishal Singh
                A passionate and detail-oriented developer specializing in
                creating immersive and engaging user experiences. With expertise
                in
                <strong> HTML</strong>
                <strong> CSS</strong>
                <strong> React.js</strong>
                <strong> Bootstrap</strong>
                <strong> Tailwind.css</strong>
                <strong> React.js</strong>
                Next.jsAnd other modern frontend technologies, I bring design
                concepts to life, crafting visually stunning and responsive
                websites
              </p>
              <p className="font-medium text-lg mt-4">
                My goal is to combine aesthetics with functionality, ensuring
                seamless navigation and optimal performance across different
                devices and platforms. Whether it&apos;s building interactive
                features, optimizing performance, or implementing smooth
                animations, I thrive on pushing the boundaries of frontend
                development.
              </p>
              <p className="font-medium text-lg mt-4">
                Throughout my portfolio, you&apos;ll find a showcase of my
                projects, demonstrating my ability to transform ideas into
                tangible web solutions. From small business websites to complex
                web applications, I have experience working on diverse projects
                that cater to various industries.
              </p>
              <p className="font-medium text-xl mt-4">
                I am also proficient in utilizing version control systems like
                <strong> Git</strong> and collaboration platforms like <strong> GitHub</strong> to streamline development processes and ensure efficient
                teamwork.
              </p>
              <p className="font-medium text-xl mt-4">
                With a deep passion for creating exceptional digital
                experiences, I am constantly expanding my skill set and staying
                up to date with the latest frontend technologies and trends.
                Let&apos;s collaborate to bring your vision to life and deliver
                a remarkable online presence that leaves a lasting
                impression&apos;
              </p>
            </div>

            {/* profile pic for about */}
            <div className="col-span-3 relative w-full h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-lime-50 md:order-1" />
              <Image
                src={profilePic}
                alt="vishal"
                className="w-full h-auto  rounded-2xl"
                priority
                sizes="
                (max-width:768px) 100vw, 
                (max-width:1200px) 50vw,
                33vw
                "
              />
            </div>

            {/* Animated text */}
            <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl dark:!text-lime-500">
                  <AnimatedNumber value={2} /> +
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-lime-50 md:text-base">
                  satisfied Client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl dark:!text-lime-500">
                  <AnimatedNumber value={14} /> +
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-lime-50 md:text-base">
                  Project Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl dark:!text-lime-500">
                  <AnimatedNumber value={1} /> +
                </span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-lime-50 md:text-base">
                  Less than &lt; 1 Year
                </h2>
              </div>
            </div>
          </div>

          {/* Skills */}
          <Skills />

          {/* Expirence */}
          {/* <Expirence /> */}

          {/* EDUCATION */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
