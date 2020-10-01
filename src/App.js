import React from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import Favourite from "./components/Favourite";
import Listened from "./components/Listened";

function App() {
  return (
    <div className="main-content">
      <div className="left">
        <Listened />
      </div>
      <div className="center">
        <Favourite />
      </div>
      <div className="right">
        <Playlist />
      </div>
    </div>
  );
}

export default App;
