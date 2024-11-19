import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile2.png";
import Animatetext from "@/components/Animatetext";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import Hireme from "@/components/Hireme";
import TransitionEffect from "@/components/TransitionEffect";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";


export default function Home() {

  // custome css
  const styleObj = {
    borderRadius: "0px",
    background: "linear-gradient(145deg, #ECF8F9, #DDF796)",
    boxShadow: ` 14px 14px 0px #BAD7E9,
    -14px -14px 0px #BAD7E9 `,
  };

  return (
    <>
      <Head>
        <title>Codewithvish || Home</title>
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
      <main className="flex items-center text-dark w-full min-h-screen  dark:text-light ">
        <Layout className="pt-0 md:p-16 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* Profile Pic */}
            <div className="w-1/2 h-auto md:w-[60%]">
              <Image
                src={profilePic}
                alt="Vishal"
                className="w-1/2 h-auto object-cover lg:hidden md:inline-block md:w-full"
                style={styleObj}
                priority
                sizes="
                (max-width:768px) 100vw, 
                (max-width:1200px) 50vw,
                50vw
                "
              />
            </div>
            {/* Text */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <Animatetext
                text="Web development is your artistic expression And Your portfolio is a gallery for showcasing your profession"
                className="!text-6xl !text-left first-letter:
              xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl lg:!text-center md:!mt-14 xs:!text-left
                "
              />
              <p className="my-4  font-medium text-2xl md:text-sm sm:text-xs xs:text-left">
                As a skilled Frontend developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex items-center mt-2 self-start lg:self-center lg:gap-3 xs:self-start">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1 md:w-5"} />
                </Link>
                <Link
                  href="mailto:thevishingh@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-xl font-medium capitalize text-dark underline hover:text-red-700 hover:font-semibold dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* hire me  */}
        <Hireme />
        {/* bulb image */}
        {/* <div className="absolute right-8  bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
