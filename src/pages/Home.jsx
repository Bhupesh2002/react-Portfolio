import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";


let Home = () => {
    return (
      <div className="home-container">
        <div className="home-content text-center">
          <h1 className="mb-3">Hi, I am Bhupesh</h1>
          <h4 className="mb-4">
            I'm a {''}
            <span style={{ color:"#FF5733", fontWeight:"bold" }}>
            <Typewriter
            words={ ['Full Stack Learner', 'Python & MySQL Enthusiast', 'Frontend & Backend Explorer'] }
            loop cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            >
            </Typewriter>
            </span>
          </h4>
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
            className="fs-5 text-light media-icons">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
            className="fs-5 text-light media-icons">
              <FaGithub />
            </a>
            <a href="mailto:rajanbhupesh@gmail.com" className="fs-5 text-light media-icons">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    );
  };
  

export default Home;