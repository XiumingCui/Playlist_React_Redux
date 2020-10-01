import {
  FETCH_SONGS,
  ADD_FAV,
  REMOVE_FAV,
  ADD_LIS,
  REMOVE_LIS,
} from "../constraints";

const initialState = {
  loading: false,
  songs: [],
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_SONGS:
      // return {...state, songs: action.payload.data.map(s => {...s, favorited: fasle, listend: fasle})};
      return { ...state, songs: action.payload.data };
    case ADD_FAV:
      console.log(action.type + " : " + action.payload);
      return {
        ...state,
        songs: state.songs.map((s) =>
          s.id === action.payload ? { ...s, favourite: true } : s
        ),
      };
    case REMOVE_FAV:
      console.log(action.type + " : " + action.payload);
      return {
        ...state,
        songs: state.songs.map((s) =>
          s.id === action.payload ? { ...s, favourite: false } : s
        ),
      };
    case ADD_LIS:
      return {
        ...state,
        songs: state.songs.map((s) =>
          s.id === action.payload ? { ...s, listened: true } : s
        ),
      };
    case REMOVE_LIS:
      return {
        ...state,
        songs: state.songs.map((s) =>
          s.id === action.payload ? { ...s, listened: false } : s
        ),
      };

    default:
      return state;
  }
};
