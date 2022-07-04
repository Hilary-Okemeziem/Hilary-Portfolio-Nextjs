import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiArrowNarrowRight} from 'react-icons/hi'
import  Link  from 'next/link'
import myimg from '../public/images/IMG_9700.JPG'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full h-screen'>
        <div className='hidden lg:flex justify-center items-center h-full'>
            <div className='pl-[4rem] pt-[4rem]'>
                <p className='text-[#ff5757] text-2xl'>Hello I&apos;m</p>
                <h1 className='text-4xl sm:text-6xl font-bold text-[#ccf6f6]'>Hilary Okemeziem</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>A Frontend Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I&apos;m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive web applications.</p>

                <div>
                   <Link href='/#project'>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff5757] hover:border-[#ff5757]'>
                        View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                    </button>             
                  </Link>       
                </div>
            </div>
            <div>
                <Image src={myimg} alt="/" width='600px' height='710px' className='object-cover'/>
            </div>    
        </div>

        <div className='area lg:hidden'>
            <ul className="circles">
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
                <li className="square"></li>
            </ul>

            <div className='flex flex-col justify-center items-center h-full relative pt-[7rem]'>
                <div className='p-2 text-center'>
                    <p className='text-[#ff5757]  text-2xl animate__animated animate__fadeInLeft animate__slow'>Hello I&apos;m</p>

                    <h1 className='text-4xl sm:text-6xl font-bold text-[#ccf6f6] animate__animated animate__fadeInLeft animate__delay-2s animate__slow '>Hilary Okemeziem</h1>

                    <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0] mt-3 animate__animated animate__fadeInLeft animate__delay-3s animate__slow'>A Frontend Developer.</h2>
                    
                    <p className='text-[#8892b0] py-4 max-w-[700px] animate__animated animate__fadeInLeft animate__delay-3s animate__slow '>I&apos;m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive web applications.</p>

                    <div className='flex items-center justify-center animate__animated animate__fadeInLeft animate__delay-4s animate__slow'>
                        <Link href='/#project'>
                            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff5757] hover:border-[#ff5757]'>
                                View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                            </button>             
                        </Link>    
                    </div>

                    <div className='flex items-center justify-center my-4 w-full animate__animated animate__fadeInLeft animate__delay-5s animate__slow '>
                        <a href='https://www.linkedin.com/in/hilary-okemeziem' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a href='https://github.com/Hilary-Okemeziem' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ml-[2rem]'>
                                <FaGithub />
                            </div>
                        </a>
                        
                        {/* <Link href='/#contact'>
                            <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link> */}

                        <a href='https://drive.google.com/file/d/1rHfHhHdzHYx3p91laitJ5shulpBOQsif/view?usp=drivesdk' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ml-[2rem]'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Hero;