import React, { useEffect} from 'react'
import myimg from '../public/images/IMG_9700.JPG'
import Image from 'next/image'
import { Fade, Rotate, Zoom } from 'react-reveal'

const About = () => {
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
      useEffect(() => {
        window.addEventListener('scroll', reveal);
      }, [])
  return (
    <div id='about' className='w-full lg:h-screen flex items-center py-16 bg-[#070708]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-10 reveal'>
            <div className='col-span-3 pl-4 py-2'>
              <div className=' py-4'>
                <p className='text-3xl tracking-widest font-bold inline border-b-4 border-[#ff5757] uppercase '>About</p>
              </div>
              <h2 className='text-4xl font-bold py-2 text-gray-400'>Who I Am</h2>
              <Fade duration={2000} top left>
                <p className='py-2 text-gray-400'>I am a Frontend Web Developer who loves making experiences that sticks. My passion for learning and my ability to learn quickly enabled me gain mastery over a wide range of design concepts and technologies.<b> My drive is simple:Build good websites that solves a problem. Also, build websites that people would love to use and experience again.</b></p>
              </Fade>

              <Fade duration={2000} left>
                <p className='py-2 text-gray-400'>I take pride in my work, and only deliver professional, clean, polished products. Currently a student of the University of Lagos to gain my Bachelors Degree in Applied Physics and Electronics, I learnt frontend web development in Tech Studio Academy for three(3) months where I gained my first certificate in web development. Today, I have more than one(1) year of experience in I.T and Web development.</p>
              </Fade>

              <Fade duration={2000} bottom left>
                <p className='py-2 text-gray-400 md:hidden lg:block'>I pivoted into I.T because it was fascinating to see how tech products could help individuals and organizations save time, save money and expedite processes. It&apos;s simply magical!</p>
              </Fade>
            </div>
            <Rotate duration={2000}>
              <div className=' hidden col-span-2 lg:flex w-full h-auto m-auto shadow-md shadow-black bg-[#0e0e10] rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" className='rounded-xl' />
              </div>
            </Rotate>
            <Zoom duration={2000}>
              <div className='lg:hidden col-span-2 w-full h-auto m-auto shadow-md shadow-black bg-[#0e0e10] rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={myimg} alt="/" width='300px' height='450px' layout='responsive' className='object-cover rounded-xl'/>
              </div>
            </Zoom>
        </div>
    </div>
  )
}

export default About