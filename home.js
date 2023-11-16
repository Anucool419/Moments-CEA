import React from 'react'
import BGI from "../assets/rbgi.webp" 
import {Link} from "react-router-dom"
import {CSSTransition} from 'react-transition-group';


import '../styles/home.css'
import Sogo from "../assets/Excomm1Sathu.jpg"
import Loga from "../assets/Excomm2Loga.jpeg"
import Roh from "../assets/HeadRohit.jpeg"






function home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BGI})`}}>
        
      <div className='headerContainer'> 
      
      <h1>MOMENTS</h1>
      <p>The National-level Technical Symposium Of Civil Engineering,NITT</p>
      <p1>
      Moments is the national-level technical symposium of the department of civil engineering, NIT Trichy. Since its inception in 1992, MOMENTS, NIT Trichy has been running with a single aim: To acknowledge
       and show the significance of Civil Engineering in this transforming world and motivate students in core research. From insightful guest lectures to inventive and challenging events and workshops, this
     event promotes learning for brilliant minds all over the country.
    Moments also helps students in building practical applications knowledge
    by educating them on industry-level research and developments. Entirely run by students, this organization maintains a good role in developing creative and management skills in students while maintaining excellent team spirit.
      </p1>
      
      <h2>About</h2>
      <p2>CEA is the association of future planners, constructors and like-minded designers from the department of Civil Engineering at National Institute of Technology, Tiruchirapalli 
      The Association organizes several events throughout the academic year like Guest Lectures, Seminars, Competitions, Industrial visits and most importantly MOMENTS,
       one of the largest department symposiums in India.The inauguration of CEA ‘22 was presided over by Mrs. Minimol Korulla, VP, Maccaferri Environmental solutions Pvt. Ltd. as Chief guest. The inauguration of Moments ’22 was presided over by a Dr. M. Shanmugam, Former HOD, Civil Engineering as Chief guest. 
        Later a guest lecture was delivered by Dr. Radhakrishna G. Pillai, Associate Professor, IIT Madras.</p2>
     </div> 
     <h3>Teams members </h3>
      
      
    
  

        
      <div className='image1'>
      <p4>He is studying in 4th year 
        and is the Excomm of CEA.
        He is Sathusikan</p4> 
     <img src={Sogo} width={250} height={250}/>
     
     </div>
     <div className='image2'>
     <p5>He is studying in 4th year 
        and is the Excomm of CEA.
        He is Loga.</p5>  

     <img src={Loga} width={250} height={250}/>
    
     </div>
     <div className='image3'>
     <p6>He is studying in 4th year 
        and is the Head of WEBOPS of CEA.
        He is Rohit Razdan</p6>    
     <img src={Roh} width={250} height={250}/>
     
     </div>
     
    </div>
  )
}

export default home
