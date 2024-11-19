import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Hi there! I'm Vishal Singh a web developer with a focus on crafting clean and efficient code I love transforming design concepts into functional websites using the latest web technologies like React.js, Next.js, Tailwind.css, boottstrap material UI, Node.js, Express.js, MongoDb, Mongoose, Git etc. Explore my portfolio to witness the power of coding."
        />
        <meta
          name="keywords"
          content="    Web Development
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
    Problem-Solving"
        />
        <meta name="author" content="Vishal Singh" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
