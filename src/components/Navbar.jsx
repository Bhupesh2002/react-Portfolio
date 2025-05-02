import React from "react";
import { NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";


let Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg shadow-sm  custom-navbar">
            <div className="container">
                <NavLink className='navbar-brand fw-bold fs-4 text-dark' to={ '/' }>
                <FaLaptopCode className="me-2 fs-1 icon-style"/>....</NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarnav"
                ><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navbarnav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item mx-2">
                            <NavLink to={ '/' } 
                            className={ ({isActive})=> isActive ? "nav-link active-link" : "nav-link" }
                            >Home</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={ '/about' } 
                            className={ ({isActive})=> isActive ? "nav-link active-link" : "nav-link"  }
                            >About Me</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={ '/projects' } 
                            className={ ({isActive})=> isActive ? "nav-link active-link" : "nav-link" }
                            >Projects</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                           <NavLink to={ '/contact' } className='btn btn-outline-dark'>Contact Me</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;