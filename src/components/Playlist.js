import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSongs,
  addFavourite,
  removeFavourite,
  addListened,
  removeListened,
} from "../actions";
import { PLAYLIST } from "../constraints";
import SongsList from "./SongsList";

class Playlist extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    console.log(this.props.songs);
    return (
      <div>
        <SongsList
          title={PLAYLIST}
          songs={this.props.songs}
          favourite={this.props.addFavourite}
          unfavourite={this.props.removeFavourite}
          listened={this.props.addListened}
          unlistened={this.props.removeListened}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  fetchSongs,
  addFavourite,
  removeFavourite,
  addListened,
  removeListened,
})(Playlist);
