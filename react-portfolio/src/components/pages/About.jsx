import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import '../styles/About.css';
import Coding from '../images/011.png';
import Code from '../images/code.png';

function About() {
  return (
    <div id="about" className="about">
         <div className="container">
            <div className="row ">
               <div className="col-md-5">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>About</h2>
                           <p> Hello there! 👋 I'm Seb, a motivated and detail-oriented junior front-end developer with a deep passion for crafting seamless, user-centric web experiences. My journey in the world of coding began with a curiosity to understand how websites come to life, and since then, I've been on a continuous learning adventure.</p>
                        </div>
                     </div>
                     <div className="col-md-12">                        
                           <img src={Code} className="about_img"alt="#"/>
                     </div>
                  </div>
               </div>
               <div className="col-md-7">                  
                     <img src={Coding} className="about_right" alt="#"/>
               </div>
            </div>
         </div>
      </div>
  );
}

export default About;