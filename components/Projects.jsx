import React, { useEffect } from 'react'
import  Link  from 'next/link'
import netflix from '../public/images/netflix.png'
import crypto from '../public/images/crypto.png'
import twitch from '../public/images/twitch.png'
import kaycelle from '../public/images/kaycelle.png'
import realestate from '../public/images/realestate.png'
import portfolio from "../public/images/portfolio.png";
import kofyimages from "../public/images/kofyimages.png";
import deepthinkers from "../public/images/deepthinkers.png";
import ip from '../public/images/ip.png'
import Image from 'next/image'
import { Bounce, Fade, Flip, Roll, Slide, Zoom } from 'react-reveal'
import {AiOutlineEye, AiFillGithub} from 'react-icons/ai'

const Projects = () => {
    function reveal() {
        let reveals = document.querySelectorAll('.reveal')


        for (let i = 0; i < reveals.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 150
            
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active')
            }
            else{
                reveals[i].classList.remove('active')
            }
        }
    }
    useEffect (() => {
      window.addEventListener('scroll', reveal);
    }, [])
  return (
    <div id="project" className="w-full lg:pl-4 bg-[#070708]">
      <div className="max-w-[1240px] mx-auto px-2 lg:px-10  py-[5rem] reveal ">
        <div className="py-2">
          <p className="text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest">
            Projects
          </p>
        </div>
        <h2 className="text-4xl text-gray-400 py-4 font-bold">
          What I&apos;ve Built
        </h2>
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={portfolio}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Portfolio Website
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                <Link href="/Portfolio">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={kofyimages}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Tour and Flight Booking app
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/KofyImages">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={deepthinkers}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Social Media App
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                  Vite + React JS
                </p>
                <Link href="/Deepthinkers">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade duration={2000} bottom>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={kaycelle}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  E-commerce Store
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>
          <Slide duration={2000} left>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={realestate}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Real Estate Website
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                <Link href="/RealEstate">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>
          <Roll duration={2000}>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={crypto}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Crypto App
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/Crypto">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Roll>
          <Slide duration={2000}>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={ip}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  IP Address Tracker
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/Ip">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>
          <Fade duration={2000} top left>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={netflix}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Netflix UI Clone
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/Netflix">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>
          <Slide duration={2000} bottom>
            <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={twitch}
                alt="/"
                className="rounded-xl group-hover:opacity-30"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Twitch UI Clone
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                <Link href="/Twitch">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>
        </div>

        <div className="grid sm:grid-cols-2 md:hidden gap-8">
          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={portfolio}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Portfolio Website
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                <Link href="/Portfolio">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={kofyimages}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Tour and Flight Booking app
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React JS</p>
                <Link href="/KofyImages">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade duration={2000} bottom>
            <div className="relative flex justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4  group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]">
              <Image
                src={deepthinkers}
                alt="/"
                className="rounded-xl group-hover:opacity-30 h-[60rem]"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-3xl tracking-wider text-white text-center">
                  Social Media App
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                  Vite + React JS
                </p>
                <Link href="/Deepthinkers">
                  <p className="text-center p-3 px-20 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>
          
          <Fade duration={2000} bottom>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={kaycelle} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    Ecommerce Store
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://kaycelle-brand.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/Ecommerce-web-reactjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">React JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Slide duration={2000} left>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={realestate} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    Real Estate Website
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://lhary-real-estate.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/Real-estate-web-nextjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">React JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>

          <Zoom duration={2000}>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={crypto} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    Crypto App
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://cryptoexpress-dc4ab.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/Crypto-web"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">React JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Zoom>

          <Slide duration={2000}>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={ip} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    IP Address Tracker
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://ipaddress-webtracker.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/IP-address-tracker-reactjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">React JS</p>
                <Link href="/Ip">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>

          <Fade duration={2000} top left>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={netflix} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    Netflix UI clone
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://netflix-7e17a.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/Netflix"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">React JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Fade>

          <Slide duration={2000} bottom>
            <div className="h-auto w-full bg-[#0e0e10] rounded-b-xl">
              <Image src={twitch} alt="/" className="rounded-t-xl" />
              <div className="shadow-md shadow-black bg-[#0e0e10] rounded-b-xl p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl tracking-wider text-white">
                    Twitch UI clone
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://twitch-nextjs.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineEye size={22} />
                    </a>
                    <a
                      href="https://github.com/Hilary-Okemeziem/Twitch-nextjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </div>
                </div>
                <p className="pb-3 pt-1 text-white">Next JS</p>
                <Link href="/WebStore">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Projects