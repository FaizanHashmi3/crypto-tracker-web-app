import React from 'react';
import "./styles.css";
import Button from '../../Common/Button';
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import {motion} from "framer-motion";
// import Dashboard from '../../DashBoard';
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    
    <div className='flex-info'>
        <div className='left-component'>
            <motion.span
            className='track-crypto-heading'
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            >
              Track Crypto 
              </motion.span>
            <motion.h1 className='real-time-heading'
               initial={{opacity:0,y:50}}
               animate={{opacity:1,y:0}}
               transition={{duration:0.5,delay:0.5}}
            >
              Real Time.
            </motion.h1>
            <motion.p className='info-text'
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.85}}
            >
              Track crypto through a public api in rel time.Visit the dashboard to do so!
              </motion.p>
            <motion.div className='btn-flex'
               initial={{opacity:0,x:50}}
               animate={{opacity:1,x:0}}
               transition={{duration:0.5,delay:1.5}}
            >
               <Link to="/dashboard"> <Button  text={"Dashboard"} /> </Link>
                <Button text={"Share"} outlined={true}/>
            </motion.div>

        </div>
        <div className='phone-container'>
          <motion.img src={iphone} className='iphone'
          initial={{y:-10}}
          animate={{y:10}}
          transition={{
                      type:"smooth",
                      repeat:Infinity,
                      repeatType:"mirror",
                      duration:2,
                      
                    }}
          />
          <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default MainComponent