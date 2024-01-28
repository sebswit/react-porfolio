import React from 'react';

function ProjectGallery() {
  return (
    <div id="we_Do" class="we_do">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What We Do</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div id="hover_color" clasName="we_box">
                     <span>1</span>
                     <h3>Software Maker</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div id="hover_color" className="we_box">
                     <span>1</span>
                     <h3>Expense Management Maker</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                  </div>
               </div>
               <div class="col-md-4">
                  <div id="hover_color" className="we_box">
                     <span>1</span>
                     <h3>Group Revenue  Maker</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                  </div>
               </div>
               <div class="col-md-12">
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
  );
}

export default ProjectGallery;
