import React from "react";
import './card.css';
import   "./places";

import { Link } from "react-router-dom";
function Card() {
  
  return (
  <section className="home">
  <div className="app">
  <div className="welcome-section">
    <h1> Begin your dream journey  <span >To-Day </span></h1>
    <h2><div className="scroll-text"><span>World-Tour</span></div> </h2>
    <p>Find new places, plan easily, and keep your favourites together...</p>
    <Link to="/Places" className="explore-btn">Start Exploring</Link>
  </div>

  
</div>
</section>

  );
}

export default Card;
