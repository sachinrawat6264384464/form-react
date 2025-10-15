import React, { useState } from "react";

import './places.css';

function Places() {
const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const destinations = [
  { id: 1, name: "INDONESIA", desc: "City of Lights", img: "https://www.holidify.com/images/bgImages/INDONESIA.jpg" },
  { id: 2, name: "SINGAPORE", desc: "Land of the Rising Sun", img: "https://www.holidify.com/images/bgImages/SINGAPORE.jpg" },
  { id: 3, name: "THAILAND", desc: "The Big Apple", img: "https://www.holidify.com/images/bgImages/THAILAND.jpg"},
  { id: 4, name: "MALDIVES", desc: "Tropical paradise", img: "https://www.holidify.com/images/bgImages/MALDIVES.jpg" },
  
  
  { id: 5, name: "SRI-LANKA", desc: "The historic city", img: "https://www.holidify.com/images/bgImages/SRI-LANKA.jpg"},
  { id: 6, name: "VIETNAM", desc: "Harbor city", img: "https://www.holidify.com/images/bgImages/VIETNAM.jpg" },
  { id: 7, name: "DUBAI", desc: "Harbor city", img: "https://www.holidify.com/images/bgImages/DUBAI.jpg" },
  { id: 8, name: "MALAYSIA", desc: "Harbor city", img: "https://www.holidify.com/images/bgImages/MALAYSIA.jpg" },

];


  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (place) => {
    let updated;
    if (favorites.find((f) => f.id === place.id)) {
      updated = favorites.filter((f) => f.id !== place.id);
    } else {
      updated = [...favorites, place];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
  return (
   <div className="app">
    <div className="bg">
      <h1> Travel Planner</h1>
    </div> 
    <input
      type="text"
      placeholder="Search destinations..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="cards">
      {filtered.map((place) => (
        <div key={place.id} className="card">
          <img src={place.img} alt={place.name} />
          <h3>{place.name}</h3>
          <p>{place.desc}</p>
          <button onClick={() => toggleFavorite(place)}>
            {favorites.find((f) => f.id === place.id)
              ? "❌ Remove Favorite"
              : "✅ Add Favorite"}
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Places
