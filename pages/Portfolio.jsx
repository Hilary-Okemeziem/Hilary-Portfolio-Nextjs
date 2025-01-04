import React from "react";
import Image from "next/image";
import portfolio from "../public/images/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="w-full bg-[#070708]">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          src={portfolio}
          alt="/"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] px-2 lg:px-10 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-300 z-10 ">
          <div className="lg:pl-4">
            <h2 className="py-2 text-4xl">Portfolio</h2>
            <h3 className="text-2xl">Next JS / TailwindCSS</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-2 lg:px-10 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 lg:pl-4">
          <p className="font-bold">Project</p>
          <h2 className="text-4xl">Overview</h2>
          <div className="py-2">
            This Portfolio for a client was built with Next JS and javascript. It is hosted
            on Porkbun.
            Its a simple website detailing the portfolio of a UI/UX designer, her design, background and contact.
          </div>
          <div className="py-2">
            There was no api involved for this project.
          </div>
          <div className="py-2">The project was styled with Tailwind CSS</div>

          <a
            href="https://dera-portfolio-9epdj645v-hilaryokemeziems-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-md shadow-black rounded-xl uppercase bg-gradient-to-r from-[#ff5757] to-[#f899ac] text-gray-100">
              Live Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-400 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              NextJS
            </p>
            <p className="text-gray-400 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              CSS
            </p>
            <p className="text-gray-400 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              Javascript
            </p>
            <p className="text-gray-400 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              Tailwind CSS
            </p>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer lg:pl-4">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
