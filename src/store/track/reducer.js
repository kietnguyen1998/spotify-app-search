import { GET_TRACK } from "./action";

const initState = {
  tracks: [],
};

export default function TrackReducer(state = initState, action) {
  switch (action.type) {
    case GET_TRACK:
      return {
        ...state,
        tracks: action.payload,
      };

    default:
      return state;
  }
}
