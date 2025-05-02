import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";


let Home = () => {
    return (
      <div className="home-container">
        <div className="home-content text-center">
          <h1 className="mb-3">Hi, I am Bhupesh</h1>
          <h4 className="mb-4">Aspiring Full Stack Developer</h4>
          <p className="mb-4 w-75 mx-auto">
            I’m passionate about building dynamic and responsive web applications using React, Python, and SQL. 
            I enjoy learning new technologies and creating solutions that make a difference.
          </p>
          <div className="mb-4">
            <NavLink to={ '/projects' } className="btn btn-outline-secondary me-3">View Projects</NavLink>
            <NavLink to={ '/about' } className="btn btn-outline-info me-3">About Me</NavLink>

          </div>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
            className="fs-4 rounded-circle text-warning media-icons">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
            className="fs-4 rounded-circle text-warning media-icons">
              <FaGithub />
            </a>
            <a href="mailto:rajanbhupesh@gmail.com" className="fs-4 rounded-circle text-warning media-icons">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    );
  };
  

export default Home;