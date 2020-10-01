import React from "react";
import { connect } from "react-redux";
import { addFavourite, removeFavourite, addListened, removeListened } from "../actions";
import { FAVOURITE } from "../constraints";
import SongsList from "./SongsList";

const Favourite = ({ songs, removeFavourite, addListened, removeListened }) => {
  if (!songs) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <SongsList
        title={FAVOURITE}
        songs={songs}
        favourite={addFavourite}
        unfavourite={removeFavourite}
        listened={addListened}
        unlistened={removeListened}
      />
    </div>
  );

  // return songs.map((song) => {
  //   return song.favourite ? (
  //     <div className="item" key={song.id}>
  //       <h2>{song.artist}</h2>
  //       <p className="content">{song.track}</p>
  //       <button
  //         className="ui button primary"
  //         onClick={() => removeFavourite(song.id)}
  //       >
  //         UnLike
  //       </button>
  //       <button className="ui button primary" onClick={() => addListened(song)}>
  //         Listened
  //       </button>
  //     </div>
  //   ) : null;
  // });
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite, addListened, removeListened })(Favourite);
