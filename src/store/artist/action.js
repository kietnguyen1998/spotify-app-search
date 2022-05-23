import artistApi from "../../service/artistApi";

export const GET_ARTIST = "GET_ARTIST";

function getArtist(artist) {
  return {
    type: GET_ARTIST,
    payload: artist,
  };
}

export function getArtistAsync(searchString,token) {
  return async (dispatch) => {
    try {
      const res = await artistApi.getAll(searchString,token);
      dispatch(getArtist(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
