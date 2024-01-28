import React from 'react';
import picture from '../images/ben.jpg';



function Home() {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">

    <div className="container">
       <div className="row">

             <div className="mx-auto col-lg-5 col-md-5 col-10">
                 <img src={picture} className="img-fluid" alt="Ben Resume HTML Template"/>
             </div>

              <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                   <div className="hero-text">

                       <h1 className="hero-title">👋 Ben, a digital nomad</h1>

                       <a href="#" className="email-link">
                           hello@company.co
                       </a>
                     
                   </div>
               </div>

       </div>
   </div>
</section>
  );
}

export default Home;