import React from "react";
import { connect } from "react-redux";

const Favourite = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  
  return (
    <div className="item" key={song.track}>
      <label>{song.artist}</label>
      <div className="content">{song.track}</div>
      {/* <button
        className="ui button primary"
        onClick={() => this.props.selectSong(song)}
      >
        Select
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(Favourite);
