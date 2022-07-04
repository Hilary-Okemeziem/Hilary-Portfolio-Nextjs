import React, { useEffect } from 'react'
import html from '../public/images/html.png'
import css from '../public/images/css.png'
import javascript from '../public/images/javascript.png'
import react from '../public/images/react.png'
import next from '../public/images/icons8-next.js-144.png'
import bootstrap from '../public/images/icons8-bootstrap-144.png'
import wordpress from '../public/images/icons8-wordpress-144.png'
import tailwind from '../public/images/tailwind.png'
import firebase from '../public/images/firebase.png'
import github from '../public/images/github.png'
import git from '../public/images/icons8-git-144.png'
import Image from 'next/image'
import { Fade, Rotate } from 'react-reveal'

const Skills = () => {
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
    <div id='skill' className='w-full lg:h-screen p-2 py-16'>
        <div className='max-w-[1240px] mx-auto flex  flex-col justify-center h-full lg:pl-4 reveal'>
            <div className='py-2'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest'>Skills</p>
            </div>
            <h2 className='text-4xl text-gray-400 font-bold py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Fade duration={3000} left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={html} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Rotate duration={3000} left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={css} alt="/" width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                </Rotate>

                <Fade duration={3000} bottom>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={javascript} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade duration={3000} top left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={react} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React JS </h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Rotate duration={3000} top left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={next} alt="/" width='70px' height='70px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next JS</h3>
                            </div>
                        </div>
                    </div>
                </Rotate>

                <Fade duration={3000} bottom left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={tailwind} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Rotate duration={3000} bottom left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={bootstrap} alt="/" width='64px' height='64px'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                </Rotate>

                <Fade duration={3000} left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={firebase} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Rotate duration={3000} left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={git} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>
                </Rotate>

                <Fade duration={3000} bottom>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={github} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade duration={3000} top left>
                    <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src={wordpress} alt="/" width='64px' height='64px' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Wordpress</h3>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>            
        </div>
    </div>
  )
}

export default Skills