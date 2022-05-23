import axiosClient from "./axiosClient";

const artistApi = {
  getAll(searchValue,token) {
    const params = {
      q: searchValue,
      type: "artist",
    };
    return axiosClient.get("/v1/search", {
      params,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default artistApi;
