import React from "react";
import './card.css';
import   "./places";

import { Link } from "react-router-dom";
function Card() {
  
  return (
  <section className="home">
  <div className="app">
  <div className="welcome-section">
    <h1> Begin with  your <span >Dream Destination </span></h1>
    <h2><div className="scroll-text"><span>World-Tour</span></div> </h2>
    <pre><p>Set your sights on stunning places,plan 
            epic adventures,and save every Dream 
                 Destination....</p></pre>
    <Link to="/Places" className="explore-btn">Start Exploring</Link>
  </div>

  
</div>
</section>

  );
}

export default Card;
