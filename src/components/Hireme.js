import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const Hireme = () => {
  return (
    <>
      <div className="fixed right-4 bottom-[3rem] flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute xs:right-0">
        <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
          <CircularText className={"fill-dark animate-spin-slow dark:fill-light my-4 md:my-0"} />
          <Link
            href="mailto:thevishingh@gmail.com"
            target="_blank"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  text-black border-solid shadow-md border-dark w-20 h-20 dark:text-light md:w-12 md:h-12 md:text-[10px]"
          >
            Hire
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hireme;
