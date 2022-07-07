import React, { useEffect } from 'react'
import { AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import copyright from '../public/images/icons8-copyright-32.png'
import { Fade } from 'react-reveal';

const Contact = () => {
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
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 pt-[5rem] pb-5 reveal'>
            <div className='py-2'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest'>Contact</p>
            </div>
            <h2 className='text-4xl text-gray-400 py-4 font-bold'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <Fade duration={2000} bottom left>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4'>
                        <div className='lg:p-4 w-full'>
                            <div>
                                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" className='rounded-xl hover:scale-105 ease-in duration-300' />
                            </div>
                            <div>
                                <h2 className='py-2 font-bold text-2xl'>Hilary Okemeziem</h2>
                                <p>Front-End Developer</p>
                                <p className='py-4'>I am available for freelance, part-time or full-time positions. Contact me and let&apos;s talk.</p>
                            </div>
                        </div>

                        <div>
                            <p className='uppercase pt-8 text-center'>Connect With me</p>

                            <div className='flex items-center justify-between py-4 p-14'>
                                <a href='https://www.linkedin.com/in/hilary-okemeziem' target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>

                                <a href='https://github.com/Hilary-Okemeziem' target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                
                                <Link href='/'>
                                    <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>

                                <a href='https://drive.google.com/file/d/1rHfHhHdzHYx3p91laitJ5shulpBOQsif/view?usp=drivesdk' target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>  
                    </div>
                </Fade>

                <Fade duration={2000} left>
                    <div className='col-span-3 w-full h-auto shadow-md shadow-black bg-[#0e0e10] rounded-xl'>
                        <div className='p-4'>
                            <form action='https://getform.io/f/ca318b4d-45cc-42a1-ade3-b46122deca17' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type="text" className='border-2 rounded-lg p-3 flex 
                                        border-gray-300 text-black' name='name'  />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type="tel" className='border-2 rounded-lg p-3 flex 
                                        border-gray-300 text-black ' name='tel' />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input type="email" className='border-2 rounded-lg p-3 flex 
                                        border-gray-300 text-black ' name='email' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex 
                                        border-gray-300 text-black ' name='subject' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300 text-black' name='message' rows='5'></textarea>
                                </div>

                                <button className='w-full p-4 mt-4 shadow-md shadow-black rounded-xl uppercase bg-gradient-to-r from-[#ff5757] to-[#f899ac] text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
        <div className='flex justify-center py-2'>
                <Link href='/'>
                    <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp color={'#ff5757'}/>
                    </div>
                </Link>
        </div>
        <div className='py-4 bg-[#070708]'>
            <div className='flex items-center justify-center'>
                <div>
                    <Image src={copyright} alt="/" width='20px' height='20px' />
                </div>
                <div>
                    <p className="font-bold ml-2 mb-2"><small> Okemeziem.S.Hilary All rights reserved.</small></p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact