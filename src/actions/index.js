import axios from "../axios";
import {
  FETCH_SONGS,
  ADD_FAV,
  REMOVE_FAV,
  ADD_LIS,
  REMOVE_LIS,
} from "../constraints";

export const addFavourite = (songId) => {
  return {
    type: ADD_FAV,
    payload: songId,
  };
};
export const removeFavourite = (songId) => {
  console.log("removeFav : " + songId);
  return {
    type: REMOVE_FAV,
    payload: songId,
  };
};
export const addListened = (songId) => {
  return {
    type: ADD_LIS,
    payload: songId,
  };
};
export const removeListened = (songId) => {
  console.log("removeLis : " + songId);
  return {
    type: REMOVE_LIS,
    payload: songId,
  };
};

// export const fetchSongs = () => async (dispatch) => {
//   const response = await axios.get("/playlist");
//   //console.log(response.data);
//   dispatch({ type: FETCH_SONGS, payload: response.data });
// };

//use thunk
export const fetchSongs = (song) => {
  return function(dispatch){
    return axios.get("/playlist").then(
      (song) => dispatch({ type: FETCH_SONGS, payload: song})
    )
  }
}
