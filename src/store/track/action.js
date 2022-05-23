import trackApi from "../../service/trackApi";

export const GET_TRACK = "GET_TRACK";

function getTrack(tracks) {
  return {
    type: GET_TRACK,
    payload: tracks,
  };
}

export function getTrackAsync(id,token) {
  return async (dispatch) => {
    try {
      const res = await trackApi.getAll(id,token);
      dispatch(getTrack(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
