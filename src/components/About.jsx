import React from 'react'
import aboutImg from "../assets/aboutme_pic.png"
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-5xl'>About <span className='text-violet-500'>Me</span> </h2>
    
    <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div
            whileInView={{x:0, opacity:1}}
            initial={{x:-100, opacity:0}}
            transition={{duration:0.5}}
            className='flex items-center justify-center'>
                <img className="rounded-2xl w-1/2 h-auto" src={aboutImg} alt="AG_about" />
            </motion.div>
            
        </div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{x:100, opacity:0}}
        transition={{duration: 0.5}}
        className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xlpy-6 text-justify'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
    </div>
    </div>
  )
}

export default About
