import React from "react";
import "./Section.css";
import { useRef } from "react";
import BottomUp from "./BottomUp";

const Section = () => {
  const Services = useRef(null);
  const Blog = useRef(null);
  const Contact = useRef(null);

  function Scrolled(elem) {
    window.scrollTo({
      top: elem.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="main">
      <BottomUp />
      <div className="home">
        <ul>
          <li
            className="link"
            onClick={() => {
              Scrolled(Services);
            }}
          >
            Services
          </li>
          <li
            className="link"
            onClick={() => {
              Scrolled(Blog);
            }}
          >
            Blog
          </li>
          <li
            className="link"
            onClick={() => {
              Scrolled(Contact);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="services" ref={Services}>
        <h2>Services</h2>
      </div>
      <div className="Blog" ref={Blog}>
        <h2>Blog</h2>
      </div>
      <div className="Contact" ref={Contact}>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Section;
