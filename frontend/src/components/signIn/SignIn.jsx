import React from "react";
import "../signUp/SignUp.css";
import axios from "axios";
import { useState } from "react";
import HeadingComp from "../signUp/HeadingComp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/login", Inputs)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        history("/todo");
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column col-left d-none d-lg-flex justify-content-center align-items-center">
            <HeadingComp first="Sign" second="In" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signUp"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={Inputs.email}
              />

              <input
                className="p-2 my-3 input-signUp"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-signup p-2" onClick={submit}>
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
