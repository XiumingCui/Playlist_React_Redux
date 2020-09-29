import React from "react";
import { connect } from "react-redux";
import { selectSong, deleteSong } from "../actions";

const Listened = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  console.log(song);
  return song.map(song => {
     return (
    
    <div className="item" key={song.id}>
      <label>{song.artist}</label>
      <div className="content">{song.track}</div>
      <button
        className="ui button primary"
        onClick={() => selectSong(song)}
      >
        Like
      </button>
      <button
        className="ui button primary"
        onClick={() => deleteSong(song)}
      >
        Listened
      </button>
    </div>
  );
  })
 
};

const mapStateToProps = (state) => {
  return { song: state.listenedSong };
};

export default connect(mapStateToProps, { selectSong, deleteSong })(Listened);
