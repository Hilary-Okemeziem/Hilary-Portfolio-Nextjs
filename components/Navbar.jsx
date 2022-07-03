import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link  from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavbg = () => {
    if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbg);
  }, [])
    
   

  return (
    <div className={
        navBg ? 
          'fixed w-full h-20 shadow-xl z-[100] bg-black ease-in-out duration-300'
          : 
          'fixed w-full h-20 z-[100]'
      }>
        <div className='flex justify-between items-center w-full h-full px-2 lg:px-10 2xl:px-16'>
            <Link href='/' to="hero" smooth={true} offset={50} duration={500}>
                <Image src="/../public/images/Ho.png" alt="/" width='125' height='70' className='cursor-pointer'/>               
            </Link>  
            
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase text-gray-300 hover:font-bold hover:inline hover:border-b-4 hover:border-[#ff5757] hover:text-[#ff5757]'>
                            Home
                        </li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase text-gray-300 hover:font-bold hover:inline hover:border-b-4 hover:border-[#ff5757] hover:text-[#ff5757]'>
                            About
                        </li>
                    </Link>
                    <Link href='/#skill'>
                        <li className='ml-10 text-sm uppercase text-gray-300 hover:font-bold hover:inline hover:border-b-4 hover:border-[#ff5757] hover:text-[#ff5757]'>
                            Skills
                        </li>
                    </Link>
                    <Link href='/#project'>
                        <li className='ml-10 text-sm uppercase text-gray-300 hover:font-bold hover:inline hover:border-b-4 hover:border-[#ff5757] hover:text-[#ff5757]'>
                            Projects
                        </li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase text-gray-300 hover:font-bold hover:inline hover:border-b-4 hover:border-[#ff5757] hover:text-[#ff5757]'>
                            Contact
                        </li>
                    </Link>
                </ul>

                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className='md:hidden z-10'
                >
                    <AiOutlineMenu size={25} color={'white'} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>

        {/* Side Drawer Menu */}
            <div className={
                nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0e0e10] p-4 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between '>
                        <Link href='/' >
                            <Image src="/../public/images/Ho.png" alt="/" width='125' height='70' className='cursor-pointer' onClick={() => setNav(false)}/>
                        </Link>
                        
                        <div
                            onClick={handleNav}
                            className='rounded-full shadow-md shadow-black p-3 cursor-pointer'
                        >
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className='border-b border-gray-300 my-3'>
                        <p className='w-[85%] md:w-[90%] py-3'>
                            Let&apos;s build something legendary together
                        </p>
                    </div>
                </div>

                <div className='py-2 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/' >
                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                Home
                            </li>
                        </Link>

                        <Link href='/#about' >
                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                About
                            </li>
                        </Link>

                        <Link href='/#skill' >
                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                Skills
                            </li>
                        </Link>

                        <Link href='/#project' >
                            <li className='py-4 text-sm ' onClick={() => setNav(false)}>    
                                Projects
                            </li>
                        </Link>

                        <Link href='/#contact'>
                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                Contact
                            </li>
                        </Link>        
                    </ul>

                    <div>
                        <p className='uppercase tracking-widest text-[#ff5757] pt-8'>
                            Let&apos;s Connect
                        </p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href='https://www.linkedin.com/in/hilary-okemeziem' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>

                            <a href='https://github.com/Hilary-Okemeziem' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>

                            <Link href='/#contact'>
                                <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail onClick={() => setNav(false)} />
                                </div>
                            </Link>
                            
                            <a href='https://drive.google.com/file/d/1rHfHhHdzHYx3p91laitJ5shulpBOQsif/view?usp=drivesdk' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                        <ul>
                            <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600'>
                                <a href='https://www.linkedin.com/in/hilary-okemeziem' target='_blank' rel='noreferrer' className='flex justify-between items-center w-full px-2 text-gray-300 font-bold'>
                                    LinkedIn <FaLinkedin size={30}/>
                                </a>
                            </li>
                            <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#0a192f]'>
                                <a href='https://github.com/Hilary-Okemeziem' target='_blank' rel='noreferrer' className='flex justify-between items-center w-full px-2 text-gray-300 font-bold'>
                                    Github <FaGithub size={30}/>
                                </a>
                            </li>

                            <Link href='/#contact' className='flex justify-between items-center w-full text-gray-300 font-bold'>
                                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#6fc2b0] px-2'>
                                        Email <HiOutlineMail size={30}/>
                                </li>
                            </Link>
                            
                            <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#565f69]'>
                                <a href='https://drive.google.com/file/d/1rHfHhHdzHYx3p91laitJ5shulpBOQsif/view?usp=drivesdk' target='_blank' rel='noreferrer' className='flex justify-between items-center w-full px-2 text-gray-300 font-bold'>
                                    Resume <BsFillPersonLinesFill size={30}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;