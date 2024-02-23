
import React from "react";
import { GiWhiteBook } from "react-icons/gi";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => 
{
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/"><b> <GiWhiteBook />
          
  TODO</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" to="/about">AboutUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 " aria-current="page" to="/toDo">Todo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn-nav mx-2 " aria-current="page" to="/signIn">SignIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn-nav mx-2 " aria-current="page" to="/signUp">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn-nav mx-2 " aria-current="page" to="logOut">LogOut</Link>
              </li>

              
              {/* <li className="nav-item">
                <img src="https://drive.google.com/file/d/1PHcAdFfG3J4WIcjLjxz78QReAU5KM_Hg/view?usp=sharing"/>
                
              </li> */}
            </ul>
        
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
