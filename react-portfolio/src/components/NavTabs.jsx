import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src="./assets/images/Logo.png" alt="logo" width="50" height="50" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/" activeClassName="active" exact={true}>
                Home
                </NavLink>
                <NavLink className="nav-link" to="/projectGallery" activeClassName="active">
                Project Gallery
                </NavLink>
                <NavLink className="nav-link" to="/contact" activeClassName="active">
                Contact
                </NavLink>
            </div>
            </div>
        </div>
        </nav>
    );
    }

export default NavTabs;