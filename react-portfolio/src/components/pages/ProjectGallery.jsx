import React from 'react';
import Horiseon from '../images/digital-marketing-meeting.jpg';
import Quiz from '../images/quiz.png';
import Bootstrap from '../images/bootstrap.png';
import Readme from '../images/readme.png';
import Password from '../images/password.png';
import Team from '../images/team.png';
import '../styles/ProjectGallery.css';

function ProjectGallery() {
  return (
   <section className="projectgallery">
   <div className="row row-cols-1 row-cols-md-3 g-4" id="Work">
 
     
 
     <div className="col">
       <div className="card h-100">
         <img src={Horiseon} className="card-img-top" alt="People at meeting"/>
         <div className="card-body">
           <h5 className="card-title">Horiseon</h5>
           <p className="card-text">In this project I have learned about semantic HTML elements, logical structure, styling and positioning</p>
           <a href="https://sebswit.github.io/Horiseon/" className="btn btn-info">Horiseon</a>
         </div>
       </div>
     </div>
 
     <div className="col">
       <div className="card h-100">
         <img src={Bootstrap} className="card-img-top" alt="Boostarp portfolio"/>
         <div className="card-body">
           <h5 className="card-title">Bootstrap portfolio</h5>
           <p className="card-text">This is my first page built with Bootstrap</p>
           <a href="https://sebswit.github.io/Seb-portfolio-Bootstrap/" class="btn btn-info">Bootstrap</a>
         </div>
       </div>
     </div>
 
     <div className="col">
       <div className="card h-100">
         <img src={Readme} className="card-img-top" alt="No bad days sign"/>
         <div className="card-body">
           <h5 className="card-title">Readme generator</h5>
           <p className="card-text">This application generates professional Readme.md files</p>
           <a href="https://github.com/sebswit/readme-generator" className="btn btn-info">Readme-generator</a>
         </div>
       </div>
     </div>  
 
     <div className="col">
       <div className="card h-100">
         <img src={Password} className="card-img-top" alt="Password generator"/>
         <div className="card-body">
           <h5 className="card-title">Password generator</h5>
           <p className="card-text">Application generating secure passwords</p>
           <a href="https://sebswit.github.io/password-generator/" className="btn btn-info">Password generator</a>
         </div>
       </div>
     </div>
 
     <div className="col">
       <div className="card h-100">
         <img src={Team} className="card-img-top" alt="My team"/>
         <div className="card-body">
           <h5 className="card-title">Team profile generator</h5>
           <p className="card-text">Node.js command line application allowing to create structured HTML</p>
           <a href="https://github.com/sebswit/Team-profile-generator" className="btn btn-info">Team profile generator</a>
         </div>
       </div>
     </div>
   

   <div className="col">
       <div className="card h-100">
         <img src={Quiz} className="card-img-top" alt="Page with four rows"/>
         <div className="card-body">
           <h5 className="card-title" >Code Quiz</h5>
           <p class="card-text">Timed quiz built on JavaScript</p>
           <a href="https://sebswit.github.io/Code-Quiz/" className="btn btn-info">Prework Study Guide</a>
         </div>
       </div>
     </div>
     </div>
 </section>
  );
}

export default ProjectGallery;
