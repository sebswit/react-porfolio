import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import '../styles/About.css';
import Agency from '../images/true-agency.jpg';

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
                        <div className="about_img">
                           <figure><img src={Agency} alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_right">
                     <figure><img src="" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default About;