import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import About from './components/pages/About';


function App() {
  return (
    <Router>
        <NavTabs />
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projectGallery" element={<ProjectGallery />} />                           
                <Route path="contact" element={<Contact />} />
            </Routes>
        <Footer />
    </Router>
  );
}

export default App;