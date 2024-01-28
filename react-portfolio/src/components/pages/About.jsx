import React from 'react';

function About() {
  return (
    <div id="about" class="about">
         <div class="container">
            <div class="row ">
               <div class="col-md-5">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>About</h2>
                           <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  sit amet, consectetur adipiscing elit, sed do </p>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="about_img">
                           <figure><img src="images/about_img.png" alt="#"/></figure>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_right">
                     <figure><img src="images/about_right.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default About;