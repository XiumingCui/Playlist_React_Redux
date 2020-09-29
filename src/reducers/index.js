import { combineReducers } from "redux";

const songsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS":
      return action.payload;
    default:
      return state;
  }
};

const selectedSongReducer = (selectedSong = [], action) => {
  if (action.type === "SONG_SELECTED") {
    return [...selectedSong, action.payload];
  }else if ( action.type === "SONG_DELETE") {
    console.log("delete song")
    return selectedSong.filter(song => song !== action.payload);
  }
  return selectedSong;
};

const listenedSongReducer = (listenedSong = [], action) => {
  console.log(action.type);
    if (action.type === "SONG_LISTENED") {
      return [...listenedSong, action.payload];
    }else if ( action.type === "SONG_DELETE") {
      console.log("delete song: " + listenedSong.filter(item => item !== action.payload));
      return listenedSong.filter(song => song !== action.payload);
    }
    return listenedSong;
  };

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  listenedSong: listenedSongReducer,
});
