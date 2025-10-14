import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/nav"; // ✅ Renamed Text4 → Nav for clarity
import Card from "./card.js";
import FavoritesPage from "./FavoritesPage.js";
import Footer from "./component/footer.js";
import Places from "./places.js";
import Text from "./component/text";
import About from "./component/about";

import TajMahalImg from "./images/london1.jpg";
import IndiaGateImg from "./images/jjij.png";

function App() {
  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <Nav />

      {/* ✅ Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card />
              <Text
                content1={
                  <p style={{ fontSize: "1.2rem" }}>
                    London ek aisi jagah hai jahan modernity aur history dono ek sath milte hain. Yahaan ke famous landmarks jaise Big Ben, Buckingham Palace, London Eye aur Tower Bridge har visitor ko attract karte hain. City ke art galleries, museums, shopping streets (Oxford Street, Camden Market) aur Thames River cruises experience unforgettable hain. London ki multi-cultural vibe aur royal charm isse duniya ke sabse vibrant cities me se ek banati hai. Har season me kuch naya dekhne ko milta hai — from classic double-decker rides to beautiful parks like Hyde Park.
                  </p>
                }
                content2={
                  <img
                    src={IndiaGateImg}
                    alt="India Gate"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                    }}
                  />
                }
              />

              <Text
                content1={
                  <img
                    src={TajMahalImg}
                    alt="Taj Mahal"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                    }}
                  />
                }
                content2={
                  <p style={{ fontSize: "1.2rem" }}>
                   Germany apne beautiful landscapes, castles aur advanced technology ke liye world-famous hai. Yahaan ka Berlin Wall, Neuschwanstein Castle, Black Forest aur Oktoberfest jaise festivals travelers ke liye ek unique experience dete hain. Germany history, architecture, aur innovation ka perfect blend hai. Yahaan ke log friendly aur culture-rich hain. Cities jaise Berlin, Munich, Hamburg aur Frankfurt me har jagah clean transport, great food aur scenic beauty milti hai. Germany un logon ke liye perfect hai jo adventure, culture aur education sab ek sath chahte hain.
                  </p>
                }
              />
              <Footer/>
            </>
          }
        />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
