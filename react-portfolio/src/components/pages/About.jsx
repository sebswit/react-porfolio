import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

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
                           <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  sit amet, consectetur adipiscing elit, sed do </p>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="about_img">
                           <figure><img src="images/about_img.png" alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_right">
                     <figure><img src="images/about_right.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default About;