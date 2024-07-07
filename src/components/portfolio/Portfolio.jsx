import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items=[

    {
        id:1,
        title:"MERN Social Media App",
        img:"/Timeline.png",
        stack:"Javascript, CSS, NodeJS, React, Express, MongoDB",
        link:"https://github.com/Shubhu2603/MERN-Stack-Social-Media-Application",
        desc:"Dynamic social platform offering secure authentication, dynamic profile management, and robust post handling capabilities. Built with Node.js, Express, MongoDB, and React, this project delivers a responsive and intuitive user experience. Future enhancements include real-time chat, push notifications, and advanced security features for a modern social experience.",
    },
    {
        id:2,
        title:"AI powered COVID-19 Safety Monitoring System",
        img:"/Landing Page.png",
        stack:"Python",
        link:"https://github.com/Shubhu2603/AI-powered-COVID-19-Safety-Monitoring-System",
        desc:"Real-time face mask detection and social distancing analysis. Python-based with OpenCV, TensorFlow, YOLO, PyQt5 GUI. Features multi-threading, SQLite integration, SMTP alerts, and multi-camera support. Utilizes GPU acceleration via CUDA for enhanced performance.",
    },

    {
        id:3,
        title:"Weenix: Linux Based OS",
        img:"/Weenix.png",
        stack:"Java, P",
        desc:"The Weenix project entailed creating a Unix-like operating system in C over a semester. Key achievements include developing kernel modules for processes and threads to enable multithreading, constructing a RAMFS-based virtual file system for managing 1000+ files, and implementing advanced virtual memory management features.",
    },

   

    {
        id:5,
        title:"Musicure: The art of Music Therapy",
        img:"/Musicure.jfif",
        stack:"Java, Firebase",
        link:"https://github.com/Shubhu2603/MusicureApp",
        desc:"Predict mental health conditions and deliver personalized therapeutic music recommendations with this Java-based system. Integrates an expert system, user questionnaire, custom music player, and Firebase for data storage. Includes dataset curation and preprocessing for Hindustani classical music.",
    },

    {
        id:6,
        title:"World Time",
        img:"/World Time.png",
        stack:" knjb",
        link:"https://github.com/Shubhu2603/World_time",
        desc:"This Flutter-based World Time app efficiently displays global time information with a dynamic UI that adapts to day/night conditions. It features smooth navigation, real-time updates, and a responsive design, offering users a sleek interface for checking time across different locations and time zones.",
    },

        {
        id:7,
        title:"CS Knowledge Test",
        img:"/Quiz.jpeg",
        stack:"Java, P",
        link:"https://github.com/Shubhu2603/CS_Knowledge_Test",
        desc:"This Android Quiz app, built in Java, leverages Firebase for authentication and data management. It features a streamlined interface with secure login, intuitive navigation, and dedicated sections for user profiles, quiz categories, and result tracking. The app's robust architecture ensures a smooth, personalized quiz experience while supporting real-time data synchronization and scalable content management.",
    },
    {
        id:4,
        title:"Interactive Portfolio Website",
        img:"/pf.png",
        stack:"Java, P",
        link:"https://github.com/Shubhu2603/Animated-Portfolio",
        desc:"Interactive portfolio website built with React, JavaScript, and SCSS. Features smooth animations via Framer Motion, responsive design, and EmailJS integration. Showcases advanced JS concepts, SCSS techniques, and optimized performance.",
    },


];

const Single=({item})=>{

    const ref =useRef();

    const {scrollYProgress}=useScroll({target:ref});

    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    
    const handleClick=()=>{
        window.location.href=item.link;
    }

    return( 
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 className='title'>{item.title}</h2>
                    
                    <p>{item.desc}</p>
                    {item.id!==3 &&<button onClick={handleClick}>See More</button>}
                    {item.id===3 && <span>NOT permitted to distribute or publically display any part of this project</span>}
                    
                </motion.div>
            </div>
        </div>
    </section>
    );
};
export default function Portfolio() {

    const ref= useRef();

    const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"]});

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};
