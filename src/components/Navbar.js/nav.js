import React from "react";
import "./nav.css";
import svg from "../asserts/svg.svg";
import search from "../asserts/Search.svg";
import Page1 from "../pages.js/page1";

const Nav = () => {
  return (
    <>
      <div className="box">
        <div className="box0">
          <div className="text1">EDYODA</div>
          <div className="inner">
            <div className="text2">Courses</div>
            <img className="svg" src={svg} alt="Svg"></img>
          </div>
          <div className="inner">
            <div className="text3">Programs</div>
            <img className="svg" src={svg} alt="Svg"></img>
          </div>
        </div>
        <div className="box1">
          <div className="search">
            <img src={search} alt="search"></img>
          </div>
          <div className="text4">Login</div>
          <div>
            <button className="btn">Join Now</button>
          </div>
        </div>
      </div>
      <div className="page">
        <Page1></Page1>
      </div>
    </>
  );
};

export default Nav;
