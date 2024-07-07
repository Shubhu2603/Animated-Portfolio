import React from 'react'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
import {motion} from "framer-motion"

export default function Navbar() {
  return (
    <div className='navbar'>
       <Sidebar/>  
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/shubhankar-hingne"><img src="/linkedin.png" alt=""/></a>
            <a href="https://github.com/Shubhu2603"><img src="/github.png" alt=""/></a>
            <a href="https://www.instagram.com/shubhankar_music/"><img src="/instagram.png" alt=""/></a>
        </div>
      </div>
    </div>
  )
}
