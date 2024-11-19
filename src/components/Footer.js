import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { CellphoneIcon } from "./Icon";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2  border-solid border-dark font-medium text-lg dark:text-lime-50 dark:border-t-lime-50 sm:text-base">
        <Layout className="py-4 flex items-center justify-around lg:py-3 md:flex-col md:py-4 sm:py-2 md:w-full">
          <span className="
          dark:border-light dark:border dark:border-solid dark:p-3 dark:rounded-lg md:dark:border-none md:dark:p-0 
          ">
            {new Date().getFullYear()} &copy; All Right Reserved
          </span>
          <div className="flex items-center dark:border-light dark:border dark:border-solid dark:p-3 dark:rounded-lg md:dark:border-none md:dark:p-0 md:py-2">
            Build with <span className="mx-1">💖 By</span>
            <Link
              href="/about"
              className="text-xl font-base underline underline-offset-5 dark:hover:text-blue-200 md:text-lg tracking-wide"
            >
              Thevishingh
            </Link>
          </div>
          <Link
            href="tel:9175506236"
            // target={"_blank"}
            className="text-xl font-semibold tracking-wide dark:hover:text-blue-200 flex items-center justify-center  dark:border-light dark:border dark:border-solid dark:p-3 dark:rounded-lg md:dark:border-none md:dark:p-0 md:text-lg"
          >
            Say Hello
            <span className="ml-2">
              <CellphoneIcon className="" />
            </span>
          </Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
