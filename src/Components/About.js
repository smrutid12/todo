import React from "react";
import "./css/About.css";
import todoimg from "../Images/todo list.svg";
const About = () => {
  return (
    <div className=" About justify-content-center text-center">
      <img className="images" src={todoimg} alt=" " />
      <div>
        <h1>What is a ToDo List? </h1>
        <h2>Simple tool to organise everything.</h2>
        <h2>
          It’s a list of tasks you need to complete or things that you want to
          do.
        </h2>
      </div>
    </div>
  );
};

export default About;
