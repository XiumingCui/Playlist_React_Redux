import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs, selectSong, listenedSong } from "../actions";

class Playlist extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.track}>
          <label>{song.artist}</label>
          <div className="content">{song.track}</div>
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            Like
          </button>
          <button
            className="ui button primary"
            onClick={() => this.props.listenedSong(song)}
          >
            Listened
          </button>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { fetchSongs, selectSong,listenedSong })(Playlist);
