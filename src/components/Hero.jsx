import React from 'react'
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import profilePic from "../assets/mypic.png"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }
    }
});

const typingEffect = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.9,
            staggerChildren: 0.01 // Faster stagger for longer text
        }
    }
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2 // Shorter duration for each letter
        }
    }

};



const Hero = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='pb-18 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                        Aryan <span className='text-cyan-900'> Gurubacharya</span>
                    </motion.h1>
                    <motion.span 
                    variants={container(2)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Software Engineer
                    </motion.span>
                    <motion.p
                    variants={typingEffect}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                        {HERO_CONTENT.split("").map((char, index) => (
                            <motion.span key={index} variants={letter}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:justify-end " >
                    <div className="relative p-1 rounded-lg bg-gradient-to-r from-cyan-800 via-slate-500 to-purple-500" style={{ marginTop: '60px' }}>
                        <div className="bg-black p-1 rounded-lg" >
                            <motion.img 
                                initial={{ opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:1, delay:1.2}}
                                src={profilePic} alt="Aryan G"
                                className="rounded-lg" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
