import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import '../styles/Contact.css';



function Contact() {
  return (
    <section className="contact section-padding pt-0" id="contact">
    <div className="container">
      <div className="row">

        <div class="col-lg-6 col-md-6 col-12">
          <form action="#" method="get" className="contact-form webform"  role="form">
              
              <div className="form-group d-flex flex-column-reverse">
                  <input type="text" className="form-control" name="cf-name" id="cf-name" placeholder="Your Name"/>

                  <label for="cf-name" className="webform-label">Full Name</label>
              </div>

              <div className="form-group d-flex flex-column-reverse">
                  <input type="email" className="form-control" name="cf-email" id="cf-email" placeholder="Your Email"/>

                  <label for="cf-email" className="webform-label">Your Email</label>
              </div>

              <div className="form-group d-flex flex-column-reverse">
                  <textarea className="form-control" rows="5" name="cf-message" id="cf-message" placeholder="Your Message"></textarea>

                  <label for="cf-message" className="webform-label">Message</label>
              </div>

              <button type="submit" className="form-control" id="submit-button" name="submit">Send</button>
          </form>
        </div>

          <div className="mx-auto col-lg-4 col-md-6 col-12">
              <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

              <p className="mb-1">010-020-0340</p>

              <p>
                  <a href="#">
                      sebastian.switakowski@gmail.com
                  <i class="fas fa-arrow-right custom-icon"></i>
                  </a>
              </p>

              <ul className="social-links mt-2">                  
              
                  <li><a href="#" rel="noopener" className="fab fa-instagram"></a></li>
                  <li><a href="#" rel="noopener" className="fa-brands fa-linkedin"></a></li>
                  <li><a href="#" rel="noopener" className="fa-brands fa-github"></a></li>
              </ul>
                       
              
              
          </div>

      </div>
    </div>
  </section>
  );
}

export default Contact;