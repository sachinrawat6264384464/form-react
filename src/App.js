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
                    1. London is a place where modernity and history beautifully come together.<br></br><br></br>
                    2. Its famous landmarks such as Big Ben, Buckingham Palace, the London Eye, and Tower Bridge attract visitors from all over the world. <br></br><br></br>
                    3. The city’s art galleries, museums, shopping streets like Oxford Street and Camden Market, and Thames River cruises offer unforgettable experiences. <br></br><br></br>
                    4. London’s multicultural vibe and royal charm make it one of the most vibrant cities in the world. <br></br><br></br>
                
 </p>
                }
                content2={
                  <img
                    src={IndiaGateImg}
                    alt="India Gate"
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize:"4vw",
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
                  1. Germany is world-famous for its beautiful landscapes, magnificent castles, and advanced technology. <br></br><br></br>
                  2. Landmarks like the Berlin Wall, Neuschwanstein Castle, the Black Forest, and festivals such as Oktoberfest offer travelers a truly unique experience. <br></br><br></br>
                  3. The country represents a perfect blend of history, architecture, and innovation. <br></br><br></br>
                  4. The people are friendly and deeply rooted in their rich culture. 

                   
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
