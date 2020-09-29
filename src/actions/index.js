import axios from "../axios";

export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const listenedSong = (song) => {
  return {
    type: "SONG_LISTENED",
    payload: song,
  };
};

export const deleteSong = (song) => {
  console.log("action delete");
  return {
    type: "SONG_DELETE",
    payload: song
  }
}

export const fetchSongs = () => async (dispatch) => {
  const response = await axios.get("/playlist");
  //console.log(response.data);
  dispatch({ type: "FETCH_SONGS", payload: response.data });
};
