import artistApi from "../../service/artistApi";

export const GET_ARTIST = "GET_ARTIST";

function getArtist(artist) {
  return {
    type: GET_ARTIST,
    payload: artist,
  };
}

export function getArtistAsync(searchString) {
  return async (dispatch) => {
    try {
      const res = await artistApi.getAll(searchString);
      dispatch(getArtist(res.data));
    } catch (error) {
      console.log("chay vao catch");
    }
  };
}
