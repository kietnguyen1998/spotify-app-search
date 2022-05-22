import { GET_ARTIST } from "./action";

const initState = {
  artists: [],
};

export default function ArtistReducer(state = initState, action) {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artists: action.payload,
      };

    default:
      return state;
  }
}
