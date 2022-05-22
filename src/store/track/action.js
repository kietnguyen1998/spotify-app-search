import trackApi from "../../service/trackApi";

export const GET_TRACK = "GET_TRACK";

function getTrack(tracks) {
  return {
    type: GET_TRACK,
    payload: tracks,
  };
}

export function getTrackAsync(searchString) {
  return async (dispatch) => {
    try {
      const res = await trackApi.getAll(searchString);
      dispatch(getTrack(res.data));
    } catch (error) {
      console.log("chay vao catch");
    }
  };
}
