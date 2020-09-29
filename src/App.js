import React from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import Favourite from "./components/Favourite";
import Listened from "./components/Listened";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <h1>Playlist</h1>
          <Playlist />
        </div>
        <div className="column eight wide">
          <h1>Favourite</h1>
          <Favourite />
        </div>
        <div className="column eight wide">
          <h1>Listened</h1>
          <Listened />
        </div>
      </div>
    </div>
  );
}

export default App;
