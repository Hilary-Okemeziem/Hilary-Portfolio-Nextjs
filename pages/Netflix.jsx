import React from 'react'
import Image from 'next/image'
import netflix from '../public/images/netflix.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import  Link  from 'next/link'

const Netflix = () => {
  return (
    <div className='w-full bg-[#070708]'>
        <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10'/>
            <Image src={netflix} alt="/" className='absolute z-1' layout='fill' objectFit='cover'/>
            <div className='absolute top-[70%] max-w-[1240px] px-2 lg:px-10 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-300 z-10'>
                <div className='lg:pl-4'>
                    <h2 className='py-2 text-4xl'>Netflix UI Clone</h2>
                    <h3 className='text-2xl'>React JS / Tailwind / Firebase</h3>
                </div>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto px-2 lg:px-10 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4 lg:pl-4'>
                <p className='font-bold'>Projects</p>
                <h2 className='text-4xl'>Overview</h2>
                <div className='py-2'>This Netflix clone was built with React JS and is hosted on Firebase. It is a frontend project with a firebase backend.</div>
                <div className='py-2'>I made use of TMDB API for all of the data and Firebase for user authentication so users can sign-up and sign-in to their account with an email address in order to save their favorite movies.</div>
                <div className='py-2'>I made use of Firestore which is cloud storage of firebase to save data, with this users will be able to store/save specific data(movies) from the frontend by clicking the heart icon.</div>
                <div className='py-2'>The project was styled with Tailwind CSS</div>

                <a href="https://netflix-7e17a.web.app/" target='_blank' rel='noreferrer'>
                    <button className='px-8 py-2 mt-4 mr-8 shadow-md shadow-black rounded-xl uppercase bg-gradient-to-r from-[#ff5757] to-[#f899ac] text-gray-100'>Live Demo</button>
                </a>

                <a href="https://github.com/Hilary-Okemeziem/Netflix" target='_blank' rel='noreferrer'>
                    <button className='px-8 py-2 mt-4 mr-8 shadow-md shadow-black rounded-xl uppercase bg-gradient-to-r from-[#ff5757] to-[#f899ac] text-gray-100'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind CSS</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TMDB API</p>
                    <p className='text-gray-400 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Context API</p>
                </div>
            </div>
            <Link href='/#project '>
                <p className='underline cursor-pointer lg:pl-4'>Go Back</p>
            </Link>
        </div>
    </div>
  )
}

export default Netflix