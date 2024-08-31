import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          Organize your work and life, <br /> once and for all
        </h1>
        <p className="para">
          Become focused,Organize,and calm with <br /> todo app. The world's #1
          task manager app.
        </p>
        <button class="home-btn p-2">
          <Link
            className="nav-link active mx-2 "
            aria-current="page"
            to="/todo"
          >
            Make Todo List
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
