import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb, SiFirebase} from "react-icons/si"
import {FaAndroid, FaNodeJs} from "react-icons/fa"
import { SiPython } from"react-icons/si";
import { DiJava } from"react-icons/di";
import { FaHtml5 } from"react-icons/fa";
import { FaCss3Alt } from"react-icons/fa";
import { SiJulia } from"react-icons/si";
import { SiExpress } from"react-icons/si";
import { SiTailwindcss } from "react-icons/si"; 
import { SiR } from "react-icons/si"; 
import { SiMysql } from "react-icons/si";
import {motion} from "framer-motion"


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})



const technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:2}}
        
        className='my-20 text-center text-5xl text-violet-500'>
        Skills</motion.h1>
        <motion.div
        whileInView={{x:0, opacity:1}}
        initial={{x:-100, opacity:0}}
        transition={{duration:2}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJulia className='text-7xl text-purple-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-white-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-7xl text-pink-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAndroid className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFirebase className='text-7xl text-red-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiR className='text-7xl text-red-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-green-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-pink-400'/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default technology
