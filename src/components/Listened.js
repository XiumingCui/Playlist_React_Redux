import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addFavourite,
  removeFavourite,
  addListened,
  removeListened,
} from "../actions";
import SongsList from "./SongsList";
import { LISTENED } from "../constraints";

class Listened extends Component {
  componentDidMount() {
    if (!this.props.songs) {
      return <div>Select a song</div>;
    }
  }

  render() {
    return (
      <div>
        <SongsList
          title={LISTENED}
          songs={this.props.songs}
          favourite={this.props.addFavourite}
          unfavourite={this.props.removeFavourite}
          listened={this.props.addListened}
          unlistened={this.props.removeListened}
        />
      </div>
    );
  }

  // render() {
  //   console.log(this.props.songs);
  //   return (
  //     <div className="ui divided list">
  //       {this.props.songs.map((song) => {
  //         return song.listened ? (
  //           <div className="item" key={song.id}>
  //             <h2>{song.artist}</h2>
  //             <p className="content">{song.track}</p>
  //             <button
  //               className="ui button primary"
  //               onClick={() => this.props.addFavourite(song.id)}
  //             >
  //               Like
  //             </button>
  //             <button
  //               className="ui button primary"
  //               onClick={() => this.props.removeListened(song.id)}
  //             >
  //               Unlistened
  //             </button>
  //           </div>
  //         ): null;
  //       })}
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  addFavourite,
  removeFavourite,
  addListened,
  removeListened,
})(Listened);
