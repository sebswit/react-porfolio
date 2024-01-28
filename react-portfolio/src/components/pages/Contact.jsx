import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';


function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        This is the contact page.
      </p>
      <Link to="/contact/learn">Learn</Link>
      <Routes>
        <Route path="/contact/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;