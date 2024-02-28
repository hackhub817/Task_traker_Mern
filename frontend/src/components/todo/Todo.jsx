import React, { useEffect, useState } from "react";
import "./Todo.css"
import TodoCards from "./TodoCards";

const Todo = () => 
{
 
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const [Array, setArray] = useState([]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit=()=>
  {
    setArray([...Array,Inputs]);
    setInputs({title:"",body:""});
  }
  console.log(Array);

    
  console.log(Inputs);

 
    const show = () => {
        document.getElementById("textarea").style.display = "block";
      };
    return (
        <div className="todo">
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              onChange={change}
              name="title"
              value={Inputs.title}
            
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="BODY"
              className=" p-2 todo-inputs"
              onChange={change}
              name="body"
              value={Inputs.body}



            />
          </div>
          <div className=" w-50 w-100 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" onClick={submit} >
              Add
            </button>
          </div>
        </div>



        <div className="todo-body">
          <div className="container-fluid">
            <div className="row ">
              {Array &&
                Array.map((item, index) => (
                  <div
                    className="col-lg-3 col-11 mx-lg-5 mx-3 my-2"
                    key={index}
                  >
                    <TodoCards/>
                  </div>
                ))}
            </div>
          </div>
        </div>


        </div>
    );
};

export default Todo;
