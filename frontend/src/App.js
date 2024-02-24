import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";

const  App = ()=> {
  return (
   <div>
    <Router>
    <Navbar/>
      <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/Todo" element={<todo/>}/>
       <Route exact path="/SignUp" element={<SignUp/>}/>
       <Route exact path="/SignUp" element={<SignUp/>}/>
       <Route exact path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </Router>
  
   <Footer/>
   </div>
  );
};

export default App;
