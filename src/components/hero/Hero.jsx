import React from 'react'
import "./hero.scss";
import {motion} from "framer-motion";

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:1.5,
            repeat:Infinity,
            repeatType:"mirror",
        }
    }
};


const sliderVariants={
    initial:{
        x:"40%",
    },
    animate:{
        x:"-100%",
        transition:{
            x:{
            duration:15,
            repeat:Infinity,
            ease:"linear",
            },
        },
    },
};

export default function Hero() {

    const scrollTo = (id) => {
        const contactSection = document.getElementById(id);
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

  return (
    <div className='hero'>
        <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants} >SHUBHANKAR HINGNE</motion.h2>
        <motion.h1 variants={textVariants}>Software and Web Developer</motion.h1>
        <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} onClick={()=>scrollTo("Projects")}>See Latest Works</motion.button>
            <motion.button className='contact' variants={textVariants} onClick={()=>scrollTo("Contact")}>Contact Me</motion.button>
        </motion.div>
        <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className='slidingTextContainer'>Python Java Javascript NodeJS React</motion.div>
      </div>

    </div>
  )
}
